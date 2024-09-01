import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase.js';

export const saveUserInfo = async (userId, userInfo) => {
  try {
    await setDoc(doc(db, 'users', userId), userInfo, { merge: true });
    console.log('User information saved successfully');
  } catch (error) {
    console.error('Error saving user information:', error);
    throw error;
  }
};

export const getUserInfo = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error getting user information:', error);
    throw error;
  }
};