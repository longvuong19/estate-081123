// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const initializeAppIfNeccessary = () => {
  try {
    return getApp();
  } catch (any) {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: "estate-081123.firebaseapp.com",
      projectId: "estate-081123",
      storageBucket: "estate-081123.appspot.com",
      messagingSenderId: "596710974963",
      appId: "1:596710974963:web:2c7c422c82ec5e9e9b1e86",
    };
    return initializeApp(firebaseConfig);
  }
};

// Initialize Firebase
export const app = initializeAppIfNeccessary();
