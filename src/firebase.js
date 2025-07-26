// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiYZk8lFGjd8RutFHIt2TeQg3IH5d-hrk",
  authDomain: "traffic-103ff.firebaseapp.com",
  projectId: "traffic-103ff",
  storageBucket: "traffic-103ff.appspot.com",
  messagingSenderId: "15083124139",
  appId: "1:15083124139:web:cdc651f74e343d4cc18eee",
  measurementId: "G-R79S5895V1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
