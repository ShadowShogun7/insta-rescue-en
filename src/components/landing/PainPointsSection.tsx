import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.1 } }
};

const painPoints = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="17" cy="20" r="2.5" fill="currentColor"/>
        <circle cx="31" cy="20" r="2.5" fill="currentColor"/>
        <path d="M16 32C16 32 19 28 24 28C29 28 32 32 32 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "帳號信用評級過低"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C18 6 14 10 14 16V20C14 22 12 24 12 24H36C36 24 34 22 34 20V16C34 10 30 6 24 6Z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="19" cy="16" r="2" fill="currentColor"/>
        <circle cx="29" cy="16" r="2" fill="currentColor"/>
        <path d="M14 24V32C14 38 18 42 24 42C30 42 34 38 34 32V24" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      </svg>
    ),
    title: "劣質粉絲比例過高"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42L12 28C8 24 8 18 12 14C16 10 22 10 24 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M24 42L36 28C40 24 40 18 36 14C32 10 26 10 24 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <line x1="18" y1="18" x2="30" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "互動率過低 / 可疑讚數比例過高"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <line x1="12" y1="12" x2="36" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "內容策略錯誤被演算法誤判"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
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
              className="text-primary font-medium text-sm tracking-wide"
            >
              重獲IG演算法青睞
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight"
            >
              你的帳號在IG演算法的眼裡值幾分？
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                你非常努力經營帳號創作好的內容，但為什麼流量越來越低？觸及不到非粉絲？賬號成長緩慢？甚至有時連自己的粉絲都看不到你貼文更新...是不是被限流？被Shadowban？
              </p>
              <p>
                擁有符合演算法期待值的數據，賬號才能健康成長。IG演算法為每個賬號都設有信用評級，評級高就能得到更多流量，評級低就會被降低流量（嚴重甚至被完全封鎖流量）。而影響評級的因素非常多。此方案將全方位透析你的IG賬號，避免誤踩演算法紅線，精準鎖定問題點，助你輕鬆對症下藥，從IG演算法的角度切入整頓賬號，提升流量。
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow group"
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
              className="text-xl md:text-2xl font-bold text-foreground text-center lg:text-left"
            >
              造成限流的主要原因
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4"
                >
                  <div className="text-primary">
                    {point.icon}
                  </div>
                  <p className="font-semibold text-foreground text-sm md:text-base leading-snug">
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
