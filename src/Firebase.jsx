// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6CdkfN0h2AK1PqEQgVCJAwPqcQmlO-A0",
  authDomain: "carpex-lte.firebaseapp.com",
  projectId: "carpex-lte",
  storageBucket: "carpex-lte.appspot.com",
  messagingSenderId: "671176755939",
  appId: "1:671176755939:web:f665f594e7ea4c3fa013d6",
  measurementId: "G-SDJW04J14F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);