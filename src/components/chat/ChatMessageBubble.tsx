import { motion } from 'framer-motion';

interface ChatMessageBubbleProps {
  content: string;
  senderType: 'visitor' | 'admin';
  senderName?: string | null;
  timestamp: string;
}

export const ChatMessageBubble = ({
  content,
  senderType,
  senderName,
  timestamp,
}: ChatMessageBubbleProps) => {
  const isOwn = senderType === 'visitor';
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}
    >
      {!isOwn && senderName && (
        <span className="text-xs font-bold text-muted-foreground mb-1 ml-1">
          {senderName}
        </span>
      )}
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl border-[3px] border-foreground ${
          isOwn
            ? 'bg-primary text-primary-foreground neo-shadow-sm'
            : 'bg-background text-foreground neo-shadow-sm'
        }`}
      >
        <p className="font-medium text-sm whitespace-pre-wrap">{content}</p>
        <span className={`text-xs ${isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
          {formatTime(timestamp)}
        </span>
      </div>
    </motion.div>
  );
};
