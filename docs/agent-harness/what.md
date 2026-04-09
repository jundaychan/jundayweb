# Agent Harness 的核心组件

> 一个生产级的 Agent Harness 包含 11 个核心组件。你不需要全部自己搭，但必须知道一个完整方案应该有什么。

## 11 个核心组件一览

| # | 组件 | 一句话解释 | 没有会怎样 |
|---|------|----------|-----------|
| 1 | 编排循环 | Agent 的"工作循环" | Agent 不知道该做什么 |
| 2 | 工具管理 | Agent 能调用的"工具箱" | Agent 只能说不能做 |
| 3 | 记忆系统 | Agent 的"笔记本" | 每次对话都从零开始 |
| 4 | 上下文管理 | 管理 Agent 的"注意力" | 信息太多，Agent 犯迷糊 |
| 5 | 提示词构建 | 组装 Agent 每次收到的指令 | Agent 不知道自己是谁、该干嘛 |
| 6 | 输出解析 | 理解 Agent 的回复 | Agent 说了但系统听不懂 |
| 7 | 状态管理 | 记录"做到哪了" | 中断后无法恢复 |
| 8 | 错误处理 | 出错时怎么办 | 一个错误就全崩 |
| 9 | 安全护栏 | 哪些能做哪些不能做 | Agent 乱操作，造成损失 |
| 10 | 验证循环 | 检查 Agent 做得对不对 | 输出质量无法保证 |
| 11 | 子 Agent 编排 | 多个 Agent 如何协作 | 复杂任务无法拆分执行 |

下面逐个讲清楚。

---

## 1. 编排循环（Orchestration Loop）

**是什么**：Agent 工作的基本节奏——思考 → 行动 → 观察结果 → 再思考。

```
思考：我需要查一下这个订单的状态
  ↓
行动：调用订单查询工具
  ↓
观察：订单状态是"已发货"
  ↓
思考：客户问的是物流信息，我还需要查快递单号
  ↓
行动：调用物流查询工具
  ↓
观察：快递单号是 SF123456
  ↓
思考：信息齐了，可以回复客户了
  ↓
回复客户
```

这叫 **TAO 循环**（Thought-Action-Observation），是几乎所有 Agent 的基础运行方式。

---

## 2. 工具管理（Tools）

**是什么**：Agent 能调用的外部能力——查数据库、发邮件、操作系统等。

**关键设计原则**（来自 Anthropic 和 Vercel 的实践）：

| 原则 | 说明 |
|------|------|
| **少即是多** | Vercel 砍掉 80% 工具后 Agent 表现更好。超过 10 个重叠工具，Agent 就犯选择困难 |
| **防呆设计** | 让 Agent 更难犯错。比如：用绝对路径不用相对路径，参数必填不是选填 |
| **描述即提示词** | 工具的说明文档要写得像提示词一样精确，包含使用示例和边界情况 |
| **沙箱执行** | 工具执行要在隔离环境中，防止 Agent 误操作影响生产系统 |

---

## 3. 记忆系统（Memory）

**是什么**：让 Agent 记住重要信息，不是每次都从零开始。

Anthropic 的实践中总结了三层记忆：

| 层级 | 存什么 | 怎么存 | 类比 |
|------|--------|--------|------|
| **短期记忆** | 当前对话内容 | 上下文窗口 | 你正在开的会 |
| **工作记忆** | 当前任务进度 | 进度文件（如 progress.txt） | 你的待办清单 |
| **长期记忆** | 跨任务的经验 | 外部数据库 | 你的工作笔记 |

**Anthropic 的实战经验**：

> 用 JSON 格式记录进度比 Markdown 更靠谱——模型破坏 JSON 结构的概率比破坏 Markdown 低得多。

