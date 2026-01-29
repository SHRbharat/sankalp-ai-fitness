import React from 'react';
import { ChevronLeft, Dumbbell, Utensils } from 'lucide-react';
import ExerciseCard from '../components/features/ExerciseCard';

interface PlanViewProps {
  currentPlan: any;
  setView: (view: any) => void;
}

const PlanView: React.FC<PlanViewProps> = ({ currentPlan, setView }) => {
  if (!currentPlan) return null;
  const isWorkout = !!currentPlan.days?.[0]?.exercises;

  return (
    <div className="animate-slide-in">
      <div className="px-6 py-10 pb-24">
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

        <div className="space-y-12">
          {currentPlan.days.map((day: any, idx: number) => (
            <div key={idx}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h2 className="text-2xl font-bold text-neutral-800">{day.dayName}</h2>
              </div>
              
              {day.focus && (
                <div className="mb-6 inline-block bg-neutral-50 text-neutral-500 px-4 py-2 rounded-xl text-sm font-semibold border border-neutral-100">
                  Target: {day.focus}
                </div>
              )}

              <div className="space-y-4">
                {isWorkout ? (
                  day.exercises.length === 0 ? (
                    <div className="bg-white p-10 rounded-[2rem] border border-dashed border-neutral-100 flex items-center justify-center text-neutral-300 italic font-medium">
                      Recovery Day
                    </div>
                  ) : (
                    day.exercises.map((ex: any, eIdx: number) => (
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
                  day.meals.map((meal: any, mIdx: number) => (
                    <div key={mIdx} className="bg-white p-6 rounded-[2.5rem] border border-neutral-100 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{meal.type}</span>
                        <span className="text-xs font-semibold bg-neutral-50 px-3 py-1 rounded-full text-neutral-500">{meal.calories} kcal</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{meal.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {meal.ingredients.map((ing: string, i: number) => (
                          <span key={i} className="text-xs bg-neutral-50 text-neutral-600 px-3 py-1 rounded-lg border border-neutral-100">
                            {ing}
                          </span>
                        ))}
                      </div>
                      {meal.notes && (
                        <p className="text-sm text-neutral-400 italic">Chef's Note: {meal.notes}</p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanView;
