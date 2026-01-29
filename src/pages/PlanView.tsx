import React from 'react';
import { ChevronLeft, Dumbbell, Utensils, Clock, ChefHat, ChevronDown, ChevronUp } from 'lucide-react';
import ExerciseCard from '../components/features/ExerciseCard';

interface PlanViewProps {
  currentPlan: any;
  setView: (view: any) => void;
}

const PlanView: React.FC<PlanViewProps> = ({ currentPlan, setView }) => {
  const [activeDayIdx, setActiveDayIdx] = React.useState(0);
  const [expandedRecipeIdx, setExpandedRecipeIdx] = React.useState<number | null>(null);
  
  if (!currentPlan) return null;
  const isWorkout = !!currentPlan.days?.[0]?.exercises;
  const activeDay = currentPlan.days[activeDayIdx];

  const toggleRecipe = (idx: number) => {
    setExpandedRecipeIdx(expandedRecipeIdx === idx ? null : idx);
  };

  return (
    <div className="animate-slide-in">
      <div className="px-6 py-10 pb-32">
        <button onClick={() => setView('home')} className="mb-6 p-2 -ml-2 text-neutral-400 flex items-center space-x-2">
          <ChevronLeft size={24} />
          <span className="text-sm font-bold uppercase tracking-widest">Dashboard</span>
        </button>
        
        <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-neutral-100 mb-10">
          <div className={`w-14 h-14 rounded-2xl ${isWorkout ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'} flex items-center justify-center mb-6`}>
            {isWorkout ? <Dumbbell size={28} /> : <Utensils size={28} />}
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">{currentPlan.title}</h1>
          <p className="text-neutral-400 font-medium">Generated on {currentPlan.createdAt}</p>
        </div>

        {/* Day Selector (Pagination) */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide mb-10 pb-2">
          {currentPlan.days.map((day: any, idx: number) => {
            const isActive = activeDayIdx === idx;
            return (
              <button 
                key={idx}
                onClick={() => { setActiveDayIdx(idx); setExpandedRecipeIdx(null); }}
                className={`flex-shrink-0 min-w-[100px] p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${isActive ? (isWorkout ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-200' : 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-200') : 'bg-white border-neutral-100 text-neutral-400'}`}
              >
                <span className={`text-[10px] uppercase font-black tracking-widest mb-1 ${isActive ? 'opacity-80' : 'text-neutral-300'}`}>
                  DAY
                </span>
                <span className="font-black text-xl">{idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Active Day Content */}
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-neutral-900">{activeDay.dayName}</h2>
            {activeDay.focus && (
              <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${isWorkout ? 'bg-red-50 text-red-500 border-red-100' : 'bg-green-50 text-green-500 border-green-100'}`}>
                {activeDay.focus}
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            {isWorkout ? (
              activeDay.exercises.length === 0 ? (
                <div className="bg-white p-12 rounded-[2.5rem] border-2 border-dashed border-neutral-100 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center mb-4 text-neutral-300">
                    <Clock size={32} />
                  </div>
                  <p className="text-neutral-400 font-bold text-lg">Recovery Day</p>
                  <p className="text-neutral-300 text-sm">Rest and let your muscles recover.</p>
                </div>
              ) : (
                activeDay.exercises.map((ex: any, eIdx: number) => (
                  <ExerciseCard 
                    key={eIdx}
                    name={ex.name}
                    sets={ex.sets}
                    reps={ex.reps}
                    duration={ex.duration}
                    rest={ex.rest}
                    tips={ex.tips}
                    gifUrl={ex.gifUrl}
                  />
                ))
              )
            ) : (
              activeDay.meals.map((meal: any, mIdx: number) => (
                <div key={mIdx} className="bg-white p-6 rounded-[2.5rem] border border-neutral-100 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black text-green-500 uppercase tracking-widest">{meal.type}</span>
                    <span className="text-xs font-bold bg-neutral-50 px-3 py-1 rounded-full text-neutral-500">{meal.calories} kcal</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{meal.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {meal.ingredients.map((ing: string, i: number) => (
                      <span key={i} className="text-[10px] font-bold bg-neutral-50 text-neutral-600 px-3 py-1.5 rounded-lg border border-neutral-100 uppercase tracking-tighter">
                        {ing}
                      </span>
                    ))}
                  </div>
                  
                  {meal.recipe && (
                    <div className="mt-4 border-t border-neutral-50 pt-4">
                      <button 
                        onClick={() => toggleRecipe(mIdx)}
                        className="w-full flex items-center justify-between py-2 text-sm font-bold text-neutral-600 hover:text-green-500 transition-colors"
                      >
                        <div className="flex items-center space-x-2">
                          <ChefHat size={18} />
                          <span>Preparation Steps</span>
                        </div>
                        {expandedRecipeIdx === mIdx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                      
                      {expandedRecipeIdx === mIdx && (
                        <div className="mt-4 animate-fade-in bg-green-50/30 p-5 rounded-2xl border border-green-50/50">
                          <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                            {meal.recipe}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {meal.notes && (
                    <div className="mt-4 flex items-start space-x-2 bg-neutral-50/50 p-4 rounded-2xl border border-neutral-50">
                      <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 flex-shrink-0"></div>
                      <p className="text-sm text-neutral-500 leading-relaxed italic">{meal.notes}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanView;
