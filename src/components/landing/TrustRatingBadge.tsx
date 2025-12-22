import { motion } from 'framer-motion';

// Hand-Drawn Wobbly Star
const DoodleStar = ({ delay }: { delay: number }) => (
  <motion.svg
    initial={{ scale: 0, rotate: -20 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 260, 
      damping: 20, 
      delay 
    }}
    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="text-yellow-400"
  >
    <path 
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
      fill="currentColor" 
      stroke="black" 
      strokeWidth="2" 
      strokeLinejoin="round" 
    />
  </motion.svg>
);

const TrustRatingBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="inline-flex items-center gap-3 bg-background border-4 border-foreground px-5 py-2 rounded-full shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-default"
    >
      {/* 5 Stars Group */}
      <div className="flex -space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <DoodleStar key={i} delay={0.8 + (i * 0.1)} />
        ))}
      </div>

      {/* Rating Text */}
      <div className="flex items-center gap-2 border-l-2 border-foreground pl-3">
        <span className="font-black text-lg tracking-tight">4.9/5</span>
        <span className="font-bold text-muted-foreground text-sm whitespace-nowrap">
          (1,265+ 個好評)
        </span>
        
        {/* Small "Magic Sparkle" Doodle */}
        <motion.svg 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          className="fill-primary"
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default TrustRatingBadge;
