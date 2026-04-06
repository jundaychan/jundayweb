---
layout: home

hero:
  name: "Junday 的 AI 商业指南"
  text: "让 AI 帮你赚钱，而不是帮你焦虑"
  tagline: 我是俊达，一个用 AI 做业务的创业者。这个网站是我让 AI 写的 AI 实战指南 —— 200+概念、真实案例、踩坑经验，全部免费。
  actions:
    - theme: brand
      text: 企业落地AI实战
      link: /ai-landing/index
    - theme: alt
      text: 电商AI实战
      link: /ecommerce/index
    - theme: alt
      text: AI 100概念
      link: /ai100/index

features:
  - title: "你的竞品已经在用AI了"
    details: "Klarna用AI砍掉40%人力，收入翻倍。电商商家用AI出图成本从万元降到3毛。你还在观望？"
    link: /ai-landing/cases
    linkText: 看真实案例
  - title: "不懂AI，至少要懂这100个概念"
    details: "不是字典，是老板视角的AI认知体系。每个概念都告诉你：这跟你赚钱有什么关系。"
    link: /ai100/index
    linkText: 开始建立认知
  - title: "电商老板的AI提效全攻略"
    details: "出图成本降99%、5秒出片、一品多链接裂变。基于实战课程的全链路方法论。"
    link: /ecommerce/index
    linkText: 看电商实战
  - title: "Agent到底是什么？别被忽悠了"
    details: "Anthropic总结的5种Agent模式，OpenAI Operator真实成功率只有38%。先搞懂再投入。"
    link: /ai-landing/agents
    linkText: 搞懂Agent
  - title: "选错模型就是白花钱"
    details: "GPT、Claude、Gemini、豆包，81%的大企业同时用3个以上模型。怎么选？看这篇就够了。"
    link: /ai-landing/llm
    linkText: 看选型指南
  - title: "AI编程100概念"
    details: "不是教你写代码，是让你听懂技术团队在说什么、判断他们说的靠不靠谱。"
    link: /aicode100/index
    linkText: 提升技术判断力
---

<style>
.pain-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
}
.pain-section h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 12px;
}
.pain-section .subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
  font-size: 16px;
}
.pain-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 48px;
}
@media (max-width: 640px) {
  .pain-grid { grid-template-columns: 1fr; }
}
.pain-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  background: var(--vp-c-bg-soft);
}
.pain-card h3 { margin: 0 0 8px 0; font-size: 18px; }
.pain-card p { margin: 0; color: var(--vp-c-text-2); font-size: 14px; line-height: 1.6; }
.data-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-bottom: 48px;
}
.data-item { text-align: center; }
.data-item .number {
  font-size: 36px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  display: block;
}
.data-item .label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-top: 4px;
}
.about-me {
  padding: 40px 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-bottom: 48px;
  display: flex;
  gap: 32px;
  align-items: center;
}
@media (max-width: 640px) {
  .about-me { flex-direction: column; text-align: center; }
}
.about-me .qr-wrap {
  flex-shrink: 0;
}
.about-me .qr-wrap img {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
}
.about-me .info h3 {
  margin: 0 0 12px 0;
  font-size: 20px;
}
.about-me .info p {
  margin: 0 0 8px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}
.about-me .wechat-id {
  display: inline-block;
  margin-top: 8px;
  padding: 6px 16px;
  background: var(--vp-c-brand-1);
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}
.roadmap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
}
.roadmap .step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 14px;
}
.roadmap .step .num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}
.roadmap .arrow { color: var(--vp-c-text-3); font-size: 20px; }
</style>

<div class="pain-section">

## 你是不是也有这些焦虑？

<p class="subtitle">如果你中了3个以上，这个网站就是为你做的</p>

<div class="pain-grid">
  <div class="pain-card">
    <h3>AI到底能不能帮我赚钱？</h3>
    <p>朋友圈天天刷AI，但你不知道从何下手，怕花了钱打水漂。</p>
  </div>
  <div class="pain-card">
    <h3>GPT、Claude、Gemini选哪个？</h3>
    <p>模型太多，每个都说自己最好，你根本分不清区别。</p>
  </div>
  <div class="pain-card">
    <h3>竞品用AI降本了，我还在烧钱</h3>
    <p>别人出图5秒花3毛，你拍一次花1万等14天。差距在拉大。</p>
  </div>
  <div class="pain-card">
    <h3>买了AI工具，团队不会用</h3>
    <p>开通了账号没人用、用了也不知道怎么用好。93%的预算花在工具上，7%花在培训上。</p>
  </div>
</div>

## 几个关键数据

<div class="data-bar">
  <div class="data-item">
    <span class="number">95%</span>
    <span class="label">AI项目没有财务回报<br/><small>MIT 2025研究</small></span>
  </div>
  <div class="data-item">
    <span class="number">80%</span>
    <span class="label">单任务平均提效<br/><small>Anthropic 10万次对话数据</small></span>
  </div>
  <div class="data-item">
    <span class="number">40%</span>
    <span class="label">Klarna裁员比例<br/><small>但收入反而翻倍</small></span>
  </div>
  <div class="data-item">
    <span class="number">0.03元</span>
    <span class="label">AI出图单张成本<br/><small>传统拍摄万元级</small></span>
  </div>
</div>

## 推荐阅读路径

<div class="roadmap">
  <div class="step"><span class="num">1</span> <a href="/ai100/foundational">先建认知</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">2</span> <a href="/ai-landing/cases">看真实案例</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">3</span> <a href="/ai-landing/agents">搞懂Agent</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">4</span> <a href="/ai-landing/llm">选对模型</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">5</span> <a href="/ai-landing/pitfalls">避开大坑</a></div>
</div>

## 关于我

<div class="about-me">
  <div class="qr-wrap">
    <img src="/images/wechat-qr.png" alt="俊达的微信二维码" />
  </div>
  <div class="info">
    <h3>俊达 Junday</h3>
    <p>创业者，AI 实践者。这个网站的所有内容都是我用 AI 写的——没错，包括你正在看的这句话。</p>
    <p>如果你正在琢磨怎么把 AI 用到自己的生意里，加我聊聊。我可以根据你的业务情况，帮你梳理最适合的 AI 切入点，少走弯路。</p>
    <span class="wechat-id">微信号：592146145</span>
  </div>
</div>

</div>
