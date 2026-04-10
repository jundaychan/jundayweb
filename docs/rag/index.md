# RAG 知识库：让 AI 用你的数据回答问题

> AI 很聪明，但它不知道你公司的产品手册、退货政策和内部流程。RAG 就是把你的数据"喂"给 AI 的标准方法。

## 什么是 RAG

**RAG**（Retrieval-Augmented Generation，检索增强生成）= 先从你的数据里找到相关内容，再让 AI 基于这些内容回答问题。

```
用户问："这款面霜的保质期是多久？"
  ↓
① 从你的产品知识库中检索相关文档
  ↓
② 找到：产品手册第3页 — "保质期36个月，开封后12个月"
  ↓
③ AI 基于检索结果回答："这款面霜保质期是36个月，开封后建议12个月内用完。"
```

**没有 RAG 的 AI**：靠自己的训练数据瞎猜，经常编造信息（"幻觉"问题）。

**有 RAG 的 AI**：基于你的真实数据回答，准确率大幅提升。

---

## 为什么需要 RAG

| 场景 | 没有 RAG | 有 RAG |
|------|---------|--------|
| 客户问产品信息 | AI 编造参数 | 从产品手册中精确回答 |
| 员工查内部政策 | AI 说"我不了解你们公司" | 从员工手册中找到答案 |
| 老板问销售数据 | AI 说"我没有这个数据" | 从报表中检索并分析 |

**行业数据**：

> Anthropic 的 Contextual Retrieval 技术使 RAG 检索失败率降低了 **67%**。这意味着 RAG 不只是"能用"，而是已经进入了"好用"的阶段。
>
> — [Anthropic: Introducing Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval)

---

## RAG 的工作原理

### 五步流水线

```
你的文档（PDF、Word、网页、Excel）
  ↓
① 文档切片（Chunking）— 把长文档切成小段
  ↓
② 向量化（Embedding）— 把文字变成数字，方便计算机理解语义
  ↓
③ 存入向量数据库 — 建立可检索的知识库
  ↓
④ 用户提问 → 语义检索 — 从知识库中找到最相关的几段内容
  ↓
⑤ AI 生成回答 — 基于检索到的内容，用自然语言回答
```

**类比**：RAG 就像你的助理。你把所有资料交给助理，客户问问题时，助理先翻资料找到相关内容，再组织语言回答——而不是凭记忆瞎说。

### 每一步的关键

| 步骤 | 做什么 | 做不好会怎样 |
|------|--------|-------------|
| **切片** | 把文档切成 200-500 字的小段 | 切太大→检索不精准；切太小→丢失上下文 |
| **向量化** | 用 Embedding 模型把文字转成向量 | 模型选不好→语义理解差，检索不准 |
| **存储** | 存入向量数据库（如 Milvus、Weaviate） | 数据库选不好→检索慢、容量不够 |
| **检索** | 根据用户问题找最相关的段落 | 返回太少→信息不全；返回太多→AI 被噪音干扰 |
| **生成** | AI 基于检索结果回答 | 不加约束→AI 还是会编造 |

---

## 平台选择：从零代码到自部署

### 零代码平台（推荐起步）

| 平台 | 特点 | 中国可用 | 成本 |
|------|------|---------|------|
| **阿里百炼** | 阿里云一站式 RAG，5 种切片模式，Embedding 直接用 | 原生 | 按量付费（Embedding 约 ¥2.5/万页） |
| **百度千帆** | 百度智能云 RAG，支持文心大模型 | 原生 | 按量付费 |
| **Coze（扣子）** | 字节跳动，拖拽式知识库 + Bot | 原生 | 免费起步 |

### 开源自部署平台

| 平台 | GitHub Stars | 特点 | 适合谁 |
|------|-------------|------|--------|
| **[Dify](https://github.com/langgenius/dify)** | 137K+ | 最全面，支持 RAG + Agent + 工作流 | 有技术团队，要全功能 |
| **[RAGFlow](https://github.com/infiniflow/ragflow)** | 77.6K+ | 专注 RAG，深度文档理解（表格、图片） | 文档多、格式复杂 |
| **[FastGPT](https://github.com/labring/FastGPT)** | 27.7K+ | 轻量快速，知识库 + 工作流 | 快速上线，中小团队 |
| **[MaxKB](https://github.com/1Panel-dev/MaxKB)** | 20.7K+ | 最简单，开箱即用 | 非技术人员自部署 |

### 怎么选

```
不想部署、数据不敏感 → 阿里百炼 / Coze
  → 5 分钟建好知识库

数据必须留在自己手里 → Dify / RAGFlow 自部署
  → 需要 Docker 环境，半天搞定

文档格式复杂（表格、图片多）→ RAGFlow
  → 深度文档解析能力最强

要 RAG + Agent + 工作流全套 → Dify
  → 一个平台搞定所有
```

---

## 三篇文章，三个阶段

| 篇目 | 解决什么问题 |
|------|-------------|
| [RAG 是什么](/rag/index)（本篇） | 理解原理、选对平台 |
| [搭建知识库](/rag/build) | 从上传文档到能回答问题，手把手 |
| [优化和排错](/rag/optimize) | 回答不准怎么办？成本怎么控制？ |

## 在学习路径中的位置

```
对话 → 工具 → Skill → MCP → 【知识库 RAG】→ Agent → 系统运营
                                  ↑ 你在这里
```

RAG 是让 Agent "有记忆"的关键。没有 RAG，Agent 只能聊通用话题；有了 RAG，Agent 才能聊你的业务。

::: info 来源
- [Anthropic: Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval)
- [Dify 官方文档](https://docs.dify.ai)
- [RAGFlow GitHub](https://github.com/infiniflow/ragflow)
- [FastGPT GitHub](https://github.com/labring/FastGPT)
- [MaxKB GitHub](https://github.com/1Panel-dev/MaxKB)
- [阿里百炼文档](https://help.aliyun.com/zh/model-studio/)
:::
