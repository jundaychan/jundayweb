#!/usr/bin/env node

/**
 * AI 信息源自动抓取
 *
 * 零依赖、零 API key。从 RSS 源抓取最新文章，按关键词过滤，生成周报页面。
 *
 * 用法：
 *   node scripts/fetch-ai-digest.mjs            # 默认抓最近 7 天
 *   DIGEST_DAYS=14 node scripts/fetch-ai-digest.mjs  # 抓最近 14 天
 */

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DOCS_DIR = resolve(__dirname, '../docs')
const DIGEST_DAYS = parseInt(process.env.DIGEST_DAYS || '7', 10)

// ============================================================
// 信源配置
// ============================================================

const RSS_SOURCES = [
  { name: 'OpenAI',         url: 'https://openai.com/blog/rss.xml',           lang: 'en', category: '模型厂商' },
  { name: 'Google DeepMind', url: 'https://deepmind.google/blog/rss.xml',     lang: 'en', category: '模型厂商' },
  { name: 'Hugging Face',   url: 'https://huggingface.co/blog/feed.xml',      lang: 'en', category: '开源生态' },
  { name: 'LangChain',      url: 'https://blog.langchain.dev/rss/',           lang: 'en', category: '开源生态' },
  { name: 'n8n',            url: 'https://blog.n8n.io/rss/',                  lang: 'en', category: '工具平台' },
  { name: '量子位',          url: 'https://www.qbitai.com/feed',               lang: 'zh', category: '中文媒体' },
]

// Anthropic 没有 RSS，通过网页抓取
const WEB_SOURCES = [
  { name: 'Anthropic', url: 'https://www.anthropic.com/research', lang: 'en', category: '模型厂商' },
]

// 与企业 AI 落地相关的关键词（命中任意一个就保留）
const KEYWORDS_EN = [
  'agent', 'agents', 'agentic', 'tool use', 'function calling',
  'rag', 'retrieval', 'knowledge base',
  'workflow', 'automation', 'automate',
  'enterprise', 'business', 'production', 'deploy', 'cost',
  'prompt', 'context', 'harness',
  'mcp', 'model context protocol',
  'claude', 'gpt', 'gemini', 'llama', 'qwen', 'deepseek',
  'e-commerce', 'customer service', 'marketing',
  'open source', 'fine-tune', 'fine-tuning',
  'safety', 'security', 'guardrail',
  'multimodal', 'vision', 'image', 'video', 'audio',
  'benchmark', 'evaluation', 'eval',
  'reasoning', 'chain of thought', 'inference',
  'embedding', 'vector', 'search',
]

const KEYWORDS_ZH = [
  'agent', '智能体', '大模型', 'AI',
  '企业', '落地', '应用', '实战',
  '工具', '自动化', '工作流',
  '知识库', 'RAG', '检索',
  '电商', '客服', '营销', '运营',
  '成本', '降本', '提效',
  '开源', '部署', '安全',
  'MCP', 'Skill', '能力',
  '提示词', 'prompt',
  'Claude', 'GPT', 'DeepSeek', '通义', '豆包', 'Kimi',
  '多模态', '生图', '视频',
]

// ============================================================
// 工具函数
// ============================================================

async function fetchWithTimeout(url, timeoutMs = 15000) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'JundayDigestBot/1.0 (junday.net)' },
    })
    clearTimeout(timer)
    return res
  } catch (err) {
    clearTimeout(timer)
    throw err
  }
}

function extractTag(xml, tag) {
  const cdataPattern = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i')
  const cdataMatch = xml.match(cdataPattern)
  if (cdataMatch) return cdataMatch[1].trim()
  const pattern = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i')
  const m = xml.match(pattern)
  return m ? m[1].trim() : ''
}

function extractAtomLink(xml) {
  // prefer alternate link, then any href
  const alt = xml.match(/<link[^>]*rel="alternate"[^>]*href="([^"]*)"[^>]*\/?>/i)
  if (alt) return alt[1]
  const m = xml.match(/<link[^>]*href="([^"]*)"[^>]*\/?>/i)
  return m ? m[1] : ''
}

