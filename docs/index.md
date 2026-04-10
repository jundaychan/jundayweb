---
layout: home

hero:
  name: "Junday 的 AI 商业指南"
  text: "让 AI 帮你赚钱，而不是帮你焦虑"
  tagline: 我是俊达，一个用 AI 做业务的创业者。这个网站是我让 AI 写的 AI 实战指南 —— 200+概念、真实案例、踩坑经验，全部免费。
  actions:
    - theme: brand
      text: 开始学习路线
      link: /roadmap
    - theme: alt
      text: 企业落地AI实战
      link: /ai-landing/index
    - theme: alt
      text: 电商AI实战
      link: /ecommerce/index

features:
  - title: "4个阶段，从入门到重构业务"
    details: "对话 → 工具 → 能力 → 体系。40+篇实战内容，每个阶段都有明确产出。不管你在哪个阶段，都能找到下一步。"
    link: /roadmap
    linkText: 看学习路线
  - title: "你的竞品已经在用AI了"
    details: "Klarna用AI砍掉40%人力，收入翻倍。电商商家用AI出图成本从万元降到3毛。你还在观望？"
    link: /ai-landing/cases
    linkText: 看真实案例
  - title: "哪个AI工具好用？实测告诉你"
    details: "豆包、通义千问、Kimi、即梦、可灵……真实价格、中国能不能用、适合什么场景，一张表看清。"
    link: /tools/index
    linkText: 看工具对比
  - title: "电商老板的AI提效全攻略"
    details: "出图成本降99%、5秒出片、一品多链接裂变。基于实战课程的全链路方法论。"
    link: /ecommerce/index
    linkText: 看电商实战
  - title: "提示词直接抄作业"
    details: "来自GitHub 143K Star的顶级开源项目，翻译成中文。商业角色、万能模板、工程技巧，复制粘贴就能用。"
    link: /prompts/index
    linkText: 拿提示词模板
  - title: "95%的AI项目没回报，为什么？"
    details: "MIT 2025研究数据。不是AI没用，是用法不对。看看成功的企业做对了什么，失败的踩了哪些坑。"
    link: /ai-landing/pitfalls
    linkText: 避开大坑
---

<style>
.pain-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 56px 24px;
}
.pain-section h2 {
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}
.pain-section .subtitle {
  text-align: center;
  color: var(--vp-c-text-3);
  margin-bottom: 40px;
  font-size: 15px;
}
.pain-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 56px;
}
@media (max-width: 640px) {
  .pain-grid { grid-template-columns: 1fr; }
}
.pain-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  padding: 24px;
  background: var(--vp-c-bg-elv);
  transition: border-color 0.25s ease, transform 0.25s ease;
}
.pain-card:hover {
  border-color: var(--vp-c-brand-2);
  transform: translateY(-2px);
}
.pain-card h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 650;
  color: var(--vp-c-text-1);
}
.pain-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.7;
}
.data-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  padding: 40px 24px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  margin-bottom: 56px;
}
.data-item { text-align: center; }
.data-item .number {
  font-size: 40px;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  display: block;
  letter-spacing: -0.02em;
}
.data-item .label {
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-top: 6px;
  line-height: 1.5;
}
.data-item .label small {
  display: block;
  margin-top: 2px;
  font-size: 11px;
  color: var(--vp-c-text-3);
}
.about-me {
  padding: 36px 32px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  margin-bottom: 56px;
  display: flex;
  gap: 32px;
  align-items: center;
}
@media (max-width: 640px) {
  .about-me { flex-direction: column; text-align: center; padding: 28px 20px; }
}
.about-me .qr-wrap {
  flex-shrink: 0;
}
.about-me .qr-wrap img {
  width: 160px;
  height: 160px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid var(--vp-c-divider);
}
.about-me .info h3 {
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.about-me .info p {
  margin: 0 0 8px 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.75;
}
.about-me .wechat-id {
  display: inline-block;
  margin-top: 12px;
  padding: 8px 20px;
  background: var(--vp-c-brand-1);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s ease, transform 0.2s ease;
}
.about-me .wechat-id:hover {
  background: var(--vp-button-brand-hover-bg);
  transform: translateY(-1px);
}
.roadmap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 56px;
}
.roadmap .step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.2s ease;
}
.roadmap .step:hover {
  border-color: var(--vp-c-brand-2);
}
.roadmap .step .num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}
.roadmap .step a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}
.roadmap .arrow {
  color: var(--vp-c-text-3);
  font-size: 18px;
  user-select: none;
}
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

## 学习路线

<div class="roadmap">
  <div class="step"><span class="num">1</span> <a href="/roadmap#学会对话">学会对话</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">2</span> <a href="/roadmap#上手工具">上手工具</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">3</span> <a href="/roadmap#打造能力">打造能力</a></div>
  <span class="arrow">→</span>
  <div class="step"><span class="num">4</span> <a href="/roadmap#搭建体系">搭建体系</a></div>
</div>

<p style="text-align:center;margin-top:12px;"><a href="/roadmap" style="color:var(--vp-c-brand-1);font-weight:600;font-size:14px;">查看完整学习路线 →</a></p>

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