来源：[Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

**老板怎么理解**：就像新员工入职，你不能让他每天上班都忘了前一天做过什么。记忆系统就是 Agent 的工作交接文档。

---

## 4. 上下文管理（Context Management）

**是什么**：管理 Agent "能看到"的信息量。AI 的注意力是有限的，塞太多信息反而做不好。

Anthropic 把这叫 **上下文工程**（Context Engineering），是 2026 年提示工程的进阶版。

**核心发现**：

> "随着 token 数量增加，模型的回忆准确率下降。一个 10 步流程，即使每步 99% 准确，端到端只有约 90.4% 的成功率。"
>
> — [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

**4 种管理技巧**：

| 技巧 | 做法 | 类比 |
|------|------|------|
| **按需检索** | 不预加载所有信息，需要时再查 | 不把整个图书馆搬到办公桌上，需要时去查 |
| **渐进式发现** | 先给概要，Agent 自己决定要看哪些细节 | 先看目录，再翻需要的章节 |
| **压缩** | 定期总结对话历史，丢掉冗余内容 | 会议纪要只记关键决定，不记所有发言 |
| **子 Agent 代理** | 把探索性工作交给子 Agent，只收结论 | 让助理去调研，给你一页总结 |

**黄金原则**：

> "找到最小的、高信号的 token 集合，最大化输出质量。"

---

## 5. 提示词构建（Prompt Construction）

**是什么**：每次 Agent 运行时，组装它收到的完整指令。

一个完整的提示词是分层组装的：

```
系统提示词（你是谁、你的规则）
    ↓
工具定义（你能用什么工具）
    ↓
记忆内容（你之前做过什么）
    ↓
对话历史（用户说了什么）
    ↓
当前用户消息
```

**Anthropic 的建议**：

> "用最强的模型 + 最少的指令开始，根据观察到的失败模式再逐步添加指令。"

不要一开始就写一个 5000 字的系统提示词。先简单试，看 Agent 在哪犯错，再针对性补充。

---

## 6. 输出解析（Output Parsing）

**是什么**：把 Agent 的回复转换成系统能理解的格式。

**推荐做法**：用模型原生的工具调用（Tool Use）功能，而不是让 Agent 输出自由文本再用正则表达式解析。

| 方式 | 可靠性 | 推荐度 |
|------|--------|--------|
| 原生工具调用（Tool Use） | 高 | 推荐 |
| 结构化输出（JSON Schema） | 高 | 推荐 |
| 自由文本 + 正则解析 | 低 | 不推荐 |

---

## 7. 状态管理（State Management）

**是什么**：记录 Agent 当前"做到哪了"，支持中断后恢复。

**为什么重要**：真实环境中，Agent 会因为各种原因中断——API 超时、网络断开、预算耗尽。没有状态管理，之前的工作全部白费。

**关键能力**：

| 能力 | 说明 |
|------|------|
| **断点续传** | 从中断的地方继续，不用从头开始 |
| **时间旅行** | 能回退到之前的某个状态，适合调试 |
| **状态检查** | 随时能查看 Agent 当前在做什么 |

LangGraph 用**有状态图 + 检查点**的方式实现这一点，每个步骤都自动保存状态。

**老板怎么理解**：就像 Word 的自动保存——电脑突然关机了，打开文件还能接着写，不用从空白文档重新开始。

---

## 8. 错误处理（Error Handling）

**是什么**：Agent 出错时，系统知道怎么应对。

业界共识把错误分成 **4 类**，每类处理方式不同：

| 错误类型 | 举例 | 处理方式 |
|---------|------|---------|
| **临时故障** | API 超时、网络波动 | 自动重试（指数退避） |
| **AI 可修复** | 工具调用参数格式不对 | 把错误信息告诉 AI，让它修正 |
| **需要人工** | 操作权限不够、信息不确定 | 暂停，请求人工介入 |
| **未知错误** | 系统级异常 | 记录日志，通知管理员，安全终止 |

::: warning 死循环是最常见的问题
Agent 最容易犯的错误是陷入死循环——反复做同一件事、反复犯同一个错。必须设定：
- **最大重试次数**
- **最大运行时间**
- **最大 API 调用预算**

超过任何一个上限就强制停止。
:::

---

## 9. 安全护栏（Guardrails）

**是什么**：限制 Agent 能做什么、不能做什么。

三层护栏：

| 层级 | 检查点 | 做什么 |
|------|--------|--------|
| **输入护栏** | 用户的请求进来时 | 过滤恶意指令、注入攻击 |
| **工具护栏** | Agent 要调用工具时 | 检查权限、审批敏感操作 |
| **输出护栏** | Agent 要回复用户时 | 过滤敏感信息、检查合规性 |

**实际案例**：Claude Code 对约 40 种不同的操作能力设置了独立的信任等级和用户确认机制。高风险操作（如删除文件、修改数据）必须用户明确授权。

**老板怎么理解**：就像银行的权限管理——柜员可以查余额，但转大额必须主管审批，修改系统必须技术总监授权。

---

## 10. 验证循环（Verification Loops）

**是什么**：检查 Agent 的输出质量，不达标就重做。

三种验证方式，质量提升 2-3 倍：

| 方式 | 做法 | 适合 |
|------|------|------|
| **规则验证** | 用测试用例、代码检查工具自动验证 | 有明确正确标准的任务 |
| **视觉验证** | 用浏览器自动化像真人一样操作测试 | 需要检查界面效果的任务 |
| **AI 评审** | 用另一个 AI 来评估质量 | 没有明确标准的创意类任务 |

**Anthropic 的关键发现**：

> 用 Puppeteer/Playwright 做浏览器自动化测试——让 Agent "像用户一样"操作——比只跑单元测试效果好得多。

来源：[Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

---

## 11. 子 Agent 编排（Sub-Agent Orchestration）

**是什么**：多个 Agent 之间如何分工协作。

三种模式：

| 模式 | 做法 | 类比 |
|------|------|------|
| **Fork（分叉）** | 复制父 Agent 的上下文给子 Agent | 复印一份文件给同事参考 |
| **Teammate（队友）** | 独立运行，通过文件交流 | 同事之间通过共享文档协作 |
| **Worktree（工作树）** | 在隔离环境中工作，互不影响 | 每个人在自己的独立工位上干活 |

**子 Agent 的核心价值**：

> "子 Agent 可以消耗数万 token 做深入探索，但只返回 1000-2000 token 的精炼结论。"
>
> — [Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

这解决了上下文管理的核心矛盾：需要大量信息来做决定，但主 Agent 的注意力有限。

---

## 一个完整的电商客服 Harness 长什么样

把 11 个组件套到一个电商客服场景里：

```
客户消息进来
  ↓
[输入护栏] 过滤恶意内容
  ↓
[提示词构建] 组装：系统规则 + 产品知识库 + 对话历史
  ↓
[编排循环] Agent 思考 → 决定行动
  ├── 需要查订单 → [工具管理] 调用订单系统
  ├── 需要查物流 → [工具管理] 调用物流API
  ├── 需要退款   → [安全护栏] 提交人工审批
  └── 可以直接答 → 生成回复
  ↓
[输出解析] 结构化处理回复内容
  ↓
[输出护栏] 检查是否泄露敏感信息
  ↓
[验证循环] 检查回复质量（是否回答了问题、语气是否合适）
  ↓
[状态管理] 保存对话状态（断了可以接上）
  ↓
[记忆系统] 更新客户画像（VIP 客户下次优先）
  ↓
回复客户

[上下文管理] 全程控制信息量，对话太长自动压缩
[错误处理] 任何环节出错都有备案
[子Agent] 复杂问题拆给专家Agent处理
```

## 老板需要记住的 3 件事

### 1. 不需要全部自己搭

上面 11 个组件，很多框架（OpenAI Agents SDK、LangGraph、Microsoft Agent Framework）已经帮你做了大部分。你的技术团队需要做的是：选对框架 + 配置好业务规则。

### 2. 先做好错误处理和安全护栏

如果预算有限，优先保证两件事：
- **出错了不会造成损失**（错误处理）
- **Agent 不会做不该做的事**（安全护栏）

这两个是底线，其他的可以后面慢慢加。

### 3. Harness 要跟着模型一起进化

Anthropic 说得很直白：

> "Harness 的每个组件都编码了对模型局限性的假设。随着模型变强，要定期测试哪些部分还有必要存在。"

今天需要的复杂机制，明年可能因为模型变强而不再需要。不要一次搭好就不管了，定期瘦身。

## 系列总结

| 篇目 | 核心要点 |
|------|---------|
| [为什么要懂](/agent-harness/why) | Harness 比模型更重要，Demo 和生产是两码事 |
| [怎么搭建](/agent-harness/how) | 5 种模式从简单到复杂，能简单就别复杂 |
| [核心组件](/agent-harness/what)（本篇） | 11 个组件，优先保证错误处理和安全护栏 |

::: info 全部来源
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
- [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Anthropic: Harness Design for Long-Running Apps](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Anthropic: Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/)
- [LangGraph](https://www.langchain.com/langgraph)
:::
