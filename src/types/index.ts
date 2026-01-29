
export enum PlanType {
  WORKOUT = 'workout',
  DIET = 'diet'
}

export enum TrainingPreference {
  GYM = 'gym',
  YOGA = 'yoga',
  HYBRID = 'hybrid'
}

export enum WorkoutGoal {
  FAT_LOSS = 'Fat loss',
  MUSCLE_GAIN = 'Muscle gain',
  STRENGTH = 'Strength',
  ENDURANCE = 'Endurance',
  FLEXIBILITY = 'Flexibility',
  INJURY_RECOVERY = 'Injury recovery',
  GENERAL_FITNESS = 'General fitness'
}

export interface ExerciseData {
  name: string;
  bodyPart: string;
  gifUrl: string;
}

export interface WorkoutPlan {
  id: string;
  title: string;
  type: string;
  days: {
    dayName: string;
    focus: string;
    exercises: {
      name: string;
      sets?: string;
      reps?: string;
      duration?: string;
      rest: string;
      tips: string;
      gifUrl?: string;
    }[];
  }[];
  createdAt: string;
  source: 'ai' | 'custom';
}

export interface DietPlan {
  id: string;
  title: string;
  days: {
    dayName: string;
    meals: {
      type: string; // Breakfast, Lunch, Snack, Dinner
      name: string;
      ingredients: string[];
      recipe?: string;
      calories: string;
      notes: string;
    }[];
  }[];
  createdAt: string;
  source: 'ai' | 'custom';
}

export interface UserProfile {
  age: string;
  height: string;
  weight: string;
  fitnessLevel: string;
  goals: string[];
  equipment: string[];
  constraints: string[];
  dietType: string;
  preferences: string;
  trainingPreference: TrainingPreference;
}

