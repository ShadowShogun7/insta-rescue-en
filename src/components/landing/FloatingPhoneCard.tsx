import { motion } from "framer-motion";
import { Unlock, Sparkles } from "lucide-react";

const FloatingPhoneCard = () => {
  return (
    <div className="relative overflow-visible">
      {/* Spinning background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <svg
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] slow-spin opacity-50"
          viewBox="0 0 200 200"
          style={{ filter: 'drop-shadow(0 0 20px hsl(var(--accent) / 0.5))' }}
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="1.5"
            strokeDasharray="12 6"
          />
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="1.5"
            strokeDasharray="6 12"
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="hsl(var(--pink))"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {/* Floating sparkles */}
      <motion.div
        className="absolute -top-4 -right-4 text-yellow"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles size={32} className="pulse-glow" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 -left-8 text-pink"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <Sparkles size={24} />
      </motion.div>

      {/* Main phone card */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          rotate: -3
        }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="neo-shadow-lg rounded-3xl bg-card border-[3px] border-foreground p-6 w-[280px] md:w-[320px]"
        >
          {/* Card header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-accent flex items-center justify-center border-2 border-foreground">
              <span className="text-xl">📱</span>
            </div>
            <div>
              <p className="font-bold text-sm">Instagram</p>
              <p className="text-xs text-muted-foreground">帳號解封中...</p>
            </div>
          </div>

          {/* Progress section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">解封進度</span>
              <span className="text-sm font-bold text-accent">75%</span>
            </div>
            
            {/* Progress bar */}
            <div className="h-4 rounded-full bg-muted border-2 border-foreground overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-pink to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Status items */}
            <div className="space-y-2 pt-2">
              <StatusItem text="身份驗證" completed />
              <StatusItem text="申訴提交" completed />
              <StatusItem text="審核處理" inProgress />
              <StatusItem text="帳號恢復" />
            </div>
          </div>

          {/* Unlock icon */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-accent flex items-center justify-center border-[3px] border-foreground neo-shadow"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Unlock size={28} className="text-accent-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const StatusItem = ({ 
  text, 
  completed, 
  inProgress 
}: { 
  text: string; 
  completed?: boolean; 
  inProgress?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="flex items-center gap-2"
  >
    <div className={`w-5 h-5 rounded-full border-2 border-foreground flex items-center justify-center text-xs
      ${completed ? 'bg-accent text-accent-foreground' : inProgress ? 'bg-yellow' : 'bg-muted'}`}
    >
      {completed && '✓'}
      {inProgress && (
        <motion.div
          className="w-2 h-2 rounded-full bg-foreground"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </div>
    <span className={`text-sm ${completed ? 'line-through text-muted-foreground' : ''}`}>
      {text}
    </span>
  </motion.div>
);

export default FloatingPhoneCard;
