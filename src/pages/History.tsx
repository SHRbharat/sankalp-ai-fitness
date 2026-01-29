import React from 'react';
import { ChevronLeft } from 'lucide-react';
import PlanCard from '../components/features/PlanCard';

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
}) => (
  <div className="px-6 py-10 animate-slide-in">
    <div className="flex items-center justify-between mb-8">
      <button onClick={() => setView('home')} className="p-2 -ml-2 text-neutral-400">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-xl font-bold">Plan Library</h2>
      <div className="w-10"></div>
    </div>

    <div className="space-y-4">
      {history.map((plan) => (
        <PlanCard 
          key={plan.id}
          title={plan.title}
          type={plan.type}
          date={plan.createdAt}
          onClick={() => { setCurrentPlan(plan); setView('plan-view'); }}
          onDelete={(e) => deletePlan(plan.id, e)}
        />
      ))}
    </div>
  </div>
);

export default History;
