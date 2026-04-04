# Kevin's Task: Translate insta-rescue to English

## Goal
Translate the Chinese landing page into English for deployment at global.ig-hero.com/us/

## Technical Changes

### 1. vite.config.ts — add base: "/us/"
```ts
export default defineConfig(({ mode }) => ({
  base: "/us/",
  server: { host: "::", port: 8080 },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
```

### 2. Create vercel.json in project root
```json
{
  "rewrites": [
    { "source": "/us/(.*)", "destination": "/index.html" },
    { "source": "/us", "destination": "/index.html" }
  ]
}
```

### 3. Update index.html head
- title: "IG Recovery - Recover Disabled / Hacked / Locked-out Instagram Account"
- meta description: "Disabled or hacked Instagram account? Every hour you wait risks losing followers, sales, and memories forever. Join 2,000+ users who recovered their accounts fast with our proven step-by-step guide."

## Component Translations

### src/components/landing/HeroNavigation.tsx
- "解封專家" → "IG Recovery"

### src/components/landing/HeroContent.tsx
- "IG帳號被封" → "Recover Disabled"
- "求訴無門？" → "Instagram Account"
- CTA button: "立即搶救賬號" → "Recover My Account Now"
- Trust badges: "✓ 綠色通道" → "✓ Hidden Channel", "✓ 成功率80%以上" → "✓ 80% Success Rate", "✓ 2000+成功案例" → "✓ 2000+ Successful Cases"

### src/components/landing/TrustRatingBadge.tsx
- "(1,265+ 個好評)" → "(1,265+ Reviews)"

### src/components/landing/MarqueeTrustBar.tsx
Replace items array with:
```ts
const items = [
  "🎉 2,000+ Accounts Recovered",
  "⭐ 93% Customer Satisfaction",
  "🚀 Proven Recovery Workflow",
  "🔒 Appeal Cadence + Channels",
  "💯 Handled by a Specialist Team",
  "🏆 Human Support",
];
```

### src/components/landing/SocialProofSection.tsx
- Section title: "他們都成功找回了帳號" → "What Our Clients Say"
Replace testimonials array:
```ts
const testimonials = [
  { name: "Mia C.", handle: "E-commerce Seller", text: "Got my disabled IG back in 48 hours. Super clear steps, and support actually replies fast." },
  { name: "Jason L.", handle: "Content Creator", text: "They tell you exactly what to submit and how to word it. No guessing. It genuinely works." },
  { name: "Emily Z.", handle: "Brand Marketer", text: "My appeal was stuck forever. Followed their process and finally got a response — quick." },
  { name: "Mia C.", handle: "E-commerce Seller", text: "Got my disabled IG back in 48 hours. Super clear steps, and support actually replies fast." },
];
```

### src/components/landing/PainPointsSection.tsx
- Badge: "重獲IG演算法青睞" → "Get Back Algorithm Favor"
- Headline: "你的帳號在IG演算法的眼裡值幾分？" → "How does your account score in Instagram's algorithm?"
- Paragraph 1: "You work hard creating great content, but why is your reach getting lower? Can't reach non-followers? Slow account growth? Sometimes even your own followers don't see your posts... Is it shadowban? Algorithm suppression?"
- Paragraph 2: "Your account needs to meet the algorithm's expectations to grow healthily. Instagram's algorithm assigns a credit score to every account — higher scores get more reach, lower scores get suppressed (severe cases get completely blocked). This service gives your IG account a full diagnostic to pinpoint problems and fix them from the algorithm's perspective."
- CTA button: "立即啟動" → "Start Diagnostic Now"
- Right panel title: "造成限流的主要原因" → "Main Causes of Shadowban"
Pain point cards:
1. "帳號信用評級過低" → "Low Account Credit Score"
2. "劣質粉絲比例過高" → "High Ghost Follower Ratio"
3. "互動率過低 / 可疑讚數比例過高" → "Low Engagement Rate / Suspicious Likes"
4. "內容策略錯誤被演算法誤判" → "Content Strategy Triggering Algorithm Flags"

