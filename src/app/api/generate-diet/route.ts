import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: Request) {
  try {
    const userData = await req.json();
    
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

    return NextResponse.json(JSON.parse(response.text || '{}'));
  } catch (error: any) {
    console.error("Diet generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
