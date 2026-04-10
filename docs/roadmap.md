# 学习路线

> 从"AI是什么"到"用AI重构业务"，4个阶段、40+篇实战内容。按顺序走，每个阶段都有明确产出。

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
.stage-1::before { background: linear-gradient(90deg, #2b5ea7, #5a8fd0); }
.stage-2::before { background: linear-gradient(90deg, #2e7d32, #66bb6a); }
.stage-3::before { background: linear-gradient(90deg, #e65100, #ff9800); }
.stage-4::before { background: linear-gradient(90deg, #6a1b9a, #ab47bc); }

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
.stage-1 .stage-num { background: #2b5ea7; }
.stage-2 .stage-num { background: #2e7d32; }
.stage-3 .stage-num { background: #e65100; }
.stage-4 .stage-num { background: #6a1b9a; }

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
.tag-beginner { background: rgba(43, 94, 167, 0.1); color: #2b5ea7; }
.tag-intermediate { background: rgba(46, 125, 50, 0.1); color: #2e7d32; }
.tag-advanced { background: rgba(230, 81, 0, 0.1); color: #e65100; }
.tag-expert { background: rgba(106, 27, 154, 0.1); color: #6a1b9a; }

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
  border: 2px solid var(--vp-c-brand-1);
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
  background: #234e8c;
  transform: translateY(-1px);
}

.persona-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
</style>

<div class="roadmap-page">

## 你是谁，决定从哪开始

<div class="persona-grid">
  <div class="persona">
    <h4>完全不懂AI的老板</h4>
    <p>从阶段一开始。花2小时建立基本认知，然后跳到阶段二选工具。</p>
  </div>
  <div class="persona">
    <h4>用过ChatGPT，想深入的</h4>
    <p>跳过阶段一，直接从阶段二开始。重点看提示词模板和工具对比。</p>
  </div>
  <div class="persona">
    <h4>想让AI替代重复工作的</h4>
    <p>直接进阶段三。RAG知识库 + 工作流自动化是你的重点。</p>
  </div>
  <div class="persona">
    <h4>要搭AI系统的技术负责人</h4>
    <p>直接进阶段四。Agent架构、Harness设计、企业落地避坑。</p>
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
      <span class="tag tag-beginner">起点</span>
    </div>
    <div class="module">
      <h4><a href="/guide/why-ai-matters">为什么企业要关注</a></h4>
      <p>Klarna砍40%人力、Shopify全员AI优先。数据说话。</p>
      <span class="tag tag-beginner">起点</span>
    </div>
    <div class="module">
      <h4><a href="/guide/getting-started">如何开始AI转型</a></h4>
      <p>不要一上来就搞大项目。从一个痛点开始。</p>
      <span class="tag tag-beginner">起点</span>
    </div>
    <div class="module">
      <h4><a href="/concepts/llm">大语言模型</a></h4>
      <p>Token、上下文窗口、Temperature——三个概念够用了。</p>
      <span class="tag tag-beginner">核心概念</span>
    </div>
    <div class="module">
      <h4><a href="/concepts/prompt-engineering">提示工程</a></h4>
      <p>给AI下指令的技巧。角色设定、分步骤、给例子。</p>
      <span class="tag tag-beginner">核心技能</span>
    </div>
    <div class="module">
      <h4><a href="/prompts/index">提示词模板库</a></h4>
      <p>来自GitHub 143K Star项目，翻译成中文，复制粘贴就能用。</p>
      <span class="tag tag-beginner">直接抄</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-2">
  <div class="stage-header">
    <div class="stage-num">2</div>
    <div>
      <h3 class="stage-title">上手工具</h3>
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
      <span class="tag tag-intermediate">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/writing">文字AI工具</a></h4>
      <p>豆包、通义千问、Kimi、ChatGPT、Claude 实测对比。</p>
      <span class="tag tag-intermediate">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/image">AI作图工具</a></h4>
      <p>即梦、通义万相、SD、Midjourney 横向对比。</p>
      <span class="tag tag-intermediate">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/video">AI视频工具</a></h4>
      <p>可灵、即梦视频、Runway、Pika 能力边界在哪。</p>
      <span class="tag tag-intermediate">实测</span>
    </div>
    <div class="module">
      <h4><a href="/tools/service">AI客服工具</a></h4>
      <p>晓多AI、快商通、腾讯企点、科大讯飞对比。</p>
      <span class="tag tag-intermediate">实测</span>
    </div>
    <div class="module">
      <h4><a href="/models/index">模型选择指南</a></h4>
      <p>不同任务用不同模型。文字/图片/音频/视频怎么选。</p>
      <span class="tag tag-intermediate">决策</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-3">
  <div class="stage-header">
    <div class="stage-num">3</div>
    <div>
      <h3 class="stage-title">打造能力</h3>
      <p class="stage-subtitle">让AI连接你的数据和业务流程</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>搭一个企业知识库让AI回答客户问题、自动化5个以上重复工作流、给AI接上外部工具（MCP）扩展能力。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/rag/index">RAG 知识库</a></h4>
      <p>让AI读懂你的企业文档。5分钟上手阿里百炼。</p>
      <span class="tag tag-advanced">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/rag/build">搭建知识库</a></h4>
      <p>三个平台实操：阿里百炼/Dify/RAGFlow。</p>
      <span class="tag tag-advanced">实操</span>
    </div>
    <div class="module">
      <h4><a href="/rag/optimize">优化和排错</a></h4>
      <p>7个常见失败点、混合检索策略、成本控制。</p>
      <span class="tag tag-advanced">进阶</span>
    </div>
    <div class="module">
      <h4><a href="/workflow/index">工作流自动化</a></h4>
      <p>8大自动化场景，每个都算了时间节省。</p>
      <span class="tag tag-advanced">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/workflow/platforms">平台实操</a></h4>
      <p>n8n/Dify/飞书/钉钉宜搭 四套方案手把手教。</p>
      <span class="tag tag-advanced">实操</span>
    </div>
    <div class="module">
      <h4><a href="/workflow/recipes">常用配方</a></h4>
      <p>日报、客户跟进、竞品监控等6个即用模板。</p>
      <span class="tag tag-advanced">模板</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/index">Agent Skills</a></h4>
      <p>给AI定义专属技能。从设计到搭建全流程。</p>
      <span class="tag tag-advanced">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/mcp/index">MCP 实战</a></h4>
      <p>让AI连接外部工具的标准协议。5800+服务器生态。</p>
      <span class="tag tag-advanced">连接</span>
    </div>
  </div>
</div>

<div class="connector">↓</div>

<div class="stage-card stage-4">
  <div class="stage-header">
    <div class="stage-num">4</div>
    <div>
      <h3 class="stage-title">搭建体系</h3>
      <p class="stage-subtitle">用AI重构业务流程和组织</p>
    </div>
  </div>
  <div class="stage-goal">
    <strong>学完你能：</strong>搭建生产级AI Agent系统、设计Agent Harness架构、避开95%企业踩过的AI落地大坑、用AI重构电商全链路。
  </div>
  <div class="stage-modules">
    <div class="module">
      <h4><a href="/concepts/agents">AI Agent 是什么</a></h4>
      <p>不是聊天机器人，是能自主决策和执行的AI系统。</p>
      <span class="tag tag-expert">概念</span>
    </div>
    <div class="module">
      <h4><a href="/agent-guide/index">Agent 搭建实战</a></h4>
      <p>从第一个Agent到上生产。Coze/Dify/n8n三套方案。</p>
      <span class="tag tag-expert">搭建</span>
    </div>
    <div class="module">
      <h4><a href="/agent-harness/index">Agent Harness</a></h4>
      <p>Anthropic 官方架构方法论。5种模式、11个组件。</p>
      <span class="tag tag-expert">架构</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/index">企业落地实战</a></h4>
      <p>Agent/大模型/提效/案例/避坑，五篇打通。</p>
      <span class="tag tag-expert">战略</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/cases">真实案例</a></h4>
      <p>Klarna、字节、阿里、美团——有具体数字的案例。</p>
      <span class="tag tag-expert">案例</span>
    </div>
    <div class="module">
      <h4><a href="/ai-landing/pitfalls">避坑指南</a></h4>
      <p>BCG数据：95%的AI项目没回报。8种失败模式。</p>
      <span class="tag tag-expert">避坑</span>
    </div>
    <div class="module">
      <h4><a href="/ecommerce/index">电商AI实战</a></h4>
      <p>出图成本降99%、SKU裂变、全链路AI化。</p>
      <span class="tag tag-expert">行业</span>
    </div>
    <div class="module">
      <h4><a href="/agent-skills/recommended">热门Skills推荐</a></h4>
      <p>营销/电商/客服/数据分析，按场景选现成方案。</p>
      <span class="tag tag-expert">推荐</span>
    </div>
  </div>
</div>

<div class="time-estimate">
  全部内容预计阅读时间：<strong>阶段一 2小时</strong> · <strong>阶段二 3小时</strong> · <strong>阶段三 5小时</strong> · <strong>阶段四 8小时</strong>
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
