import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sparkleOutline from '@/assets/doodles/sparkle_outline.png';
import starOutline from '@/assets/doodles/star_outline.png';

// --- FAQ Data ---
const faqData = [
  {
    question: "收到IG通知已最終決定\"永久停用\"，還有救嗎？",
    answer: "很多人在IG被停用後直接在手機上點擊申訴，然後經過24小時就收到這個通知：\"我們已停用你的賬號。沒有人可以看到或找到你的賬號，你也無法使用賬號，你的所有資訊都將永久刪除。你無法對此處置要求再次審查。\"。很多人都誤以為無法翻案，而放棄救援。\n\n實際上這是被停用的標準流程，這僅代表IG的手機app標準申訴渠道無法再次使用。我們已經協助超過2,000位收到同樣通知的用戶復原帳號。\n關鍵在於「渠道」與「申訴方法」：\n1️⃣ 不同渠道的審核團隊標準不一樣；\n2️⃣ 申訴內容需要符合審核員SOP查看的要件。\n這些技巧我們已整理在手冊裡：「8個申訴渠道」＋「9個特殊方法」+「申訴文案模版」\n使用我們的方法後通常3天時間收到IG的回復，高達80%成功機率。"
  },
  {
    question: "申訴後多久能找回？",
    answer: "這個要看個案，每個人違規嚴重程度不同，然後也要看IG那邊同一時期有多少案件要處理，我們最快也有1天就成功取回的。"
  },
  {
    question: "我需要自己操作嗎？會不會很難？能不能代操？",
    answer: "你按照手冊說明操作就可以，非常簡單。IG會偵測很多數據，所以你必須自己操作才不會節外生枝。\n\n如果操作遇到問題，我們的專員會提供協助。"
  },
  {
    question: "被停用後多久申訴有用?",
    answer: "IG已經完成重大更新，如果賬號被停用超過30天而沒有申訴的，就會直接被刪除。所以，被停用後必須立即申訴。只有成功提交申訴，才有可能找回。越早申訴，越容易找回。\n\n另外，還有的用戶已經申訴，但是收到IG的通知：\"我們已審查過停用你賬號的決議並決定此為最終結果，或是你的賬號已停用超過30天，所以此決議無法要求審查\"。我們的手冊也會提供特殊申訴方法，讓遇到這個問題的用戶仍然可以要求IG審核。\n\n越早提升申訴，成功找回的機率越高！。"
  },
  {
    question: "救援成功的機率有多高？",
    answer: "我們的「Meta特殊通道專案」擁有高達 95% 以上的救回帳號成功率。我們的專業團隊會為您提供最高效的解決方案。"
  },
  {
    question: "IG平台是如何決定停用及恢復賬號的？",
    answer: "Instagram平台是由一組演算法(電腦運算系統)所管理，大多數情況下並沒有人工干預。因此賬號被停用與否、停用後被恢復與否，也都由這組演算法所決定。演算法有一定的誤判比例，因此很多賬號\"無故\"被停用。用戶所提交的申訴表大部分也由這組演算法判定是否恢復賬號，只有一小部分會經由人工介入審核。\n\n這本手冊的目的就是教你如何成功的通過有效渠道提交申訴，爭取人工審核的機率（被誤判才有可能被平反），增加賬號被恢復的機率。我們提供的渠道/方法可以讓你的案件直接被IG官方中央支援團隊受理，並且在3天內就會通知你。你的案件會得到充分的重視，最大幅度提升你找回的機率。"
  },
  {
    question: "申訴的渠道只有一個嗎?",
    answer: "大多數用戶都以為申訴的渠道只有一個，賬號被停用後打開手機APP，直接進行申訴，然後就束手無策了。其實，申訴的有效渠道有好幾個，方法也不只一種。這本手冊詳細說明所有的渠道及每個渠道的申訴步驟（8大申訴渠道+9種特殊申訴方法 一次打包），你只要跟著做就好。手冊裡面會詳細說明每個渠道如何使用，提交的頻率，收到回覆如何處理（申訴文案模版）等詳情。\n\n每一個渠道都有不同的審核人員及審核機制，只要其中有的讓你通過你就可以成功取回！所以，使用手冊多渠道申訴可以大大的增加你成功的機會！"
  },
  {
    question: "自己提交過申訴但還沒有找回，有救嗎？",
    answer: "如果你沒有明確違反Instagram的使用條款，那麼通過這本手冊所提供的特殊渠道提交申訴，就有機會找回。\n\n如果你已經走完標準申訴流程但仍然沒有收到任何回覆，你就必須盡快通過其他的渠道進行申訴，這樣才能大幅提升你找回賬號的機率。找回賬號是分秒必爭的，你多等待一天就是多浪費一點機會。"
  },
  {
    question: "可以保證100%找回嗎？",
    answer: "沒有任何一個渠道可以100%保證找回。有些嚴重犯規是不可能可以救回的。我們能做的是大大的增加你成功的機率，只要你不是嚴重犯規，跟著我們手冊申訴成功的機率很大，我們每天都有人成功取回。"
  },
  {
    question: "如果沒有找回，可以退款嗎？",
    answer: "這是一本電子手冊，一旦售出系統會自動將手冊發到你的email，你可以立即下載使用。所以，手冊一旦售出，就無法退款。"
  },
  {
    question: "我的申訴一直顯示「正在審查」，也無法重新提交，有救嗎？",
    answer: "卡在審核畫面： 如果你的IG顯示「正在審查」畫面超過24小時，那就代表已經宕機，會一直卡在這個畫面。所以你必須立即從其他渠道提交申訴。IG被停用一定要越早申訴，找回的機率越高，如果超過30天有可能被永久停用。"
  },
  {
    question: "因為版權問題被停用，可以找回嗎？",
    answer: "手冊裡面有針對版權問題被停用的申訴方法，會詳細說明應該如何處理，申訴內容如何撰寫，如何準備對你有利的證據。"
  },
  {
    question: "我的IG是廣告功能被禁用，這樣可以解決嗎？",
    answer: "我們有針對IG廣告被禁止刊登/禁止加強推廣貼文的攻略，與賬號被停用不同哦。請點擊這個鏈接，訪問「解鎖IG廣告-完整攻略」頁面。"
  },
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
            常見問題
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