### src/components/landing/HowItWorksSection.tsx
- Badge: "把握黃金恢復期" → "Act Within The Golden Recovery Window"
- Headline: "救援三部曲" → "The Recovery Trilogy"
Steps:
1. number "01", title "Priority Appeal Channels (80% success rate)", description "Works for all major Instagram account loss scenarios including disabled / suspended / permanently banned accounts."
2. number "02", title "Hidden Channels & Escalation Routes", description "9 extra routes + advanced tactics + proven appeal scripts."
3. number "03", title "Direct Access to Central Support Team", description "Get real specialists to diagnose your case and guide the next best step — reply within 24 hours, no guessing."
- CTA button: "立即搶救賬號" → "Recover My Account Now"

### src/components/landing/StatsSection.tsx
- Badge: "IG賬號優化專家" → "IG Account Optimization Experts"
- Headline: "全方位修護IG賬號" → "Full-Service IG Account Recovery"
- Subheadline: "解除限流/提高流量" → "Remove Shadowban / Boost Reach"
Stats:
1. value "3天" → "3 Days", label "解除Shadowban" → "Remove Shadowban"
2. value "100%", label "解除限流保證" → "Shadowban Removal Guaranteed"
3. value "3500+", label "賬號已使用檢測" → "Accounts Diagnosed"
4. value "280%", label "平均觸及提升效益" → "Average Reach Improvement"
- CTA button: "立即檢測你的賬號" → "Diagnose Your Account Now"
Dashboard mockup:
- "最新分析" → "Latest Analysis"
- "粉絲帳號真實性" → "Follower Authenticity"
- "可疑粉絲比例偏高" → "Suspicious follower ratio detected"
- "Joanne HO" stays
- "IG hero analysis" stays
- "內容表現" → "Content Performance"
- "粉絲增長動跡" → "Follower Growth"
- "Good" stays, "53/100" stays
- DoodleChecklist items: "增加互動頻率" → "Increase engagement frequency", "優化社交標籤" → "Optimize hashtag strategy", "分析帳號主體趨勢" → "Analyze account niche trends", "調整內容定位" → "Adjust content positioning"
- "建議行動" → "Recommendations"
- "受眾分析" → "Audience Analysis"

### src/components/landing/PricingSection.tsx
- Section title: "方案詳情" → "Choose Your Plan"

Plan 1 card:
- Title: "實戰手冊" → "The Ultimate IG Recovery Guide"
- Price: "NTD$1980" → "USD$59"
- Sub-price: "HKD$558" → "approx. EUR€50"
- Replace plan1Features array:
```ts
const plan1Features = [
  "Priority Appeal Channels (80% Success Rate)",
  "Hidden Channels & Escalation Routes",
  "7 Advanced Strategies",
  "Direct Access to Instagram Central Support Team",
  "Dedicated support (24 hours reply)",
];
```
- Buy button text: "立即購買" → "Buy Now"
- Change Plan 1 buy button from `<button>` to `<a href="https://shop.unbanhero.com/?add-to-cart=22" target="_blank" rel="noopener noreferrer">` with same className, add `block text-center` to className

Plan 2 card:
- Title: "Meta特殊通道專案" → "Meta Insider Recovery Service"
- Price: "USD$4000起" → "USD$4000"
- Sub-price: "手續費USD$100" → "approx. EUR€3400"
- Replace plan2Features array:
```ts
const plan2Features = [
  "100% Guaranteed Recovery",
  "You Do Nothing. We handle everything.",
  "Works For Instagram and FB Account",
  "Works For Disabled/Hacked/Locked",
  "Full Refund if Account Not Recovered",
];
```
- Contact button text: "立即諮詢" → "Contact Support"
- Change Plan 2 button from `<button>` to `<a href="mailto:support@unbanhero.com">` with same className, add `block text-center`
- Add note after each button (inside the card, below button):
  Plan 1: `<p className="text-xs text-muted-foreground mt-4 text-center">Please note that this is a digital guide, and all sales are final and non-refundable.</p>`
  Plan 2: `<p className="text-xs text-muted-foreground mt-4 text-center">Contact customer support for quotation. Each case is different and the starting price is $4000</p>`

