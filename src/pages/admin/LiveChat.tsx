import { motion } from 'framer-motion';
import { LogOut, MessageSquare, XCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useAdminLiveChat } from '@/hooks/useAdminLiveChat';
import { ChatMessageBubble } from '@/components/chat/ChatMessageBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { useRef, useEffect } from 'react';

const AdminLiveChat = () => {
  const { user, signOut } = useAuth();
  const {
    conversations,
    selectedConversation,
    messages,
    isLoading,
    setSelectedConversation,
    sendMessage,
    closeConversation,
    reopenConversation,
    refreshConversations,
  } = useAdminLiveChat();
  const navigate = useNavigate();
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
    toast({ title: '已登出' });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    if (isToday) {
      return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
  };

  const openConversations = conversations.filter((c) => c.status === 'open');
  const closedConversations = conversations.filter((c) => c.status === 'closed');

  return (
    <div className="min-h-screen bg-muted flex flex-col">
      {/* Header */}
      <header className="bg-background border-b-[4px] border-foreground p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary border-[3px] border-foreground rounded-xl 
                            flex items-center justify-center neo-shadow-sm">
              <MessageSquare size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-black text-foreground text-xl">客服中心</h1>
              <p className="text-xs text-muted-foreground">
                {openConversations.length} 個進行中的對話
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={refreshConversations}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              title="重新整理"
            >
              <RefreshCw size={20} className={isLoading ? 'animate-spin' : ''} />
            </button>
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <motion.button
              onClick={handleSignOut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground
                         border-[3px] border-foreground rounded-xl neo-shadow-sm font-bold"
            >
              <LogOut size={18} />
              登出
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex max-w-7xl mx-auto w-full p-4 gap-4">
        {/* Left Sidebar - Conversation List */}
        <div className="w-80 bg-background border-[4px] border-foreground rounded-2xl neo-shadow overflow-hidden flex flex-col">
          <div className="p-4 border-b-[3px] border-foreground">
            <h2 className="font-black text-foreground">對話列表</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {/* Open Conversations */}
            {openConversations.length > 0 && (
              <div className="p-2">
                <p className="text-xs font-bold text-muted-foreground px-2 py-1">進行中</p>
                {openConversations.map((conv) => (
                  <motion.button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-3 rounded-xl border-[3px] border-foreground mb-2
                               text-left transition-all ${
                                 selectedConversation?.id === conv.id
                                   ? 'bg-primary/10 neo-shadow-sm'
                                   : 'bg-background hover:bg-muted'
                               }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm text-foreground truncate max-w-[180px]">
                        {conv.visitor_email}
                      </span>
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {conv.last_message || '無訊息'}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">
                        {formatTime(conv.updated_at)}
                      </span>
                      {conv.unread_count && conv.unread_count > 0 && (
                        <span className="px-2 py-0.5 bg-destructive text-destructive-foreground 
                                         text-xs font-bold rounded-full">
                          {conv.unread_count}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {/* Closed Conversations */}
            {closedConversations.length > 0 && (
              <div className="p-2 border-t-[2px] border-muted">
                <p className="text-xs font-bold text-muted-foreground px-2 py-1">已關閉</p>
                {closedConversations.map((conv) => (
                  <motion.button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-3 rounded-xl border-[2px] border-muted mb-2
                               text-left transition-all opacity-60 ${
                                 selectedConversation?.id === conv.id
                                   ? 'bg-muted'
                                   : 'bg-background hover:bg-muted'
                               }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm text-muted-foreground truncate max-w-[180px]">
                        {conv.visitor_email}
                      </span>
                      <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {conv.last_message || '無訊息'}
                    </p>
                  </motion.button>
                ))}
              </div>
            )}

            {conversations.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                <MessageSquare size={48} className="mx-auto mb-4 opacity-30" />
                <p className="font-medium">尚無對話</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Main Area - Chat Window */}
        <div className="flex-1 bg-background border-[4px] border-foreground rounded-2xl neo-shadow overflow-hidden flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b-[3px] border-foreground flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-muted border-[3px] border-foreground rounded-full 
                                  flex items-center justify-center text-lg">
                    👤
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{selectedConversation.visitor_email}</h3>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.status === 'open' ? '對話進行中' : '對話已關閉'}
                    </p>
                  </div>
                </div>

                {selectedConversation.status === 'open' ? (
                  <motion.button
                    onClick={closeConversation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive
                               border-[2px] border-destructive rounded-xl font-bold text-sm"
                  >
                    <XCircle size={16} />
                    關閉對話
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={reopenConversation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600
                               border-[2px] border-green-500 rounded-xl font-bold text-sm"
                  >
                    <CheckCircle size={16} />
                    重新開啟
                  </motion.button>
                )}
              </div>

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
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              {selectedConversation.status === 'open' ? (
                <ChatInput onSend={sendMessage} placeholder="回覆訊息..." />
              ) : (
                <div className="p-4 border-t-[3px] border-foreground bg-muted text-center">
                  <p className="text-muted-foreground text-sm">此對話已關閉</p>
                </div>
              )}
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageSquare size={64} className="mx-auto mb-4 opacity-30" />
                <p className="font-bold text-lg">選擇一個對話</p>
                <p className="text-sm">從左側列表選擇對話以開始回覆</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLiveChat;
