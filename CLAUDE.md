# CLAUDE.md — jundayweb 项目指南

## 项目概述

**junday.net** — Junday（俊达）的 AI 商业指南网站。面向中国企业创始人和电商老板，用大白话讲 AI，帮他们真正把 AI 用起来。

- **技术栈**：VitePress（Vue 静态站点生成器）
- **部署**：Cloudflare Pages（自带 CDN，中国可访问）
- **域名**：junday.net
- **仓库**：github.com/jundaychan/jundayweb
- **工作流**：push to main → CF Pages 自动构建部署

## 目标用户

中国中小企业创始人/老板，尤其是电商和知识付费行业。他们的共同特点：
- 知道 AI 有用，但不知道怎么开始
- 不懂技术，不会写代码
- 关心的是"能帮我赚钱/省钱吗"，不是技术原理
- 对新概念接受度高，但没耐心看长篇大论

## 内容原则

### 必须做到的
- **说人话**：不用技术术语，用老板能听懂的语言
- **给干货**：每篇内容要有可直接执行的行动建议
- **有出处**：数据和案例必须有来源，不能编造。标注"需验证"比编数字好
- **中国视角**：优先推荐中国可用的工具和平台，国外工具要标注是否需要翻墙

### 绝对不做的
- **不自己编提示词/模板**：必须基于 GitHub 高星开源项目等可信来源，翻译+本地化
- **不编造数据**：工具价格、用户数、ROI 数据必须来自官方或可信第三方
- **不写广告文**：不给任何工具做软广，对比要客观，缺点也要写
- **不用 emoji 在 YAML frontmatter 中**：会导致编码错误（`��` 乱码），hero tagline 等字段不要放 emoji

## 网站结构

### 导航分组逻辑

顶部导航按 **学习曲线** 排列（对话 → 用现成能力 → 写Skill → 接MCP → Agent → 系统构建）：

```
首页 | 学会对话 ▾ | 上手工具 ▾ | 打造能力 ▾ | 搭建体系 ▾ | 常见问题 | 关于
```

- **学会对话**：从零开始理解 AI（入门指南 + 核心概念 + 提示词模板库 + 概念速查）
- **上手工具**：用现成的 AI 能力（工具实测 + 模型选择）
- **打造能力**：写自己的 Skill + 接 MCP（Agent Skills 教程 + MCP 实战教程）
- **搭建体系**：Agent + Harness + 企业落地（理解Agent + Agent Harness + 企业落地AI + 电商AI）
- **常见问题**：成本、安全、团队管理等实际问题
- **关于**：Junday 个人介绍

### 目录结构