### src/components/landing/FAQSection.tsx
Replace the entire faqData array with:
```ts
const faqData = [
  {
    question: "How does Instagram decide to disable or restore accounts?",
    answer: "Instagram is managed by a set of algorithms (automated computer systems), and in most cases there is no human intervention. Whether an account gets disabled—or restored after being disabled—is determined by these algorithms. Algorithms have a certain error rate, so many accounts get disabled \"for no reason.\"\n\nMost appeal forms submitted by users are also evaluated by these algorithms. Only a small portion receives human review.\n\nThis guide is designed to help you successfully submit appeals through effective channels, increasing the chances of getting a human review (human review is the only way to overturn an incorrect automated decision) and ultimately recovering your account."
  },
  {
    question: "Is there more than one way to appeal?",
    answer: "Most users think there's only one appeal channel — they open the mobile app, submit an appeal, and then feel stuck. In reality, there are several effective appeal channels and more than one method.\n\nThis guide covers all channels and step-by-step instructions for each (8 appeal channels + 9 special methods in one package). You just follow along. Each channel has different reviewers and review mechanisms — if any one of them approves your case, you get your account back.\n\nUsing multiple channels simultaneously greatly increases your chances of success!"
  },
  {
    question: "Is recovery guaranteed?",
    answer: "No channel can guarantee 100% recovery. Some severe violations cannot be reversed. What we can do is dramatically increase your chances of success.\n\nAs long as you haven't committed serious violations, following our guide gives you a very high chance of success — we have people recovering accounts every day.\n\nOur Meta Insider Recovery Service comes with a full refund guarantee if your account is not recovered within 30 days."
  },
  {
    question: "How does Meta Insider Recovery Service work?",
    answer: "The Meta Insider Recovery Service is our premium service where our specialist team handles everything for you. We submit your case directly through Meta's internal priority channels.\n\nStarting price is USD$4,000. Full refund if account not recovered within 30 days (USD$100 handling fee is non-refundable).\n\nContact our support team for a quotation — each case is different."
  },
  {
    question: "How long does the recovery take?",
    answer: "This depends on the individual case. The severity of the violation and Instagram's current case volume both play a role. Our fastest cases have been resolved in as little as 1 day.\n\nIn most cases, following our guide you can expect a response from Instagram within 3 days, with an 80% success rate."
  },
  {
    question: "I have already appealed myself and got nowhere. Could this still work for me?",
    answer: "Yes. If you haven't clearly violated Instagram's Terms of Service, submitting appeals through the special channels provided in this guide still gives you a real chance of recovery.\n\nIf you've already exhausted the standard appeal flow without any response, you must quickly pursue other channels to maximize your chances. Every day you wait is a lost opportunity — account recovery is time-sensitive."
  },
  {
    question: "I received a final decision notification saying my account is permanently disabled. Is there still hope?",
    answer: "Many users receive this notification after appealing through the mobile app: \"We have disabled your account. No one can see or find your account, and you won't be able to use it. All your information will be permanently deleted. You cannot request a review of this decision.\"\n\nMost people assume this is truly the end and give up. In reality, this is the standard process for disabled accounts — it only means the standard mobile app appeal channel is no longer available.\n\nWe've helped over 2,000 users who received this same notification recover their accounts. The key is using the right channels and appeal methods — exactly what this guide provides."
  },
  {
    question: "My appeal has been showing 'In Review' for a long time. Is there still hope?",
    answer: "If your Instagram app shows 'In Review' for more than 24 hours, it likely means the system is stuck and will remain in that state indefinitely. You must immediately submit appeals through other channels.\n\nRemember: the sooner you appeal after being disabled, the higher your chances of recovery. Accounts disabled for more than 30 days without any appeal may be permanently deleted."
  }
];
```

### src/components/landing/VideoTestimonialSection.tsx
- Section title: "聽聽他們怎麼說" → "Hear It From Our Customers"
- Video names: "用戶成功回饋 A" → "Success Story A", B→B, C→C, D→D, E→E, F→F

## After all changes, run this notify command:
openclaw system event --text "Done: insta-rescue English translation complete — all components translated, vite base /us/ set, vercel.json created" --mode now
