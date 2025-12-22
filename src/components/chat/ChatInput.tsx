import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export const ChatInput = ({ 
  onSend, 
  placeholder = '輸入訊息...', 
  disabled = false 
}: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex gap-2 p-3 border-t-[3px] border-foreground bg-background">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 p-3 bg-background border-[3px] border-foreground rounded-xl font-bold 
                   focus:outline-none focus:neo-shadow transition-shadow
                   disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <motion.button
        onClick={handleSend}
        disabled={!input.trim() || disabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-primary text-primary-foreground border-[3px] border-foreground 
                   rounded-xl neo-shadow flex items-center justify-center
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-primary/90 transition-colors"
      >
        <Send size={20} />
      </motion.button>
    </div>
  );
};
