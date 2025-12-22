import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import sparkles from '@/assets/doodles/sparkles_A.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/admin/live-chat';

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const validateForm = () => {
    if (!email.trim()) {
      toast({ title: '錯誤', description: '請輸入 Email', variant: 'destructive' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: '錯誤', description: '請輸入有效的 Email 格式', variant: 'destructive' });
      return false;
    }
    if (password.length < 6) {
      toast({ title: '錯誤', description: '密碼至少需要 6 個字元', variant: 'destructive' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes('already registered')) {
            toast({ title: '錯誤', description: '此 Email 已註冊，請直接登入', variant: 'destructive' });
          } else {
            toast({ title: '錯誤', description: error.message, variant: 'destructive' });
          }
        } else {
          toast({ title: '成功', description: '帳號建立成功！' });
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({ title: '錯誤', description: 'Email 或密碼錯誤', variant: 'destructive' });
          } else {
            toast({ title: '錯誤', description: error.message, variant: 'destructive' });
          }
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-8 relative">
          <img
            src={sparkles}
            alt=""
            className="absolute -top-8 right-0 w-16 h-16 object-contain opacity-70"
          />
          <h1 className="text-3xl font-black text-foreground mb-2">
            管理員後台
          </h1>
          <p className="text-muted-foreground">
            {isSignUp ? '建立新帳號' : '登入以管理客服對話'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-background border-[4px] border-foreground rounded-2xl neo-shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full p-3 bg-background border-[3px] border-foreground rounded-xl font-medium
                           focus:neo-shadow focus:outline-none transition-shadow"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                密碼
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-3 pr-12 bg-background border-[3px] border-foreground rounded-xl font-medium
                             focus:neo-shadow focus:outline-none transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl 
                         border-[3px] border-foreground neo-shadow font-black text-lg
                         flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed
                         hover:bg-primary/90 transition-colors"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              ) : isSignUp ? (
                <>
                  <UserPlus size={20} />
                  建立帳號
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  登入
                </>
              )}
            </motion.button>
          </form>

          {/* Toggle Sign Up / Sign In */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {isSignUp ? '已有帳號？' : '還沒有帳號？'}
              <span className="font-bold text-primary ml-1">
                {isSignUp ? '登入' : '建立帳號'}
              </span>
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← 返回首頁
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
