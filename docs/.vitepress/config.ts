import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI 商业指南',
  description: '面向企业创始人的 AI 概念普及与实践指南',

  head: [
    ['meta', { name: 'author', content: 'Junday' }],
    ['meta', { name: 'keywords', content: 'AI, 人工智能, 企业AI, 大语言模型, AI转型' }],
  ],

  themeConfig: {
    // 导航栏：按学习曲线排列
    // 对话 → 用现成能力 → 写Skill → Agent → 系统构建
    nav: [
      { text: '首页', link: '/' },
      {
        text: '学会对话',
        items: [
          {
            text: '入门指南',
            items: [
              { text: '什么是 AI', link: '/guide/what-is-ai' },
              { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
              { text: '如何开始 AI 转型', link: '/guide/getting-started' },
            ],
          },
          {
            text: '核心概念',
            items: [
              { text: '大语言模型', link: '/concepts/llm' },
              { text: '提示工程', link: '/concepts/prompt-engineering' },
            ],
          },
          {
            text: '提示词模板库',
            items: [
              { text: '模板库概览', link: '/prompts/index' },
              { text: '商业决策角色', link: '/prompts/business' },
              { text: '万能角色扮演', link: '/prompts/roles' },
              { text: '提示词工程技巧', link: '/prompts/techniques' },
            ],
          },
          {
            text: '概念速查',
            items: [
              { text: 'AI 100概念', link: '/ai100/index' },
              { text: 'AI编程 100概念', link: '/aicode100/index' },
            ],
          },
        ],
      },
      {
        text: '上手工具',
        items: [
          {
            text: 'AI工具实测',
            items: [
              { text: '工具对比总览', link: '/tools/index' },
              { text: '文字AI工具', link: '/tools/writing' },
              { text: 'AI作图工具', link: '/tools/image' },
              { text: 'AI视频工具', link: '/tools/video' },
              { text: 'AI客服工具', link: '/tools/service' },
            ],
          },
          {
            text: '模型选择',
            items: [
              { text: '模型选择指南', link: '/models/index' },
              { text: '模型对比', link: '/models/comparison' },
            ],
          },
        ],
      },
      {
        text: '打造能力',
        items: [
          {
            text: 'RAG 知识库',
            items: [
              { text: 'RAG 是什么', link: '/rag/index' },
              { text: '搭建知识库', link: '/rag/build' },
              { text: '优化和排错', link: '/rag/optimize' },
            ],
          },
          {
            text: '工作流自动化',
            items: [
              { text: '工作流是什么', link: '/workflow/index' },
              { text: '平台实操指南', link: '/workflow/platforms' },
              { text: '常用配方', link: '/workflow/recipes' },
            ],
          },
          {
            text: 'Agent Skills 教程',
            items: [
              { text: '系列概览', link: '/agent-skills/index' },
              { text: '什么是 Skills', link: '/agent-skills/what' },
              { text: '如何设计 Skills', link: '/agent-skills/design' },
              { text: '手把手搭建', link: '/agent-skills/build' },
              { text: '实战案例', link: '/agent-skills/cases' },
              { text: '热门 Skills 推荐', link: '/agent-skills/recommended' },
            ],
          },
          {
            text: 'MCP 实战教程',
            items: [
              { text: '什么是 MCP', link: '/mcp/index' },
              { text: '快速上手', link: '/mcp/setup' },
              { text: 'MCP 生态', link: '/mcp/ecosystem' },
              { text: '搭建自己的 MCP', link: '/mcp/build' },
              { text: '安全须知', link: '/mcp/security' },
            ],
          },
        ],
      },
      {
        text: '搭建体系',
        items: [
          {
            text: '理解 Agent',
            items: [
              { text: 'AI Agent 是什么', link: '/concepts/agents' },
            ],
          },
          {
            text: 'Agent 搭建实战',
            items: [
              { text: '概览', link: '/agent-guide/index' },
              { text: '搭建第一个 Agent', link: '/agent-guide/first-agent' },
              { text: '测试和评估', link: '/agent-guide/testing' },
              { text: '上生产', link: '/agent-guide/production' },
            ],
          },
          {
            text: 'Agent Harness',
            items: [
              { text: '系列概览', link: '/agent-harness/index' },
              { text: '为什么要懂', link: '/agent-harness/why' },
              { text: '怎么搭建', link: '/agent-harness/how' },
              { text: '核心组件', link: '/agent-harness/what' },
            ],
          },
          {
            text: '企业落地',
            items: [
              { text: '概览', link: '/ai-landing/index' },
              { text: 'Agent篇', link: '/ai-landing/agents' },
              { text: '大模型篇', link: '/ai-landing/llm' },
              { text: '提效篇', link: '/ai-landing/productivity' },
              { text: '案例篇', link: '/ai-landing/cases' },
              { text: '避坑篇', link: '/ai-landing/pitfalls' },
            ],
          },
          {
            text: '电商AI',
            items: [
              { text: '概览', link: '/ecommerce/index' },
              { text: 'AI作图革命', link: '/ecommerce/ai-image' },
              { text: '生图实操框架', link: '/ecommerce/image-framework' },
              { text: '爆款裂变与获客', link: '/ecommerce/growth' },
              { text: '组织管理与智能体', link: '/ecommerce/management' },
            ],
          },
        ],
      },
      { text: '常见问题', link: '/faq' },
      {
        text: 'AI 资讯',
        items: [
          { text: 'AI 周报', link: '/digest' },
          { text: '信息源推荐', link: '/sources' },
        ],
      },
      { text: '关于', link: '/about' },
    ],

    // 侧边栏：按学习阶段分组
    sidebar: {
      // === 阶段一：学会对话 ===
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 AI', link: '/guide/what-is-ai' },
            { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
            { text: '如何开始 AI 转型', link: '/guide/getting-started' },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '大语言模型', link: '/concepts/llm' },
            { text: '提示工程', link: '/concepts/prompt-engineering' },
          ],
        },
        {
          text: '提示词模板库',
          items: [
            { text: '概览', link: '/prompts/index' },
            { text: '商业决策角色', link: '/prompts/business' },
            { text: '万能角色扮演', link: '/prompts/roles' },
            { text: '提示词工程技巧', link: '/prompts/techniques' },
          ],
        },
        {
          text: '实践应用',
          items: [
            { text: '企业应用场景', link: '/practice/scenarios' },
            { text: '推荐工具', link: '/practice/tools' },
          ],
        },
      ],
      '/concepts/llm': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 AI', link: '/guide/what-is-ai' },
            { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
            { text: '如何开始 AI 转型', link: '/guide/getting-started' },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '大语言模型', link: '/concepts/llm' },
            { text: '提示工程', link: '/concepts/prompt-engineering' },
          ],
        },
        {
          text: '提示词模板库',
          items: [
            { text: '概览', link: '/prompts/index' },
            { text: '商业决策角色', link: '/prompts/business' },
            { text: '万能角色扮演', link: '/prompts/roles' },
            { text: '提示词工程技巧', link: '/prompts/techniques' },
          ],
        },
      ],
      '/concepts/prompt': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 AI', link: '/guide/what-is-ai' },
            { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
            { text: '如何开始 AI 转型', link: '/guide/getting-started' },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '大语言模型', link: '/concepts/llm' },
            { text: '提示工程', link: '/concepts/prompt-engineering' },
          ],
        },
        {
          text: '提示词模板库',
          items: [
            { text: '概览', link: '/prompts/index' },
            { text: '商业决策角色', link: '/prompts/business' },
            { text: '万能角色扮演', link: '/prompts/roles' },
            { text: '提示词工程技巧', link: '/prompts/techniques' },
          ],
        },
      ],
      // concepts/agents 归到"搭建体系"
      '/concepts/agents': [
        {
          text: '理解 Agent',
          items: [
            { text: 'AI Agent 是什么', link: '/concepts/agents' },
          ],
        },
        {
          text: 'Agent Harness',
          items: [
            { text: '系列概览', link: '/agent-harness/index' },
            { text: '为什么要懂', link: '/agent-harness/why' },
            { text: '怎么搭建', link: '/agent-harness/how' },
            { text: '核心组件', link: '/agent-harness/what' },
          ],
        },
        {
          text: '企业落地AI',
          items: [
            { text: '概览', link: '/ai-landing/index' },
            { text: 'Agent篇', link: '/ai-landing/agents' },
            { text: '案例篇', link: '/ai-landing/cases' },
            { text: '避坑篇', link: '/ai-landing/pitfalls' },
          ],
        },
      ],
      '/practice/': [
        {
          text: '入门指南',
          items: [
            { text: '什么是 AI', link: '/guide/what-is-ai' },
            { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
            { text: '如何开始 AI 转型', link: '/guide/getting-started' },
          ],
        },
        {
          text: '实践应用',
          items: [
            { text: '企业应用场景', link: '/practice/scenarios' },
            { text: '推荐工具', link: '/practice/tools' },
          ],
        },
      ],
      '/prompts/': [
        {
          text: '提示词模板库',
          items: [
            { text: '概览', link: '/prompts/index' },
            { text: '商业决策角色', link: '/prompts/business' },
            { text: '万能角色扮演', link: '/prompts/roles' },
            { text: '提示词工程技巧', link: '/prompts/techniques' },
          ],
        },
      ],
      '/ai100/': [
        {
          text: '创始人必懂的100个AI概念',
          items: [
            { text: '概览', link: '/ai100/index' },
            { text: '基础概念', link: '/ai100/foundational' },
            { text: '模型与技术', link: '/ai100/models' },
            { text: 'AI应用与产品', link: '/ai100/applications' },
            { text: '商业与战略', link: '/ai100/business' },
            { text: '数据相关', link: '/ai100/data' },
            { text: '模型能力与评估', link: '/ai100/evaluation' },
            { text: '安全、伦理与治理', link: '/ai100/safety' },
            { text: '行业热词与趋势', link: '/ai100/trends' },
          ],
        },
      ],
      '/aicode100/': [
        {
          text: 'AI编程必懂的100个概念',
          items: [
            { text: '概览', link: '/aicode100/index' },
            { text: '编程基础概念', link: '/aicode100/basics' },
            { text: 'AI核心概念', link: '/aicode100/ai-core' },
            { text: 'AI编程工具', link: '/aicode100/tools' },
            { text: '提示工程与AI编程', link: '/aicode100/prompting' },
            { text: '开发流程与协作', link: '/aicode100/workflow' },
            { text: 'AI编程框架与平台', link: '/aicode100/frameworks' },
            { text: '部署与运维', link: '/aicode100/deployment' },
            { text: '安全与最佳实践', link: '/aicode100/security' },
            { text: '前沿概念与趋势', link: '/aicode100/cutting-edge' },
          ],
        },
      ],

      // === 阶段二：上手工具 ===
      '/tools/': [
        {
          text: 'AI工具实测',
          items: [
            { text: '概览', link: '/tools/index' },
            { text: '文字AI工具', link: '/tools/writing' },
            { text: 'AI作图工具', link: '/tools/image' },
            { text: 'AI视频工具', link: '/tools/video' },
            { text: 'AI客服工具', link: '/tools/service' },
          ],
        },
        {
          text: '模型选择指南',
          items: [
            { text: '概览', link: '/models/index' },
            { text: '文字文案', link: '/models/text' },
            { text: '图片生成', link: '/models/image' },
            { text: '音频生成', link: '/models/audio' },
            { text: '视频生成', link: '/models/video' },
            { text: '模型对比', link: '/models/comparison' },
          ],
        },
      ],
      '/models/': [
        {
          text: 'AI工具实测',
          items: [
            { text: '概览', link: '/tools/index' },
            { text: '文字AI工具', link: '/tools/writing' },
            { text: 'AI作图工具', link: '/tools/image' },
            { text: 'AI视频工具', link: '/tools/video' },
            { text: 'AI客服工具', link: '/tools/service' },
          ],
        },
        {
          text: '模型选择指南',
          items: [
            { text: '概览', link: '/models/index' },
            { text: '文字文案', link: '/models/text' },
            { text: '图片生成', link: '/models/image' },
            { text: '音频生成', link: '/models/audio' },
            { text: '视频生成', link: '/models/video' },
            { text: '模型对比', link: '/models/comparison' },
          ],
        },
      ],

      // === 阶段三：打造能力 ===
      '/rag/': [
        {
          text: 'RAG 知识库教程',
          items: [
            { text: 'RAG 是什么', link: '/rag/index' },
            { text: '搭建知识库', link: '/rag/build' },
            { text: '优化和排错', link: '/rag/optimize' },
          ],
        },
        {
          text: '相关内容',
          items: [
            { text: '工作流自动化', link: '/workflow/index' },
            { text: 'Agent Skills', link: '/agent-skills/index' },
            { text: 'Agent 搭建', link: '/agent-guide/index' },
          ],
        },
      ],
      '/workflow/': [
        {
          text: '工作流自动化',
          items: [
            { text: '工作流是什么', link: '/workflow/index' },
            { text: '平台实操指南', link: '/workflow/platforms' },
            { text: '常用配方', link: '/workflow/recipes' },
          ],
        },
        {
          text: '相关内容',
          items: [
            { text: 'RAG 知识库', link: '/rag/index' },
            { text: 'Agent 搭建', link: '/agent-guide/index' },
            { text: 'Agent Harness', link: '/agent-harness/index' },
          ],
        },
      ],
      '/mcp/': [
        {
          text: 'MCP 实战教程',
          items: [
            { text: '什么是 MCP', link: '/mcp/index' },
            { text: '快速上手', link: '/mcp/setup' },
            { text: 'MCP 生态', link: '/mcp/ecosystem' },
            { text: '搭建自己的 MCP', link: '/mcp/build' },
            { text: '安全须知', link: '/mcp/security' },
          ],
        },
        {
          text: '相关内容',
          items: [
            { text: 'Agent Skills 教程', link: '/agent-skills/index' },
            { text: 'Agent Harness', link: '/agent-harness/index' },
          ],
        },
      ],
      '/agent-skills/': [
        {
          text: 'Agent Skills 教程',
          items: [
            { text: '系列概览', link: '/agent-skills/index' },
            { text: '什么是 Skills', link: '/agent-skills/what' },
            { text: '如何设计 Skills', link: '/agent-skills/design' },
            { text: '手把手搭建', link: '/agent-skills/build' },
            { text: '实战案例', link: '/agent-skills/cases' },
            { text: '热门 Skills 推荐', link: '/agent-skills/recommended' },
          ],
        },
      ],

      // === 阶段四：搭建体系 ===
      '/agent-guide/': [
        {
          text: 'Agent 搭建实战',
          items: [
            { text: '概览', link: '/agent-guide/index' },
            { text: '搭建第一个 Agent', link: '/agent-guide/first-agent' },
            { text: '测试和评估', link: '/agent-guide/testing' },
            { text: '上生产', link: '/agent-guide/production' },
          ],
        },
        {
          text: '深入学习',
          items: [
            { text: 'AI Agent 是什么', link: '/concepts/agents' },
            { text: 'Agent Harness', link: '/agent-harness/index' },
            { text: 'Agent Skills', link: '/agent-skills/index' },
            { text: 'MCP 教程', link: '/mcp/index' },
          ],
        },
      ],
      '/agent-harness/': [
        {
          text: '理解 Agent',
          items: [
            { text: 'AI Agent 是什么', link: '/concepts/agents' },
          ],
        },
        {
          text: 'Agent Harness',
          items: [
            { text: '系列概览', link: '/agent-harness/index' },
            { text: '为什么要懂', link: '/agent-harness/why' },
            { text: '怎么搭建', link: '/agent-harness/how' },
            { text: '核心组件', link: '/agent-harness/what' },
          ],
        },
        {
          text: '企业落地AI',
          items: [
            { text: '概览', link: '/ai-landing/index' },
            { text: 'Agent篇', link: '/ai-landing/agents' },
            { text: '案例篇', link: '/ai-landing/cases' },
          ],
        },
      ],
      '/ai-landing/': [
        {
          text: '企业落地AI实战',
          items: [
            { text: '概览', link: '/ai-landing/index' },
            { text: 'Agent篇', link: '/ai-landing/agents' },
            { text: '大模型篇', link: '/ai-landing/llm' },
            { text: '提效篇', link: '/ai-landing/productivity' },
            { text: '案例篇', link: '/ai-landing/cases' },
            { text: '避坑篇', link: '/ai-landing/pitfalls' },
          ],
        },
        {
          text: '相关内容',
          items: [
            { text: 'AI Agent 是什么', link: '/concepts/agents' },
            { text: 'Agent Harness', link: '/agent-harness/index' },
          ],
        },
      ],
      '/ecommerce/': [
        {
          text: '电商AI实战',
          items: [
            { text: '概览', link: '/ecommerce/index' },
            { text: 'AI作图革命', link: '/ecommerce/ai-image' },
            { text: '生图实操框架', link: '/ecommerce/image-framework' },
            { text: '爆款裂变与获客', link: '/ecommerce/growth' },
            { text: '组织管理与智能体', link: '/ecommerce/management' },
          ],
        },
        {
          text: '相关内容',
          items: [
            { text: 'Agent Skills 教程', link: '/agent-skills/index' },
            { text: '企业落地AI', link: '/ai-landing/index' },
          ],
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    outline: {
      label: '页面导航',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    footer: {
      message: '微信交流：592146145',
      copyright: 'Copyright © 2024-present Junday',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
