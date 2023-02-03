import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqqq7hzT7b3WAni-mgX3WF6K1WTzUEr1Y",
  authDomain: "yummy-helados.firebaseapp.com",
  projectId: "yummy-helados",
  storageBucket: "yummy-helados.appspot.com",
  messagingSenderId: "657891710978",
  appId: "1:657891710978:web:d8933d35fc16e1ea1d6f1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);