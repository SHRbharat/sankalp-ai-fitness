import React from 'react';
import { ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlanType, WorkoutGoal } from '../types';

interface PlanFormProps {
  formType: PlanType;
  step: number;
  totalSteps: number;
  formData: any;
  setFormData: (data: any) => void;
  setStep: (step: number) => void;
  setView: (view: any) => void;
  toggleSelection: (key: string, value: string) => void;
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
  handleGenerate: () => void;
}

const PlanForm: React.FC<PlanFormProps> = ({
  formType,
  step,
  totalSteps,
  formData,
  setFormData,
  setStep,
  setView,
  toggleSelection,
  isAuth,
  setIsAuth,
  handleGenerate
}) => {
  return (
    <div className="px-6 py-10 animate-slide-in">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('home')} className="p-2 -ml-2 text-neutral-400">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 px-4">
          <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 transition-all duration-300" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
        <span className="text-sm font-bold text-neutral-400">{step}/{totalSteps}</span>
      </div>

      {formType === PlanType.WORKOUT ? (
        <>
          {step === 1 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 block">Age</label>
                  <input 
                    type="number" 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="w-full bg-white border-b-2 border-neutral-100 py-3 text-xl focus:border-red-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 block">Fitness Level</label>
                  <div className="flex flex-wrap gap-3">
                    {['Beginner', 'Intermediate', 'Advanced'].map(level => (
                      <button 
                        key={level}
                        onClick={() => setFormData({...formData, fitnessLevel: level})}
                        className={`px-6 py-3 rounded-2xl border-2 transition-all ${formData.fitnessLevel === level ? 'bg-red-500 border-red-500 text-white shadow-md' : 'bg-white border-neutral-100 text-neutral-500'}`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Primary Goals</h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.values(WorkoutGoal).map(goal => (
                  <button 
                    key={goal}
                    onClick={() => toggleSelection('goals', goal)}
                    className={`p-4 text-left rounded-3xl border-2 transition-all flex items-center justify-between ${formData.goals.includes(goal) ? 'bg-red-500 border-red-500 text-white' : 'bg-white border-neutral-100 text-neutral-500'}`}
                  >
                    <span className="text-sm font-semibold">{goal}</span>
                    {formData.goals.includes(goal) && <CheckCircle2 size={16} />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Equipment Availability</h2>
              <div className="grid grid-cols-1 gap-3">
                {['No equipment (bodyweight)', 'Dumbbells only', 'Resistance bands', 'Full gym', 'Home gym (custom)'].map(eq => (
                  <button 
                    key={eq}
                    onClick={() => toggleSelection('equipment', eq)}
                    className={`p-5 text-left rounded-[2rem] border-2 transition-all flex items-center justify-between ${formData.equipment.includes(eq) ? 'bg-neutral-900 border-neutral-900 text-white' : 'bg-white border-neutral-100 text-neutral-500'}`}
                  >
                    <span className="font-semibold">{eq}</span>
                    {formData.equipment.includes(eq) && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Physical Constraints</h2>
              <div className="grid grid-cols-2 gap-3">
                {['Knee Pain', 'Back Pain', 'Shoulder Injury', 'Wrist Issues', 'Mobility Limitations'].map(injury => (
                  <button 
                    key={injury}
                    onClick={() => toggleSelection('constraints', injury)}
                    className={`p-4 text-left rounded-3xl border-2 transition-all flex items-center justify-between ${formData.constraints.includes(injury) ? 'bg-red-50 border-red-500 text-red-600' : 'bg-white border-neutral-100 text-neutral-500'}`}
                  >
                    <span className="text-sm font-semibold">{injury}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2 block">Days Per Week</label>
                  <input 
                    type="range" min="1" max="7" 
                    value={formData.daysPerWeek}
                    onChange={(e) => setFormData({...formData, daysPerWeek: e.target.value})}
                    className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between mt-2 text-sm font-bold text-red-500">{formData.daysPerWeek} Days</div>
                </div>
                {!isAuth ? (
                  <div className="bg-red-50 p-6 rounded-[2rem] border border-red-100 text-center">
                    <p className="text-red-600 font-semibold mb-4">Authentication Required</p>
                    <p className="text-sm text-red-500 mb-6">Sign in to generate and save your plans across devices.</p>
                    <button 
                      onClick={() => setIsAuth(true)}
                      className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-200"
                    >
                      Sign In Now
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={handleGenerate}
                    className="w-full bg-red-500 text-white py-6 rounded-[2rem] text-xl font-bold shadow-xl shadow-red-200 flex items-center justify-center space-x-3"
                  >
                    <span>Generate Plan</span>
                    <ArrowRight size={24} />
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        /* DIET FORM STEPS */
        <>
          {step === 1 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Dietary Type</h2>
              <div className="grid grid-cols-1 gap-4">
                {['Vegetarian', 'Eggitarian', 'Vegan', 'Non-vegetarian'].map(diet => (
                  <button 
                    key={diet}
                    onClick={() => setFormData({...formData, dietType: diet})}
                    className={`p-6 text-left rounded-[2rem] border-2 transition-all flex items-center justify-between ${formData.dietType === diet ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-100' : 'bg-white border-neutral-100 text-neutral-500'}`}
                  >
                    <span className="font-bold text-lg">{diet}</span>
                    {formData.dietType === diet && <CheckCircle2 size={24} />}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Food Preferences</h2>
              <textarea 
                placeholder="e.g. Love Indian spices, hate broccoli, allergic to nuts..."
                value={formData.preferences}
                onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                className="w-full h-40 bg-neutral-50 border-2 border-neutral-100 rounded-[2rem] p-6 focus:border-red-500 outline-none transition-colors"
              />
            </div>
          )}
          {step === 3 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Meal Structure</h2>
              <div className="grid grid-cols-2 gap-3">
                {['2 Meals', '3 Meals', '4 Meals', '5+ Meals'].map(m => (
                  <button 
                    key={m}
                    onClick={() => setFormData({...formData, mealsPerDay: m})}
                    className={`p-5 rounded-3xl border-2 transition-all ${formData.mealsPerDay === m ? 'bg-neutral-900 border-neutral-900 text-white' : 'bg-white border-neutral-100 text-neutral-500 font-semibold'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-6">Budget Level</h2>
              <div className="space-y-4 mb-8">
                {['Low', 'Medium', 'Flexible'].map(b => (
                  <button 
                    key={b}
                    onClick={() => setFormData({...formData, budgetLevel: b})}
                    className={`w-full p-6 text-left rounded-[2rem] border-2 transition-all flex items-center justify-between ${formData.budgetLevel === b ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-100' : 'bg-white border-neutral-100 text-neutral-500'}`}
                  >
                    <span className="font-bold text-lg">{b} Budget</span>
                    {formData.budgetLevel === b && <CheckCircle2 size={24} />}
                  </button>
                ))}
              </div>
              {!isAuth ? (
                <div className="bg-red-50 p-6 rounded-[2rem] text-center">
                  <p className="text-red-600 font-semibold mb-4">Authentication Required</p>
                  <button 
                    onClick={() => setIsAuth(true)}
                    className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold"
                  >
                    Sign In to Generate
                  </button>
                </div>
              ) : (
                <button 
                  onClick={handleGenerate}
                  className="w-full bg-red-500 text-white py-6 rounded-[2rem] text-xl font-bold shadow-xl shadow-red-200 flex items-center justify-center space-x-3"
                >
                  <span>Create Diet Plan</span>
                  <ArrowRight size={24} />
                </button>
              )}
            </div>
          )}
        </>
      )}

      {step < totalSteps && (
        <div className="mt-10 flex space-x-4">
          {step > 1 && (
            <button 
              onClick={() => setStep(step - 1)}
              className="flex-1 py-5 rounded-[2rem] border-2 border-neutral-100 font-bold text-neutral-400"
            >
              Back
            </button>
          )}
          <button 
            onClick={() => setStep(step + 1)}
            className="flex-[2] bg-neutral-900 text-white py-5 rounded-[2rem] font-bold flex items-center justify-center space-x-2"
          >
            <span>Continue</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanForm;
