import { getUserInfo } from './userService.js';
import { generateMealPlan } from './openaiService.js';
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export const createAndSaveMealPlan = async (userId) => {
  try {
    const userData = await getUserInfo(userId);
    const mealPlan = await generateMealPlan(userData);

    // Save meal plan to Firestore
    await setDoc(doc(db, 'mealPlans', userId), { 
      mealPlan, 
      createdAt: new Date() 
    });

    return mealPlan;
  } catch (error) {
    console.error('Error creating and saving meal plan:', error);
    throw error;
  }
};