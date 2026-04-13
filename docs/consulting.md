---
layout: page
title: 付费咨询 — 企业级 AI 搭建
description: 5000元/小时，一对一帮你规划企业AI架构、选型落地、避坑指南
---

<style>
.consulting-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.consulting-hero {
  text-align: center;
  margin-bottom: 48px;
}

.consulting-hero h1 {
  font-size: 2.2em;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
  line-height: 1.3;
}

.consulting-hero .subtitle {
  font-size: 1.15em;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin-bottom: 32px;
}

.price-card {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  margin-bottom: 48px;
}

.price-card .price {
  font-size: 3em;
  font-weight: 800;
  color: var(--vp-c-brand-1);
  line-height: 1;
  margin-bottom: 8px;
}

.price-card .price-unit {
  font-size: 1em;
  color: var(--vp-c-text-2);
  font-weight: 400;
}

.price-card .price-note {
  font-size: 0.95em;
  color: var(--vp-c-text-3);
  margin-top: 12px;
}

.service-list {
  margin-bottom: 48px;
}

.service-list h2 {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.service-item {
  display: flex;
  gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.service-item:last-child {
  border-bottom: none;
}

.service-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--vp-c-brand-soft);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
}

.service-content h3 {
  font-size: 1.1em;
  font-weight: 650;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}

.service-content p {
  font-size: 0.95em;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0;
}

.who-section {
  margin-bottom: 48px;
}

.who-section h2 {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.who-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 640px) {
  .who-grid {
    grid-template-columns: 1fr;
  }
}

.who-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 20px;
}

.who-card h4 {
  font-size: 1em;
  font-weight: 650;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.who-card p {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.process-section {
  margin-bottom: 48px;
}

.process-section h2 {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.process-step {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: var(--vp-c-brand-1);
  color: #faf9f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95em;
}

.step-content h4 {
  font-size: 1.05em;
  font-weight: 650;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}

.step-content p {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.cta-section {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
}

.cta-section h2 {
  font-size: 1.4em;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 16px;
}

.cta-section p {
  font-size: 1em;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin-bottom: 24px;
}

.cta-section .qr-wrapper {
  display: inline-block;
  background: #fff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin-bottom: 16px;
}

.cta-section .qr-wrapper img {
  width: 200px;
  height: 200px;
  display: block;
}

.cta-note {
  font-size: 0.9em;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.guarantee {
  margin-top: 48px;
  padding: 24px;
  background: rgba(201, 100, 66, 0.04);
  border: 1px solid rgba(201, 100, 66, 0.15);
  border-radius: 12px;
  text-align: center;
}

.guarantee h3 {
  font-size: 1.1em;
  font-weight: 650;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.guarantee p {
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin: 0;
}
</style>

<div class="consulting-page">

<div class="consulting-hero">
  <h1>企业级 AI 搭建咨询</h1>
  <p class="subtitle">
    不讲概念，只解决问题。<br>
    从选型到落地，帮你把 AI 真正用起来、用对地方。
  </p>
</div>

<div class="price-card">
  <div class="price">5,000<span class="price-unit"> 元/小时</span></div>
  <p class="price-note">线上视频/语音，按小时计费，不满一小时按一小时算</p>
</div>

<div class="service-list">
  <h2>咨询范围</h2>

  <div class="service-item">
    <div class="service-icon">🏗️</div>
    <div class="service-content">
      <h3>AI 架构规划</h3>
      <p>根据你的业务场景，规划 Agent、RAG、工作流的整体架构。不是画PPT，是能直接落地的技术方案。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-icon">🔍</div>
    <div class="service-content">
      <h3>技术选型决策</h3>
      <p>大模型选哪个？用 Dify 还是自建？MCP 怎么接？帮你在一堆方案里选出最适合你的那个，省掉几个月试错。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-icon">⚡</div>
    <div class="service-content">
      <h3>现有系统诊断</h3>
      <p>已经在用 AI 但效果不好？帮你找出瓶颈——是 Prompt 的问题、架构的问题、还是根本不该用 AI 的问题。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-icon">📋</div>
    <div class="service-content">
      <h3>落地路线图</h3>
      <p>给你一份可执行的 AI 落地计划：先做什么、后做什么、哪些坑要绕、预算怎么分配。</p>
    </div>
  </div>

  <div class="service-item">
    <div class="service-icon">🛡️</div>
    <div class="service-content">
      <h3>风险与合规</h3>
      <p>数据安全怎么保障？AI 生成内容的版权归谁？帮你理清合规红线，不踩雷。</p>
    </div>
  </div>
</div>

<div class="who-section">
  <h2>适合谁</h2>
  <div class="who-grid">
    <div class="who-card">
      <h4>想上 AI 但不知道从哪开始</h4>
      <p>团队没有 AI 经验，需要有人帮你理清方向，少走弯路。</p>
    </div>
    <div class="who-card">
      <h4>已经试了但效果不好</h4>
      <p>买了工具、接了API，但ROI算不过来，需要有人帮你诊断问题。</p>
    </div>
    <div class="who-card">
      <h4>准备投入但想控制风险</h4>
      <p>准备花几十万做 AI 项目，想在动手前找人验证方案可行性。</p>
    </div>
    <div class="who-card">
      <h4>电商/知识付费行业</h4>
      <p>AI 作图、AI 客服、AI 内容生成——这些场景我最熟，直接给方案。</p>
    </div>
  </div>
</div>

<div class="process-section">
  <h2>咨询流程</h2>
  <div class="process-steps">
    <div class="process-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h4>加微信，说明需求</h4>
        <p>扫码加我微信，备注「付费咨询」，简单描述你的业务和想解决的问题。</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h4>确认时间，预付费用</h4>
        <p>我评估需求后约时间，咨询前完成付款。</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h4>一对一咨询</h4>
        <p>视频/语音深入沟通，现场给出方案建议和行动清单。</p>
      </div>
    </div>
    <div class="process-step">
      <div class="step-number">4</div>
      <div class="step-content">
        <h4>咨询后跟进</h4>
        <p>咨询结束后 7 天内，微信上可以追问细节，不额外收费。</p>
      </div>
    </div>
  </div>
</div>

<div class="cta-section">
  <h2>扫码加微信，备注「付费咨询」</h2>
  <p>我会在 24 小时内回复你，先聊需求再决定是否合适。</p>
  <div class="qr-wrapper">
    <img src="/images/wechat-qr.png" alt="微信二维码">
  </div>
  <p class="cta-note">微信号：592146145</p>
</div>

<div class="guarantee">
  <h3>不满意不收费</h3>
  <p>如果你觉得咨询没有帮助，直接说，全额退款，没有任何附加条件。</p>
</div>

</div>
