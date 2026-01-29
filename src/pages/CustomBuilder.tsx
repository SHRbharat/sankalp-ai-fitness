import React from 'react';
import { ChevronLeft, Search, CheckCircle2, Plus, X, Sparkles, ArrowRight, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { EXERCISES, YOGA } from '../constants';

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
  planName: string;
  setPlanName: (name: string) => void;
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
  handleCustomFinalize,
  planName,
  setPlanName
}) => {
  const [expandedGroups, setExpandedGroups] = React.useState<Record<string, boolean>>({
    'gym': true,
    'yoga': false
  });
  const [expandedGymParts, setExpandedGymParts] = React.useState<Record<string, boolean>>({});

  const { gymGrouped, yogaGrouped } = React.useMemo(() => {
    const gym: Record<string, any[]> = {};
    const yoga: any[] = [];
    
    // Create sets for fast lookup of yoga names
    const yogaNames = new Set(YOGA.map(y => y.name));

    filteredExercises.forEach(ex => {
      if (yogaNames.has(ex.name)) {
        yoga.push(ex);
      } else {
        const part = ex.bodyPart || 'other';
        if (!gym[part]) gym[part] = [];
        gym[part].push(ex);
      }
    });

    return { gymGrouped: gym, yogaGrouped: yoga };
  }, [filteredExercises]);

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const toggleGymPart = (part: string) => {
    setExpandedGymParts(prev => ({ ...prev, [part]: !prev[part] }));
  };

  const selectedForActiveDay = customSchedule[activeDayName] || [];

  return (
    <div className="px-6 py-10 animate-slide-in pb-40">
      <div className="flex items-center justify-between mb-8">
        <button onClick={() => setView('home')} className="p-2 -ml-2 text-neutral-400">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Custom Weekly Maker</h2>
        <div className="w-10"></div>
      </div>

      <div className="mb-8 relative">
        <input 
          type="text"
          placeholder="Plan Name (e.g. My Gains)"
          value={planName}
          onChange={(e) => setPlanName(e.target.value.slice(0, 25))}
          className="w-full bg-white border-b-2 border-neutral-100 py-4 text-2xl font-black focus:border-red-500 outline-none transition-colors placeholder:text-neutral-200"
        />
        <div className={`absolute right-0 bottom-4 text-[10px] font-black uppercase tracking-widest ${planName.length >= 25 ? 'text-red-500' : 'text-neutral-300'}`}>
          {planName.length}/25
        </div>
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
                <span className="text-[10px] opacity-60">SELECTED</span>
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

      <div className="space-y-6">
        {/* Gym Accordion */}
        <div className="border-2 border-neutral-100 rounded-[2rem] bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => toggleGroup('gym')}
            className="w-full p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center text-red-500">
                <Plus size={24} />
              </div>
              <div className="text-left">
                <span className="font-black uppercase tracking-tighter text-xl text-neutral-800 block">Gym Exercises</span>
                <span className="text-xs text-neutral-400 font-bold">{Object.keys(gymGrouped).length} Body Parts Available</span>
              </div>
            </div>
            {expandedGroups['gym'] ? <ChevronUp size={24} className="text-neutral-400" /> : <ChevronDown size={24} className="text-neutral-400" />}
          </button>

          {expandedGroups['gym'] && (
            <div className="p-4 pt-0 space-y-3 animate-fade-in max-h-[500px] overflow-y-auto">
              {(Object.entries(gymGrouped) as [string, any[]][]).map(([part, exercises]) => {
                const isPartExpanded = expandedGymParts[part] ?? false;
                const partSelectedCount = exercises.filter(ex => selectedForActiveDay.includes(ex.name)).length;
                
                return (
                  <div key={part} className="border border-neutral-50 rounded-2xl overflow-hidden">
                    <button 
                      onClick={() => toggleGymPart(part)}
                      className="w-full p-4 flex items-center justify-between bg-neutral-50/50 hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-bold capitalize text-neutral-600">{part}</span>
                        {partSelectedCount > 0 && (
                          <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                            {partSelectedCount}
                          </span>
                        )}
                      </div>
                      {isPartExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    {isPartExpanded && (
                      <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exercises.map((ex, i) => {
                          const isSelected = selectedForActiveDay.includes(ex.name);
                          return (
                            <div 
                              key={i}
                              onClick={() => toggleExerciseForActiveDay(ex.name)}
                              className={`p-3 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${isSelected ? 'bg-red-50 border-red-500' : 'bg-white border-neutral-50 hover:border-neutral-100'}`}
                            >
                              <div className="flex items-center space-x-3 overflow-hidden">
                                <div className="w-10 h-10 bg-neutral-50 rounded-lg overflow-hidden flex-shrink-0">
                                  <img src={ex.gifUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <span className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-red-700' : 'text-neutral-600'}`}>{ex.name}</span>
                              </div>
                              <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isSelected ? 'bg-red-500 text-white scale-110' : 'bg-neutral-50 text-neutral-200'}`}>
                                {isSelected ? <CheckCircle2 size={12} /> : <Plus size={12} />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Yoga Accordion */}
        <div className="border-2 border-neutral-100 rounded-[2rem] bg-white overflow-hidden shadow-sm">
          <button 
            onClick={() => toggleGroup('yoga')}
            className="w-full p-6 flex items-center justify-between hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center text-green-500">
                <Sparkles size={24} />
              </div>
              <div className="text-left">
                <span className="font-black uppercase tracking-tighter text-xl text-neutral-800 block">Yoga Asanas</span>
                <span className="text-xs text-neutral-400 font-bold">{yogaGrouped.length} Poses Available</span>
              </div>
            </div>
            {expandedGroups['yoga'] ? <ChevronUp size={24} className="text-neutral-400" /> : <ChevronDown size={24} className="text-neutral-400" />}
          </button>

          {expandedGroups['yoga'] && (
            <div className="p-4 pt-0 animate-fade-in max-h-[500px] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {yogaGrouped.map((ex, i) => {
                  const isSelected = selectedForActiveDay.includes(ex.name);
                  return (
                    <div 
                      key={i}
                      onClick={() => toggleExerciseForActiveDay(ex.name)}
                      className={`p-3 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${isSelected ? 'bg-red-50 border-red-500' : 'bg-white border-neutral-50 hover:border-neutral-100'}`}
                    >
                      <div className="flex items-center space-x-3 overflow-hidden">
                        <div className="w-10 h-10 bg-neutral-50 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={ex.gifUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <span className={`text-xs font-bold leading-tight truncate ${isSelected ? 'text-red-700' : 'text-neutral-600'}`}>{ex.name}</span>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${isSelected ? 'bg-red-500 text-white scale-110' : 'bg-neutral-50 text-neutral-200'}`}>
                        {isSelected ? <CheckCircle2 size={12} /> : <Plus size={12} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Selected List Section */}
      {selectedForActiveDay.length > 0 && (
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-sm font-black uppercase tracking-widest text-neutral-400">Selected for {activeDayName}</h3>
            <span className="text-xs font-bold text-red-500">{selectedForActiveDay.length} Items</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedForActiveDay.map(name => (
              <div key={name} className="bg-neutral-900 text-white pl-4 pr-2 py-2 rounded-full flex items-center space-x-2 text-xs font-bold animate-fade-in">
                <span>{name}</span>
                <button 
                  onClick={() => toggleExerciseForActiveDay(name)}
                  className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

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
