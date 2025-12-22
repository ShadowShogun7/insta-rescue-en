import { motion } from "framer-motion";

const ScribbleUnderline = () => {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-4"
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M2 10C20 5 40 15 60 10C80 5 100 15 120 10C140 5 160 15 180 10C190 8 198 10 198 10"
        stroke="hsl(var(--accent))"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default ScribbleUnderline;
