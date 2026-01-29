
import { GoogleGenAI, Type } from "@google/genai";
import { ALL_DATASETS } from "../constants";

// Corrected: Initialize with process.env.API_KEY directly
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWorkoutPlan = async (userData: any) => {
  const datasetNames = ALL_DATASETS.map(e => e.name).join(", ");
  
  const prompt = `
    Generate a highly personalized weekly workout plan for a user with the following profile:
    Age: ${userData.age}
    Goals: ${userData.goals.join(", ")}
    Level: ${userData.fitnessLevel}
    Equipment: ${userData.equipment.join(", ")}
    Constraints: ${userData.constraints.join(", ")}
    Preferred Days: ${userData.daysPerWeek}
    
    CRITICAL: You MUST select exercises primarily from this list: ${datasetNames}.
    
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

  // Corrected: Ensure response.text is treated as a property and handled if undefined
  const rawJson = JSON.parse(response.text || '{}');
  
  rawJson.days.forEach((day: any) => {
    day.exercises.forEach((ex: any) => {
      const found = ALL_DATASETS.find(d => d.name.toLowerCase() === ex.name.toLowerCase());
      if (found) {
        ex.gifUrl = found.gifUrl;
      }
    });
  });

  return rawJson;
};

export interface CustomDayInput {
  dayName: string;
  exerciseNames: string[];
}

export const generateDetailsForCustomExercises = async (userData: any, days: CustomDayInput[]) => {
  const dayDetailsPrompt = days.map(d => `${d.dayName}: ${d.exerciseNames.join(", ")}`).join("\n");
  
  const prompt = `
    The user has manually selected the following exercises for a 7-day schedule:
    ${dayDetailsPrompt}

    Based on their profile:
    Age: ${userData.age}
    Goal: ${userData.goals.join(", ")}
    Level: ${userData.fitnessLevel}
    
    For EVERY exercise on EVERY day, assign appropriate sets, reps (or duration), rest times, and pro-tips. 
    Ensure the progression and volume across the 7 days are logical for their fitness level.
    If a day has no exercises, mark it as a "Rest Day" or "Recovery Day" in the focus field with an empty exercises array.
    
    Return the full 7-day plan in JSON format.
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

  // Corrected: Handle potentially undefined response.text
  const rawJson = JSON.parse(response.text || '{}');
  
  rawJson.days.forEach((day: any) => {
    day.exercises.forEach((ex: any) => {
      const found = ALL_DATASETS.find(d => d.name.toLowerCase() === ex.name.toLowerCase());
      if (found) {
        ex.gifUrl = found.gifUrl;
      }
    });
  });

  return rawJson;
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
                      calories: { type: Type.STRING },
                      notes: { type: Type.STRING },
                    },
                    required: ["type", "name", "ingredients", "calories"]
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
