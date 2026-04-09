# MCP 快速上手

> 10 分钟配置完成，让 Claude 或 Cursor 能直接读你电脑上的文件、查 GitHub、搜网页。

## 先搞清楚三个角色

| 角色 | 是什么 | 类比 |
|------|--------|------|
| **MCP Host（宿主）** | 你用的 AI 应用 | 你的电脑 |
| **MCP Client（客户端）** | Host 内部负责连接的组件 | 电脑的 USB 接口 |
| **MCP Server（服务器）** | 提供具体能力的程序 | U 盘、打印机、键盘 |

**你要做的事**：在 Host（Claude Desktop 或 Cursor）里配置好要连接哪些 Server。

来源：[MCP 架构文档](https://modelcontextprotocol.io/docs/learn/architecture)

---

## 方案一：Claude Desktop（最简单）

### 前提条件

- 安装 [Claude Desktop](https://claude.ai/download)
- 安装 [Node.js](https://nodejs.org)（LTS 版本即可）

### 第一步：找到配置文件

| 系统 | 配置文件位置 |
|------|------------|
| **Mac** | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| **Windows** | `%APPDATA%\Claude\claude_desktop_config.json` |

**快捷方式**：Claude Desktop → 设置 → 开发者 → 编辑配置

### 第二步：添加 MCP 服务器

打开配置文件，写入以下内容：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/你的用户名/Desktop",
        "/Users/你的用户名/Documents"
      ]
    }
  }
}
```

这个配置让 Claude 能读写你桌面和文档文件夹里的文件。

::: warning 注意路径
- Mac 用户把 `你的用户名` 换成真实用户名
- Windows 用户用 `C:\\Users\\你的用户名\\Desktop` 格式（双反斜杠）
- **只授权你希望 AI 访问的目录**，不要授权整个硬盘
:::

### 第三步：重启 Claude Desktop

关闭并重新打开 Claude Desktop。如果配置正确，你会在聊天框看到一个 **锤子图标**，点击可以看到可用的工具列表。

### 第四步：试试看

在 Claude 中说：
```
帮我看看桌面上有哪些文件
```

Claude 会调用文件系统 MCP 服务器，列出你桌面的文件。

### 添加更多服务器

同一个配置文件可以添加多个服务器：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/你的用户名/Desktop"]
    },
    "fetch": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

| 服务器 | 能力 |
|--------|------|
| `filesystem` | 读写本地文件 |
| `fetch` | 抓取网页内容 |
| `memory` | AI 长期记忆（知识图谱） |
| `git` | 操作 Git 仓库 |
| `sequential-thinking` | 复杂问题分步推理 |

来源：[Claude Desktop MCP 配置指南](https://modelcontextprotocol.io/docs/develop/connect-local-servers)

---

## 方案二：Cursor（开发者首选）

### 配置方式

Cursor 支持两种 MCP 配置：

| 范围 | 配置文件 | 适合 |
|------|---------|------|
| **全局** | `~/.cursor/mcp.json` | 所有项目通用的工具 |
| **项目级** | `项目根目录/.cursor/mcp.json` | 只在当前项目用的工具 |

### 配置示例

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "你的GitHub Token"
      }
    }
  }
}
```

### 验证

`Cmd/Ctrl + Shift + P` → 搜索 "MCP" → 查看已连接的服务器和工具列表。

来源：[Cursor MCP 文档](https://cursor.com/docs/context/mcp)

---

## 方案三：Dify（国内团队推荐）

Dify 从 v1.6.0 开始原生支持 MCP，而且是 **双向支持**：

| 方向 | 说明 |
|------|------|
| **用 MCP** | 在 Dify 中连接外部 MCP 服务器，给 Agent 加能力 |
| **当 MCP** | 把 Dify 的 Agent/工作流暴露为 MCP 服务器，给其他 AI 用 |

### 在 Dify 中使用 MCP 服务器

1. 进入 Dify 后台 → 工具 → 添加工具
2. 选择 MCP 类型
3. 输入 MCP 服务器地址
4. Dify 自动发现服务器提供的工具
5. 在 Agent 中启用这些工具

来源：[Dify v1.6.0 MCP 支持](https://dify.ai/blog/v1-6-0-built-in-two-way-mcp-support)

---

## 方案四：阿里云百炼（5 分钟搭建）

如果你不想折腾本地环境，阿里云百炼提供全托管的 MCP 服务：

1. 登录 [阿里云百炼](https://bailian.console.aliyun.com/)
2. 从 MCP 服务器市场选择你需要的工具
3. 一键接入到你的 Agent
4. 平台自动处理运维和安全

**优点**：零运维、5 分钟搞定、有沙箱环境
**缺点**：依赖阿里云、数据经过云端

---

## MCP 的两种连接方式

| | **stdio（本地）** | **Streamable HTTP（远程）** |
|--|-----------------|--------------------------|
| 原理 | AI 在本地启动一个程序 | 连接远程服务器 |
| 速度 | 极快（本地通信） | 取决于网络 |
| 适合 | 个人使用、本地文件操作 | 团队共享、生产部署 |
| 安全 | 天然安全（不出本机） | 需要认证（OAuth 2.1） |
| 扩展性 | 单人用 | 多人用、可负载均衡 |

**建议**：个人先用 stdio 本地模式入门，团队和生产环境用 Streamable HTTP。

来源：[MCP 传输协议规范](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)

---

## 常见问题

### 配置了但看不到锤子图标？

1. 确认 Node.js 已安装（终端输入 `node -v` 检查）
2. 检查 JSON 格式是否正确（用 [jsonlint.com](https://jsonlint.com) 验证）
3. 完全退出 Claude Desktop 再重新打开（不是最小化）
4. 检查终端是否有错误信息

### MCP 服务器会读我所有文件吗？

不会。你在配置中指定了哪些目录，MCP 只能访问那些目录。而且 Claude 每次调用工具前会请求你确认。

### 需要一直开着电脑吗？

本地 MCP 服务器只在你用 AI 时运行，关掉 AI 应用就自动关闭。远程 MCP 服务器独立运行，不依赖你的电脑。

## 一句话总结

> **Claude Desktop 配一个 JSON 文件就能用，Dify 和百炼更适合团队。先从文件系统 MCP 开始试，感受到便利后再加更多服务器。**

下一篇：[MCP 生态](/mcp/ecosystem) — 有哪些现成的 MCP 服务器可以直接用？
