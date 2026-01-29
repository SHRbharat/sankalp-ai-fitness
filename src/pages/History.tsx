import React from 'react';
import { ChevronLeft } from 'lucide-react';
import PlanCard from '../components/features/PlanCard';
import { PlanType } from '../types';

interface HistoryProps {
  setView: (view: any) => void;
  history: any[];
  setCurrentPlan: (plan: any) => void;
  deletePlan: (id: string, e: React.MouseEvent) => void;
}

const History: React.FC<HistoryProps> = ({
  setView,
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
    <div className="px-6 py-10 animate-slide-in pb-32">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('home')} className="p-2 -ml-2 text-neutral-400">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Plan Library</h2>
        <div className="w-10"></div>
      </div>

      <div className="mb-8">
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

      <div className="space-y-4">
        {filteredHistory.length === 0 ? (
          <div className="bg-white p-12 rounded-[2.5rem] border border-dashed border-neutral-100 flex flex-col items-center justify-center text-center">
            <p className="text-neutral-400 italic">No {activeTab} plans found.</p>
          </div>
        ) : (
          filteredHistory.map((plan) => (
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

export default History;
