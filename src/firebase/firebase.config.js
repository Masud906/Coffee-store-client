// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQOhl67FtRIqUj6CppgaN-iwd6QQV2r4w",
  authDomain: "again-coffee-store.firebaseapp.com",
  projectId: "again-coffee-store",
  storageBucket: "again-coffee-store.appspot.com",
  messagingSenderId: "159337649947",
  appId: "1:159337649947:web:a0d71a0801924b3a0ae5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;