// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-o3akdtEW96hBct8_weeAGxBFEt1eWXw",
  authDomain: "my-project-1576379795032.firebaseapp.com",
  projectId: "my-project-1576379795032",
  storageBucket: "my-project-1576379795032.appspot.com",
  messagingSenderId: "260000038694",
  appId: "1:260000038694:web:0a9854d1fa3cf798a84be7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);