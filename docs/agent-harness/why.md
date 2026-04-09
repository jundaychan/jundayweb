# 为什么你必须懂 Agent Harness

> Demo 跑得很好，上线就炸——90% 的 Agent 项目死在这一步。问题不在模型，在 Harness。

## 先搞清一件事：Agent 和 Harness 的关系

| | Agent（智能体） | Harness（框架） |
|--|--------------|---------------|
| 是什么 | 一个能自主决策的 AI | 管理这个 AI 的整套系统 |
| 类比 | 一个聪明的新员工 | 公司的管理制度 |
| 负责什么 | 思考、推理、做决定 | 错误处理、记忆管理、成本控制、质量监控 |
| 没有对方会怎样 | 有制度没人干活 | 有人干活但迟早出大问题 |

**Anthropic 的原话**：

> "模型负责推理，Harness 负责其他一切。"
>
> — [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

## 为什么 Demo 能跑但生产不行

### Agent 在真实环境的 4 种崩法

Anthropic 在实际项目中总结了 Agent 最常见的四种失败模式：

| 失败模式 | 表现 | 原因 |
|---------|------|------|
| **过早宣布完成** | Agent 做了 30% 就说"搞定了" | 没有明确的完成标准和验收机制 |
| **做到一半烂尾** | 功能实现了一半，另一半没做 | 上下文窗口耗尽，忘了前面在干嘛 |
| **交接出 Bug** | 每次重新开始都丢失之前的进度 | 没有持久化的状态记录 |
| **跳过测试** | 代码写了但没验证能不能用 | 没有强制的验证环节 |

来源：[Anthropic Engineering Blog](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

### 一个真实的对比

Anthropic 团队用同样的模型做了两次实验：

| | 没有 Harness | 有完整 Harness |
|--|-------------|---------------|
| 任务 | 做一个复古游戏 | 同样的复古游戏 |
| 时间 | 20 分钟 | 6 小时 |
| 成本 | $9 | $200 |
| 结果 | 功能残缺，大量 Bug | 完整可玩，多个高级功能 |

来源：[Anthropic《Harness Design for Long-Running Apps》](https://www.anthropic.com/engineering/harness-design-long-running-apps)

**结论**：不是模型不够强，是没有 Harness 管着它，Agent 根本无法完成复杂任务。

## Harness 比模型更重要的 3 个证据

### 证据一：Manus 的故事

Manus（2025 年火出圈的 AI Agent 产品）在六个月内重写了 **5 次 Harness**，模型一次都没换。每次重写 Harness，产品都变得更强。

**说明什么**：竞争力来自 Harness，不是模型。

### 证据二：LangChain 的排名飞跃

LangChain 团队在他们的深度研究产品上做了 **4 次架构迭代**，全程没换模型。结果：从 TerminalBench 2.0 排行榜 30 名开外直接冲到 **第 5 名**。

**说明什么**：同样的模型，换个 Harness 就是天壤之别。

### 证据三：Vercel 的减法哲学

Vercel 在他们的 v0 产品中做了一个反直觉的操作：**砍掉了 80% 的工具**。结果？Agent 表现反而更好了。

**说明什么**：Harness 设计不是堆功能，是做减法——给 Agent 更少的选择，它反而做得更好。

## 老板最关心的 5 个问题

### 1. "我不懂技术，需要懂 Harness 吗？"

**需要懂概念，不需要懂代码。** 就像你不需要会写会计软件，但你得知道财务管理制度应该包含什么。当技术团队或供应商给你做 Agent 方案时，你要能判断他们有没有做 Harness。

### 2. "怎么判断一个 Agent 方案靠不靠谱？"

问这 5 个问题（来自行业最佳实践）：

1. **出错了怎么办？** — 有没有错误重试和人工接管？
2. **长时间运行怎么保证一致？** — Agent 跑了 2 小时还记得最初目标吗？
3. **成本怎么控制？** — 有预算上限吗？简单任务用便宜模型、复杂任务用贵模型了吗？
4. **敏感操作怎么管？** — 退款、修改数据等操作有人工审批吗？
5. **怎么知道干得好不好？** — 有独立的质量评估还是 Agent 自己说自己好？

::: warning 自我评估不可信
Anthropic 明确发现：**Agent 自己评估自己的质量是不准的，存在系统性偏差。** 必须用独立的评估机制。
:::

### 3. "搭一个 Harness 要多久？"

业界共识：**Demo 几天，生产级 Harness 需要 6-12 个月。** 世界顶尖团队也是这个时间线。不要相信"两周上线 Agent"的承诺。

### 4. "Harness 会过时吗？"

**会，而且应该过时。** Anthropic 说得很直白：

> "Harness 的每个组件都编码了对模型局限性的假设。随着模型变强，要定期测试哪些组件还有存在的必要。"

他们的实际经验：当 Claude 从 Opus 4.5 升级到 Opus 4.6 后，之前需要的"冲刺合约"机制变得不必要了，单轮评估就够了。

### 5. "小企业也需要 Harness 吗？"

**看你的 Agent 用在哪。** Anthropic 的建议很务实：

> "从最简单的方案开始，只在确实能改善效果时才增加复杂度。"

- 用 AI 写文案 → 不需要 Harness，一个提示词就够
- 用 AI 做客服，要操作退款 → 必须有 Harness
- 用 AI 批量处理订单 → 必须有 Harness

**判断标准**：Agent 能不能造成不可逆的损失？能 → 必须有 Harness。

## 一句话总结

> **Agent 是员工，Harness 是管理制度。2026 年，模型能力在趋同，真正的竞争壁垒是谁的 Harness 做得更好。**

下一篇：[怎么搭建 Agent Harness](/agent-harness/how) — 5 种经过 Anthropic 验证的搭建模式。
