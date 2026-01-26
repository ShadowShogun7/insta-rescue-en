import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.12 } }
};

// Hand-drawn style SVG icons
const DoodleSadFace = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    {/* Wobbly circle */}
    <path 
      d="M28 6C15 5 6 16 6 28C5 40 15 50 28 50C41 51 50 40 50 28C51 15 40 6 28 6Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
      style={{ transform: 'rotate(-2deg)', transformOrigin: 'center' }}
    />
    {/* Eyes - hand drawn dots */}
    <circle cx="19" cy="22" r="3" fill="currentColor"/>
    <circle cx="37" cy="22" r="3" fill="currentColor"/>
    {/* Sad mouth - wobbly */}
    <path 
      d="M18 38C20 33 24 31 28 31C32 31 36 33 38 38" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const DoodleGhost = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    {/* Ghost body - wobbly */}
    <path 
      d="M16 48V24C16 14 21 8 28 8C35 8 40 14 40 24V48L36 44L32 48L28 44L24 48L20 44L16 48Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Eyes */}
    <circle cx="22" cy="24" r="3" fill="currentColor"/>
    <circle cx="34" cy="24" r="3" fill="currentColor"/>
    {/* Mouth */}
    <ellipse cx="28" cy="32" rx="3" ry="2" fill="currentColor"/>
  </svg>
);

const DoodleBrokenHeart = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    {/* Left half of heart */}
    <path 
      d="M28 48L12 32C6 26 6 18 12 12C18 6 24 8 28 14" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Right half of heart */}
    <path 
      d="M28 48L44 32C50 26 50 18 44 12C38 6 32 8 28 14" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Break/crack line */}
    <path 
      d="M26 20L30 28L24 36L28 44" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const DoodleNoSign = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    {/* Wobbly circle */}
    <path 
      d="M28 6C15 5 6 16 6 28C5 40 15 50 28 50C41 51 50 40 50 28C51 15 40 6 28 6Z" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Diagonal line - hand drawn */}
    <path 
      d="M14 14L42 42" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const painPoints = [
  {
    icon: <DoodleSadFace />,
    title: "帳號信用評級過低"
  },
  {
    icon: <DoodleGhost />,
    title: "劣質粉絲比例過高"
  },
  {
    icon: <DoodleBrokenHeart />,
    title: "互動率過低 / 可疑讚數比例過高"
  },
  {
    icon: <DoodleNoSign />,
    title: "內容策略錯誤被演算法誤判"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-primary font-bold text-sm tracking-wide border-2 border-foreground bg-neo-lavender/30 px-3 py-1 rounded-full neo-shadow-sm"
            >
              重獲IG演算法青睞
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight"
            >
              你的帳號在IG演算法的眼裡值幾分？
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                你非常努力經營帳號創作好的內容，但為什麼流量越來越低？觸及不到非粉絲？賬號成長緩慢？甚至有時連自己的粉絲都看不到你貼文更新...是不是被限流？被Shadowban？
              </p>
              <p>
                擁有符合演算法期待值的數據，賬號才能健康成長。IG演算法為每個賬號都設有信用評級，評級高就能得到更多流量，評級低就會被降低流量（嚴重甚至被完全封鎖流量）。而影響評級的因素非常多。此方案將全方位透析你的IG賬號，避免誤踩演算法紅線，精準鎖定問題點，助你輕鬆對症下藥，從IG演算法的角度切入整頓賬號，提升流量。
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neo-button rounded-xl bg-primary text-primary-foreground px-8 py-4 text-lg font-bold group"
              >
                立即啟動 
                <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h3 
              variants={fadeInUp}
              className="text-xl md:text-2xl font-black text-foreground text-center"
            >
              造成限流的主要原因
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card border-3 border-foreground rounded-2xl p-6 neo-shadow flex flex-col items-center text-center space-y-4 hover:bg-neo-lavender/20 transition-colors"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -3, 3, -2, 0],
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {point.icon}
                  </motion.div>
                  <p className="font-bold text-foreground text-sm md:text-base leading-snug">
                    {point.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
