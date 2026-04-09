# 如何设计好的 Skills

> Skill 设计得好不好，直接决定 Agent 好不好用。Anthropic 说"我们在工具设计上花的时间比提示词还多"。

## 核心原则：6 条铁律

来自 Anthropic《Building Effective Agents》和 Tool Use 官方文档：

### 1. 描述要像给新员工写操作手册

Skill 的描述不是给你看的，是给 AI 看的。AI 完全靠描述来决定什么时候用、怎么用。

**反面例子**：
```
名称：search_orders
描述：搜索订单
```

**正面例子**：
```
名称：search_orders
描述：根据关键词搜索客户的历史订单。
当用户询问"我之前买过什么""帮我找一下之前的订单"时使用。
需要提供搜索关键词（商品名、日期范围等）。
注意：只能搜索已完成的订单，进行中的订单请用 get_active_orders。
每次最多返回 20 条结果。
```

> "目标是让工具的用法对模型来说显而易见。就像给初级开发者写文档一样——包含使用示例、边界情况、输入格式要求、与其他工具的边界。"
>
> — [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

### 2. Skill 越少越好

**Vercel 的教训**：他们的 v0 产品砍掉了 80% 的工具后，Agent 表现反而更好了。

**为什么？** 工具超过 10 个且功能有重叠时，Agent 就会"选择困难"——不知道该用哪个，经常选错。

| 工具数量 | Agent 表现 |
|---------|-----------|
| 5-10 个（精选） | 选择准确，很少出错 |
| 10-20 个 | 开始犯迷糊 |
| 20+ 个（功能重叠） | 经常选错工具 |

**Microsoft Copilot Studio 的建议**：单个 Agent 最多 128 个工具，推荐 25-30 个以内效果最佳。

来源：[Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-plugin-actions)

### 3. 合并功能相似的 Skill

**反面例子**：3 个独立的 Skill
```
create_github_pr
review_github_pr
merge_github_pr
```

**正面例子**：1 个 Skill + action 参数
```
名称：github_pr
参数：
  - action: "create" / "review" / "merge"
  - pr_id: PR 编号
  - content: 相关内容
```

这样 Agent 只需要学会一个工具，通过参数区分操作，不容易搞混。

来源：[Anthropic Tool Use 文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

### 4. 防呆设计（Poka-yoke）

让 Agent 想犯错都难。

| 问题 | 防呆设计 |
|------|---------|
| Agent 填了相对路径 `./data.csv` | 参数说明强制要求绝对路径 `/home/user/data.csv` |
| Agent 传了无效的状态码 | 用枚举限制可选值：`"pending" / "shipped" / "completed"` |
| Agent 少填了必填参数 | 把关键参数设为 required，不是 optional |
| Agent 填了你已经知道的信息 | 别让 AI 填——系统自己带上 |

> "修改参数设计让犯错变得更难。在我们的 SWE-bench Agent 中，要求使用绝对路径后，路径错误就完全消失了。"
>
> — [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

### 5. 返回结果要精炼

Skill 返回太多信息，Agent 会被信息淹没，反而做不好决策。

**反面例子**：查订单返回 50 个字段的完整数据库记录

**正面例子**：只返回 Agent 需要的信息
```json
{
  "order_id": "A12345",
  "status": "已发货",
  "tracking": "SF789",
  "eta": "明天到达"
}
```

> "返回只包含高信号信息的结果——用简短标识符而非模糊的 ID。"
>
> — [Anthropic Tool Use 文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools)

### 6. 用命名空间分组

当 Skill 较多时，用前缀分组，让 Agent 一眼看出哪些是同类：

```
order_query        （订单 - 查询）
order_refund       （订单 - 退款）
order_modify       （订单 - 修改）

logistics_track    （物流 - 追踪）
logistics_estimate （物流 - 预估）

crm_lookup         （客户 - 查询）
crm_update         （客户 - 更新）
```

来源：[OpenAI Function Calling 指南](https://developers.openai.com/api/docs/guides/function-calling)

---

## 5 种 Skill 设计模式

除了基础规则，业界总结了 5 种常用的 Skill 设计模式：

### 模式一：工具包装（Tool Wrapper）

**做什么**：把一个外部服务"包装"成 Agent 能用的 Skill，同时内置领域知识。

**例子**：把快递 100 的 API 包装成"查物流"Skill
- 输入：快递单号
- 内置：自动识别快递公司（顺丰 SF 开头、中通 ZT 开头...）
- 输出：物流状态 + 预计到达时间

**适合**：接入已有系统和 API。

### 模式二：生成器（Generator）

**做什么**：按固定模板生成结构化内容。

**例子**：商品描述生成器
- 输入：商品名称、核心卖点、目标人群
- 模板：标题（20 字内）+ 卖点（3 条）+ 场景描述 + 行动号召
- 输出：标准化的商品描述

**适合**：需要批量生成格式统一的内容。

### 模式三：审核员（Reviewer）

**做什么**：按检查清单评估内容质量。

**例子**：文案合规审核
- 输入：待审核的文案
- 检查项：是否有违禁词 / 是否有虚假宣传 / 是否符合平台规则
- 输出：通过/不通过 + 具体问题列表

**适合**：任何有明确标准的审核场景。

### 模式四：采访者（Inversion）

**做什么**：先问清楚需求，再开始干活。避免 Agent 在信息不足时瞎猜。

**例子**：活动策划 Skill
- 第一步：问目的（促销？品牌？新品发布？）
- 第二步：问预算范围
- 第三步：问目标人群
- 收集完毕后：生成策划方案

**适合**：需求不明确、需要收集上下文的任务。

### 模式五：流水线（Pipeline）

**做什么**：多步骤顺序执行，每步有校验。

**例子**：竞品分析流水线
```
抓取竞品数据 → 校验数据完整性
     ↓
分析价格策略 → 校验分析逻辑
     ↓
对比自家数据 → 校验对比合理性
     ↓
生成分析报告
```

**适合**：步骤有前后依赖、需要层层把关的任务。

来源：[5 Agent Skill Design Patterns](https://lavinigam.com/posts/adk-skill-design-patterns/)

---

## 错误处理：Skill 出错了怎么办

Skill 调用失败是常事——API 超时、参数错误、权限不足。关键是怎么处理。

### 4 种错误类型和处理方式

| 错误类型 | 举例 | 怎么处理 |
|---------|------|---------|
| **临时故障** | API 超时、网络抖动 | 自动重试 2-3 次（间隔递增） |
| **AI 可修复** | 参数格式不对、少填了字段 | 把错误信息返回给 Agent，让它自己改 |
| **需要人工** | 权限不够、信息不确定 | 暂停，问用户 |
| **未知错误** | 系统崩了 | 记录日志，通知管理员 |

**OpenAI 的建议**：

> "当工具执行失败时，把错误信息返回给模型——它通常能自己想出修复方法。"
>
> — [OpenAI Function Calling 指南](https://developers.openai.com/api/docs/guides/function-calling)

**Anthropic 的做法**：返回带 `is_error: true` 标记的结果和描述性错误信息，让 Agent 决定下一步。

---

## 安全：哪些 Skill 需要人工审批

不是所有 Skill 都能让 Agent 自己说了算。按风险等级分三档：

| 风险等级 | 举例 | 处理方式 |
|---------|------|---------|
| **低风险** | 查订单、查库存、查天气 | Agent 自主执行 |
| **中风险** | 发邮件、发消息、修改订单状态 | Agent 执行后通知人工 |
| **高风险** | 退款、删除数据、对外发布内容 | 必须人工确认后才执行 |

::: warning 底线原则
**能造成资金损失或数据丢失的操作，必须有人工审批环节。** 不管 Agent 多聪明，高风险操作不能完全自动化。

这不是技术限制，是管理常识。
:::

---

## 一句话总结

> **好的 Skill 设计 = 描述详细 + 数量精简 + 防呆设计 + 精炼返回 + 安全分级。** Anthropic 说"我们在工具设计上花的时间比提示词还多"——这不是夸张。

下一篇：[手把手搭建教程](/agent-skills/build) — 用扣子和 Dify 零代码创建你的第一个 Skill。
