import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => (
  <motion.div
    className="relative bg-background border-3 border-foreground rounded-3xl p-8 neo-shadow"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Hand-drawn circle around number */}
    <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          stroke="hsl(var(--neo-yellow))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 4"
          fill="hsl(var(--background))"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </svg>
      <span className="relative z-10 font-bold text-xl text-foreground">{number}</span>
    </div>

    <div className="ml-8">
      <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">{title}</h4>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // useScroll hooks into the scroll progress of this specific section container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  // Map scroll progress (0 to 1) to SVG path length (0 to 1)
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const steps = [
    { 
      number: "01", 
      title: "獨家-歐洲版申訴取道（成功率80%以上）", 
      description: "填寫簡單表單，告訴我們您的帳號狀況。無需提供密碼。" 
    },
    { 
      number: "02", 
      title: "9大隱藏管道", 
      description: "我們分析被封原因，並透過內部渠道代您提交專業申訴。" 
    },
    { 
      number: "03", 
      title: "聯絡IG官方真人客服", 
      description: "等待官方審核通過。確認您能正常登入後，我們才收取費用。" 
    },
  ];

  return (
    <section className="py-24 bg-neo-lavender/20 relative overflow-hidden" ref={ref}>
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-5xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🔧
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-5xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✨
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-neo-yellow border-2 border-foreground rounded-full px-6 py-2 text-sm font-bold mb-4 neo-shadow">
            把握黃金恢復期
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            救援三部曲
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* THE SCROLL-DRAWN SVG PATH LINE */}
          <svg
            className="absolute left-2 top-0 w-8 h-full z-0"
            viewBox="0 0 32 600"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M16 0 L16 600"
              stroke="hsl(var(--neo-pink))"
              strokeWidth="4"
              strokeDasharray="12 8"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength }}
            />
          </svg>

          {/* The Steps */}
          <div className="relative z-10 space-y-12 pl-12">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="neo-button bg-neo-yellow text-foreground font-bold text-lg px-10 py-4 rounded-full"
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            馬上開始第一步 →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
