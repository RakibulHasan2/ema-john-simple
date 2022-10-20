// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNWGD7u1jkshFH8CSa2W64yREfWZ0r45I",
  authDomain: "ema-john-ea598.firebaseapp.com",
  projectId: "ema-john-ea598",
  storageBucket: "ema-john-ea598.appspot.com",
  messagingSenderId: "502543071081",
  appId: "1:502543071081:web:3b660c82ccd7cdbbda2ff8",
  measurementId: "G-3QNPW0E8HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;