import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAdminRole } from '@/hooks/useAdminRole';

interface AdminProtectedRouteProps {
  children: ReactNode;
}

export const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const { user, isLoading: authLoading } = useAuth();
  const { isAdmin, isLoading: roleLoading } = useAdminRole(user?.id);
  const location = useLocation();

  const isLoading = authLoading || roleLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-lg font-bold text-foreground">驗證中...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="bg-background border-[4px] border-foreground rounded-2xl neo-shadow p-8 max-w-md text-center">
          <div className="text-5xl mb-4">🚫</div>
          <h2 className="text-2xl font-black text-foreground mb-2">權限不足</h2>
          <p className="text-muted-foreground mb-6">
            您沒有管理員權限。請聯繫系統管理員。
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 
                       rounded-xl border-[3px] border-foreground neo-shadow font-bold
                       hover:bg-primary/90 transition-colors"
          >
            返回首頁
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
