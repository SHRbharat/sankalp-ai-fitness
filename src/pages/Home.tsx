import React from 'react';
import { Dumbbell, Utensils, Zap, Plus, CalendarDays } from 'lucide-react';
import { PlanType } from '../types';
import PlanCard from '../components/features/PlanCard';

interface HomeProps {
  setFormType: (type: PlanType) => void;
  setView: (view: any) => void;
  setStep: (step: number) => void;
  setActiveDayIdx: (idx: number) => void;
  history: any[];
  setCurrentPlan: (plan: any) => void;
  deletePlan: (id: string, e: React.MouseEvent) => void;
}

const Home: React.FC<HomeProps> = ({
  setFormType,
  setView,
  setStep,
  setActiveDayIdx,
  history,
  setCurrentPlan,
  deletePlan
}) => {
  const [activeTab, setActiveTab] = React.useState<'ai' | 'custom' | 'diet'>('ai');

  const filteredHistory = history.filter(plan => {
    if (activeTab === 'ai') return plan.type === PlanType.WORKOUT && (!plan.source || plan.source === 'ai');
    if (activeTab === 'custom') return plan.type === PlanType.WORKOUT && plan.source === 'custom';
    if (activeTab === 'diet') return plan.type === PlanType.DIET;
    return false;
  });

  return (
    <div className="px-6 pb-24 animate-slide-in">
      <div className="mt-12 mb-10">
        <h1 className="text-4xl font-bold text-neutral-900 leading-tight">
          Fuel Your <span className="text-red-500">Sankalp</span>
        </h1>
        <p className="text-neutral-500 mt-2 text-lg">Your resolve, powered by intelligence.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <button 
          onClick={() => { setFormType(PlanType.WORKOUT); setView('form'); setStep(1); }}
          className="bg-red-500 p-6 rounded-[2rem] text-white flex flex-col items-start space-y-4 shadow-lg shadow-red-100 hover:scale-[1.02] transition-transform"
        >
          <div className="bg-white/20 p-2 rounded-xl"><Dumbbell size={24} /></div>
          <span className="font-semibold text-lg">AI Workout</span>
        </button>
        <button 
          onClick={() => { setFormType(PlanType.DIET); setView('form'); setStep(1); }}
          className="bg-neutral-900 p-6 rounded-[2rem] text-white flex flex-col items-start space-y-4 hover:scale-[1.02] transition-transform"
        >
          <div className="bg-white/10 p-2 rounded-xl"><Utensils size={24} /></div>
          <span className="font-semibold text-lg">AI Diet</span>
        </button>
      </div>

      <button 
        onClick={() => { setView('custom-builder'); setActiveDayIdx(0); }}
        className="w-full mb-10 bg-white border border-neutral-100 p-6 rounded-[2rem] flex items-center justify-between group hover:border-red-200 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-neutral-50 rounded-2xl flex items-center justify-center text-neutral-400 group-hover:text-red-500 transition-colors">
            <Zap size={24} />
          </div>
          <div className="text-left">
            <span className="block font-bold text-lg text-neutral-800">7-Day Custom Maker</span>
            <span className="text-sm text-neutral-400">Map your week, your way.</span>
          </div>
        </div>
        <Plus className="text-neutral-300" size={24} />
      </button>

      <div className="mb-6 flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-neutral-800">Recent Plans</h2>
          {history.length > 0 && (
            <button onClick={() => setView('history')} className="text-red-500 text-sm font-semibold">See All</button>
          )}
        </div>

        {/* Tabs */}
        <div className="flex bg-neutral-100 p-1 rounded-2xl">
          {[
            { id: 'ai', label: 'AI Plan' },
            { id: 'custom', label: 'Custom' },
            { id: 'diet', label: 'Diet' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === tab.id ? 'bg-white text-red-500 shadow-sm' : 'text-neutral-400'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 min-h-[100px]">
        {filteredHistory.length === 0 ? (
          <div className="bg-white p-10 rounded-[2.5rem] border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center">
            <CalendarDays className="text-neutral-200 mb-4" size={48} />
            <p className="text-neutral-400 text-sm italic">No {activeTab} plans found yet.</p>
          </div>
        ) : (
          filteredHistory.slice(0, 3).map((plan) => (
            <PlanCard 
              key={plan.id}
              title={plan.title}
              type={plan.type}
              date={plan.createdAt}
              onClick={() => { setCurrentPlan(plan); setView('plan-view'); }}
              onDelete={(e) => deletePlan(plan.id, e)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
