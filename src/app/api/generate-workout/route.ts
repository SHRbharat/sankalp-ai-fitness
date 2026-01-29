import { GoogleGenAI, Type } from "@google/genai";
import { ALL_DATASETS, YOGA, EXERCISES } from "../../../server/constants";
import { TrainingPreference } from "../../../types";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const userData = await req.json();
    
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
        const found = availableExercises.find(d => 
          d.name.toLowerCase() === ex.name.toLowerCase() || 
          ex.name.toLowerCase().includes(d.name.toLowerCase())
        );

        if (found) {
          return {
            ...ex,
            name: found.name,
            gifUrl: found.gifUrl
          };
        }
        return ex;
      });
    });

    return NextResponse.json(rawJson);
  } catch (error: any) {
    console.error("Workout generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
