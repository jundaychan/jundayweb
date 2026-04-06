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

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
