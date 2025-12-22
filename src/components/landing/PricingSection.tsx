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

// Detailed character with glasses and phone
const DoodleCharacterWithPhone = () => (
  <motion.svg 
    initial={{ x: -80, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
    width="180" height="280" viewBox="0 0 180 280" fill="none" 
    className="absolute -left-24 bottom-10 hidden lg:block z-20"
  >
    {/* Body */}
    <ellipse cx="90" cy="220" rx="50" ry="55" fill="white" stroke="black" strokeWidth="3"/>
    
    {/* Head */}
    <circle cx="90" cy="100" r="55" fill="white" stroke="black" strokeWidth="3"/>
    
    {/* Hair tuft */}
    <path d="M70 50 Q 80 30, 90 45 Q 100 30, 110 50" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Glasses */}
    <circle cx="70" cy="95" r="22" stroke="black" strokeWidth="3" fill="none"/>
    <circle cx="110" cy="95" r="22" stroke="black" strokeWidth="3" fill="none"/>
    <line x1="92" y1="95" x2="88" y2="95" stroke="black" strokeWidth="3"/>
    <line x1="48" y1="90" x2="40" y2="85" stroke="black" strokeWidth="3"/>
    <line x1="132" y1="90" x2="140" y2="85" stroke="black" strokeWidth="3"/>
    
    {/* Eyes behind glasses */}
    <circle cx="70" cy="95" r="6" fill="black"/>
    <circle cx="110" cy="95" r="6" fill="black"/>
    <circle cx="72" cy="93" r="2" fill="white"/>
    <circle cx="112" cy="93" r="2" fill="white"/>
    
    {/* Smile */}
    <path d="M75 125 Q 90 140, 105 125" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Left arm holding phone */}
    <path d="M45 200 Q 20 180, 25 140 Q 28 120, 45 115" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Phone in hand */}
    <rect x="15" y="110" width="25" height="40" rx="4" fill="white" stroke="black" strokeWidth="2"/>
    <rect x="18" y="115" width="19" height="28" rx="2" fill="#E8E8E8" stroke="black" strokeWidth="1"/>
    <circle cx="27.5" cy="147" r="2" stroke="black" strokeWidth="1" fill="none"/>
    
    {/* Right arm waving */}
    <path d="M135 200 Q 155 185, 150 160" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Hand wave lines */}
    <path d="M155 150 L165 145" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <path d="M158 160 L170 158" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </motion.svg>
);

// Left pointing hand 
const DoodleHandLeft = () => (
  <motion.svg
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
    viewport={{ once: true }}
    width="120" height="80" viewBox="0 0 120 80" fill="none" 
    className="absolute -left-28 top-1/3 hidden lg:block z-20"
  >
    {/* Arm */}
    <path d="M5 40 Q 30 35, 50 40" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/>
    {/* Hand */}
    <ellipse cx="60" cy="40" rx="15" ry="12" fill="white" stroke="black" strokeWidth="3"/>
    {/* Pointing finger */}
    <path d="M75 40 L 115 40" stroke="black" strokeWidth="4" strokeLinecap="round"/>
    {/* Arrow tip */}
    <path d="M105 32 L115 40 L105 48" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </motion.svg>
);

// Right pointing hand with decorative curves
const DoodleHandRight = () => (
  <motion.svg
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
    viewport={{ once: true }}
    width="140" height="120" viewBox="0 0 140 120" fill="none" 
    className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block z-20"
  >
    {/* Decorative curve */}
    <path d="M130 20 Q 140 60, 130 100" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round"/>
    
    {/* Arm */}
    <path d="M130 60 Q 100 55, 80 60" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round"/>
    
    {/* Hand */}
    <ellipse cx="65" cy="60" rx="18" ry="14" fill="white" stroke="black" strokeWidth="3"/>
    
    {/* Pointing finger */}
    <path d="M47 60 L 10 60" stroke="black" strokeWidth="4" strokeLinecap="round"/>
    
    {/* Arrow tip */}
    <path d="M20 52 L10 60 L20 68" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    
    {/* Motion lines */}
    <path d="M25 45 L35 48" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    <path d="M25 75 L35 72" stroke="black" strokeWidth="2" strokeLinecap="round"/>
  </motion.svg>
);

// Floating sparkle/star decorations
const FloatingSparkle = ({ className, delay = 0, size = 24 }: { className?: string; delay?: number; size?: number }) => (
  <motion.svg
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4, type: "spring" }}
    viewport={{ once: true }}
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    className={className}
  >
    <path 
      d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" 
      fill="black"
    />
  </motion.svg>
);

