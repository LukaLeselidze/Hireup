// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxip65lgyRUXr-NMkcUnZvp7LLYryMaiA",
  authDomain: "hireup-e39f6.firebaseapp.com",
  projectId: "hireup-e39f6",
  storageBucket: "hireup-e39f6.appspot.com",
  messagingSenderId: "903577293162",
  appId: "1:903577293162:web:34ef8a8f43528adbbd1513",
  measurementId: "G-HWVD0N2030",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const database = getDatabase(app);
// const usersRef = ref(database, "names");
// const newUser1 = {
//   name: "John Doe",
//   email: "johndoe@example.com",
//   age: 25,
// };

// const newUser1Ref = push(usersRef); // Generates a unique key
// set(newUser1Ref, newUser1);
