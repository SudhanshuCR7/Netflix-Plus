// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdp_WVSf6nXhgTDOuNbc_rEps0gK_Djw8",
  authDomain: "netflixplus-6f48c.firebaseapp.com",
  projectId: "netflixplus-6f48c",
  storageBucket: "netflixplus-6f48c.appspot.com",
  messagingSenderId: "29989102022",
  appId: "1:29989102022:web:053789c64ef960bcccd2c7",
  measurementId: "G-7MQP1HJLHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// hansraj@gmail.com
// hathibhai@1234