// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTRI-NzB1JAtoyn2LvjUxnHBMOhhroq8g",
  authDomain: "the-mahadi-news.firebaseapp.com",
  projectId: "the-mahadi-news",
  storageBucket: "the-mahadi-news.appspot.com",
  messagingSenderId: "786148663775",
  appId: "1:786148663775:web:1dcf90dfeaa4c88f64e46a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;