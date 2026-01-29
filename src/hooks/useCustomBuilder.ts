import { useState, useMemo } from 'react';
import { ALL_DATASETS } from '../constants';

const DAYS = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

export const useCustomBuilder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [customSchedule, setCustomSchedule] = useState<Record<string, string[]>>({
    'Day 1': [], 'Day 2': [], 'Day 3': [], 'Day 4': [], 'Day 5': [], 'Day 6': [], 'Day 7': []
  });

  const activeDayName = DAYS[activeDayIdx];

  const filteredExercises = useMemo(() => {
    if (!searchTerm) return ALL_DATASETS.slice(0, 20);
    return ALL_DATASETS.filter(ex => 
      ex.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ex.bodyPart.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 30);
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
    setCustomSchedule({
      'Day 1': [], 'Day 2': [], 'Day 3': [], 'Day 4': [], 'Day 5': [], 'Day 6': [], 'Day 7': []
    });
  };

  const totalSelectedCount: number = (Object.values(customSchedule) as string[][]).reduce((acc, curr) => acc + curr.length, 0);
  const activeDaysCount = (Object.values(customSchedule) as string[][]).filter(d => d.length > 0).length;

  return {
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
