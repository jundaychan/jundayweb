# MCP 生态：现成能用的服务器

> 不需要自己造轮子。全球已有 5800+ MCP 服务器，国内平台收录超过 15 万个。找到你需要的，装上就能用。

## 官方参考服务器

这些由 MCP 官方团队维护，质量和安全有保障：

| 服务器 | 功能 | 适合场景 |
|--------|------|---------|
| **Filesystem** | 读写本地文件 | 让 AI 处理你电脑上的文档 |
| **Git** | 操作 Git 仓库 | 代码管理、版本控制 |
| **Fetch** | 抓取网页内容 | 让 AI 读取网页信息 |
| **Memory** | 知识图谱式长期记忆 | AI 记住跨对话的信息 |
| **Sequential Thinking** | 分步推理 | 复杂问题拆解 |
| **Time** | 时间和时区 | 时间相关的计算 |

安装方式（以 filesystem 为例）：
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/你的目录"]
    }
  }
}
```

来源：[MCP 官方服务器仓库](https://github.com/modelcontextprotocol/servers)

---

## 热门社区服务器

| 服务器 | 提供方 | 功能 | 场景 |
|--------|--------|------|------|
| **GitHub** | GitHub 官方 | PR、Issue、代码搜索 | 开发管理 |
| **Slack** | 社区 | 频道消息、发送通知 | 团队沟通 |
| **Google Drive** | 社区 | 文件搜索、读取 | 文档管理 |
| **PostgreSQL** | 社区 | 数据库查询（只读） | 数据分析 |
| **Brave Search** | Brave | 网页搜索 | 信息检索 |
| **Sentry** | Sentry | 错误监控 | 技术运维 |
| **Atlassian** | 社区 | Jira/Confluence 操作 | 项目管理 |

---

## 国内 MCP 平台

这是对中国用户最重要的部分——国内已经形成了完整的 MCP 生态。

### 百度 MCP World

- **地址**：[mcpworld.com](https://www.mcpworld.com/)
- **规模**：56,700+ 服务器，国内最大
- **特点**：企业级品质、分类完善
- **适合**：需要大量选择的企业用户

### MCP Planet

- **地址**：[mcpmarket.cn](https://mcpmarket.cn/)
- **规模**：54,500+ 服务器
- **特点**：中立平台，有详细教程
- **适合**：学习和入门

### 阿里 ModelScope MCP 广场

- **地址**：[modelscope.cn/mcp](https://modelscope.cn/mcp)
- **规模**：9,200+ 服务器
- **特点**：可视化调试、MCP Bench 测评
- **适合**：需要测试和对比的技术团队

### 腾讯云 MCP

- **地址**：[cloud.tencent.com/developer/mcp](https://cloud.tencent.com/developer/mcp)
- **规模**：1,000+ 服务器
- **特点**：**微信小程序集成**
- **适合**：微信生态的企业

### 科大讯飞星辰

- **地址**：[mcp.xfyun.cn](https://mcp.xfyun.cn/pages/square)
- **规模**：16,300+ 服务器
- **特点**：语音 AI 集成
- **适合**：需要语音能力的场景

### 阿里云百炼

- **地址**：[阿里云百炼控制台](https://bailian.console.aliyun.com/)
- **规模**：184+ 精选服务器
- **特点**：全托管、5 分钟搭建、有沙箱
- **适合**：不想折腾运维的团队

---

## 按行业选 MCP 服务器

### 电商

| 需求 | 推荐服务器 | 说明 |
|------|-----------|------|
| 商品数据管理 | PostgreSQL / MySQL MCP | 连接商品数据库 |
| 客服知识库 | Filesystem + Memory | 加载产品文档和历史对话 |
| 竞品监控 | Fetch + Brave Search | 自动抓取竞品信息 |
| 订单处理 | 自建 MCP（接入订单系统 API） | 查询/修改订单 |
| 社交媒体 | Slack / 自建（接微信 API） | 消息通知和互动 |

### 知识付费

| 需求 | 推荐服务器 | 说明 |
|------|-----------|------|
| 课程内容管理 | Filesystem + Google Drive | 读取课程文档和素材 |
| 学员答疑 | Memory + 自建知识库 MCP | 基于课程内容自动回答 |
| 内容发布 | GitHub MCP / 自建 CMS MCP | 管理发布流程 |
| 数据分析 | PostgreSQL MCP | 分析学员数据和转化率 |

### 通用办公

| 需求 | 推荐服务器 | 说明 |
|------|-----------|------|
| 文件处理 | Filesystem | 读写本地文档 |
| 邮件管理 | Gmail MCP（社区） | 读写邮件 |
| 日程管理 | Google Calendar MCP | 查看和创建日程 |
| 项目管理 | Atlassian / GitHub | Jira 工单、GitHub Issue |
| 网页调研 | Fetch + Brave Search | 搜索和阅读网页 |

---

## 怎么评估一个 MCP 服务器

在安装任何 MCP 服务器之前，检查这些：

| 检查项 | 为什么重要 |
|--------|-----------|
| **来源是否可信** | 官方 / 知名公司 / GitHub 高星项目 |
| **权限范围** | 它需要访问你哪些数据？范围是否合理？ |
| **是否只读** | 只读比读写安全得多，优先选只读 |
| **最近更新时间** | 超过 6 个月没更新的慎用 |
| **是否有审计日志** | 生产环境必须能追踪操作记录 |
| **社区评价** | 别人用得怎么样？有没有安全问题报告？ |

::: warning 安装 MCP 服务器 = 安装软件
MCP 服务器能访问你的数据、调用外部 API。对待它就像对待安装在电脑上的软件一样——**不确定的不装**。
:::

---

## 企业级 MCP 部署案例

### Pinterest：每月 66,000 次调用

Pinterest 建立了完整的 MCP 生态系统：

- **844 活跃用户**，每月 **66,000 次工具调用**
- 多个领域 MCP 服务器：Presto（数据查询）、Spark（数据处理）、Airflow（任务调度）
- 通过中央注册中心统一管理
- 双层认证（JWT + 服务网格身份）
- 敏感操作必须人工确认
- **每月节省约 7,000 小时**

来源：[Pinterest MCP 生态实践](https://www.infoq.com/news/2026/04/pinterest-mcp-ecosystem/)

### Block（Square/Cash App）：效率提升 50-75%

Block 基于 MCP 构建了内部 AI Agent "Goose"：

- 员工常见任务 **效率提升 50-75%**
- 用途：遗留代码重构、数据库迁移、自动化测试
- MCP 让所有内部工具都能被 AI 访问

来源：[Block MCP 实践](https://www.cdata.com/blog/2026-year-enterprise-ready-mcp-adoption)

### Bloomberg：从数天到数分钟

Bloomberg 最初自建了内部集成标准，后来切换到 MCP：

- 新工具接入时间从 **数天缩短到数分钟**
- 形成了"飞轮效应"——工具越多 Agent 越有用，用得越多工具越完善

来源：[Bloomberg MCP 采纳](https://www.cdata.com/blog/2026-year-enterprise-ready-mcp-adoption)

---

## 一句话总结

> **国内 MCP 生态已经非常成熟，百度、阿里、腾讯、讯飞都有 MCP 平台。电商和知识付费场景的大部分需求，都能找到现成的 MCP 服务器。先从百炼或 ModelScope 找，找不到再自己搭。**

下一篇：[搭建自己的 MCP 服务器](/mcp/build) — 把你的业务系统接入 MCP。
