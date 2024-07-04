// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE0rLbNSSG4X9C5J0rTGeAC3L1OcetmTk",
  authDomain: "finance-tracker-a62f2.firebaseapp.com",
  projectId: "finance-tracker-a62f2",
  storageBucket: "finance-tracker-a62f2.appspot.com",
  messagingSenderId: "1023976000398",
  appId: "1:1023976000398:web:e5783fe21086ed008d72df",
  measurementId: "G-NVMSSGM4R4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
