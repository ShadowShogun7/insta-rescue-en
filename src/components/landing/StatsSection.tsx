import { motion, type Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const createFloatAnimation = (delay: number = 0): { y: number[]; rotate: number[]; transition: Transition } => ({
  y: [0, -8, 0],
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay
  }
});

const stats = [
  { value: "3天", label: "解除Shadowban", delay: 0 },
  { value: "100%", label: "解除限流保證", delay: 0.1 },
  { value: "3500+", label: "賬號已使用檢測", delay: 0.2 },
  { value: "280%", label: "平均觸及提升效益", delay: 0.3 },
];

// Hand-drawn SVG components for dashboard
const DoodlePieChart = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <circle cx="50" cy="50" r="40" fill="hsl(var(--neo-lavender))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M50 50 L50 10 A40 40 0 0 1 85 65 Z" fill="hsl(var(--neo-pink))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <path d="M50 50 L85 65 A40 40 0 0 1 30 82 Z" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="hsl(var(--background))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

const DoodleBarChart = () => (
  <svg viewBox="0 0 120 80" className="w-full h-full">
    <rect x="10" y="50" width="20" height="25" rx="3" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="35" y="30" width="20" height="45" rx="3" fill="hsl(var(--neo-pink))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="60" y="15" width="20" height="60" rx="3" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <rect x="85" y="35" width="20" height="40" rx="3" fill="hsl(var(--neo-lavender))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

const DoodleLineGraph = () => (
  <svg viewBox="0 0 140 80" className="w-full h-full">
    {/* Grid lines */}
    <line x1="20" y1="70" x2="130" y2="70" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="50" x2="130" y2="50" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="30" x2="130" y2="30" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.3" />
    {/* Line path */}
    <path 
      d="M25 60 Q40 55, 50 45 T75 35 T100 25 T125 15" 
      fill="none" 
      stroke="hsl(var(--neo-pink))" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    {/* Data points */}
    <circle cx="25" cy="60" r="5" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="50" cy="45" r="5" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="75" cy="35" r="5" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="100" cy="25" r="5" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <circle cx="125" cy="15" r="5" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--foreground))" strokeWidth="2" />
  </svg>
);

const DoodleScore = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <span className="text-lg font-bold text-primary">Good</span>
    <div className="flex items-baseline">
      <span className="text-4xl font-black text-foreground">53</span>
      <span className="text-lg text-muted-foreground">/100</span>
    </div>
  </div>
);

const DoodleProfile = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full bg-neo-pink border-2 border-foreground flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="15" r="8" fill="hsl(var(--foreground))" />
        <ellipse cx="20" cy="35" rx="12" ry="10" fill="hsl(var(--foreground))" />
      </svg>
    </div>
    <div>
      <p className="font-bold text-sm">Joanne HO</p>
      <p className="text-xs text-muted-foreground">IG hero analysis</p>
    </div>
  </div>
);

const DoodleInstagramCard = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-neo-pink flex items-center justify-center">
        <span className="text-primary-foreground text-xs font-bold">IG</span>
      </div>
      <span className="text-sm font-medium">Instagram</span>
    </div>
    <div className="flex gap-3 text-xs">
      <span className="flex items-center gap-1">❤️ 1.1K</span>
      <span className="flex items-center gap-1">💬 224</span>
      <span className="flex items-center gap-1">📤 51K</span>
    </div>
  </div>
);

const DoodleChecklist = () => (
  <div className="space-y-1.5">
    <p className="font-bold text-sm mb-2">建議行動</p>
    {["增加互動頻率", "優化社交標籤", "分析帳號主體趨勢", "調整內容定位"].map((item, i) => (
      <div key={i} className="flex items-center gap-2 text-xs">
        <div className="w-4 h-4 rounded border-2 border-foreground bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-[10px]">✓</span>
        </div>
        <span>{item}</span>
      </div>
    ))}
  </div>
);

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Panel - Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-2 bg-neo-lavender border-3 border-foreground rounded-full font-bold text-sm neo-shadow">
                ✨ IG賬號優化專家
              </span>
            </motion.div>

            {/* Headlines */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                全方位修護IG賬號
              </h2>
              <p className="text-xl md:text-2xl text-primary font-bold">
                解除限流/提高流量
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay, duration: 0.4 }}
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="bg-background border-3 border-foreground rounded-2xl p-5 neo-shadow"
                >
                  <p className="text-3xl md:text-4xl font-black text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="neo-button flex items-center gap-2 text-lg"
              >
                立即檢測你的賬號
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Panel - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {/* Row 1 */}
              <motion.div
                animate={createFloatAnimation(0)}
                className="bg-background border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <p className="text-xs font-bold mb-1">最新分析</p>
                <p className="text-[10px] text-muted-foreground">📅 12 July 2023</p>
              </motion.div>

              <motion.div
                animate={createFloatAnimation(0.5)}
                className="bg-neo-lavender/50 border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <p className="text-xs font-bold mb-1">粉絲帳號真實性</p>
                <p className="text-[10px] text-muted-foreground">可疑粉絲比例偏高</p>
              </motion.div>

              <motion.div
                animate={createFloatAnimation(1)}
                className="bg-background border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <DoodleProfile />
              </motion.div>

              {/* Row 2 */}
              <motion.div
                animate={createFloatAnimation(0.3)}
                className="bg-background border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <p className="text-xs font-bold mb-2">內容表現</p>
                <div className="h-16">
                  <DoodlePieChart />
                </div>
              </motion.div>

              <motion.div
                animate={createFloatAnimation(0.7)}
                className="col-span-1 bg-neo-yellow/30 border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <p className="text-xs font-bold mb-2">粉絲增長動跡</p>
                <div className="h-12">
                  <DoodleLineGraph />
                </div>
              </motion.div>

              <motion.div
                animate={createFloatAnimation(1.2)}
                className="bg-background border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <DoodleInstagramCard />
              </motion.div>

              {/* Row 3 */}
              <motion.div
                animate={createFloatAnimation(0.4)}
                className="bg-neo-pink/30 border-3 border-foreground rounded-2xl p-4 neo-shadow"
              >
                <DoodleScore />
              </motion.div>

              <motion.div
                animate={createFloatAnimation(0.9)}
                className="bg-background border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <DoodleChecklist />
              </motion.div>

              <motion.div
                animate={createFloatAnimation(1.4)}
                className="bg-neo-lavender/30 border-3 border-foreground rounded-2xl p-3 neo-shadow"
              >
                <p className="text-xs font-bold mb-2">受眾分析</p>
                <div className="h-12">
                  <DoodleBarChart />
                </div>
              </motion.div>
            </div>

            {/* Decorative sparkles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 text-primary text-2xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -left-2 text-neo-pink text-2xl"
            >
              ✧
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
