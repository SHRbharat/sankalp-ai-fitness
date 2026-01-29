import React from 'react';
import { 
  LogOut, 
  User as UserIcon, 
  Loader2, 
  Plus, 
  CalendarDays,
  Heart
} from 'lucide-react';
import { PlanType } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  isLoading: boolean;
  isAuth: boolean;
  view: string;
  setView: (view: any) => void;
  setIsAuth: (auth: boolean) => void;
  setFormType: (type: PlanType) => void;
  setStep: (step: number) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isLoading, 
  isAuth, 
  view, 
  setView, 
  setIsAuth, 
  setFormType, 
  setStep 
}) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-neutral-50 relative overflow-x-hidden pb-20">
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-10 animate-slide-in">
          <div className="relative mb-10">
            <div className="w-24 h-24 border-4 border-red-500/20 rounded-full animate-ping" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="animate-spin text-red-500" size={48} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Sankalp AI is thinking</h2>
          <p className="text-neutral-500 max-w-xs mx-auto">Mapping out your journey based on your unique profile and goals...</p>
        </div>
      )}

      {/* Header */}
      <header className="px-6 pt-8 pb-4 flex items-center justify-between sticky top-0 bg-neutral-50/80 backdrop-blur-md z-30">
        <div 
          onClick={() => setView('home')}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-red-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200">
            <Heart size={20} strokeWidth={3} className="animate-heartbeat" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">Sankalp Ai</span>
        </div>
        
        <div className="flex items-center space-x-3">
          {isAuth ? (
            <button 
              onClick={() => setIsAuth(false)}
              className="w-10 h-10 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-red-500 transition-colors"
            >
              <LogOut size={20} />
            </button>
          ) : (
            <button 
              onClick={() => setIsAuth(true)}
              className="w-10 h-10 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-400"
            >
              <UserIcon size={20} />
            </button>
          )}
        </div>
      </header>

      {/* Content Area */}
      <main>
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      {(view === 'home' || view === 'history') && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6 pb-6 pt-4 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none z-40">
          <div className="bg-neutral-900 rounded-[2.5rem] p-4 flex items-center justify-between shadow-2xl pointer-events-auto">
            <button onClick={() => setView('home')} className={`flex-1 flex justify-center ${view === 'home' ? 'text-red-500' : 'text-neutral-400'}`}>
              <div className={`p-2 rounded-xl ${view === 'home' ? 'bg-red-500/10' : ''}`}><Heart size={24} /></div>
            </button>
            <button 
              onClick={() => { setFormType(PlanType.WORKOUT); setView('form'); setStep(1); }} 
              className="w-16 h-16 -mt-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-red-200 border-4 border-white active:scale-95 transition-transform"
            >
              <Plus size={32} />
            </button>
            <button onClick={() => setView('history')} className={`flex-1 flex justify-center ${view === 'history' ? 'text-red-500' : 'text-neutral-400'}`}>
              <div className={`p-2 rounded-xl ${view === 'history' ? 'bg-red-500/10' : ''}`}><CalendarDays size={24} /></div>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Layout;
