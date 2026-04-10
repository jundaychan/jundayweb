# AI 作图工具实测

> 电商产品图、营销海报、社交媒体配图——哪个 AI 作图工具最适合中国企业？

## 总览对比

| 工具 | 出品方 | 价格 | 中文提示词 | 中国可用 | 最适合 |
|------|-------|------|-----------|---------|-------|
| **Nano Banana** | Google | 免费（Gemini内置） | ❌ | ❌ 需翻墙 | 电商产品图、文字海报、高精度商拍 |
| **即梦** | 字节跳动 | 免费额度 | ✅ | ✅ | 电商产品图、营销素材 |
| **通义万相** | 阿里云 | 免费基础功能 | ✅ | ✅ | 产品图、视频素材 |
| **Stable Diffusion** | 开源 | 免费 | ✅（中文版） | ✅ | 本地部署、批量生成 |
| **Canva AI** | Canva | ¥499/年起 | ✅ | ✅ | 设计模板、快速出图 |
| **Midjourney** | Midjourney | $10/月起 | ❌ | ❌ 需翻墙 | 艺术风格、高质量创意图 |
| **DALL-E** | OpenAI | $0.04-0.12/张 | ❌ | ❌ 需翻墙 | 概念图、创意探索 |

---

## Nano Banana（Google Gemini 图片生成）

**出品方**：Google DeepMind

2025年8月以匿名身份"nano-banana"登上 LMSYS 盲测排行榜第一名，超越 Midjourney 和 Flux。Google 随后确认这是 **Gemini 图片生成模型**的代号。

### 当前模型

| 模型 | 架构 | 特点 |
|------|------|------|
| Nano Banana（原版） | Gemini 2.5 Flash Image | 快速生成，基础版 |
| Nano Banana Pro | Gemini 3 Pro Image | 4K输出，搜索验证 |
| Nano Banana 2 | Gemini 3.1 Flash Image | Pro级质量 + Flash速度 |

### 核心能力

- **原生文字渲染**：直接在图中生成清晰的中英文文字（做海报/包装极强）
- **图片编辑**：上传现有产品图，用自然语言指令修改（换背景、换场景）
- **对话式迭代**：生成后继续对话微调，不用重写提示词
- **多比例输出**：1:1、16:9、9:16、2:1，覆盖各平台需求

### 中国可用性

::: danger 需翻墙
通过 gemini.google.com 或 Google AI Studio 使用。需要 VPN。
:::

### 价格

- Gemini 免费版包含图片生成
- API 调用按量付费（Flash 版极便宜）

