# 搭建自己的 MCP 服务器

> 市面上没有你需要的 MCP 服务器？30 分钟自己搭一个。把你的订单系统、客户数据库、内部 API 变成 AI 能用的工具。

## 什么时候需要自己搭

| 场景 | 用现成的 | 自己搭 |
|------|---------|--------|
| 读本地文件 | 官方 filesystem | — |
| 搜索网页 | Brave Search | — |
| 查公司订单数据库 | — | 需要自建 |
| 调用公司内部 API | — | 需要自建 |
| 接入公司 ERP/CRM | — | 需要自建 |
| 操作公司特有的流程 | — | 需要自建 |

**原则**：能用现成的就用现成的，只有涉及公司内部系统才需要自己搭。

---

## 方案一：用 Python 搭建（最快）

### 前提

- 安装 Python 3.10+
- 安装 MCP SDK：`pip install mcp`

### 示例：订单查询 MCP 服务器

```python
from mcp.server.fastmcp import FastMCP

# 创建 MCP 服务器
mcp = FastMCP("订单查询系统")

# 模拟订单数据（实际项目中连接数据库）
orders = {
    "A12345": {"status": "已发货", "tracking": "SF789", "eta": "明天到达"},
    "A12346": {"status": "已签收", "tracking": "YT456", "eta": "已完成"},
    "A12347": {"status": "待发货", "tracking": "", "eta": "预计后天发出"},
}

@mcp.tool()
def query_order(order_id: str) -> str:
    """查询订单状态和物流信息。
    当用户询问订单进度、快递状态时使用。
    参数 order_id 是订单编号，格式如 A12345。
    """
    if order_id in orders:
        order = orders[order_id]
        return f"订单 {order_id}：{order['status']}，快递 {order['tracking']}，{order['eta']}"
    return f"未找到订单 {order_id}，请确认订单号是否正确"

@mcp.tool()
def search_orders(keyword: str) -> str:
    """按关键词搜索订单。
    当用户想查找订单但不知道具体订单号时使用。
    支持按状态搜索，如"已发货""待发货"。
    """
    results = []
    for oid, info in orders.items():
        if keyword in info["status"]:
            results.append(f"{oid}: {info['status']}")
    if results:
        return "找到以下订单：\n" + "\n".join(results)
    return f"没有找到包含 '{keyword}' 的订单"
```

### 运行和测试

```bash
# 用 MCP Inspector 测试（推荐）
npx @modelcontextprotocol/inspector python your_server.py

# 或直接在 Claude Desktop 中配置
```

在 Claude Desktop 的 `claude_desktop_config.json` 中添加：

```json
{
  "mcpServers": {
    "orders": {
      "command": "python",
      "args": ["/path/to/your_server.py"]
    }
  }
}
```

