import { motion } from 'framer-motion';

export const ChatTypingIndicator = () => {
  return (
    <div className="flex items-center gap-1 px-4 py-2 bg-muted border-[3px] border-foreground rounded-2xl w-fit neo-shadow-sm">
      {[0, 0.2, 0.4].map((delay, i) => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-foreground rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
