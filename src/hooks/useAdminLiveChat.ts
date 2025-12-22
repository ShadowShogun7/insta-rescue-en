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
  unread_count?: number;
  last_message?: string;
}

export const useAdminLiveChat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load all conversations
  const loadConversations = async () => {
    setIsLoading(true);
    try {
      const { data: convData, error } = await supabase
        .from('live_chat_conversations')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;

      // Get unread counts and last messages for each conversation
      const conversationsWithDetails = await Promise.all(
        (convData || []).map(async (conv) => {
          const { count } = await supabase
            .from('live_chat_messages')
            .select('*', { count: 'exact', head: true })
            .eq('conversation_id', conv.id)
            .eq('sender_type', 'visitor')
            .eq('is_read', false);

          const { data: lastMsgData } = await supabase
            .from('live_chat_messages')
            .select('content')
            .eq('conversation_id', conv.id)
            .order('created_at', { ascending: false })
            .limit(1)
            .single();

          return {
            ...conv,
            unread_count: count || 0,
            last_message: lastMsgData?.content || '',
          } as Conversation;
        })
      );

      setConversations(conversationsWithDetails);
    } finally {
      setIsLoading(false);
    }
  };

  // Subscribe to real-time conversation updates
  useEffect(() => {
    loadConversations();

    const conversationsChannel = supabase
      .channel('admin-conversations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'live_chat_conversations',
        },
        () => {
          loadConversations();
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'live_chat_messages',
        },
        () => {
          loadConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(conversationsChannel);
    };
  }, []);

  // Subscribe to messages for selected conversation
  useEffect(() => {
    if (!selectedConversation) {
      setMessages([]);
      return;
    }

    const loadMessages = async () => {
      const { data, error } = await supabase
        .from('live_chat_messages')
        .select('*')
        .eq('conversation_id', selectedConversation.id)
        .order('created_at', { ascending: true });

      if (!error && data) {
        setMessages(data as Message[]);
        
        // Mark visitor messages as read
        await supabase
          .from('live_chat_messages')
          .update({ is_read: true })
          .eq('conversation_id', selectedConversation.id)
          .eq('sender_type', 'visitor')
          .eq('is_read', false);
      }
    };

    loadMessages();

    const messagesChannel = supabase
      .channel(`admin-messages-${selectedConversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'live_chat_messages',
          filter: `conversation_id=eq.${selectedConversation.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => {
            if (prev.some((m) => m.id === newMessage.id)) return prev;
            return [...prev, newMessage];
          });

          // Mark as read if visitor message
          if (newMessage.sender_type === 'visitor') {
            supabase
              .from('live_chat_messages')
              .update({ is_read: true })
              .eq('id', newMessage.id);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
    };
  }, [selectedConversation?.id]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!selectedConversation || !content.trim()) return;

      const { error } = await supabase.from('live_chat_messages').insert({
        conversation_id: selectedConversation.id,
        sender_type: 'admin',
        sender_name: 'Admin',
        content: content.trim(),
      });

      if (error) {
        console.error('Error sending message:', error);
      }
    },
    [selectedConversation]
  );

  const closeConversation = useCallback(
    async () => {
      if (!selectedConversation) return;

      const { error } = await supabase
        .from('live_chat_conversations')
        .update({ status: 'closed' })
        .eq('id', selectedConversation.id);

      if (!error) {
        setSelectedConversation((prev) =>
          prev ? { ...prev, status: 'closed' } : null
        );
        loadConversations();
      }
    },
    [selectedConversation]
  );

  const reopenConversation = useCallback(
    async () => {
      if (!selectedConversation) return;

      const { error } = await supabase
        .from('live_chat_conversations')
        .update({ status: 'open' })
        .eq('id', selectedConversation.id);

      if (!error) {
        setSelectedConversation((prev) =>
          prev ? { ...prev, status: 'open' } : null
        );
        loadConversations();
      }
    },
    [selectedConversation]
  );

  return {
    conversations,
    selectedConversation,
    messages,
    isLoading,
    setSelectedConversation,
    sendMessage,
    closeConversation,
    reopenConversation,
    refreshConversations: loadConversations,
  };
};
