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
}) => (
  <div className="px-6 pb-24 animate-slide-in">
    <div className="mt-12 mb-10">
      <h1 className="text-4xl font-bold text-neutral-900 leading-tight">
        Fuel Your <span className="text-red-500">Ignition</span>
      </h1>
      <p className="text-neutral-500 mt-2 text-lg">AI-powered transformation starts here.</p>
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
          <span className="text-sm text-neutral-400">Map your week, let AI fill the details.</span>
        </div>
      </div>
      <Plus className="text-neutral-300" size={24} />
    </button>

    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-bold text-neutral-800">Recent Plans</h2>
      {history.length > 0 && (
        <button onClick={() => setView('history')} className="text-red-500 text-sm font-semibold">See All</button>
      )}
    </div>

    {history.length === 0 ? (
      <div className="bg-white p-10 rounded-[2.5rem] border border-dashed border-neutral-200 flex flex-col items-center justify-center text-center">
        <CalendarDays className="text-neutral-200 mb-4" size={48} />
        <p className="text-neutral-400">No plans yet. Generate your first personalized regime today.</p>
      </div>
    ) : (
      history.slice(0, 3).map((plan) => (
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
);

export default Home;
