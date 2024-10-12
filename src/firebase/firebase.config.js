// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-sWJ0tM_wjHzbhgyHktpo60N4bWCchj4",
  authDomain: "medicostcompare.firebaseapp.com",
  projectId: "medicostcompare",
  storageBucket: "medicostcompare.appspot.com",
  messagingSenderId: "898977949983",
  appId: "1:898977949983:web:8e7fb833904b7d0be9282a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;