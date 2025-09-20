import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// --- IMPORTANT ---
// Replace this with your actual Firebase configuration object
// You can get this from your Firebase project settings
const firebaseConfig = {
  apiKey: "AIzaSyCxRiiFWo2yObmp1X4uTxpKHBEdW9ajO7w",
  authDomain: "monastery-360-f1179.firebaseapp.com",
  projectId: "monastery-360-f1179",
  storageBucket: "monastery-360-f1179.firebasestorage.app",
  messagingSenderId: "738396705039",
  appId: "1:738396705039:web:1734d68102964bccbc6e7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