function stripHTML(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseRSSItems(xml) {
  const items = []

  // RSS 2.0
  const rssPattern = /<item>([\s\S]*?)<\/item>/gi
  let match
  while ((match = rssPattern.exec(xml)) !== null) {
    const block = match[1]
    items.push({
      title: stripHTML(extractTag(block, 'title')),
      link: extractTag(block, 'link') || extractAtomLink(block),
      pubDate: extractTag(block, 'pubDate') || extractTag(block, 'dc:date'),
      description: stripHTML(extractTag(block, 'description') || '').slice(0, 300),
    })
  }

  // Atom
  if (items.length === 0) {
    const atomPattern = /<entry>([\s\S]*?)<\/entry>/gi
    while ((match = atomPattern.exec(xml)) !== null) {
      const block = match[1]
      items.push({
        title: stripHTML(extractTag(block, 'title')),
        link: extractAtomLink(block) || extractTag(block, 'link'),
        pubDate: extractTag(block, 'published') || extractTag(block, 'updated'),
        description: stripHTML(extractTag(block, 'summary') || extractTag(block, 'content') || '').slice(0, 300),
      })
    }
  }

  return items
}

/** 关键词匹配打分 */
function scoreArticle(article, lang) {
  const text = `${article.title} ${article.description}`.toLowerCase()
  const keywords = lang === 'zh' ? KEYWORDS_ZH : KEYWORDS_EN
  let score = 0
  for (const kw of keywords) {
    if (text.includes(kw.toLowerCase())) score++
  }
  return score
}

// ============================================================
// 主流程
// ============================================================

async function main() {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - DIGEST_DAYS)

  console.log(`\n🚀 开始抓取（最近 ${DIGEST_DAYS} 天）\n`)

  // 1. 并行抓取 RSS + 网页
  const rssResults = await Promise.all(
    RSS_SOURCES.map(async (source) => {
      try {
        console.log(`  📡 ${source.name}`)
        const res = await fetchWithTimeout(source.url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const xml = await res.text()
        const items = parseRSSItems(xml)
        return items.map((item) => ({
          ...item,
          source: source.name,
          lang: source.lang,
          category: source.category,
        }))
      } catch (err) {
        console.warn(`  ⚠️  ${source.name} 失败: ${err.message}`)
        return []
      }
    })
  )

  const webResults = await Promise.all(
    WEB_SOURCES.map(async (source) => {
      try {
        console.log(`  🌐 ${source.name}`)
        const res = await fetchWithTimeout(source.url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const html = await res.text()
        const articles = []
        const seen = new Set()
        const linkPattern = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi
        let match
        while ((match = linkPattern.exec(html)) !== null) {
          const href = match[1]
          const text = stripHTML(match[2]).trim()
          if (text.length > 5 && text.length < 200 && !seen.has(href) &&
              (href.includes('/research/') || href.includes('/engineering/') || href.includes('/blog/'))) {
            seen.add(href)
            const fullUrl = href.startsWith('http') ? href : `https://www.anthropic.com${href}`
            // 清理标题中的日期和分类前缀
            const cleanTitle = text
              .replace(/^[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4}/, '')  // "Apr 9, 2026"
              .replace(/^(Research|Engineering|Policy|News|Announcements)/, '')  // category prefix
              .trim() || text
            articles.push({
              title: cleanTitle, link: fullUrl, pubDate: '', description: '',
              source: source.name, lang: source.lang, category: source.category,
            })
          }
        }
        return articles.slice(0, 10)
      } catch (err) {
        console.warn(`  ⚠️  ${source.name} 失败: ${err.message}`)
        return []
      }
    })
  )

  const results = [...rssResults, ...webResults]

  const allArticles = results.flat()
  console.log(`\n📦 共抓取 ${allArticles.length} 篇`)

  // 2. 过滤：最近 N 天 + 关键词匹配
  const scored = allArticles
    .filter((a) => {
      if (!a.pubDate) return true
      try { return new Date(a.pubDate) >= cutoffDate } catch { return true }
    })
    .map((a) => ({ ...a, score: scoreArticle(a, a.lang) }))
    .filter((a) => a.score >= 1) // 至少命中 1 个关键词
    .sort((a, b) => b.score - a.score)

  console.log(`🎯 关键词过滤后: ${scored.length} 篇\n`)

  if (scored.length === 0) {
    console.log('没有匹配的文章，保留现有 digest.md 不更新。')
    return
  }

  // 3. 按来源分类，每个来源最多取 5 篇
  const byCategory = {}
  for (const a of scored) {
    if (!byCategory[a.category]) byCategory[a.category] = []
    if (byCategory[a.category].length < 8) {
      byCategory[a.category].push(a)
    }
  }

  // 4. 生成 Markdown
  const now = new Date()
  const dateStr = fmt(now)
  const weekAgoStr = fmt(cutoffDate)

  const allSources = [...RSS_SOURCES, ...WEB_SOURCES]

  let md = `# AI 周报

> 每周自动从 ${allSources.map((s) => s.name).join('、')} 抓取，按关键词筛选与企业 AI 落地最相关的内容。

**本期**：${weekAgoStr} — ${dateStr} · 共 ${scored.length} 篇

---

`

  const categoryOrder = ['模型厂商', '开源生态', '工具平台', '中文媒体']
  const categoryEmoji = { '模型厂商': '🏢', '开源生态': '🌐', '工具平台': '🔧', '中文媒体': '📰' }

  for (const cat of categoryOrder) {
    const articles = byCategory[cat]
    if (!articles || articles.length === 0) continue

    md += `## ${categoryEmoji[cat] || ''} ${cat}\n\n`

    for (const a of articles) {
      const date = a.pubDate ? formatPubDate(a.pubDate) : ''
      md += `### [${a.title}](${a.link})\n\n`
      md += `**${a.source}**${date ? ` · ${date}` : ''}`
      if (a.description) {
        md += ` — ${a.description.slice(0, 150)}${a.description.length > 150 ? '...' : ''}`
      }
      md += '\n\n'
    }
  }

  md += `---

::: info 关于这个页面
由 [\`scripts/fetch-ai-digest.mjs\`](https://github.com/jundaychan/jundayweb/blob/main/scripts/fetch-ai-digest.mjs) 自动生成。

**数据来源**：${allSources.map((s) => s.name).join(' · ')}

**筛选逻辑**：关键词匹配（Agent、RAG、工作流、电商、客服、模型更新等 50+ 关键词）

想手动运行：\`node scripts/fetch-ai-digest.mjs\`

想了解更多信息源？→ [AI 信息源推荐](/sources)
:::
`

  const outputPath = resolve(DOCS_DIR, 'digest.md')
  writeFileSync(outputPath, md, 'utf-8')
  console.log(`✅ 周报已生成: docs/digest.md`)
  console.log(`   ${scored.length} 篇文章，${Object.keys(byCategory).length} 个分类`)
}

function fmt(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatPubDate(dateStr) {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return ''
    return fmt(d)
  } catch { return '' }
}

main().catch((err) => {
  console.error('❌ 执行失败:', err)
  process.exit(1)
})
