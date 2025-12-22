import { motion } from "framer-motion";
import { DoodleHeart } from "./DoodleIcons";

interface TestimonialCardProps {
  name: string;
  handle: string;
  text: string;
}

const TestimonialCard = ({ name, handle, text }: TestimonialCardProps) => (
  <div className="flex-shrink-0 w-80 bg-background border-3 border-foreground rounded-2xl p-6 neo-shadow mx-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-neo-yellow border-2 border-foreground flex items-center justify-center font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{handle}</p>
      </div>
    </div>
    <p className="text-foreground leading-relaxed mb-4">"{text}"</p>
    <div className="flex justify-end">
      <DoodleHeart />
    </div>
  </div>
);

const SocialProofSection = () => {
  const testimonials = [
    { name: "Alex C.", handle: "@alex_creates", text: "以為我的商務帳號沒救了，他們在24小時內就幫我拿回來！太神奇了。" },
    { name: "Sarah L.", handle: "@sarahstyle", text: "不用給密碼真的讓我放心很多。專業又快速的服務。" },
    { name: "Mark T.", handle: "@markymark", text: "完全是救援專家。不成功不收費的承諾是真的。" },
    { name: "Jenny W.", handle: "@jenny_foodie", text: "我的十萬粉絲帳號終於回來了，感謝 IG-HERO 團隊！" },
  ];

  return (
    <section className="py-20 bg-neo-mint/30 overflow-hidden relative">
      {/* Floating Doodle Decoration */}
      <motion.div
        className="absolute top-10 right-10 text-6xl"
        animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💬
      </motion.div>

      <div className="container mx-auto px-6 mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-foreground relative inline-block w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          他們都成功找回了帳號
          {/* Hand-drawn underline */}
          <svg
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-72 h-4"
            viewBox="0 0 300 15"
            fill="none"
          >
            <motion.path
              d="M5 10 Q75 5, 150 10 T295 8"
              stroke="hsl(var(--neo-coral))"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </svg>
        </motion.h2>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="flex animate-marquee-testimonials hover:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} name={t.name} handle={t.handle} text={t.text} />
        ))}
      </div>
    </section>
  );
};

export default SocialProofSection;
