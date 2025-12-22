-- 1. Role system for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Policy for users to read their own roles
CREATE POLICY "Users can read own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

-- Policy for admins to manage roles
CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- 2. Live chat conversations table
CREATE TABLE public.live_chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_email text NOT NULL,
  visitor_name text,
  status text DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on conversations
ALTER TABLE public.live_chat_conversations ENABLE ROW LEVEL SECURITY;

-- 3. Live chat messages table
CREATE TABLE public.live_chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES public.live_chat_conversations(id) ON DELETE CASCADE NOT NULL,
  sender_type text NOT NULL CHECK (sender_type IN ('visitor', 'admin')),
  sender_name text,
  content text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on messages
ALTER TABLE public.live_chat_messages ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for conversations

-- Anyone can create conversations (for visitors)
CREATE POLICY "Anyone can create conversations" ON public.live_chat_conversations
  FOR INSERT WITH CHECK (true);

-- Anyone can read conversations (filtered by email in app for visitors)
CREATE POLICY "Anyone can read conversations" ON public.live_chat_conversations
  FOR SELECT USING (true);

-- Admins can update conversations (close them)
CREATE POLICY "Admins can update conversations" ON public.live_chat_conversations
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

-- 5. RLS Policies for messages

-- Anyone can create messages
CREATE POLICY "Anyone can create messages" ON public.live_chat_messages
  FOR INSERT WITH CHECK (true);

-- Anyone can read messages
CREATE POLICY "Anyone can read messages" ON public.live_chat_messages
  FOR SELECT USING (true);

-- Admins can update messages (mark as read)
CREATE POLICY "Admins can update messages" ON public.live_chat_messages
  FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

-- 6. Update timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_conversations_updated_at
  BEFORE UPDATE ON public.live_chat_conversations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- 7. Enable Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.live_chat_conversations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.live_chat_messages;