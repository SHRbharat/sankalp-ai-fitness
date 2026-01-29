import { GoogleGenAI, Type } from "@google/genai";
import { EXERCISES, YOGA, ALL_DATASETS } from "../constants";
import { TrainingPreference } from "../types";

// Corrected: Initialize with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (userData: any) => {
  // Determine which dataset to use based on user preference
  let availableExercises = ALL_DATASETS;
  if (userData.trainingPreference === TrainingPreference.YOGA) {
    availableExercises = YOGA;
  } else if (userData.trainingPreference === TrainingPreference.GYM) {
    availableExercises = EXERCISES;
  }

  const datasetNames = availableExercises.map(e => e.name).join(", ");
  
  const prompt = `
    Generate a highly personalized weekly workout plan for a user with the following profile:
    Age: ${userData.age}
    Goals: ${userData.goals.join(", ")}
    Level: ${userData.fitnessLevel}
    Equipment: ${userData.equipment.join(", ")}
    Constraints: ${userData.constraints.join(", ")}
    Preferred Days: ${userData.daysPerWeek}
    Training Preference: ${userData.trainingPreference}
    
    CRITICAL INSTRUCTIONS:
    1. You MUST select exercises ONLY from this specific list: [${datasetNames}].
    2. Do NOT suggest any exercise or pose that is not in the list above.
    3. If the preference is "yoga", focus purely on yoga asanas from the list.
    4. If the preference is "gym", focus on strength/cardio from the list.
    
    Return the plan in JSON format.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                dayName: { type: Type.STRING },
                focus: { type: Type.STRING },
                exercises: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: { type: Type.STRING },
                      sets: { type: Type.STRING },
                      reps: { type: Type.STRING },
                      duration: { type: Type.STRING },
                      rest: { type: Type.STRING },
                      tips: { type: Type.STRING },
                    },
                    required: ["name", "rest", "tips"]
                  }
                }
              },
              required: ["dayName", "focus", "exercises"]
            }
          }
        },
        required: ["title", "days"]
      }
    }
  });

  const rawJson = JSON.parse(response.text || '{}');
  
  // Post-processing: Ensure data integrity and attach gifUrls
  rawJson.days.forEach((day: any) => {
    day.exercises = day.exercises.map((ex: any) => {
      // Find the exact or closest match in our local dataset
      const found = availableExercises.find(d => 
        d.name.toLowerCase() === ex.name.toLowerCase() || 
        ex.name.toLowerCase().includes(d.name.toLowerCase())
      );

      if (found) {
        return {
          ...ex,
          name: found.name, // Normalize to our local name
          gifUrl: found.gifUrl
        };
      }
      
      // If AI hallucinated a name not in our list, we keep it but log/handle (or filter out)
      // For now, we return as is but gifUrl will be missing
      return ex;
    });
  });

  return rawJson;
};


export interface CustomDayInput {
  dayName: string;
  exerciseNames: string[];
}

export const generateDetailsForCustomExercises = async (userData: any, days: CustomDayInput[], planName?: string) => {
  // We no longer use AI for this. We directly format the input into the plan structure.
  // We attach default values since the user only selects names.
  
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
  const prompt = `
    Generate a personalized weekly diet plan for a user with the following profile:
    Diet Type: ${userData.dietType}
    Fitness Goals: ${userData.goals.join(", ")}
    Likes/Dislikes: ${userData.preferences}
    Allergies: ${userData.allergies || 'None'}
    Region/Cuisine: ${userData.region || 'Flexible'}
    Meals per Day: ${userData.mealsPerDay || '3'}
    Budget: ${userData.budgetLevel || 'Medium'}

    Provide Indian-focused options where applicable but stay flexible.
    For EACH meal, you MUST provide a detailed "recipe" field which includes step-by-step preparation instructions.
    Return the plan in JSON format.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          days: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                dayName: { type: Type.STRING },
                meals: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      type: { type: Type.STRING },
                      name: { type: Type.STRING },
                      ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
                      recipe: { type: Type.STRING },
                      calories: { type: Type.STRING },
                      notes: { type: Type.STRING },
                    },
                    required: ["type", "name", "ingredients", "recipe", "calories"]
                  }
                }
              },
              required: ["dayName", "meals"]
            }
          }
        },
        required: ["title", "days"]
      }
    }
  });

  // Corrected: Handle potentially undefined response.text
  return JSON.parse(response.text || '{}');
};
