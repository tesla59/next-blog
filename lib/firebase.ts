// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGTq5JwA4MC_-BmTCsnnkbo0GuUShre00",
  authDomain: "next-blogger-8b903.firebaseapp.com",
  projectId: "next-blogger-8b903",
  storageBucket: "next-blogger-8b903.appspot.com",
  messagingSenderId: "718715761487",
  appId: "1:718715761487:web:456eb096a50c0149894b3a",
  measurementId: "G-BP0MYTS647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore
export const firestore = getFirestore(app);


// Export the Firebase App
export default app;
