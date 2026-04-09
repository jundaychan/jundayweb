# Agent Skills 实战案例

> 光讲理论没用，这篇直接给你看：不同行业都在用什么 Skills，效果如何，怎么做的。

## 案例一：电商客服 Agent

### 背景

一个中等规模的电商公司，每天处理 500+ 客户咨询，3 个客服忙不过来。

### Skill 清单

| Skill 名称 | 功能 | 风险等级 |
|------------|------|---------|
| `query_order` | 查订单状态和物流 | 低（只读） |
| `query_product` | 查商品信息（价格、库存、规格） | 低（只读） |
| `search_faq` | 搜索常见问题知识库 | 低（只读） |
| `submit_return` | 提交退换货申请 | 中（需确认） |
| `apply_refund` | 申请退款 | 高（需人工审批） |
| `escalate_to_human` | 转人工客服 | 低 |

### Skill 设计详情

以 `query_order` 为例：

```
名称：query_order
描述：查询客户订单的当前状态、支付情况和物流信息。
     当用户询问"我的订单到哪了""快递什么时候到""订单状态"等问题时使用。
     需要订单号或手机号中的至少一个。
     如果用户没提供订单号，先问他要。
     注意：只返回最近30天的订单，更早的订单请引导用户联系人工。

参数：
  - order_id（选填）：订单编号
  - phone（选填）：下单手机号
  至少提供一个

返回：
  - order_id：订单号
  - status：待付款/已付款/已发货/已签收
  - tracking：快递公司 + 单号 + 最新状态
  - eta：预计送达时间
```

### 效果数据

根据行业公开案例（晓多科技、Snow DTC 品牌等）：

| 指标 | 上线前 | 上线后 |
|------|--------|--------|
| 人工处理量 | 500条/天 | 100条/天（Agent 处理 80%） |
| 平均响应时间 | 3-5 分钟 | 10 秒内 |
| 客户满意度 | 85% | 90%+ |
| 客服人力成本 | 3 人 | 1 人 + Agent |

来源：晓多科技客服效率提升 45%、Snow DTC 品牌 98.34% 自动处理率

---

## 案例二：电商运营 Agent

### 背景

电商运营团队每天要处理大量重复性工作：写商品标题、分析竞品、生成推广文案。

### Skill 清单

| Skill 名称 | 功能 | 类型 |
|------------|------|------|
| `generate_product_title` | 根据商品信息生成多版本标题 | 生成类 |
| `generate_xiaohongshu_post` | 生成小红书种草文案 | 生成类 |
| `analyze_reviews` | 分析商品评价（情感 + 关键词提取） | 分析类 |
| `competitor_price_check` | 查询竞品价格 | 查询类 |
| `check_compliance` | 检查文案是否违反平台规则 | 审核类 |

### Skill 设计详情

以 `generate_product_title` 为例（使用"生成器"模式）：

```
名称：generate_product_title
描述：根据商品信息批量生成电商平台标题。
     生成5个不同风格的标题供运营选择。
     每个标题控制在30字以内，包含核心关键词。
     当用户说"帮我写标题""优化标题""生成商品名"时使用。

参数：
  - product_name（必填）：商品名称
  - category（必填）：商品类目
  - selling_points（必填）：核心卖点，最多3个
  - platform（选填）：目标平台（淘宝/京东/拼多多/抖音），默认淘宝
  - keywords（选填）：必须包含的关键词

返回：
  - titles：5个标题方案
  - keywords_used：每个标题使用的关键词
  - char_count：每个标题的字数
```

以 `check_compliance` 为例（使用"审核员"模式）：

```
名称：check_compliance
描述：检查电商文案是否违反广告法和平台规则。
     检查项：极限用语（最好、第一、全网最低价等）、
     虚假宣传、功效承诺（护肤品不能说"美白"等医疗用语）。
     当文案写好后、发布前使用。

参数：
  - content（必填）：待检查的文案内容
  - platform（选填）：目标平台
  - category（选填）：商品类目（影响检查规则）

返回：
  - passed：是否通过（true/false）
  - issues：问题列表
    - severity：严重/警告/建议
    - text：问题原文
    - reason：违反了什么规则
    - suggestion：修改建议
```

### 效果

| 任务 | 人工耗时 | Agent + Skills | 节省 |
|------|---------|---------------|------|
| 写 1 个商品标题 | 15 分钟 | 1 分钟出 5 个 | 90%+ |
| 写 1 篇小红书文案 | 30 分钟 | 2 分钟 | 90%+ |
| 分析 100 条评价 | 2 小时 | 5 分钟 | 95% |
| 合规审核 1 篇文案 | 10 分钟 | 10 秒 | 98% |

---

## 案例三：知识付费内容 Agent

### 背景

知识付费创业者需要持续产出内容：课程脚本、推广文案、社群答疑。

### Skill 清单

| Skill 名称 | 功能 | 类型 |
|------------|------|------|
| `generate_course_outline` | 根据主题生成课程大纲 | 生成类 |
| `expand_script` | 把大纲展开成逐字稿 | 生成类 |
| `search_knowledge_base` | 搜索课程知识库回答学员问题 | 查询类 |
| `generate_social_post` | 生成不同平台的推广文案 | 生成类 |
| `review_script` | 审核脚本质量（逻辑性、通俗性） | 审核类 |

### Skill 设计详情

以 `search_knowledge_base` 为例（用于学员自动答疑）：

