import React, { useState, useEffect } from 'react';
import { generateWorkoutPlan, generateDietPlan, generateDetailsForCustomExercises, CustomDayInput } from '../services/geminiService';
import { PlanType, WorkoutPlan, DietPlan } from '../types';

export const useFitnessPlan = (isAuth: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<any>(null);
  const [history, setHistory] = useState<(WorkoutPlan | DietPlan)[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('ignite_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveToHistory = (plan: any, type: PlanType, source: 'ai' | 'custom') => {
    const newPlan = { 
      ...plan, 
      id: Date.now().toString(), 
      createdAt: new Date().toLocaleDateString(), 
      type,
      source
    };
    const updatedHistory = [newPlan, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('ignite_history', JSON.stringify(updatedHistory));
    return newPlan;
  };

  const deletePlan = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = history.filter(p => p.id !== id);
    setHistory(updated);
    localStorage.setItem('ignite_history', JSON.stringify(updated));
  };

  const handleGenerate = async (formType: PlanType, formData: any) => {
    if (!isAuth) {
      alert("Please login to generate and save your plans.");
      return;
    }
    setIsLoading(true);
    try {
      let result;
      if (formType === PlanType.WORKOUT) {
        result = await generateWorkoutPlan(formData);
      } else {
        result = await generateDietPlan(formData);
      }
      const saved = saveToHistory(result, formType, 'ai');
      setCurrentPlan(saved);
      return saved;
    } catch (error) {
      console.error(error);
      alert("Failed to generate plan. Please check your API key.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCustomFinalize = async (formData: any, customSchedule: Record<string, string[]>, planName?: string) => {
    const dayInputs: CustomDayInput[] = (Object.entries(customSchedule) as [string, string[]][]).map(([dayName, exerciseNames]) => ({
      dayName,
      exerciseNames
    }));

    if (dayInputs.every(d => d.exerciseNames.length === 0)) {
      alert("Please select at least one exercise for any day.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateDetailsForCustomExercises(formData, dayInputs, planName);
      const saved = saveToHistory(result, PlanType.WORKOUT, 'custom');
      setCurrentPlan(saved);
      return saved;
    } catch (error) {
      console.error(error);
      alert("AI enrichment failed. Check your API key or connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    currentPlan,
    setCurrentPlan,
    history,
    deletePlan,
    handleGenerate,
    handleCustomFinalize
  };
};
