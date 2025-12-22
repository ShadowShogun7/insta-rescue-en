import React from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

// PNG Doodle Assets
import swirlArrow from "@/assets/doodles/swirl_arrow_down1.png";
import scribbleUnderline from "@/assets/doodles/scribble_underline.png";
import pointingHandLeft from "@/assets/doodles/pointing_hand_left.png";
import peekingGuy from "@/assets/doodles/peeking_guy.png";

// --- FLOATING DOODLE WRAPPER WITH CONTINUOUS ANIMATION ---
const FloatingDoodle = ({ 
  children, 
  className, 
  delay = 0,
  parallax = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  parallax?: boolean;
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, parallax ? 200 : 0]);
  
  return (
    <motion.div
      style={parallax ? { y } : undefined}
      animate={{ 
        y: parallax ? undefined : [0, -15, 0],
        rotate: [-2, 2, -2] 
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
      className={`absolute pointer-events-none opacity-40 ${className}`}
    >
      {children}
    </motion.div>
  );
};

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


// Accurate 5-point star
const FivePointStar = ({ className, size = 60 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <path 
      d="M50 15 L58 38 L82 38 L63 54 L71 78 L50 63 L29 78 L37 54 L18 38 L42 38 Z" 
      stroke="black" 
      strokeWidth="4" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Yellow-filled sparkle
const YellowSparkle = ({ className, size = 40 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <path 
      d="M50 10 Q50 50 90 50 Q50 50 50 90 Q50 50 10 50 Q50 50 50 10" 
      fill="#FBBF24" 
      stroke="black" 
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


// Wobbly marker underline for prices - using exact provided path
const WobblyUnderline = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 30" fill="none">
    <path 
      d="M10 20 Q50 10 90 25 T170 15" 
      stroke="#9333EA" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Doodle spiral for background texture - using exact provided path
const DoodleSpiral = ({ className }: { className?: string }) => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className={className}>
    <path 
      d="M20 50 Q30 10 50 50 T80 50" 
      stroke="black" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Title underline using PNG
const TitleUnderline = () => (
  <img 
    src={scribbleUnderline} 
    alt="" 
    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-56 h-auto"
  />
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
      {/* Background Star Pattern with increased opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%">
          <pattern id="star-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M50 15 L58 38 L82 38 L63 54 L71 78 L50 63 L29 78 L37 54 L18 38 L42 38 Z" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.35)"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#star-pattern)" />
        </svg>
      </div>

      {/* Floating Doodle Decorations with Parallax */}
      <FloatingDoodle className="top-10 left-[10%]" delay={0.5} parallax>
        <FivePointStar size={60} />
      </FloatingDoodle>
      
      
      <FloatingDoodle className="bottom-20 left-[15%]" delay={2}>
        <YellowSparkle size={45} />
      </FloatingDoodle>
      
      <FloatingDoodle className="top-20 right-[20%]" delay={0.3} parallax>
        <FivePointStar size={40} />
      </FloatingDoodle>
      
      <FloatingDoodle className="bottom-32 right-[8%]" delay={1.5}>
        <YellowSparkle size={35} />
      </FloatingDoodle>
      
      <FloatingDoodle className="top-1/3 left-[3%]" delay={0.8} parallax>
        <FivePointStar size={50} />
      </FloatingDoodle>
      
      
      <FloatingDoodle className="bottom-40 left-[25%]" delay={2.5}>
        <FivePointStar size={35} />
      </FloatingDoodle>
      
      {/* Doodle Spirals for background texture */}
      <FloatingDoodle className="top-1/4 left-[40%]" delay={1.0} parallax>
        <DoodleSpiral />
      </FloatingDoodle>
      
      <FloatingDoodle className="bottom-1/4 right-[30%]" delay={1.7}>
        <DoodleSpiral className="rotate-45" />
      </FloatingDoodle>
      
      <FloatingDoodle className="top-2/3 left-[5%]" delay={2.2} parallax>
        <DoodleSpiral className="-rotate-30" />
      </FloatingDoodle>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative inline-block w-full"
        >
          <h2 className="text-5xl font-black inline-block relative z-10">
            方案詳情
            {/* Swirl Arrow - right of title */}
            <motion.img 
              src={swirlArrow} 
              alt="" 
              className="absolute -top-4 -right-20 w-32 h-auto pointer-events-none"
              animate={{ y: [0, 6, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <TitleUnderline />
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
            {/* Peeking Guy - peeking from left edge of card */}
            <motion.img 
              src={peekingGuy} 
              alt="" 
              className="absolute top-[36px] -left-32 w-32 h-auto z-0 pointer-events-none"
              animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Pointing Hand Left */}
            <motion.img 
              src={pointingHandLeft} 
              alt="" 
              className="absolute top-1/3 -left-24 w-20 h-auto z-20 pointer-events-none hidden lg:block"
              animate={{ x: [0, 8, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 relative z-10">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">實戰手冊</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8 relative inline-block">
                  <h4 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">NTD$1980</h4>
                  <WobblyUnderline className="absolute -bottom-1 left-0 w-full h-4" />
                  <p className="text-xl md:text-2xl font-bold text-muted-foreground mt-4">HKD$558</p>
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
            <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              <div className="bg-purple-600 py-6 text-center border-b-4 border-black">
                <h3 className="text-3xl font-black text-white tracking-wider">Meta特殊通道專案</h3>
              </div>
              <div className="p-10 text-center bg-neo-cream">
                <div className="mb-8 relative inline-block">
                  <h4 className="text-5xl md:text-6xl font-black mb-2 tracking-tight">USD$4000起</h4>
                  <WobblyUnderline className="absolute -bottom-1 left-0 w-full h-4" />
                  <p className="text-xl md:text-2xl font-bold text-muted-foreground mt-4">手續費USD$100</p>
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