> 数据来源：[Google DeepMind](https://deepmind.google/models/gemini-image/)、[Google Blog](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/)

---

## 电商产品图提示词模板

> 以下模板适用于 Nano Banana / Midjourney / DALL-E / 即梦 / 通义万相。Nano Banana 对摄影术语理解最好，即梦和通义万相可用中文版。来源：[awesome-nano-banana-pro-prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts)（10.8K Stars）、[Google 官方提示指南](https://deepmind.google/models/gemini-image/prompt-guide/)、[Philipp Schmid 10步法](https://www.philschmid.de/gemini-image-generation-product)

### 公式：主体 + 构图 + 场景 + 风格 + 镜头/光线

记住这个结构，所有产品图提示词都是这5个要素的排列组合。

### 白底主图（电商必备）

```
Ultra-realistic studio photograph of [你的产品] on a pure white 
seamless background, centered composition, product fills 85% of 
frame, shot with 85mm prime lens, f/8, softbox high-key lighting 
with gentle contact shadow, natural accurate colors, no props, 
no text, square 1:1 composition
```

::: tip 中文版（即梦 / 通义万相）
超写实影棚照片，[你的产品]放在纯白无缝背景上，居中构图，产品占画面85%，85mm定焦镜头，f/8光圈，柔光箱高调照明，产品底部有柔和的接触阴影，颜色自然准确，无道具无文字，1:1正方形构图
:::

### 45度角产品展示

```
Professional product photograph of [你的产品], three-quarter 
view at 45-degree angle from slightly above, on a seamless light 
gray gradient background, studio softbox lighting from upper left 
with subtle fill light from right, f/5.6 for slight depth of field
```

### 生活场景（场景图）

```
Lifestyle product photography of [你的产品] in a [现代厨房 / 
极简客厅 / 温馨卧室], natural window light from the left side, 
product placed on [木桌 / 大理石台面 / 亚麻布面], surrounded by 
[2-3个配套道具], shallow depth of field f/2.8 with product in 
sharp focus, warm color temperature 5500K
```

### 护肤品 / 美妆

```
Place this [面霜/精华液] on a marble countertop with natural 
window light and soft depth of field, spa-inspired product 
photography, clean and premium aesthetic
```

**科技感版本**：
```
Place this [精华液瓶] beside glowing laboratory glassware for 
a science-backed skincare look, clean background, professional 
lighting highlighting the product's transparency and texture
```

### 珠宝 / 饰品

```
Put this [手链/项链] on a velvety jewelry display with soft side 
lighting and macro-level detail clarity, dark background, intimate 
luxury feel
```

**反射面版本**：
```
Place this [金项链/手表] on a glossy black acrylic surface with 
perfect reflection, side lighting at 90 degrees, mirror-like 
surface reflection, luxury product photography, sharp macro detail
```

### 食品 / 饮品

```
Appetizing food photography of [你的产品], overhead flat-lay 
composition on [质朴木板 / 白色大理石 / 深色石板面], natural side 
lighting creating soft shadows, steam rising if applicable, vibrant 
colors, sharp focus, professional food styling
```

### 服装（无模特 / Ghost Mannequin）

```
Clean e-commerce product photo of [你的衣服描述]. Remove the 
model's body completely. Keep the outfit in natural 3D shape, 
with realistic fabric folds and textures. Centered on a pure 
white background. High-resolution, professional lighting
```

### 服装（模特场景）

```
Show a [Asian female / male] model wearing this [产品] in a 
[现代都市街道 / 影棚 / 咖啡馆] setting, natural daylight, candid 
pose, warm golden hour lighting, f/3.5 natural background 
separation, clean e-commerce lookbook style
```

### 数码 / 3C 产品

```
Place this [智能手表/耳机] on a premium 3D podium with soft 
studio lighting and a subtle shadow beneath it, dark gradient 
background, modern minimalist tech aesthetic
```

### 产品色彩变体展示

```
Product color variant display of [你的产品] in [白色, 黑色, 
粉色], identical three-quarter view at 30-degree angle, on pure 
white background, consistent softbox lighting, f/8, uniform 
white balance
```

### Nano Banana 专属技巧

1. **上传实物图再指挥**：把产品实拍图上传给 Gemini，然后说"把这个产品放到咖啡馆场景里"——比纯文字生成准确10倍
2. **对话式迭代**：生成后说"光线再柔和一点"、"背景换成木桌"，不用重写整段提示词
3. **文字渲染**：需要在图上加文字时，用引号包住内容："加上文字「限时5折」，使用粗体无衬线字体"
4. **批量变体**：说"生成这个产品的3个不同场景变体"，一次出多张
5. **摄影术语管用**：Nano Banana 对 "85mm prime lens"、"f/2.8"、"softbox"、"three-point lighting" 这些术语理解极好

### 各平台尺寸要求

| 平台 | 比例 | 最低分辨率 | 背景要求 |
|------|------|-----------|---------|
| 淘宝/天猫 | 1:1 | 800×800px | 纯白 |
| 拼多多 | 1:1 | 750×750px | 纯白 |
| 亚马逊 | 1:1 | 2000×2000px | 纯白 RGB(255,255,255) |
| 小红书 | 3:4 | 1080×1440px | 不限 |
| 抖音 | 9:16 | 1080×1920px | 不限 |

> 提示词来源：[awesome-nano-banana-pro-prompts](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts)（10.8K Stars）、[Philipp Schmid 10步法](https://www.philschmid.de/gemini-image-generation-product)、[Google 官方提示指南](https://deepmind.google/models/gemini-image/prompt-guide/)、[Photoroom 电商提示词](https://www.photoroom.com/blog/image-prompting)

---

## 即梦 (Jimeng)

**出品方**：字节跳动

### 价格

- 免费基础额度
- 包含在豆包生态中，部分功能需付费

### 核心能力

- 文字生成图片、图片生成图片
- 智能画布：AI 拼图生成
- **局部重绘**：只改图片某个部分，其他不动
- 一键扩图、去背景、抠图
- **即梦 3.0**（2025年4月）：支持国际版全英文界面
- **直接生成中文字体文字**——做中文海报和电商主图时极其方便

### 用户规模

- 上线 6 个月内突破 **1000 万活跃用户**

### 适合谁

- 电商运营：产品主图、详情页图、促销海报
- 抖音/小红书内容创作者：封面图、配图
- 需要快速出图但没有设计师的小团队

### 优势

与抖音生态深度整合。如果你在抖音做电商或者内容，即梦是最顺手的选择。

> 数据来源：字节跳动官方、科技媒体报道

---

## 通义万相 (Tongyi Wanxiang)

**出品方**：阿里云

### 价格

- 文生图、图生视频等基础功能通过官网和 App **免费使用**
- 企业 API 按量付费

### 核心能力

- 文字生成图片、图片生成图片
- 涂鸦生成、虚拟模特、个人照片风格化
- **Qwen-Image-2512**（2025年12月）：人物真实感突破，细节增强
- **原生中文文字渲染**——直接在图片里生成清晰的中文字
- 免费视频生成功能

### 适合谁

- 需要免费 AI 作图的预算有限团队
- 需要生成带中文文字的产品图和海报
- 已经在用阿里云生态的企业

### 与即梦的区别

两者功能相似，即梦胜在抖音生态整合和用户体验，通义万相胜在**免费**和阿里云生态整合。做淘宝/天猫用通义万相更顺，做抖音用即梦更顺。

> 数据来源：阿里云官网

---

## Stable Diffusion（开源）

### 价格

- **完全免费**，开源软件
- 需要有一定配置的电脑（需要好一点的显卡），或者用云服务器

### 核心能力

- 本地运行，数据完全在自己手上
- **太乙 Stable Diffusion**（中文版）：用 2000 万组中文图文对训练，中文提示词效果好
- 可以无限生成，没有次数限制
- 大量社区模型和插件，风格选择极多

### 适合谁

- 有技术人员或愿意学习的团队
- 需要大批量生成图片（几百张/天以上）
- 对数据安全有严格要求，不能用云端服务
- 想要完全控制风格和输出的设计团队

### 门槛

上手难度比即梦和通义万相高很多。需要安装软件、配置环境、选择模型。**适合有技术背景的团队，不适合完全不懂技术的老板自己用。**

> 数据来源：Stability AI、GitHub 开源社区

---

## Canva AI

### 价格（中国区）

- **Canva Pro**：¥1,150/月（首 3 个月 5 折）
- **Canva 团队版**：¥499/年（最多 3 人）
- **商业版**：¥1,500/月/人

AI 功能（Magic Studio，25+ 个 AI 工具）包含在付费方案中，不单独收费。

### 核心能力

- AI 生成图片只是 Canva 的一小部分
- 核心价值是**海量设计模板 + AI 辅助编辑**
- 一键去背景、一键调整尺寸、智能排版
- 适配各种平台尺寸（淘宝主图、小红书封面、朋友圈图等）

### 适合谁

- 没有设计师但需要"看起来专业"的图的团队
- 需要快速批量制作多平台素材
- 设计需求以模板修改为主，不需要从零创作

### 注意

Canva 的 AI 生成图片能力不如即梦和通义万相。它的优势是**设计模板和编辑工具**，AI 只是锦上添花。

> 数据来源：Canva 中国官网

---

## Midjourney

### 价格

- **基础版**：$10/月（约 72 元）
- **标准版**：$30/月（约 217 元）
- 无永久免费版

### 中国可用性

::: danger 中国无法正常使用
- 2023 年曾尝试通过腾讯微信上线"Midjourney 中国版"，但很快被删除
- 需要 VPN 翻墙访问
- 不推荐作为日常工具
:::

### 如果你能访问的话

- 艺术风格和创意质量仍然是业界天花板
- 适合需要高端品牌视觉的场景
- 不支持中文提示词，需要用英文

### 建议

除非你有特殊的高端视觉需求，国内用即梦和通义万相已经够用。

> 数据来源：Midjourney 官网

---

## DALL-E

**出品方**：OpenAI

### 价格

- DALL-E 3：$0.04-0.12/张（约 0.3-0.9 元/张）
- 包含在 ChatGPT Plus 中

### 中国可用性

::: danger 中国无法直接访问
与 ChatGPT 一样，需要 VPN。
:::

### 如果你能访问的话

- GPT-4o 的图片生成（2025年更新）效果很好
- 理解复杂描述的能力强
- 适合需要精确控制画面内容的场景

> 数据来源：OpenAI 官网

---

## 实测建议

### 电商老板怎么选

**预算为零**：通义万相（免费）+ 即梦（免费额度）

**有点预算**：即梦（付费版）做产品图 + Canva（团队版 ¥499/年）做营销海报

**有设计团队**：Stable Diffusion（免费、无限量、可控风格）+ 即梦做快速原型

### 一个关键提醒

AI 作图工具再好，**也替代不了审美判断**。工具能帮你把 1 天的图缩短到 10 分钟，但"这张图好不好看、适不适合我的客户"这个判断，还是需要人来做。

建议的工作流：**AI 批量生成 → 人工筛选 → 微调细节 → 上线测试**。