```
docs/
├── index.md                     # 首页（Hero + 营销内容 + 个人介绍 + 微信二维码）
├── faq.md                       # 常见问题（版权、数据安全、ROI、合规）
├── about.md                     # 关于页
├── guide/                       # 入门指南
│   ├── what-is-ai.md
│   ├── why-ai-matters.md
│   └── getting-started.md
├── concepts/                    # 核心概念
│   ├── llm.md
│   ├── prompt-engineering.md
│   └── agents.md
├── practice/                    # 实践应用（入门级）
│   ├── scenarios.md
│   └── tools.md
├── ai100/                       # AI 100概念（每个概念：定义+老板为什么要懂+案例+行动建议）
│   ├── index.md
│   ├── foundational.md
│   ├── models.md
│   ├── applications.md
│   ├── business.md
│   ├── data.md
│   ├── evaluation.md
│   ├── safety.md
│   └── trends.md
├── aicode100/                   # AI编程 100概念（同上格式）
│   ├── index.md
│   ├── basics.md
│   ├── ai-core.md
│   ├── tools.md
│   ├── prompting.md
│   ├── workflow.md
│   ├── frameworks.md
│   ├── deployment.md
│   ├── security.md
│   └── cutting-edge.md
├── rag/                         # RAG 知识库教程（原理、搭建、优化）
│   ├── index.md                 # RAG 是什么、平台对比（Dify/RAGFlow/阿里百炼）
│   ├── build.md                 # 三平台搭建实操（阿里百炼/Dify/RAGFlow）
│   └── optimize.md              # 7 个失败点、成本控制、评估方法
├── workflow/                    # 工作流自动化教程
│   ├── index.md                 # 工作流 vs Agent 对比、8 大自动化场景
│   ├── platforms.md             # n8n/Dify/飞书/钉钉宜搭 实操指南
│   └── recipes.md               # 6 个常用工作流配方模板
├── models/                      # 模型选择指南（按类型分）
│   ├── index.md
│   ├── text.md
│   ├── image.md
│   ├── audio.md
│   ├── video.md
│   └── comparison.md
├── tools/                       # AI工具实测（真实价格+中国可用性）
│   ├── index.md                 # 一句话选择指南 + ROI 数据
│   ├── writing.md               # 豆包、通义千问、Kimi、文心一言、ChatGPT、Claude
│   ├── image.md                 # 即梦、通义万相、SD、Canva、Midjourney、DALL-E
│   ├── video.md                 # 可灵、即梦视频、通义万相视频、Runway、Pika
│   └── service.md               # 晓多AI、快商通、腾讯企点、科大讯飞、得助智能
├── prompts/                     # 提示词模板库（全部来自 GitHub 高星开源项目）
│   ├── index.md                 # 来源说明 + 使用方法
│   ├── business.md              # 商业角色系统提示词（来自 ai-boost/awesome-prompts）
│   ├── roles.md                 # 万能角色扮演（来自 f/awesome-chatgpt-prompts, 143K stars）
│   └── techniques.md            # 提示词工程技巧（来自 DAIR.AI, 72K stars）
├── agent-harness/               # Agent Harness 实战（基于 Anthropic 4篇官方博客）
│   ├── index.md
│   ├── why.md                   # 为什么要懂 Harness（4种失败模式、Manus/LangChain/Vercel 证据）
│   ├── how.md                   # 怎么搭建（Anthropic 5种架构模式 + 三Agent架构）
│   └── what.md                  # 核心组件（11个组件详解 + 电商客服完整示例）
├── agent-skills/                # Agent Skills 教程（基于 Anthropic/OpenAI/Coze/Dify）
│   ├── index.md                 # Polanyi 默会知识洞察 + 系列导航
│   ├── what.md                  # 什么是 Skills（跨平台概念、MCP 简介）
│   ├── design.md                # 设计原则（6条铁律 + 5种模式）
│   ├── build.md                 # 手把手搭建（扣子零代码 + Dify + API）
│   └── cases.md                 # 实战案例（电商/客服/知识付费/财务）
├── mcp/                         # MCP 实战教程（基于 MCP 官方规范 + 企业实践）
│   ├── index.md                 # 什么是 MCP、全行业采纳时间线、国内平台
│   ├── setup.md                 # 快速上手（Claude Desktop/Cursor/Dify/百炼）
│   ├── ecosystem.md             # 生态（5800+全球服务器、国内15万+、按行业选）
│   ├── build.md                 # 自建 MCP 服务器（Python/TypeScript/Dify）
│   └── security.md              # 安全须知（5个风险、检查清单）
├── ai-landing/                  # 企业落地AI实战（参考 Anthropic、OpenAI 等一手资料）
│   ├── index.md
│   ├── agents.md                # Agent 5种模式、能力现实评估
│   ├── llm.md                   # 模型选择、上下文工程、4周试点
│   ├── productivity.md          # 10万对话数据、企业案例+ROI
│   ├── cases.md                 # 国际+国内企业案例（Klarna、字节等，有具体数字）
│   └── pitfalls.md              # 8种失败模式、BCG 10/20/70 规则
├── ecommerce/                   # 电商AI实战（基于700页电商AI课程PPT）
│   ├── index.md
│   ├── ai-image.md              # 传统 vs AI 作图成本对比
│   ├── image-framework.md       # "4+1"生图框架
│   ├── growth.md                # SKU裂变、小红书/抖音策略
│   └── management.md            # AI智能体替代SOP、"三不"原则
└── public/
    └── images/
        └── wechat-qr.png        # 微信二维码（145KB）
```

