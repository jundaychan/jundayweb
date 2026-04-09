# Agent Skills 实战教程

> AI Agent 光有脑子不够，还得有"手艺"。Skills 就是你教给 Agent 的具体技能——查订单、发邮件、分析数据、生成报告。没有 Skills 的 Agent 只会聊天。

## 一个反直觉的事

所有人都觉得学 AI 的路径是：先学对话，再学工作流编排，然后才是高级的东西。听起来很合理对吧？但你真正上手之后会发现哪里不对——就像你知道这条路走不通，但一时说不出为什么。

后来我想明白了。

**写一个 Skill，本质就是把你脑子里"知道怎么做但从没写下来"的东西写成文档。** 一个十年经验的运营，她做活动方案的时候不会想"第一步做什么第二步做什么"，她是凭手感直接就出来了。这个手感，写成 Skill，AI 就有了。

**接一个 MCP，就是告诉 AI"你可以用这个工具，输入这个，输出那个"。** 边界清晰，确定性极高。

但工作流编排？你要处理的是：如果这步失败了怎么办？并发了怎么办？状态丢了怎么办？这些东西没有人能事先想全——你得撞过才知道。

所以真正的路径是：

```
对话 → 用现成能力 → 写自己的 Skill → 接 MCP → Agent → 系统构建
```

Polanyi 说过，**我们知道的永远比我们能说出来的多。** 写 Skill 就是在做这件事——把默会知识变成 AI 能用的显性知识。而工作流编排之所以难，恰恰因为它需要的那种"预判所有意外"的能力，本身就是最难言传的默会知识。

**一句话：声明"我会什么"比设计"该怎么做"简单。赋能比编排更有杠杆。**

## 这个系列讲什么

| 篇目 | 核心问题 | 适合谁 |
|------|---------|--------|
| [什么是 Agent Skills](/agent-skills/what) | Skills 到底是什么？跟 Agent 是什么关系？ | 所有人 |
| [如何设计好的 Skills](/agent-skills/design) | 5 种设计模式 + Anthropic/OpenAI 的最佳实践 | 技术负责人 |
| [手把手搭建教程](/agent-skills/build) | 用扣子和 Dify 零代码搭建 Skills | 想动手的人 |
| [实战案例](/agent-skills/cases) | 电商、客服、内容、财务的真实 Skills | 找灵感的人 |

## 一句话理解

> **Agent = 大脑，Skills = 手艺。** 大脑再聪明，不教它怎么查库存、怎么算价格、怎么回复客户，它就只能在那跟你聊天。

## 内容来源

| 来源 | 内容 |
|------|------|
| [Anthropic Tool Use 文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) | Skill 定义规范 + 设计最佳实践 |
| [Anthropic《Building Effective Agents》](https://www.anthropic.com/research/building-effective-agents) | 工具设计原则 + 防呆设计 |
| [OpenAI Function Calling](https://developers.openai.com/api/docs/guides/function-calling) | Skill Schema 标准 + 生产实践 |
| [Coze/扣子 2.0](https://www.coze.cn) | 零代码 Skill 创建 + Skill 商店 |
| [Dify.ai](https://dify.ai) | 开源 Agent 平台 + 自定义工具 |
| [Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/) | 企业级 Skill 管理 |
| [MCP 协议规范](https://modelcontextprotocol.io/) | Skill 互通的行业标准 |

从 [什么是 Agent Skills](/agent-skills/what) 开始。
