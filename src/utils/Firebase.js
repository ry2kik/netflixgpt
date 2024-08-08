// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH_ryml5aG1VwIZSiJPIxfVt7MFfrwvDw",
  authDomain: "netflixgpt-fab38.firebaseapp.com",
  projectId: "netflixgpt-fab38",
  storageBucket: "netflixgpt-fab38.appspot.com",
  messagingSenderId: "1048248094097",
  appId: "1:1048248094097:web:6d70d603e9d2a1e963de30",
  measurementId: "G-R02GP8B0V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);