// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0pfCnDzZNQcyO5tAz0zseQIuawr8H5Os",
  authDomain: "artify-art-site-auth.firebaseapp.com",
  projectId: "artify-art-site-auth",
  storageBucket: "artify-art-site-auth.firebasestorage.app",
  messagingSenderId: "1005038452203",
  appId: "1:1005038452203:web:7232511eb1b7e51366adae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)