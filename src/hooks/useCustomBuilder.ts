import { useState, useMemo } from 'react';
import { ALL_DATASETS } from '../constants';

const DAYS = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

export const useCustomBuilder = () => {
  const [planName, setPlanName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [customSchedule, setCustomSchedule] = useState<Record<string, string[]>>({
    'Day 1': [], 'Day 2': [], 'Day 3': [], 'Day 4': [], 'Day 5': [], 'Day 6': [], 'Day 7': []
  });

  const activeDayName = DAYS[activeDayIdx];

  const filteredExercises = useMemo(() => {
    // Note: We don't slice here anymore to ensure "every exercise" is available, 
    // but we still filter by search term.
    const term = searchTerm.toLowerCase();
    if (!term) return ALL_DATASETS;
    return ALL_DATASETS.filter(ex => 
      ex.name.toLowerCase().includes(term) || 
      ex.bodyPart.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const toggleExerciseForActiveDay = (name: string) => {
    setCustomSchedule(prev => {
      const current = prev[activeDayName] || [];
      const updated = current.includes(name) 
        ? current.filter(n => n !== name) 
        : [...current, name];
      return { ...prev, [activeDayName]: updated };
    });
  };

  const resetSchedule = () => {
    setPlanName('');
    setCustomSchedule({
      'Day 1': [], 'Day 2': [], 'Day 3': [], 'Day 4': [], 'Day 5': [], 'Day 6': [], 'Day 7': []
    });
  };

  const totalSelectedCount: number = (Object.values(customSchedule) as string[][]).reduce((acc, curr) => acc + curr.length, 0);
  const activeDaysCount = (Object.values(customSchedule) as string[][]).filter(d => d.length > 0).length;

  return {
    planName,
    setPlanName,
    searchTerm,
    setSearchTerm,
    activeDayIdx,
    setActiveDayIdx,
    customSchedule,
    activeDayName,
    filteredExercises,
    toggleExerciseForActiveDay,
    resetSchedule,
    totalSelectedCount,
    activeDaysCount,
    DAYS
  };
};
