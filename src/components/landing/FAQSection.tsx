import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sparkleOutline from '@/assets/doodles/sparkle_outline.png';
import starOutline from '@/assets/doodles/star_outline.png';

// --- FAQ Data ---
const faqData = [
  {
    question: "How does Instagram decide to disable or restore accounts?",
    answer: "Instagram is managed by a set of algorithms (automated computer systems), and in most cases there is no human intervention. Whether an account gets disabled—or restored after being disabled—is determined by these algorithms. Algorithms have a certain error rate, so many accounts get disabled \"for no reason.\"\n\nMost appeal forms submitted by users are also evaluated by these algorithms. Only a small portion receives human review.\n\nThis guide is designed to help you successfully submit appeals through effective channels, increasing the chances of getting a human review (human review is the only way to overturn an incorrect automated decision) and ultimately recovering your account."
  },
  {
    question: "Is there more than one way to appeal?",
    answer: "Most users think there's only one appeal channel — they open the mobile app, submit an appeal, and then feel stuck. In reality, there are several effective appeal channels and more than one method.\n\nThis guide covers all channels and step-by-step instructions for each (8 appeal channels + 9 special methods in one package). You just follow along. Each channel has different reviewers and review mechanisms — if any one of them approves your case, you get your account back.\n\nUsing multiple channels simultaneously greatly increases your chances of success!"
  },
  {
    question: "Is recovery guaranteed?",
    answer: "No channel can guarantee 100% recovery. Some severe violations cannot be reversed. What we can do is dramatically increase your chances of success.\n\nAs long as you haven't committed serious violations, following our guide gives you a very high chance of success — we have people recovering accounts every day.\n\nOur Meta Insider Recovery Service comes with a full refund guarantee if your account is not recovered within 30 days."
  },
  {
    question: "How does Meta Insider Recovery Service work?",
    answer: "The Meta Insider Recovery Service is our premium service where our specialist team handles everything for you. We submit your case directly through Meta's internal priority channels.\n\nStarting price is USD$4,000. Full refund if account not recovered within 30 days (USD$100 handling fee is non-refundable).\n\nContact our support team for a quotation — each case is different."
  },
  {
    question: "How long does the recovery take?",
    answer: "This depends on the individual case. The severity of the violation and Instagram's current case volume both play a role. Our fastest cases have been resolved in as little as 1 day.\n\nIn most cases, following our guide you can expect a response from Instagram within 3 days, with an 80% success rate."
  },
  {
    question: "I have already appealed myself and got nowhere. Could this still work for me?",
    answer: "Yes. If you haven't clearly violated Instagram's Terms of Service, submitting appeals through the special channels provided in this guide still gives you a real chance of recovery.\n\nIf you've already exhausted the standard appeal flow without any response, you must quickly pursue other channels to maximize your chances. Every day you wait is a lost opportunity — account recovery is time-sensitive."
  },
  {
    question: "I received a final decision notification saying my account is permanently disabled. Is there still hope?",
    answer: "Many users receive this notification after appealing through the mobile app: \"We have disabled your account. No one can see or find your account, and you won't be able to use it. All your information will be permanently deleted. You cannot request a review of this decision.\"\n\nMost people assume this is truly the end and give up. In reality, this is the standard process for disabled accounts — it only means the standard mobile app appeal channel is no longer available.\n\nWe've helped over 2,000 users who received this same notification recover their accounts. The key is using the right channels and appeal methods — exactly what this guide provides."
  },
  {
    question: "My appeal has been showing 'In Review' for a long time. Is there still hope?",
    answer: "If your Instagram app shows 'In Review' for more than 24 hours, it likely means the system is stuck and will remain in that state indefinitely. You must immediately submit appeals through other channels.\n\nRemember: the sooner you appeal after being disabled, the higher your chances of recovery. Accounts disabled for more than 30 days without any appeal may be permanently deleted."
  }
];

// --- Hand-Drawn Arrow Icon ---
const DoodleArrow = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    className={`flex-shrink-0 ml-4 ${isOpen ? 'text-primary' : 'text-foreground'}`}
  >
    <path d="M6 9l6 6 6-6" />
  </motion.svg>
);

// --- Floating Doodle Component ---
const FloatingDoodle = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{ 
      y: [-8, 8, -8],
      rotate: [-3, 3, -3]
    }}
    transition={{ 
      duration: 4 + delay, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
  >
    {children}
  </motion.div>
);

// --- Individual FAQ Item Component (Accordion) ---
const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="mb-6"
    >
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center p-6 text-left bg-card border-4 border-foreground rounded-2xl transition-all ${
          isOpen 
            ? 'shadow-none translate-y-1 bg-primary/10' 
            : 'shadow-neo hover:-translate-y-1 hover:shadow-neo-lg'
        }`}
      >
        <h3 className="text-xl font-black text-foreground">{question}</h3>
        <DoodleArrow isOpen={isOpen} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-card border-4 border-t-0 border-foreground rounded-b-2xl -mt-1 pt-8 font-bold text-muted-foreground leading-relaxed whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main FAQ Section Component ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t-4 border-foreground">
      {/* Background Doodles */}
      <FloatingDoodle className="top-10 left-[5%] opacity-30" delay={0}>
        <img src={sparkleOutline} alt="" className="w-12 h-auto" />
      </FloatingDoodle>
      
      <FloatingDoodle className="bottom-20 right-[8%] opacity-30" delay={1.5}>
        <img src={sparkleOutline} alt="" className="w-16 h-auto rotate-12" />
      </FloatingDoodle>
      
      <FloatingDoodle className="top-40 right-[15%] opacity-40" delay={0.8}>
        <motion.img 
          src={starOutline} 
          alt="" 
          className="w-8 h-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </FloatingDoodle>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-foreground inline-block relative">
            FAQ
            {/* Hand-drawn squiggly underline */}
            <svg className="absolute -bottom-4 left-0 w-full h-6 text-primary" viewBox="0 0 200 20" fill="none" preserveAspectRatio="none">
              <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
