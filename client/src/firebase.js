// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-62fc9.firebaseapp.com",
  projectId: "mern-blog-62fc9",
  storageBucket: "mern-blog-62fc9.appspot.com",
  messagingSenderId: "497793080903",
  appId: "1:497793080903:web:53c5389fc2370a4cf55b62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);