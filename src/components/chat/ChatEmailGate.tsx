import { useState } from 'react';
import { motion } from 'framer-motion';
import peekingGuy from '@/assets/doodles/peeking_guy.png';

interface ChatEmailGateProps {
  onJoin: (email: string) => void;
  isLoading?: boolean;
}

export const ChatEmailGate = ({ onJoin, isLoading = false }: ChatEmailGateProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      setError('請輸入 Email');
      return;
    }
    if (!validateEmail(email)) {
      setError('請輸入有效的 Email 格式');
      return;
    }
    setError('');
    onJoin(email);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full p-6 text-center"
    >
      {/* Peeking Guy Doodle */}
      <motion.img
        src={peekingGuy}
        alt="Peeking character"
        className="w-20 h-20 object-contain mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      />

      <h3 className="text-xl font-black text-foreground mb-2">
        歡迎諮詢！
      </h3>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        請輸入您的 Email 開始對話，<br />
        無需註冊或密碼。
      </p>

      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
        onKeyPress={handleKeyPress}
        placeholder="您的 Email 地址..."
        disabled={isLoading}
        className="w-full p-3 bg-background border-[3px] border-foreground rounded-xl font-bold mb-2
                   focus:neo-shadow focus:outline-none transition-shadow
                   disabled:opacity-50"
      />

      {error && (
        <p className="text-sm text-destructive font-medium mb-2">{error}</p>
      )}

      <motion.button
        onClick={handleSubmit}
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98, boxShadow: '0px 0px 0px 0px black' }}
        className="w-full bg-[hsl(var(--neo-yellow))] text-foreground text-lg font-black py-3 
                   rounded-xl border-[4px] border-foreground neo-shadow transition-all
                   disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {isLoading ? '連接中...' : '開始對話 →'}
      </motion.button>
    </motion.div>
  );
};
