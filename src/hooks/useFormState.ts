import { useState } from 'react';
import { PlanType, TrainingPreference } from '../types';

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
    budgetLevel: 'Medium',
    trainingPreference: TrainingPreference.HYBRID
  });


  const toggleSelection = (key: string, value: string) => {
    setFormData((prev: any) => {
      const list = prev[key] || [];
      const noEq = 'No equipment (bodyweight)';

      if (key === 'equipment') {
        if (value === noEq) {
          // If selecting "No equipment", remove everything else or toggle it off if already selected
          if (list.includes(noEq)) {
            return { ...prev, [key]: [] };
          }
          return { ...prev, [key]: [noEq] };
        } else {
          // If selecting something else, ensure "No equipment" is removed
          const newList = list.filter((item: string) => item !== noEq);
          if (newList.includes(value)) {
            return { ...prev, [key]: newList.filter((item: string) => item !== value) };
          }
          return { ...prev, [key]: [...newList, value] };
        }
      }

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
