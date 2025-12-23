import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScribbleUnderline from "./ScribbleUnderline";
import DoodleArrow from "./DoodleArrow";
import TrustRatingBadge from "./TrustRatingBadge";
const HeroContent = () => {
  const headlineWords = ["Instagram", "帳號被封？"];
  return <div className="space-y-6">
      {/* Main headline with stagger animation */}
      <div className="space-y-2">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="flex flex-wrap gap-x-4">
          <span className="relative inline-block">
            <motion.span initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-4xl md:text-5xl lg:text-6xl font-black">
              IG帳號被封
            </motion.span>
          </span>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="relative inline-block">
          <span className="text-4xl md:text-5xl lg:text-6xl font-black text-primary">
            求訴無門？
          </span>
          <ScribbleUnderline />
        </motion.div>
      </div>

      {/* Subtitle */}
      <motion.p initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.4
    }} className="text-lg md:text-xl text-muted-foreground max-w-md">找回被停用的IG賬號 – 完整戰略手冊<br />
        停用/被盜/被鎖-都適用
      </motion.p>

      {/* CTA Button + Trust Rating Badge Stack */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.6
    }} className="flex flex-col items-start gap-4 pt-4">
        <div className="relative">
          <motion.button whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} className="neo-button rounded-xl bg-primary text-primary-foreground px-8 py-4 text-lg font-bold group">
            立即搶救賬號 <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </motion.button>
          <DoodleArrow />
        </div>

        {/* Trust Rating Badge - Always below CTA */}
        <TrustRatingBadge />
      </motion.div>

      {/* Trust badges */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.8
    }} className="flex flex-wrap gap-3 pt-4">
        <TrustBadge text="✓ 綠色通道" />
        <TrustBadge text="✓ 成功率80%以上" />
        <TrustBadge text="✓ 2000+成功案例" />
      </motion.div>
    </div>;
};
const TrustBadge = ({
  text
}: {
  text: string;
}) => <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted border-2 border-foreground text-sm font-medium neo-shadow-sm">
    {text}
  </span>;
export default HeroContent;