## 构建命令

```bash
npm run docs:dev      # 本地开发预览 http://localhost:5173
npm run docs:build    # 构建生产版本
npm run docs:preview  # 预览构建结果
```

构建输出目录：`docs/.vitepress/dist`

## 部署

push to `main` 分支即自动触发 Cloudflare Pages 构建部署。

- 构建命令：`npm run docs:build`
- 输出目录：`docs/.vitepress/dist`
- CF Pages 项目绑定 GitHub 仓库 `jundaychan/jundayweb`

## 中国访问优化

- **不使用**任何被墙的外部资源（Google Fonts、Google Analytics 等）
- **字体**：纯系统字体栈，零外部请求
- **图片**：放在 `docs/public/` 目录，随站点一起部署到 CF CDN
- **搜索**：VitePress 内置 local search，不依赖 Algolia

## 部署规则

- **内容更新后直接部署**：完成内容修改并构建成功后，直接 commit + push，不需要询问用户确认
- 工作流：编辑 → `npm run docs:build` → `git add` → `git commit` → `git push`

## 已知问题和注意事项

1. **YAML frontmatter 不要放 emoji**：VitePress 编译时 emoji 会变成 `��` 乱码。如果需要 emoji 放在 markdown 正文里
2. **图片路径**：在 markdown 中用 `/images/xxx.png`（以 `/` 开头），文件放在 `docs/public/images/` 下
3. **chunk size warning**：构建时会有 500kB chunk 警告，目前不影响功能，暂时忽略
4. **首页用了自定义 HTML/CSS**：`docs/index.md` 里有大量 `<style>` 和自定义 div，修改时注意不要破坏布局

## 内容来源对照

| 板块 | 主要来源 |
|------|---------|
| 提示词-商业角色 | github.com/ai-boost/awesome-prompts |
| 提示词-角色扮演 | github.com/f/awesome-chatgpt-prompts (143K stars) |
| 提示词-工程技巧 | github.com/dair-ai/Prompt-Engineering-Guide (72K stars) |
| 企业落地-Agent篇 | Anthropic 官方博客《Building Effective Agents》 |
| 企业落地-提效篇 | Anthropic 10万对话数据分析 |
| 企业落地-案例篇 | Klarna、Shopify、Amazon、字节、阿里、美团等企业公开报告 |
| 企业落地-避坑篇 | BCG 2025报告、OpenAI Agent 测试数据 |
| Agent Harness | Anthropic 4篇官方博客（Building Effective Agents、Effective Harnesses、Harness Design、Context Engineering） |
| Agent Skills | Anthropic Tool Use 文档、OpenAI Function Calling、Coze 2.0、Dify、5 Agent Skill Design Patterns |
| MCP 教程 | MCP 官方规范 modelcontextprotocol.io、Pinterest/Block/Bloomberg 实践、百度/阿里/腾讯/讯飞国内平台 |
| RAG 知识库 | Anthropic Contextual Retrieval、Dify/RAGFlow/FastGPT/MaxKB 文档、阿里百炼/百度千帆 |
| 工作流自动化 | n8n 文档（107K stars）、Dify Workflow、飞书/钉钉宜搭/腾讯微搭、IDC 2025 低代码报告 |
| Agent 搭建 | Coze/Dify/n8n 实操、Claude Managed Agents（2026.4.8）、LangChain 2026 State of AI Agents |
| 电商AI实战 | 700页电商AI课程PPT（Kimi总结） |
| 工具实测 | 各平台官网 + 第三方评测（2025年数据） |
| FAQ-版权 | 北京互联网法院2023判决、GB 45438-2025 |
| FAQ-数据安全 | 台湾信安评估2025、PIPL |
| FAQ-ROI | BCG《Are You Generating Value from AI?》2025 |

## 个人品牌元素

- 站名：**Junday 的 AI 商业指南**
- 作者：俊达（Junday）
- 微信号：592146145
- 首页有个人介绍和微信二维码
- 引流钩子："加我微信，帮你梳理最适合的AI切入点，少走弯路"（不是交流群）
