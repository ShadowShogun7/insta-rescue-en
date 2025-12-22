import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ChatEmailGate } from './ChatEmailGate';
import { ChatMessageBubble } from './ChatMessageBubble';
import { ChatInput } from './ChatInput';
import { ChatTypingIndicator } from './ChatTypingIndicator';
import { useLiveChat } from '@/hooks/useLiveChat';

interface ChatWindowProps {
  onClose: () => void;
}

export const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const {
    isJoined,
    messages,
    isLoading,
    joinChat,
    sendMessage,
  } = useLiveChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="absolute bottom-20 right-0 w-[360px] h-[500px] bg-background 
                 border-[4px] border-foreground rounded-2xl neo-shadow-lg
                 flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary border-b-[3px] border-foreground">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 bg-background border-[3px] border-foreground rounded-full 
                          flex items-center justify-center text-xl">
            🧐
          </div>
          <div>
            <h4 className="font-black text-primary-foreground">IG 解封專家</h4>
            <p className="text-xs text-primary-foreground/80">線上客服</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-primary-foreground/10 rounded transition-colors"
        >
          <X size={24} className="text-primary-foreground" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {!isJoined ? (
          <ChatEmailGate onJoin={joinChat} isLoading={isLoading} />
        ) : (
          <div className="h-full flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <ChatMessageBubble
                  key={msg.id}
                  content={msg.content}
                  senderType={msg.sender_type as 'visitor' | 'admin'}
                  senderName={msg.sender_name}
                  timestamp={msg.created_at}
                />
              ))}
              {isLoading && <ChatTypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <ChatInput onSend={sendMessage} />
          </div>
        )}
      </div>
    </motion.div>
  );
};