```
名称：search_knowledge_base
描述：在课程知识库中搜索与学员问题相关的内容。
     知识库包含：课程讲义、常见问题、补充资料。
     当学员提问时使用此技能查找答案。
     如果知识库中没有找到相关内容，明确告知学员
     "这个问题超出了课程范围，建议咨询老师"，
     不要编造答案。

参数：
  - question（必填）：学员的问题
  - course_id（选填）：具体课程编号，不填则搜索全部课程

返回：
  - found：是否找到相关内容（true/false）
  - answer：从知识库中找到的答案
  - source：答案来源（课程名 + 章节）
  - confidence：相关度评分（高/中/低）
```

**关键设计**：明确告诉 Agent "找不到就说找不到"，防止 Agent 编造答案误导学员。

### 效果

| 场景 | 上线前 | 上线后 |
|------|--------|--------|
| 课程脚本初稿 | 讲师写 1 天 | Agent 生成 → 讲师改 2 小时 |
| 学员答疑 | 助教每天 3 小时 | Agent 自动处理 70%，助教 1 小时 |
| 推广文案 | 每条 30 分钟 | 每条 2 分钟 |

---

## 案例四：财务审核 Agent

### 背景

中小企业每月处理大量发票和报销单，财务人员花大量时间在审核上。

### Skill 清单

| Skill 名称 | 功能 | 风险等级 |
|------------|------|---------|
| `extract_invoice_info` | 从发票图片/PDF 中提取关键信息 | 低（只读） |
| `check_invoice_validity` | 验证发票真伪和合规性 | 低（只读） |
| `match_invoice_to_order` | 发票与订单金额匹配 | 低（只读） |
| `flag_anomaly` | 标记异常（金额超标、重复报销等） | 中 |
| `approve_reimbursement` | 审批报销（小额自动，大额转人工） | 高 |

### 效果数据

根据行业案例：

| 指标 | 人工处理 | Agent + Skills |
|------|---------|---------------|
| 发票处理速度 | 3-5 张/小时 | 20-30 张/小时 |
| 准确率 | 95%（人工疲劳后下降） | 98% |
| 错误率 | 5-8% | 2-3% |
| 处理周期 | 48 小时 | 4 小时 |

来源：行业报告数据，具体数字因企业规模而异

---

## 通用 Skill 推荐清单

不管什么行业，这些 Skill 几乎每个企业都用得上：

### 必备 Skills

| Skill | 用途 | 推荐优先级 |
|-------|------|-----------|
| **知识库搜索** | 基于企业文档回答问题 | 第一个做 |
| **数据查询** | 连接业务数据库查数据 | 第二个做 |
| **内容生成** | 按模板生成标准化内容 | 第三个做 |
| **合规审核** | 检查内容是否合规 | 有内容发布需求就做 |
| **转人工** | 处理不了时转交人工 | 必须有 |

### 按行业补充

| 行业 | 额外推荐 |
|------|---------|
| **电商** | 订单查询、物流追踪、退换货处理、竞品分析 |
| **知识付费** | 课程推荐、学习进度查询、作业批改 |
| **餐饮** | 菜单查询、预订管理、会员积分 |
| **房产** | 房源搜索、预约看房、贷款计算 |
| **医疗** | 预约挂号、报告解读、用药提醒 |

---

## 从零开始的行动计划

```
第 1 周：选平台 + 做第一个 Skill
├── 选扣子（零代码）或 Dify（可自部署）
├── 做一个"知识库搜索"Skill（最简单、最有用）
└── 内部测试

第 2 周：扩展到 3-5 个 Skills
├── 根据业务需求添加 Skill
├── 测试不同问法的识别准确率
└── 调整 Skill 描述

第 3-4 周：上线 + 监控
├── 小范围上线（先给内部用或部分客户）
├── 监控 Skill 调用成功率
├── 收集用户反馈
└── 持续优化

第 2 个月：扩展
├── 增加更多 Skills
├── 对接更多业务系统
└── 考虑从扣子迁移到 Dify 自部署（如果数据安全要求高）
```

::: tip 最重要的一步
**先做一个，用起来。** 不要花两个月做计划，今天就打开扣子，用一句话创建一个 Skill 试试。感受到效果了，后面的事情自然就推动起来了。
:::

## 系列总结

| 篇目 | 核心要点 |
|------|---------|
| [什么是 Agent Skills](/agent-skills/what) | Skill = Agent 的手艺，让 Agent 从聊天变成干活 |
| [如何设计好的 Skills](/agent-skills/design) | 6 条铁律 + 5 种设计模式，来自 Anthropic 和 OpenAI |
| [手把手搭建教程](/agent-skills/build) | 扣子零代码、Dify 低代码、API 写代码三种方案 |
| [实战案例](/agent-skills/cases)（本篇） | 4 个行业案例 + 通用 Skill 清单 + 行动计划 |

::: info 全部来源
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
- [Anthropic: Tool Use 文档](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- [OpenAI: Function Calling](https://developers.openai.com/api/docs/guides/function-calling)
- [Coze 2.0 技能系统](https://news.qq.com/rain/a/20260125A05ATZ00)
- [Dify 工具文档](https://legacy-docs.dify.ai/guides/tools)
- [Microsoft Copilot Studio](https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-plugin-actions)
- [MCP 协议规范](https://modelcontextprotocol.io/)
- [5 Agent Skill Design Patterns](https://lavinigam.com/posts/adk-skill-design-patterns/)
:::
