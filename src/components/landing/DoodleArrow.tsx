import { motion } from "framer-motion";

const DoodleArrow = () => {
  return (
    <motion.svg
      className="absolute -right-16 -top-8 w-14 h-14 hidden lg:block"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
    >
      <motion.path
        d="M10 50C15 40 25 25 45 15"
        stroke="hsl(var(--foreground))"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      />
      <motion.path
        d="M35 12L45 15L42 25"
        stroke="hsl(var(--foreground))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.8, duration: 0.4 }}
      />
    </motion.svg>
  );
};

export default DoodleArrow;
