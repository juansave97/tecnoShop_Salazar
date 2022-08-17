import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyATVOjayNwnFJX7pxrMsQvfuLrHzvYZ6ew",
  authDomain: "backend-tecnoshop.firebaseapp.com",
  projectId: "backend-tecnoshop",
  storageBucket: "backend-tecnoshop.appspot.com",
  messagingSenderId: "686404665938",
  appId: "1:686404665938:web:1ad6bb1bd5c415c897158b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)