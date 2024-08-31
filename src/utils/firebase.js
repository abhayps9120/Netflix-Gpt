// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQAiuEdCLj6eRBMpf_ClhnEExTFkzksr0",
  authDomain: "netflix-84d29.firebaseapp.com",
  projectId: "netflix-84d29",
  storageBucket: "netflix-84d29.appspot.com",
  messagingSenderId: "408278571942",
  appId: "1:408278571942:web:40f7837b6486b15ce90d67",
  measurementId: "G-V2W0C8F78N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();