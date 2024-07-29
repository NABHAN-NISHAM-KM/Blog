// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cbf1f.firebaseapp.com",
  projectId: "mern-blog-cbf1f",
  storageBucket: "mern-blog-cbf1f.appspot.com",
  messagingSenderId: "453638940403",
  appId: "1:453638940403:web:827dba3216d32654cc3986"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);