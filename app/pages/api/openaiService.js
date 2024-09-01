import { Configuration, OpenAIApi } from 'openai';
import { openaiApiKey } from './config.js';

const openai = new OpenAIApi(new Configuration({ apiKey: openaiApiKey }));

export const generateMealPlan = async (userData) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Generate a detailed weekly meal plan in JSON format for a user with the following information:
        Weight: ${userData.weight} kg
        Height: ${userData.height} cm
        Goal: ${userData.goal}
        Workout Frequency: ${userData.workoutFrequency} times per week
        Workout Type: ${userData.workoutType}
        Dietary Preferences: ${userData.dietaryPreferences.join(', ')}
        
        The meal plan should include:
        1. Daily calorie target
        2. Macronutrient breakdown (protein, carbs, fats)
        3. 3 meals and 2 snacks per day
        4. For each meal/snack:
           - Name of the dish
           - Ingredients with quantities
           - Preparation instructions
           - Nutritional information (calories, protein, carbs, fats)
        
        Format the response as a JSON object with days of the week as keys.`,
      max_tokens: 2000,
    });

    return JSON.parse(response.data.choices[0].text);
  } catch (error) {
    console.error('Error generating meal plan:', error);
    throw error;
  }
};