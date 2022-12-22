// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPNXEl4SkgUd0DB7yrZrZ3Xig0yBZZKsM",
  authDomain: "chat-app-react-2c056.firebaseapp.com",
  projectId: "chat-app-react-2c056",
  storageBucket: "chat-app-react-2c056.appspot.com",
  messagingSenderId: "157683302829",
  appId: "1:157683302829:web:c9d5bb1dc6c8e0ece62124",
  measurementId: "G-K6NF3J7EPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);