来源：[MCP 官方教程 - 构建服务器](https://modelcontextprotocol.io/docs/develop/build-server)

### Python MCP 的优势

- **类型提示自动生成 Schema**：参数用 `str`、`int`、`bool` 标注，MCP 自动生成工具参数说明
- **文档字符串变工具描述**：函数的 docstring 直接成为 AI 看到的工具说明
- **装饰器语法**：`@mcp.tool()` 一行搞定注册

---

## 方案二：用 TypeScript 搭建

### 前提

- 安装 Node.js 18+
- 初始化项目：`npm init -y && npm install @modelcontextprotocol/sdk zod`

### 示例：商品查询 MCP 服务器

```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "商品查询系统",
  version: "1.0.0",
});

// 注册工具
server.tool(
  "query_product",
  "查询商品信息。当用户询问商品价格、库存、规格时使用。",
  {
    product_id: z.string().describe("商品编号"),
  },
  async ({ product_id }) => {
    // 实际项目中查询数据库
    return {
      content: [
        {
          type: "text",
          text: `商品 ${product_id}：护肤精华液，¥299，库存 156 件`,
        },
      ],
    };
  }
);

// 启动
const transport = new StdioServerTransport();
await server.connect(transport);
```

---

## 方案三：用 Dify 零代码搭建

如果你的系统已经有 API 接口，用 Dify 可以零代码变成 MCP 服务器。

### 步骤

1. **在 Dify 中创建 Agent**，添加自定义工具（导入 OpenAPI 文档）
2. **开启 MCP 服务器模式**（Dify v1.6.0+）
3. **获取 MCP 服务器地址**
4. **在 Claude Desktop 或其他客户端中配置这个地址**

这样你的业务 API → Dify Agent → MCP 服务器 → 任何 AI 客户端都能用。

来源：[Dify MCP 双向支持](https://dify.ai/blog/v1-6-0-built-in-two-way-mcp-support)

---

## MCP 服务器的三种能力

一个 MCP 服务器可以提供三种东西：

| 能力 | 用途 | 类比 |
|------|------|------|
| **Tools（工具）** | AI 可以调用的操作 | 员工能做的事（查数据、发邮件） |
| **Resources（资源）** | AI 可以读取的数据 | 员工能看的资料（文档、数据库） |
| **Prompts（提示词）** | 预设的交互模板 | 员工的 SOP 手册 |

大多数场景只需要 **Tools**。Resources 适合大量只读数据，Prompts 适合标准化流程。

---

## 设计 MCP 工具的最佳实践

跟 [Agent Skills 的设计原则](/agent-skills/design) 一样，Anthropic 的建议同样适用：

### 1. 描述要详细

```python
# 差的描述
@mcp.tool()
def search(query: str) -> str:
    """搜索"""

# 好的描述
@mcp.tool()
def search_products(query: str) -> str:
    """在商品数据库中搜索匹配的商品。
    当用户想找商品、查价格、看库存时使用。
    支持按商品名、品类、品牌搜索。
    每次最多返回 10 条结果。
    如果用户想查特定订单而不是商品，请用 query_order。
    """
```

### 2. 参数要防呆

```python
from enum import Enum

class OrderStatus(str, Enum):
    pending = "待付款"
    paid = "已付款"
    shipped = "已发货"
    delivered = "已签收"

@mcp.tool()
def filter_orders(status: OrderStatus) -> str:
    """按状态筛选订单。"""
    # 用枚举限制可选值，Agent 不可能填错
```

### 3. 返回要精炼

```python
# 差：返回整条数据库记录（50个字段）
return json.dumps(full_record)

# 好：只返回 Agent 需要的信息
return f"订单{oid}：{status}，快递{tracking}，预计{eta}"
```

### 4. 错误要友好

```python
@mcp.tool()
def query_order(order_id: str) -> str:
    """查询订单状态。"""
    try:
        result = database.query(order_id)
        return format_order(result)
    except NotFoundError:
        return f"未找到订单 {order_id}，请确认订单号格式是否正确（如 A12345）"
    except DatabaseError:
        return "数据库暂时无法访问，请稍后再试"
```

AI 收到友好的错误信息后，能自己判断该怎么跟用户说。

---

## 本地测试工具

### MCP Inspector

官方出品的测试工具，类似 API 的 Postman：

```bash
npx @modelcontextprotocol/inspector python your_server.py
```

打开浏览器，可以：
- 看到服务器提供的所有工具
- 手动填参数测试每个工具
- 查看请求和响应的完整内容

来源：[MCP Inspector](https://github.com/modelcontextprotocol/inspector)

---

## 部署到生产环境

本地测试通过后，要部署成远程 MCP 服务器让团队共用。

### 选项一：Docker 部署

```dockerfile
FROM python:3.12-slim
COPY . /app
WORKDIR /app
RUN pip install mcp
CMD ["python", "server.py"]
```

### 选项二：云平台托管

| 平台 | 适合 | 特点 |
|------|------|------|
| **阿里云百炼** | 国内企业 | 全托管、零运维 |
| **Cloudflare Workers** | 全球访问 | Dify 有 mcp-tools-worker 项目 |
| **AWS / Azure** | 有云基础设施的企业 | 原生 MCP 支持 |

### 远程 MCP 的认证

生产环境必须配置认证，不能裸奔：

| 认证方式 | 适合 | 安全级别 |
|---------|------|---------|
| API Key | 内部系统 | 中 |
| OAuth 2.1 | 对外服务 | 高 |
| mTLS | 高安全要求 | 最高 |

来源：[MCP 传输协议规范](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)

---

## 一句话总结

> **Python 30 分钟搭完，Dify 零代码也能做。核心是把你公司独有的系统和数据变成 AI 能用的标准接口。先本地测通，再部署到云上给团队用。**

下一篇：[MCP 安全须知](/mcp/security) — 用 MCP 之前必须知道的安全风险。
