// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI0kly5UQlT96AXRLXOHk_j-Y6EogA6gs",
  authDomain: "sojournai.firebaseapp.com",
  projectId: "sojournai",
  storageBucket: "sojournai.appspot.com",
  messagingSenderId: "1060856367280",
  appId: "1:1060856367280:web:ddb2adbfa7077f1ba99375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);