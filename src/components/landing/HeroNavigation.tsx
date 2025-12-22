import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const HeroNavigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ rotate: -12 }}
          animate={{ rotate: [-12, -8, -12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="neo-shadow-sm rounded-lg bg-primary px-3 py-1.5 border-2 border-foreground"
        >
          <span className="text-lg font-bold text-primary-foreground">IG</span>
        </motion.div>
        <span className="text-xl font-bold">解封專家</span>
      </div>

      {/* Menu Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="neo-button rounded-lg bg-card px-4 py-2 flex items-center gap-2"
      >
        <Menu size={20} />
        <span className="hidden sm:inline font-medium">Menu</span>
      </motion.button>
    </motion.nav>
  );
};

export default HeroNavigation;
