import { useState } from 'react';
import { PlanType } from '../types';

export const useFormState = () => {
  const [formType, setFormType] = useState<PlanType>(PlanType.WORKOUT);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({
    age: '25',
    gender: 'Prefer not to say',
    height: '175',
    weight: '70',
    fitnessLevel: 'Beginner',
    goals: [],
    equipment: [],
    constraints: [],
    daysPerWeek: '4',
    sessionDuration: '45',
    dietType: 'Non-vegetarian',
    preferences: '',
    allergies: '',
    mealsPerDay: '3',
    budgetLevel: 'Medium'
  });

  const toggleSelection = (key: string, value: string) => {
    setFormData((prev: any) => {
      const list = prev[key] || [];
      if (list.includes(value)) {
        return { ...prev, [key]: list.filter((item: string) => item !== value) };
      }
      return { ...prev, [key]: [...list, value] };
    });
  };

  const resetForm = () => {
    setStep(1);
  };

  return {
    formType,
    setFormType,
    step,
    setStep,
    formData,
    setFormData,
    toggleSelection,
    resetForm
  };
};
