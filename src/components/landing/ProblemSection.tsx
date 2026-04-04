import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const whyItems = [
  { icon: "❌", text: "Flagged by automated systems" },
  { icon: "❌", text: "Mass targeted reports" },
  { icon: "❌", text: "Accidentally tripping policy" },
  { icon: "🙋", text: "No respons after you appeal" },
];

const howItems = [
  { icon: "✅", text: "Dedicated support (24 hours reply)" },
  { icon: "✅", text: "Proven method based on 2,000+ successful cases" },
  { icon: "✅", text: "The exact path to get a real review" },
  { icon: "🥳", text: "80% success rate (Industry leading)" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-block border-3 border-foreground bg-neo-yellow px-4 py-1 text-sm font-black tracking-widest uppercase neo-shadow-sm rounded-sm mb-5">
              Problem
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4"
          >
            UNBAN SHOULD NOT BE
            <br />
            THIS HARD
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed"
          >
            Most people waste days trying random forms —then get stuck in "no
            response." We made a clear recovery playbook that actually moves the
            case forward.
          </motion.p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Why disabled card — orange */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F5C9A0] border-4 border-foreground rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Red circle X icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E05A4E] border-3 border-foreground flex items-center justify-center">
                <span className="text-white font-black text-xl">✕</span>
              </div>
            </div>

            <h3 className="text-3xl font-black text-center text-foreground mb-6">
              Why disabled?
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-white border-2 border-foreground rounded-xl px-4 py-3 font-bold text-foreground text-base"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* How we help card — green */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#C5E8C0] border-4 border-foreground rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Green circle check icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4CAF50] border-3 border-foreground flex items-center justify-center">
                <span className="text-white font-black text-xl">✓</span>
              </div>
            </div>

            <h3 className="text-3xl font-black text-center text-foreground mb-6">
              How we help ?
            </h3>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {howItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-center gap-3 bg-white border-2 border-foreground rounded-xl px-4 py-3 font-bold text-foreground text-base"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
