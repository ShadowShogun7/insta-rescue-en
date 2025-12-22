import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- HAND-DRAWN SVG ASSETS ---
const DoodleCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600 flex-shrink-0 mt-1 mr-3">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoodleCartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const DoodleInfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const DoodleCharacterPeeking = () => (
  <motion.svg 
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
    width="150" height="200" viewBox="0 0 150 200" fill="none" className="absolute -left-20 bottom-20 hidden lg:block z-0"
  >
    <path d="M75 180 C 30 180, 10 150, 10 100 C 10 50, 40 10, 75 10 C 110 10, 140 50, 140 100" stroke="black" strokeWidth="4" fill="white"/>
    <circle cx="55" cy="80" r="10" fill="black"/>
    <circle cx="95" cy="80" r="10" fill="black"/>
    <path d="M55 120 Q 75 140, 95 120" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <circle cx="55" cy="80" r="25" stroke="black" strokeWidth="4" fill="none"/>
    <circle cx="95" cy="80" r="25" stroke="black" strokeWidth="4" fill="none"/>
    <line x1="80" y1="80" x2="70" y2="80" stroke="black" strokeWidth="4"/>
  </motion.svg>
);

const DoodleHandPointing = () => (
  <motion.svg
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
    width="100" height="100" viewBox="0 0 100 100" fill="none" className="absolute -right-12 top-1/2 hidden lg:block z-20"
  >
    <path d="M10,50 L60,50 L50,40 M60,50 L50,60" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M80,30 Q95,50 80,70" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </motion.svg>
);

// --- ANIMATION VARIANTS ---
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
};

// --- MAIN PRICING SECTION COMPONENT ---
const PricingSection = () => {
  const plan1Features = [
    "8個申訴渠道 - 使用方法詳解",
    "9種特殊申訴法詳解",
    "停用超過30天特殊申訴法",
    "被鎖/無法登入破解方法",
    "收不到驗證碼破解方法",
    "被盜用的賬號找回方法",
    "聯絡真人客服經理",
    "向美國司法部申訴",
    "美國商業改進局協助申訴",
    "如何多渠道同步申訴"
  ];

  const plan2Features = [
    "此報價為USD(美金)",
    "救回帳號成功率95%以上",
    "30天內沒有成功全額退",
    "USD$100手續費不能退",
    "Meta經理直接內部優先渠道提交",
    "可救facebook帳號",
    "可救instagram帳號",
    "適用於停用，被盜，被鎖"
  ];

  return (
    <section className="py-24 bg-neo-cream relative overflow-hidden">
      {/* Floating Background Star Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%">
          <pattern id="star-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 10L55 35L80 35L60 55L70 80L50 65L30 80L40 55L20 35L45 35Z" fill="none" stroke="black" strokeWidth="2" transform="scale(0.5)"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#star-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-5xl font-black inline-block relative z-10">
            方案詳情
            <svg className="absolute -top-10 -right-12 w-16 h-16 text-purple-500 rotate-12" viewBox="0 0 100 100" fill="none">
              <path d="M20,20 Q50,5 80,20 M80,20 L70,10 M80,20 L70,30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-start relative"
        >
          {/* --- PLAN 1 CARD: 實戰手冊 --- */}
          <motion.div variants={cardVariants} className="relative group z-10">
            <DoodleCharacterPeeking />
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">實戰手冊</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8">
                  <h4 className="text-6xl font-black mb-2 tracking-tight">NTD$1980</h4>
                  <p className="text-2xl font-bold text-muted-foreground">HKD$558</p>
                </div>
                <ul className="text-left space-y-4 mb-10 inline-block">
                  {plan1Features.map((feature, index) => (
                    <li key={index} className="flex items-start text-lg font-bold text-foreground">
                      <DoodleCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white text-2xl font-black py-4 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center justify-center">
                  立即購買 <DoodleCartIcon />
                </button>
              </div>
            </div>
          </motion.div>

          {/* --- PLAN 2 CARD: Meta特殊通道 --- */}
          <motion.div variants={cardVariants} className="relative group z-10">
            <DoodleHandPointing />
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">Meta特殊通道專案</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8">
                  <h4 className="text-6xl font-black mb-2 tracking-tight">USD$4000起</h4>
                  <p className="text-2xl font-bold text-muted-foreground">手續費USD$100</p>
                </div>
                <ul className="text-left space-y-4 mb-10 inline-block">
                  {plan2Features.map((feature, index) => (
                    <li key={index} className="flex items-start text-lg font-bold text-foreground">
                      <DoodleCheck />
                      <span className={feature.includes("不退") || feature.includes("USD") ? "decoration-wavy underline decoration-purple-400" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-neo-cream text-foreground text-2xl font-black py-4 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center justify-center hover:bg-neo-yellow">
                  立即諮詢 <DoodleInfoIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
