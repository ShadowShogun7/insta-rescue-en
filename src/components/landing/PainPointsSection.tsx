import { motion, Variants } from "framer-motion";
import { DoodleCheckCircle, DoodleBrokenLink } from "./DoodleIcons";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.15 } }
};
const PainPointsSection = () => {
  const problems = [
    "❌ 被系統誤判為機器人",
    "❌ 遭人惡意大量檢舉",
    "❌ 不小心違反社群守則",
    "🤔 申訴按鈕完全沒反應...",
  ];

  const solutions = [
    "✅ Recovery專員全程1對1協助你",
    "✅ 2000+成功案例-撰寫最高成功率申訴信",
    "✅ 直達[IG官方中央支援團隊]",
    "🎉 成功率80%以上",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Pain (Problem) */}
          <motion.div
            className="bg-neo-coral/10 border-3 border-foreground rounded-3xl p-8 neo-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <DoodleBrokenLink />
            </motion.div>
            
            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6"
            >
              為什麼帳號會被封？
            </motion.h3>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="text-lg text-foreground/80 bg-background/50 rounded-xl p-4 border-2 border-foreground/20"
                >
                  {problem}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* The Fix (Solution) */}
          <motion.div
            className="bg-neo-green/10 border-3 border-foreground rounded-3xl p-8 neo-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <DoodleCheckCircle />
            </motion.div>
            
            <motion.h3
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6"
            >
              我們如何協助？
            </motion.h3>

            <motion.ul variants={staggerContainer} className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="text-lg text-foreground/80 bg-background/50 rounded-xl p-4 border-2 border-foreground/20"
                >
                  {solution}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
