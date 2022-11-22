import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWGWlipApxxLcWnIGEqlcNqLBnwzmzwrc",
  authDomain: "gym-equpment.firebaseapp.com",
  databaseURL:
    "https://gym-equpment-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gym-equpment",
  storageBucket: "gym-equpment.appspot.com",
  messagingSenderId: "773786601108",
  appId: "1:773786601108:web:6749b0f9576136080e1681",
  measurementId: "G-VQXBZL7NR8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
