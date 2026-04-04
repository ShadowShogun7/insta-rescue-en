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
    title: "Low Account Credit Score"
  },
  {
    icon: <DoodleGhost />,
    title: "High Ghost Follower Ratio"
  },
  {
    icon: <DoodleBrokenHeart />,
    title: "Low Engagement Rate / Suspicious Likes"
  },
  {
    icon: <DoodleNoSign />,
    title: "Content Strategy Triggering Algorithm Flags"
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
              Get Back Algorithm Favor
            </motion.span>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight"
            >
              How does your account score in Instagram's algorithm?
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                You work hard creating great content, but why is your reach getting lower? Can't reach non-followers? Slow account growth? Sometimes even your own followers don't see your posts... Is it shadowban? Algorithm suppression?
              </p>
              <p>
                Your account needs to meet the algorithm's expectations to grow healthily. Instagram's algorithm assigns a credit score to every account — higher scores get more reach, lower scores get suppressed (severe cases get completely blocked). This service gives your IG account a full diagnostic to pinpoint problems and fix them from the algorithm's perspective.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="neo-button rounded-xl bg-primary text-primary-foreground px-8 py-4 text-lg font-bold group"
              >
                Start Diagnostic Now
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
              Main Causes of Shadowban
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
