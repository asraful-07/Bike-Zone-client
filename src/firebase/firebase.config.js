// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBZUbHPFTReUhn7BM3LTsBR-b79JXMS_I",
  authDomain: "bike-zone-93e20.firebaseapp.com",
  projectId: "bike-zone-93e20",
  storageBucket: "bike-zone-93e20.firebasestorage.app",
  messagingSenderId: "354310704098",
  appId: "1:354310704098:web:3769749e75e5f85413c7bb",
  measurementId: "G-D5PX1LGKXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
