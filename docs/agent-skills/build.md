# 手把手搭建 Agent Skills

> 不会写代码也能给 Agent 加技能。这篇用扣子（Coze）和 Dify 两个平台，手把手教你创建 Skill。

## 方案选择

| 平台 | 适合谁 | 是否需要代码 | 中国可用 | 费用 |
|------|--------|------------|---------|------|
| **扣子 (Coze)** | 不会代码的老板和运营 | 零代码 | 原生支持 | 免费起步 |
| **Dify** | 有一点技术基础的团队 | 低代码 | 可自部署 | 开源免费 |
| **OpenAI API** | 开发团队 | 写代码 | 需翻墙 | 按调用付费 |
| **Anthropic API** | 开发团队 | 写代码 | 需翻墙 | 按调用付费 |

**推荐路线**：先用扣子零代码验证想法 → 效果好了再考虑用 Dify 自部署（数据更安全）。

---

## 方案一：用扣子（Coze）零代码创建 Skill

### 什么是扣子

扣子是字节跳动的 AI Agent 搭建平台（[coze.cn](https://www.coze.cn)），2026 年 1 月推出 2.0 版本，最大亮点是 **Skill 系统**——支持用自然语言创建 Skill，不需要写任何代码。

来源：[Coze 2.0 发布](https://news.qq.com/rain/a/20260125A05ATZ00)

### 6 种创建 Skill 的方式

#### 方式 1：从 Skill 商店安装（最简单）

1. 打开 [coze.cn](https://www.coze.cn)，进入你的 Agent
2. 点击"Skill 商店"
3. 搜索你需要的能力（比如"快递查询""数据分析"）
4. 一键安装

就这么简单，跟在手机上装 App 一样。

#### 方式 2：用一句话创建（推荐）

**公式**：
```
我需要一个 [功能] 的技能，
用于 [解决什么问题]，
当用户 [触发条件] 时，
输出 [什么格式的结果]
```

**示例**：

```
我需要一个"客户分级"的技能，
用于根据消费金额自动给客户打标签，
当用户提供客户的消费记录时，
输出客户等级（普通/银牌/金牌/钻石）和对应的优惠策略
```

扣子会自动生成这个 Skill 的代码和配置，你只需要测试一下效果。

#### 方式 3：多轮对话迭代

如果一句话说不清楚，可以跟扣子聊：

```
你：我想做一个帮电商客服查订单的技能
扣子：好的，您需要查询哪些信息？订单状态、物流、退款进度？
你：都要，而且如果订单超过7天没发货，自动标记为异常
扣子：明白了，我来设计这个技能...（生成 Skill）
你：再加一个功能，如果是VIP客户，优先处理
扣子：好的，已更新...（更新 Skill）
```

最后点"生成技能"即可。

#### 方式 4：上传文件复刻风格

如果你有现成的文案风格想让 AI 学习：

1. 上传你写过的 10-20 篇范文
2. 告诉扣子"学习这些文章的写作风格"
3. 扣子自动生成一个"风格复刻"Skill

适合：品牌文案风格统一、课程内容风格一致等场景。

#### 方式 5：GitHub 项目打包

如果你的技术团队有现成的工具代码：

1. 提供 GitHub 仓库地址
2. 扣子自动分析代码功能
3. 打包成可调用的 Skill

#### 方式 6：IDE 开发（技术人员）

进入 [code.coze.cn](https://code.coze.cn)，用代码编辑器开发自定义 Skill。

### 扣子 Skill 的运行环境

每个 Skill 运行在独立的云环境中：
- 1 核 CPU + 2GB 内存
- 完全隔离，互不影响
- 自动扩缩容

### 实战：创建一个"商品评价分析"Skill

**步骤**：

1. **打开扣子** → 创建新 Agent（或进入已有 Agent）
2. **添加 Skill** → 选择"用对话创建"
3. **描述需求**：
   ```
   创建一个"商品评价分析"技能：
   - 输入：一批商品评价文本（可以粘贴多条）
   - 分析每条评价的情感（正面/中性/负面）
   - 提取评价中提到的关键优点和缺点
   - 输出一份汇总报告：好评率、最常被提到的优点Top3、最常被提到的缺点Top3
   ```
4. **测试** → 粘贴几条真实评价试试效果
5. **调整** → 如果结果不满意，继续对话微调
6. **发布** → 绑定到你的 Agent

---

## 方案二：用 Dify 搭建自定义 Skill

### 什么是 Dify

Dify 是一个开源的 AI 应用开发平台（[dify.ai](https://dify.ai)），GitHub 上 100K+ stars。支持自部署，数据完全在自己手里。

### 创建自定义工具（3 步）

Dify 通过 **OpenAPI/Swagger 规范** 来接入自定义工具——如果你的系统有 API 接口，就能接进来。

**第一步：准备 API 文档**

你需要一个 OpenAPI 格式的接口描述。比如你的订单系统有这样一个接口：

```yaml
openapi: 3.0.0
info:
  title: 订单查询 API
  version: 1.0.0
paths:
  /orders/{order_id}:
    get:
      summary: 查询订单状态
      description: 根据订单号查询订单的当前状态和物流信息
      parameters:
        - name: order_id
          in: path
          required: true
          schema:
            type: string
          description: 订单编号，如 A12345
      responses:
        '200':
          description: 订单信息
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    description: 订单状态
                  tracking_number:
                    type: string
                    description: 快递单号
```

::: tip 不会写 OpenAPI？
让 AI 帮你写。把你的 API 接口说明（URL、参数、返回值）告诉 ChatGPT 或豆包，让它帮你生成 OpenAPI 格式的文档。
:::

**第二步：在 Dify 中导入**

1. 进入 Dify 后台 → "工具" → "自定义工具"
2. 粘贴 OpenAPI 文档（或输入 URL）
3. Dify 自动解析出接口的参数和功能
4. 配置认证方式（API Key 或无认证）
5. 测试接口连通性

**第三步：绑定到 Agent**

1. 创建 Agent 应用
2. 在"工具"列表中勾选你刚创建的自定义工具
3. Agent 自动获得调用这个 API 的能力

来源：[Dify 自定义工具文档](https://legacy-docs.dify.ai/guides/tools)

### Dify 的内置工具

Dify 自带 50+ 工具，开箱即用：

| 类别 | 工具 |
|------|------|
| 搜索 | Google Search、Bing、DuckDuckGo |
| 图片 | DALL-E、Stable Diffusion |
| 数学 | WolframAlpha |
| 网页 | 网页抓取、URL 解析 |
| 代码 | 代码解释器 |
| 存储 | 向量数据库查询 |

### Dify vs 扣子怎么选

| | 扣子 (Coze) | Dify |
|--|------------|------|
| **零代码** | 完全支持 | 需要准备 API 文档 |
| **数据安全** | 数据在字节服务器 | 可以自部署，数据在自己手里 |
| **Skill 生态** | 有 Skill 商店 | 内置 50+ 工具 |
| **适合** | 快速验证、个人/小团队 | 企业正式部署 |
| **MCP 支持** | 部分支持 | 支持 |

---

## 方案三：用代码搭建（技术团队）

如果你有开发团队，可以直接调用 API 创建更灵活的 Skill。

### OpenAI Function Calling

```python
# 定义 Skill
tools = [{
    "type": "function",
    "name": "query_order",
    "description": "查询订单状态和物流信息。当用户询问订单进度、物流状态时使用。",
    "parameters": {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "订单编号，格式如 A12345"
            }
        },
        "required": ["order_id"],
        "additionalProperties": False
    },
    "strict": True
}]

# 调用 Agent
response = client.responses.create(
    model="gpt-4.1",
    input="我的订单 A12345 到哪了？",
    tools=tools
)

# Agent 会返回：调用 query_order，参数 order_id="A12345"
# 你的代码执行查询，把结果返回给 Agent
```

来源：[OpenAI Function Calling](https://developers.openai.com/api/docs/guides/function-calling)

**关键配置**：
- `strict: True` — 保证 Agent 严格按照参数格式调用，不会瞎填
- `tool_choice: "auto"` — Agent 自己判断该不该用工具（默认）
- `tool_choice: "required"` — 强制 Agent 必须用工具

### Anthropic Tool Use

```python
# 定义 Skill
tools = [{
    "name": "query_order",
    "description": "查询订单状态和物流信息。当用户询问订单进度、物流状态时使用。不支持查询已取消的订单，已取消订单请用 query_cancelled_orders。",
    "input_schema": {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "订单编号，格式如 A12345"
            }
        },
        "required": ["order_id"]
    }
}]

# 调用
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "我的订单 A12345 到哪了？"}]
)
```

来源：[Anthropic Tool Use](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)

### LangChain（Python）

```python
from langchain.tools import tool

@tool
def query_order(order_id: str) -> str:
    """查询订单状态和物流信息。
    当用户询问订单进度、物流状态时使用。

    Args:
        order_id: 订单编号，格式如 A12345
    """
    # 你的查询逻辑
    result = your_order_system.query(order_id)
    return f"订单 {order_id}：{result.status}，快递 {result.tracking}"
```

来源：[LangChain Tools](https://docs.langchain.com/oss/python/langchain/tools)

---

## 搭建完成后的检查清单

不管用哪个平台，Skill 上线前检查这些：

| 检查项 | 怎么检查 |
|--------|---------|
| Agent 能正确识别什么时候该用这个 Skill 吗？ | 测试 10 种不同的问法 |
| 参数填错了会怎样？ | 故意输入错误参数，看报错是否合理 |
| API 超时了会怎样？ | 模拟网络延迟，看 Agent 如何处理 |
| 返回结果太多会怎样？ | 测试大数据量场景 |
| 敏感操作有拦截吗？ | 尝试让 Agent 做越权操作 |
| 成本可控吗？ | 检查单次调用成本，设置每日上限 |

::: tip 最重要的一条
**多测试不同的问法。** 用户不会按你想象的方式说话。"查快递""我的东西到哪了""帮我看看物流"——这些都应该触发同一个 Skill。如果有的问法触发不了，回去改 Skill 描述。
:::

## 一句话总结

> **零代码用扣子，要安全用 Dify，要灵活写代码。先从最简单的开始，验证有效了再升级方案。**

下一篇：[实战案例](/agent-skills/cases) — 电商、客服、内容、财务场景的真实 Skill 设计。
