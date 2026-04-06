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
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/what-is-ai' },
      { text: '核心概念', link: '/concepts/llm' },
      { text: '实践应用', link: '/practice/scenarios' },
      {
        text: '100概念系列',
        items: [
          { text: 'AI 100概念', link: '/ai100/index' },
          { text: 'AI编程 100概念', link: '/aicode100/index' },
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
      {
        text: '国外AI方法论',
        items: [
          { text: '概览', link: '/insights/index' },
          { text: 'Anthropic 系列', link: '/insights/anthropic' },
          { text: 'OpenAI 系列', link: '/insights/openai' },
        ],
      },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'AI 入门指南',
          items: [
            { text: '什么是 AI', link: '/guide/what-is-ai' },
            { text: '为什么企业需要关注 AI', link: '/guide/why-ai-matters' },
            { text: '如何开始 AI 转型', link: '/guide/getting-started' },
          ],
        },
      ],
      '/concepts/': [
        {
          text: '核心概念',
          items: [
            { text: '大语言模型', link: '/concepts/llm' },
            { text: '提示工程', link: '/concepts/prompt-engineering' },
            { text: 'AI Agent', link: '/concepts/agents' },
          ],
        },
      ],
      '/practice/': [
        {
          text: '实践应用',
          items: [
            { text: '企业应用场景', link: '/practice/scenarios' },
            { text: '推荐工具', link: '/practice/tools' },
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
      '/models/': [
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
      '/insights/': [
        {
          text: '国外AI方法论',
          items: [
            { text: '概览', link: '/insights/index' },
            { text: 'Anthropic 系列', link: '/insights/anthropic' },
            { text: 'OpenAI 系列', link: '/insights/openai' },
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
