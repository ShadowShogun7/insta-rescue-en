import { motion } from "framer-motion";

export const DoodleHeart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neo-pink">
    <motion.path
      d="M12 21s-8-5.5-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-8 11-8 11z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  </svg>
);

export const DoodleCheckCircle = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-neo-green">
    <motion.circle
      cx="24"
      cy="24"
      r="20"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="4 4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.path
      d="M16 24l6 6 12-12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    />
  </svg>
);

export const DoodleBrokenLink = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-neo-coral">
    <motion.path
      d="M18 24h-4a6 6 0 0 1 0-12h4"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.path
      d="M30 24h4a6 6 0 0 0 0-12h-4"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
    <motion.path
      d="M20 30l8-12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    />
  </svg>
);
