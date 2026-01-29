import { ALL_DATASETS } from "../constants";
import { TrainingPreference } from "../types";

export interface CustomDayInput {
  dayName: string;
  exerciseNames: string[];
}

export const generateWorkoutPlan = async (userData: any) => {
  const response = await fetch("/api/generate-workout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to generate workout plan");
  }
  
  return response.json();
};

export const generateDetailsForCustomExercises = async (userData: any, days: CustomDayInput[], planName?: string) => {
  // Pure client-side logic preserved
  const formattedDays = days.map(day => ({
    dayName: day.dayName,
    focus: day.exerciseNames.length > 0 ? "Custom Workout" : "Rest Day",
    exercises: day.exerciseNames.map(name => {
      const found = ALL_DATASETS.find(d => 
        d.name.toLowerCase() === name.toLowerCase()
      );
      
      return {
        name: found?.name || name,
        sets: "3",
        reps: "12",
        rest: "60s",
        tips: "Focus on form and controlled movements.",
        gifUrl: found?.gifUrl
      };
    })
  }));

  return {
    title: planName || "My Custom Weekly Plan",
    days: formattedDays
  };
};

export const generateDietPlan = async (userData: any) => {
  const response = await fetch("/api/generate-diet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Server error: ${response.status}`);
  }
  
  return response.json();
};
