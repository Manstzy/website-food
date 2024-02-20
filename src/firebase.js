// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4sqTl8s53-VZ1_ocdYbr1Nwht_xFBFJw",
  authDomain: "website-food-2634d.firebaseapp.com",
  projectId: "website-food-2634d",
  storageBucket: "website-food-2634d.appspot.com",
  messagingSenderId: "689582521636",
  appId: "1:689582521636:web:2c7fbdcb96e861a02247b1",
  measurementId: "G-YVXVGYV2HY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)


