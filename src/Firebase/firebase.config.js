
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8g2gH7gbpQLvzthvaXQwulr0oCkjs5ws",
  authDomain: "vegist-fdd93.firebaseapp.com",
  projectId: "vegist-fdd93",
  storageBucket: "vegist-fdd93.appspot.com",
  messagingSenderId: "275713626693",
  appId: "1:275713626693:web:8d722f16204edd79cc492c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;