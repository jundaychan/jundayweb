# MCP 实战教程

> MCP 就是 AI 世界的 USB 接口。以前每接一个工具要写一套代码，有了 MCP，接一次到处用。

## 什么是 MCP

**MCP（Model Context Protocol，模型上下文协议）** 是 Anthropic 在 2024 年 11 月发布的开放标准，用于连接 AI 和外部系统。

**一句话理解**：MCP 让 AI 能"插上"各种工具，就像 USB-C 接口让你的电脑能连接各种设备。

```
没有 MCP：
ChatGPT 要查数据库 → 写一套对接代码
Claude 要查数据库 → 再写一套对接代码
Cursor 要查数据库 → 又写一套对接代码

有了 MCP：
数据库做一个 MCP 服务器 → ChatGPT、Claude、Cursor 全都能用
```

来源：[MCP 官方网站](https://modelcontextprotocol.io/introduction)

## 为什么现在必须关注

### 全行业已经在用了

| 时间 | 事件 |
|------|------|
| 2024.11 | Anthropic 发布 MCP |
| 2025.3 | **OpenAI 采纳 MCP**，ChatGPT 桌面版支持 |
| 2025.4 | **Google DeepMind** 加入 |
| 2025.7 | **Microsoft** 集成 MCP |
| 2025.11 | **AWS Bedrock** 支持；SDK 月下载量 **9700 万次** |
| 2025.12 | Anthropic 将 MCP 捐给 **Linux 基金会**，OpenAI 联合创始 |
| 2026 | **所有主流 AI 平台都支持 MCP** |

来源：[MCP Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol)

### 中国平台也全面跟进

| 平台 | MCP 服务器数量 | 特点 |
|------|-------------|------|
| **百度 MCP World** | 56,700+ | 国内最大，企业级 |
| **MCP Planet** | 54,500+ | 中立平台，有教程 |
| **科大讯飞星辰** | 16,300+ | 语音 AI 集成 |
| **阿里 ModelScope** | 9,200+ | 可视化调试 |
| **腾讯云 MCP** | 1,000+ | 微信小程序集成 |
| **阿里百炼** | 184+ | 5 分钟搭建 Agent |

来源：各平台官网（2026 年数据）

## 这个系列讲什么

| 篇目 | 核心问题 | 适合谁 |
|------|---------|--------|
| [快速上手](/mcp/setup) | 10 分钟在 Claude/Cursor 中用上 MCP | 所有人 |
| [MCP 生态](/mcp/ecosystem) | 有哪些现成的 MCP 服务器可以用？ | 找工具的人 |
| [搭建自己的 MCP](/mcp/build) | 把你的业务系统接入 MCP | 技术负责人 |
| [安全须知](/mcp/security) | MCP 的安全风险和防范措施 | 决策者 |

## MCP 在学习路径中的位置

```
对话 → 用现成能力 → 写 Skill → 【接 MCP】→ Agent → 系统构建
                                    ↑ 你在这里
```

[写 Skill](/agent-skills/index) 是把你的经验变成 AI 能用的能力，**接 MCP** 是让这些能力能在所有 AI 平台上通用。一个 Skill 只能在一个平台用，一个 MCP 服务器到处都能用。

## 内容来源

| 来源 | 内容 |
|------|------|
| [MCP 官方规范](https://modelcontextprotocol.io/) | 协议定义、架构、安全指南 |
| [MCP 2026 路线图](https://modelcontextprotocol.io/development/roadmap) | 未来发展方向 |
| [Pinterest MCP 实践](https://www.infoq.com/news/2026/04/pinterest-mcp-ecosystem/) | 企业级部署案例 |
| [Block/Square MCP 实践](https://www.cdata.com/blog/2026-year-enterprise-ready-mcp-adoption) | 员工效率提升 50-75% |
| [Dify MCP 支持](https://dify.ai/blog/v1-6-0-built-in-two-way-mcp-support) | 国内平台接入方案 |

从 [快速上手](/mcp/setup) 开始。
