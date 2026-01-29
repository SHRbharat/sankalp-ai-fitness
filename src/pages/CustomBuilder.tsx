import React from 'react';
import { ChevronLeft, Search, CheckCircle2, Plus, X, Sparkles, ArrowRight } from 'lucide-react';

interface CustomBuilderProps {
  setView: (view: any) => void;
  DAYS: string[];
  activeDayIdx: number;
  setActiveDayIdx: (idx: number) => void;
  customSchedule: Record<string, string[]>;
  activeDayName: string;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredExercises: any[];
  toggleExerciseForActiveDay: (name: string) => void;
  totalSelectedCount: number;
  activeDaysCount: number;
  resetSchedule: () => void;
  handleCustomFinalize: () => void;
}

const CustomBuilder: React.FC<CustomBuilderProps> = ({
  setView,
  DAYS,
  activeDayIdx,
  setActiveDayIdx,
  customSchedule,
  activeDayName,
  searchTerm,
  setSearchTerm,
  filteredExercises,
  toggleExerciseForActiveDay,
  totalSelectedCount,
  activeDaysCount,
  resetSchedule,
  handleCustomFinalize
}) => {
  return (
    <div className="px-6 py-10 animate-slide-in pb-40">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('home')} className="p-2 -ml-2 text-neutral-400">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Custom Weekly Maker</h2>
        <div className="w-10"></div>
      </div>

      {/* Day Selector */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide mb-8 py-2">
        {DAYS.map((day, idx) => {
          const count = customSchedule[day]?.length || 0;
          const isActive = activeDayIdx === idx;
          return (
            <button 
              key={day}
              onClick={() => setActiveDayIdx(idx)}
              className={`flex-shrink-0 min-w-[100px] p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center ${isActive ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-200' : 'bg-white border-neutral-100 text-neutral-400'}`}
            >
              <span className={`text-xs uppercase font-bold tracking-tighter mb-1 ${isActive ? 'text-red-100' : 'text-neutral-300'}`}>
                {day}
              </span>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-lg">{count}</span>
                <span className="text-[10px] opacity-60">EX</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300" size={20} />
        <input 
          type="text"
          placeholder={`Search exercises for ${activeDayName}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white border border-neutral-100 rounded-[2rem] py-5 pl-14 pr-6 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all shadow-sm"
        />
      </div>

      {/* Exercise List */}
      <div className="space-y-4">
        {filteredExercises.map((ex, i) => {
          const isSelected = (customSchedule[activeDayName] || []).includes(ex.name);
          return (
            <div 
              key={i}
              onClick={() => toggleExerciseForActiveDay(ex.name)}
              className={`p-4 rounded-3xl border transition-all flex items-center justify-between cursor-pointer ${isSelected ? 'bg-red-50 border-red-500' : 'bg-white border-neutral-100'}`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl overflow-hidden flex items-center justify-center border border-neutral-50 shadow-inner">
                  <img src={ex.gifUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <h4 className={`font-bold leading-tight ${isSelected ? 'text-red-700' : 'text-neutral-800'}`}>{ex.name}</h4>
                  <p className="text-[10px] text-neutral-400 uppercase font-black tracking-widest mt-1">{ex.bodyPart}</p>
                </div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-red-500 text-white scale-110' : 'bg-neutral-50 text-neutral-200'}`}>
                {isSelected ? <CheckCircle2 size={20} /> : <Plus size={20} />}
              </div>
            </div>
          );
        })}
      </div>

      {totalSelectedCount > 0 && (
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-gradient-to-t from-neutral-50 via-neutral-50 to-transparent z-40">
          <div className="bg-neutral-900 rounded-[2.5rem] p-6 shadow-2xl animate-slide-in border border-neutral-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-white font-bold block">7-Day Plan Summary</span>
                <span className="text-xs text-neutral-500">{totalSelectedCount} exercises across {activeDaysCount} days</span>
              </div>
              <button onClick={resetSchedule} className="text-neutral-500 hover:text-white flex items-center space-x-1">
                <X size={16} />
                <span className="text-xs font-bold uppercase">Reset</span>
              </button>
            </div>
            
            <button 
              onClick={handleCustomFinalize}
              className="w-full bg-red-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-lg shadow-red-500/30 active:scale-95 transition-transform group"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="text-lg">Finalize Weekly Plan</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomBuilder;