const FloatingStar = ({ className, delay = 0, size = 32 }: { className?: string; delay?: number; size?: number }) => (
  <motion.svg
    initial={{ opacity: 0, rotate: -45 }}
    whileInView={{ opacity: 1, rotate: 0 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    viewport={{ once: true }}
    width={size} height={size} viewBox="0 0 32 32" fill="none"
    className={className}
  >
    <path 
      d="M16 2L18.5 12.5L29 16L18.5 19.5L16 30L13.5 19.5L3 16L13.5 12.5L16 2Z" 
      stroke="black" 
      strokeWidth="2" 
      fill="none"
    />
  </motion.svg>
);

// Title underline squiggle
const TitleUnderline = () => (
  <svg 
    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-4" 
    viewBox="0 0 200 20" 
    fill="none"
  >
    <path 
      d="M5 10 Q 25 2, 50 10 T 100 10 T 150 10 T 195 10" 
      stroke="black" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
  </svg>
);

// Curved arrow decoration near title
const CurvedArrow = () => (
  <motion.svg 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    viewport={{ once: true }}
    className="absolute -top-8 -right-16 w-20 h-20 rotate-12" 
    viewBox="0 0 80 80" 
    fill="none"
  >
    <path 
      d="M15 50 Q 20 20, 50 15 Q 65 12, 70 25" 
      stroke="black" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round"
    />
    <path 
      d="M62 18 L70 25 L63 32" 
      stroke="black" 
      strokeWidth="3" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
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
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <pattern id="star-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M60 15L65 45L95 45L70 65L80 95L60 75L40 95L50 65L25 45L55 45Z" fill="none" stroke="black" strokeWidth="1.5" transform="scale(0.4)"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#star-pattern)" />
        </svg>
      </div>

      {/* Floating Sparkle Decorations */}
      <FloatingSparkle className="absolute top-20 right-[15%]" delay={0.2} size={20} />
      <FloatingSparkle className="absolute top-32 left-[10%]" delay={0.4} size={16} />
      <FloatingStar className="absolute top-16 right-[25%]" delay={0.3} size={28} />
      <FloatingStar className="absolute bottom-32 left-[8%]" delay={0.6} size={24} />
      <FloatingSparkle className="absolute bottom-40 right-[12%]" delay={0.5} size={18} />
      <FloatingStar className="absolute top-1/2 right-[5%]" delay={0.7} size={22} />
      <FloatingSparkle className="absolute top-1/3 left-[5%]" delay={0.35} size={14} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative inline-block w-full"
        >
          <h2 className="text-5xl font-black inline-block relative z-10">
            方案詳情
            <TitleUnderline />
            <CurvedArrow />
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start relative"
        >
          {/* --- PLAN 1 CARD: 實戰手冊 --- */}
          <motion.div variants={cardVariants} className="relative group z-10">
            <DoodleCharacterWithPhone />
            <DoodleHandLeft />
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">實戰手冊</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8">
                  <h4 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">NTD$1980</h4>
                  <p className="text-xl md:text-2xl font-bold text-muted-foreground">HKD$558</p>
                </div>
                <ul className="text-left space-y-4 mb-10 inline-block">
                  {plan1Features.map((feature, index) => (
                    <li key={index} className="flex items-start text-base md:text-lg font-bold text-foreground">
                      <DoodleCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white text-xl md:text-2xl font-black py-4 rounded-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center justify-center">
                  立即購買 <DoodleCartIcon />
                </button>
              </div>
            </div>
          </motion.div>

          {/* --- PLAN 2 CARD: Meta特殊通道 --- */}
          <motion.div variants={cardVariants} className="relative group z-10">
            <DoodleHandRight />
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">Meta特殊通道專案</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8">
                  <h4 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">USD$4000起</h4>
                  <p className="text-xl md:text-2xl font-bold text-muted-foreground">手續費USD$100</p>
                </div>
                <ul className="text-left space-y-4 mb-10 inline-block">
                  {plan2Features.map((feature, index) => (
                    <li key={index} className="flex items-start text-base md:text-lg font-bold text-foreground">
                      <DoodleCheck />
                      <span className={feature.includes("不退") || feature.includes("USD") ? "decoration-wavy underline decoration-purple-400" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-neo-cream text-foreground text-xl md:text-2xl font-black py-4 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex items-center justify-center hover:bg-neo-yellow">
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
