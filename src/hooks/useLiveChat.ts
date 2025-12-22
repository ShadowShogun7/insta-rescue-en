import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'visitor' | 'admin';
  sender_name: string | null;
  content: string;
  is_read: boolean;
  created_at: string;
}

interface Conversation {
  id: string;
  visitor_email: string;
  visitor_name: string | null;
  status: 'open' | 'closed';
  created_at: string;
  updated_at: string;
}

const VISITOR_EMAIL_KEY = 'live_chat_visitor_email';
const CONVERSATION_ID_KEY = 'live_chat_conversation_id';

export const useLiveChat = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [visitorEmail, setVisitorEmail] = useState<string | null>(null);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem(VISITOR_EMAIL_KEY);
    const savedConversationId = localStorage.getItem(CONVERSATION_ID_KEY);

    if (savedEmail && savedConversationId) {
      setVisitorEmail(savedEmail);
      loadConversation(savedConversationId, savedEmail);
    }
  }, []);

  // Subscribe to real-time messages
  useEffect(() => {
    if (!conversation) return;

    const channel = supabase
      .channel(`messages-${conversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'live_chat_messages',
          filter: `conversation_id=eq.${conversation.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => {
            // Avoid duplicates
            if (prev.some((m) => m.id === newMessage.id)) return prev;
            return [...prev, newMessage];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversation?.id]);

  const loadConversation = async (conversationId: string, email: string) => {
    setIsLoading(true);
    try {
      // Load conversation
      const { data: convData, error: convError } = await supabase
        .from('live_chat_conversations')
        .select('*')
        .eq('id', conversationId)
        .eq('visitor_email', email)
        .single();

      if (convError || !convData) {
        // Clear invalid data
        localStorage.removeItem(VISITOR_EMAIL_KEY);
        localStorage.removeItem(CONVERSATION_ID_KEY);
        return;
      }

      setConversation(convData as Conversation);
      setIsJoined(true);

      // Load messages
      const { data: messagesData } = await supabase
        .from('live_chat_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (messagesData) {
        setMessages(messagesData as Message[]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const joinChat = async (email: string) => {
    setIsLoading(true);
    try {
      // Check for existing open conversation
      const { data: existingConv } = await supabase
        .from('live_chat_conversations')
        .select('*')
        .eq('visitor_email', email)
        .eq('status', 'open')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (existingConv) {
        setConversation(existingConv as Conversation);
        localStorage.setItem(VISITOR_EMAIL_KEY, email);
        localStorage.setItem(CONVERSATION_ID_KEY, existingConv.id);
        setVisitorEmail(email);
        setIsJoined(true);

        // Load existing messages
        const { data: messagesData } = await supabase
          .from('live_chat_messages')
          .select('*')
          .eq('conversation_id', existingConv.id)
          .order('created_at', { ascending: true });

        if (messagesData) {
          setMessages(messagesData as Message[]);
        }
        return;
      }

      // Create new conversation
      const { data: newConv, error } = await supabase
        .from('live_chat_conversations')
        .insert({ visitor_email: email })
        .select()
        .single();

      if (error) throw error;

      setConversation(newConv as Conversation);
      localStorage.setItem(VISITOR_EMAIL_KEY, email);
      localStorage.setItem(CONVERSATION_ID_KEY, newConv.id);
      setVisitorEmail(email);
      setIsJoined(true);

      // Add welcome message
      await supabase.from('live_chat_messages').insert({
        conversation_id: newConv.id,
        sender_type: 'admin',
        sender_name: '客服人員',
        content: '您好！我是 IG 解封專家客服。請問有什麼可以幫您？',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = useCallback(
    async (content: string) => {
      if (!conversation || !content.trim()) return;

      const { error } = await supabase.from('live_chat_messages').insert({
        conversation_id: conversation.id,
        sender_type: 'visitor',
        sender_name: visitorEmail,
        content: content.trim(),
      });

      if (error) {
        console.error('Error sending message:', error);
      }
    },
    [conversation, visitorEmail]
  );

  const resetChat = () => {
    localStorage.removeItem(VISITOR_EMAIL_KEY);
    localStorage.removeItem(CONVERSATION_ID_KEY);
    setIsJoined(false);
    setVisitorEmail(null);
    setConversation(null);
    setMessages([]);
  };

  return {
    isJoined,
    visitorEmail,
    conversation,
    messages,
    isLoading,
    joinChat,
    sendMessage,
    resetChat,
  };
};
