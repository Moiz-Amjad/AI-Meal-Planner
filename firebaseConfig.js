// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLPb8TZjmBmoTgsBG54jly8dbDBg2xeEY",
  authDomain: "mealplanner-2617b.firebaseapp.com",
  projectId: "mealplanner-2617b",
  storageBucket: "mealplanner-2617b.appspot.com",
  messagingSenderId: "430216661540",
  appId: "1:430216661540:web:2bafca4f6fde53aa0ba6b1",
  measurementId: "G-VYL0EYWNXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };