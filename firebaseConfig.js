// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvKaeY61QDc41z0Qa99fe6ff6v2kuXZUw",
  authDomain: "movie-watchlist-3f254.firebaseapp.com",
  databaseURL: "https://movie-watchlist-3f254-default-rtdb.firebaseio.com/",
  projectId: "movie-watchlist-3f254",
  storageBucket: "movie-watchlist-3f254.firebasestorage.app",
  messagingSenderId: "684349729357",
  appId: "1:684349729357:web:80ceac1129a9bac0500a04",
  measurementId: "G-XTTFYDSM1X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
