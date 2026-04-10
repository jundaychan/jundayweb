# 学习路线

> 从"AI是什么"到"用AI重构业务"，6个阶段、40+篇实战内容。核心洞察：**赋能比编排更有杠杆**——先给AI能力，再让它自己编排。

<style>
.roadmap-page { max-width: 860px; margin: 0 auto; }

.stage-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 28px 28px 20px;
  margin-bottom: 24px;
  background: var(--vp-c-bg-elv);
  position: relative;
  overflow: hidden;
}
.stage-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
}
.stage-1::before { background: linear-gradient(90deg, #c96442, #d97757); }
.stage-2::before { background: linear-gradient(90deg, #d97757, #e8a080); }
.stage-3::before { background: linear-gradient(90deg, #8b7355, #a89070); }
.stage-4::before { background: linear-gradient(90deg, #7a6b50, #9a8b70); }
.stage-5::before { background: linear-gradient(90deg, #5e5d59, #87867f); }
.stage-6::before { background: linear-gradient(90deg, #141413, #4d4c48); }

.stage-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.stage-num {
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}
.stage-1 .stage-num { background: #c96442; }
.stage-2 .stage-num { background: #d97757; }
.stage-3 .stage-num { background: #8b7355; }
.stage-4 .stage-num { background: #7a6b50; }
.stage-5 .stage-num { background: #5e5d59; }
.stage-6 .stage-num { background: #141413; }

.stage-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}
.stage-subtitle {
  font-size: 14px;
  color: var(--vp-c-text-3);
  margin: 0;
}
.stage-type {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 4px;
  margin-left: 8px;
  vertical-align: middle;
}
.type-declarative { background: rgba(201, 100, 66, 0.08); color: #c96442; }
.type-imperative { background: rgba(94, 93, 89, 0.1); color: #5e5d59; }

.stage-goal {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.stage-goal strong {
  color: var(--vp-c-text-1);
}

.stage-modules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
@media (max-width: 640px) {
  .stage-modules { grid-template-columns: 1fr; }
}
.module {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 14px 16px;
  transition: border-color 0.2s ease;
}
.module:hover {
  border-color: var(--vp-c-brand-2);
}
.module h4 {
  margin: 0 0 6px 0;
  font-size: 15px;
  font-weight: 600;
}
.module h4 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.module h4 a:hover {
  color: var(--vp-c-brand-1);
}
.module p {
  margin: 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
  line-height: 1.6;
}
.module .tag {
  display: inline-block;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-top: 6px;
  font-weight: 500;
}
.tag-s1 { background: rgba(201, 100, 66, 0.1); color: #c96442; }
.tag-s2 { background: rgba(217, 119, 87, 0.1); color: #d97757; }
.tag-s3 { background: rgba(139, 115, 85, 0.1); color: #8b7355; }
.tag-s4 { background: rgba(122, 107, 80, 0.1); color: #7a6b50; }
.tag-s5 { background: rgba(94, 93, 89, 0.1); color: #5e5d59; }
.tag-s6 { background: rgba(20, 20, 19, 0.1); color: #141413; }

.connector {
  display: flex;
  justify-content: center;
  padding: 4px 0;
  color: var(--vp-c-text-3);
  font-size: 24px;
  user-select: none;
}

.time-estimate {
  text-align: center;
  padding: 32px 0 16px;
  color: var(--vp-c-text-3);
  font-size: 14px;
}
.time-estimate strong {
  color: var(--vp-c-text-1);
}

.quick-start {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  margin: 32px 0;
  background: rgba(43, 94, 167, 0.03);
}
.quick-start h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.quick-start p {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
.quick-start .btn {
  display: inline-block;
  padding: 10px 24px;
  background: var(--vp-c-brand-1);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s, transform 0.2s;
}
.quick-start .btn:hover {
  background: #b85a3a;
  transform: translateY(-1px);
}

.persona-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  margin: 20px 0 32px;
}
@media (max-width: 640px) {
  .persona-grid { grid-template-columns: 1fr; }
}
.persona {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 16px;
  background: var(--vp-c-bg-elv);
}
.persona h4 {
  margin: 0 0 8px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.persona p {
  margin: 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.insight-box {
  background: #141413;
  border-radius: 14px;
  padding: 28px 30px;
  color: white;
  margin: 32px 0;
}
.insight-box h3 {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  letter-spacing: 0.08em;
  margin: 0 0 14px 0;
}
.insight-main {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 14px;
}
.insight-main em {
  font-style: normal;
  color: #d97757;
}
.insight-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
}

.compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
}
@media (max-width: 640px) {
  .compare { grid-template-columns: 1fr; }
}
.compare-card {
  border-radius: 12px;
  padding: 20px 22px;
}
.compare-left {
  background: rgba(201, 100, 66, 0.04);
  border: 1px solid rgba(201, 100, 66, 0.15);
}
.compare-right {
  background: rgba(94, 93, 89, 0.04);
  border: 1px solid rgba(94, 93, 89, 0.12);
}
.compare-card h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px 0;
}
.compare-left h4 { color: #c96442; }
.compare-right h4 { color: #5e5d59; }
.compare-card .desc {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin: 0 0 10px 0;
}
.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.compare-list li {
  font-size: 13px;
  color: var(--vp-c-text-2);
  padding: 3px 0;
  line-height: 1.5;
}

.divider-label {
  text-align: center;
  padding: 20px 0 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  letter-spacing: 0.1em;
}
</style>

<div class="roadmap-page">

## 你是谁，决定从哪开始

<div class="persona-grid">
  <div class="persona">
    <h4>完全不懂AI</h4>
    <p>从阶段1开始，花2小时建立认知。</p>
  </div>
  <div class="persona">
    <h4>用过ChatGPT</h4>
    <p>跳到阶段2选工具，或阶段3写Skill。</p>
  </div>
  <div class="persona">
    <h4>技术负责人</h4>
    <p>直接进阶段5搭Agent，或阶段6看体系。</p>
  </div>
</div>

---

<div class="stage-card stage-1">
  <div class="stage-header">
    <div class="stage-num">1</div>
    <div>
      <h3 class="stage-title">学会对话</h3>
      <p class="stage-subtitle">理解AI是什么，学会跟AI说话</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>用AI写一封专业的商务邮件、生成一份竞品分析报告、用提示词模板处理80%的日常文字工作。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/guide/what-is-ai">什么是 AI</a></h4>
      <p>一个类比就懂。AI不是机器人，是超级实习生。</p>
      <span class="tag tag-s1">起点</span>
    </div>
    <div class="module">
      <h4><a href="/guide/why-ai-matters">为什么企业要关注</a></h4>
      <p>Klarna砍40%人力、Shopify全员AI优先。数据说话。</p>
      <span class="tag tag-s1">起点</span>
    </div>
    <div class="module">
      <h4><a href="/guide/getting-started">如何开始AI转型</a></h4>
      <p>不要一上来就搞大项目。从一个痛点开始。</p>
      <span class="tag tag-s1">起点</span>
    </div>
    <div class="module">
      <h4><a href="/concepts/llm">大语言模型</a></h4>
      <p>Token、上下文窗口、Temperature——三个概念够用了。</p>
      <span class="tag tag-s1">核心概念</span>
    </div>
    <div class="module">
      <h4><a href="/concepts/prompt-engineering">提示工程</a></h4>
      <p>给AI下指令的技巧。角色设定、分步骤、给例子。</p>
      <span class="tag tag-s1">核心技能</span>
    </div>
    <div class="module">
      <h4><a href="/prompts/index">提示词模板库</a></h4>
      <p>来自GitHub 143K Star项目，翻译成中文，复制粘贴就能用。</p>
      <span class="tag tag-s1">直接抄</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-2">
  <div class="stage-header">
    <div class="stage-num">2</div>
    <div>
      <h3 class="stage-title">用现成能力</h3>
      <p class="stage-subtitle">选对工具，用AI处理实际业务</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>选出最适合你业务的AI工具（不花冤枉钱）、用AI出图/出视频/做客服、算清楚AI工具的ROI。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/tools/index">工具对比总览</a></h4>
      <p>一张表看清：价格、中国能不能用、适合什么场景。</p>
      <span class="tag tag-s2">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/writing">文字AI工具</a></h4>
      <p>豆包、通义千问、Kimi、ChatGPT、Claude 实测对比。</p>
      <span class="tag tag-s2">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/image">AI作图工具</a></h4>
      <p>即梦、通义万相、SD、Midjourney 横向对比。</p>
      <span class="tag tag-s2">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/video">AI视频工具</a></h4>
      <p>可灵、即梦视频、Runway、Pika 能力边界在哪。</p>
      <span class="tag tag-s2">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/service">AI客服工具</a></h4>
      <p>晓多AI、快商通、腾讯企点、科大讯飞对比。</p>
      <span class="tag tag-s2">实测</span>
    </div>
    <div class="module">
      <h4><a href="/models/index">模型选择指南</a></h4>
      <p>不同任务用不同模型。文字/图片/音频/视频怎么选。</p>
      <span class="tag tag-s2">决策</span>
    </div>
  </div>
</div>

<div class="divider-label">— 以下是反直觉的部分 —</div>

<div class="insight-box">
  <h3>核心洞察</h3>
  <div class="insight-main">
    大多数人以为下一步是学工作流编排。<br/>
    但实际上，<em>写Skill</em>和<em>接MCP</em>比工作流简单得多。<br/>
    声明"我会什么"比设计"该怎么做"简单。<em>赋能比编排更有杠杆。</em>
  </div>
  <div class="insight-sub">写Skill就是把你脑子里"知道怎么做但从没写下来"的经验写成文档——把默会知识变成AI能用的显性知识。而工作流编排之所以难，恰恰因为"预判所有意外"的能力本身就是最难言传的默会知识。</div>
</div>

<div class="compare">
  <div class="compare-card compare-left">
    <h4>赋能（声明式）← 先学这个</h4>
    <p class="desc">告诉AI"我会什么"</p>
    <ul class="compare-list">
      <li>写Skill = 写文档</li>
      <li>接MCP = 定义接口</li>
      <li>确定性高，边界清晰</li>
      <li>把默会知识变成AI能力</li>
    </ul>
  </div>
  <div class="compare-card compare-right">
    <h4>编排（命令式）← 后面再说</h4>
    <p class="desc">替AI设计"该怎么做"</p>
    <ul class="compare-list">
      <li>要处理所有失败路径</li>
      <li>并发、状态、异常处理</li>
      <li>得撞过才知道哪里有坑</li>
      <li>正在被Agent吃掉</li>
    </ul>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-3">
  <div class="stage-header">
    <div class="stage-num">3</div>
    <div>
      <h3 class="stage-title">写自己的 Skill <span class="stage-type type-declarative">声明式 · 比想象中简单</span></h3>
      <p class="stage-subtitle">把你脑子里的经验写成AI能用的文档</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>把团队里老员工的经验写成Skill让AI复用、设计符合业务场景的Skills系统、用现成的热门Skills直接提效。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/agent-skills/what">什么是 Skills</a></h4>
      <p>跨平台的统一概念。本质就是给AI写工作手册。</p>
      <span class="tag tag-s3">概念</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/design">如何设计 Skills</a></h4>
      <p>6条铁律 + 5种设计模式。避免写出AI用不了的技能。</p>
      <span class="tag tag-s3">设计</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/build">手把手搭建</a></h4>
      <p>扣子零代码 + Dify + API。三种方式任选。</p>
      <span class="tag tag-s3">实操</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/cases">实战案例</a></h4>
      <p>电商/客服/知识付费/财务——四个行业的Skills。</p>
      <span class="tag tag-s3">案例</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/recommended">热门 Skills 推荐</a></h4>
      <p>营销/电商/客服/数据分析，按场景选现成方案。</p>
      <span class="tag tag-s3">推荐</span>
    </div>
    <div class="module">
      <h4><a href="/rag/index">RAG 知识库</a></h4>
      <p>让AI读懂你的企业文档——也是一种给AI赋能。</p>
      <span class="tag tag-s3">赋能</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-4">
  <div class="stage-header">
    <div class="stage-num">4</div>
    <div>
      <h3 class="stage-title">接 MCP <span class="stage-type type-declarative">声明式 · 边界清晰</span></h3>
      <p class="stage-subtitle">告诉AI可以用什么工具，输入什么输出什么</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>给AI接上企业内部系统（ERP、CRM、数据库）、从5800+服务器生态中选出适合你的MCP、自建MCP服务器。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/mcp/index">什么是 MCP</a></h4>
      <p>AI连接外部工具的标准协议。全行业在采纳。</p>
      <span class="tag tag-s4">概念</span>
    </div>
    <div class="module">
      <h4><a href="/mcp/setup">快速上手</a></h4>
      <p>Claude Desktop/Cursor/Dify/百炼 四平台配置。</p>
      <span class="tag tag-s4">实操</span>
    </div>
    <div class="module">
      <h4><a href="/mcp/ecosystem">MCP 生态</a></h4>
      <p>5800+全球服务器、国内15万+，按行业选。</p>
      <span class="tag tag-s4">选型</span>
    </div>
    <div class="module">
      <h4><a href="/mcp/build">自建 MCP 服务器</a></h4>
      <p>Python/TypeScript/Dify 三套方案。</p>
      <span class="tag tag-s4">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/mcp/security">安全须知</a></h4>
      <p>5个风险、检查清单。接外部工具前必读。</p>
      <span class="tag tag-s4">安全</span>
    </div>
    <div class="module">
      <h4><a href="/rag/build">搭建知识库</a></h4>
      <p>阿里百炼/Dify/RAGFlow 三平台实操。</p>
      <span class="tag tag-s4">实操</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-5">
  <div class="stage-header">
    <div class="stage-num">5</div>
    <div>
      <h3 class="stage-title">搭 Agent</h3>
      <p class="stage-subtitle">让AI自主决策和执行，有了Skill和MCP，Agent才有手有脚</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>搭建能自主完成任务的AI Agent、用工作流处理复杂业务逻辑、设计Agent Harness架构。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/concepts/agents">AI Agent 是什么</a></h4>
      <p>不是聊天机器人，是能自主决策和执行的AI系统。</p>
      <span class="tag tag-s5">概念</span>
    </div>
    <div class="module">
      <h4><a href="/agent-guide/index">Agent 搭建实战</a></h4>
      <p>从第一个Agent到上生产。Coze/Dify/n8n三套方案。</p>
      <span class="tag tag-s5">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/agent-guide/testing">测试和评估</a></h4>
      <p>Agent不是上线就完事。怎么测、怎么评、怎么迭代。</p>
      <span class="tag tag-s5">质量</span>
    </div>
    <div class="module">
      <h4><a href="/agent-harness/index">Agent Harness</a></h4>
      <p>Anthropic 官方架构方法论。5种模式、11个组件。</p>
      <span class="tag tag-s5">架构</span>
    </div>
    <div class="module">
      <h4><a href="/workflow/index">工作流自动化</a></h4>
      <p>当Agent需要固定流程时用。8大自动化场景。</p>
      <span class="tag tag-s5">编排</span>
    </div>
    <div class="module">
      <h4><a href="/workflow/recipes">常用配方</a></h4>
      <p>日报、客户跟进、竞品监控等6个即用模板。</p>
      <span class="tag tag-s5">模板</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-6">
  <div class="stage-header">
    <div class="stage-num">6</div>
    <div>
      <h3 class="stage-title">系统构建</h3>
      <p class="stage-subtitle">用AI重构业务流程和组织</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>制定企业AI落地战略、避开95%企业踩过的大坑、用AI重构电商全链路、让AI融入组织管理。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/ai-landing/index">企业落地实战</a></h4>
      <p>Agent/大模型/提效/案例/避坑，五篇打通。</p>
      <span class="tag tag-s6">战略</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/cases">真实案例</a></h4>
      <p>Klarna、字节、阿里、美团——有具体数字的案例。</p>
      <span class="tag tag-s6">案例</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/pitfalls">避坑指南</a></h4>
      <p>MIT数据：95%的AI项目没回报。8种失败模式。</p>
      <span class="tag tag-s6">避坑</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/productivity">提效篇</a></h4>
      <p>Anthropic 10万对话数据分析。真实的提效数字。</p>
      <span class="tag tag-s6">数据</span>
    </div>
    <div class="module">
      <h4><a href="/ecommerce/index">电商AI实战</a></h4>
      <p>出图成本降99%、SKU裂变、全链路AI化。</p>
      <span class="tag tag-s6">行业</span>
    </div>
    <div class="module">
      <h4><a href="/ecommerce/management">组织管理与智能体</a></h4>
      <p>AI智能体替代SOP、"三不"原则。组织怎么变。</p>
      <span class="tag tag-s6">管理</span>
    </div>
  </div>
</div>

<div class="time-estimate">
  全部内容预计阅读时间：<strong>阶段1-2 约5小时</strong> · <strong>阶段3-4 约5小时</strong> · <strong>阶段5-6 约8小时</strong>
</div>

---

## 参考资料

在学习过程中，这些资料可以帮你保持更新：

| 资料 | 用途 |
|------|------|
| [AI 100概念](/ai100/index) | 遇到不懂的术语时速查 |
| [AI编程 100概念](/aicode100/index) | 技术团队的概念对齐 |
| [AI 周报](/digest) | 每周自动更新的行业动态 |
| [信息源推荐](/sources) | 长期关注的优质信息源 |
| [常见问题](/faq) | 版权、安全、ROI等老板关心的问题 |

<div class="quick-start">
  <h3>不知道从哪开始？</h3>
  <p>花5分钟看完"什么是AI"，你就知道下一步该干什么了。</p>
  <a class="btn" href="/guide/what-is-ai">从这里开始 →</a>
</div>

</div>
