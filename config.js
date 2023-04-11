import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTVlOFMo76GyC6q1mV4GP-4KFA7xCVJIA",
  authDomain: "e-ride-app-85963.firebaseapp.com",
  projectId: "e-ride-app-85963",
  storageBucket: "e-ride-app-85963.appspot.com",
  messagingSenderId: "28277035581",
  appId: "1:28277035581:web:1c20d485e957acd728d054",
  measurementId: "G-3ESJZLWST9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
