// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Y2MHWDp-LCkzE3ow4eCK1OVFp1xuXlI",
  authDomain: "prova3-825d3.firebaseapp.com",
  projectId: "prova3-825d3",
  storageBucket: "prova3-825d3.firebasestorage.app",
  messagingSenderId: "177305128996",
  appId: "1:177305128996:web:f3665eeaf539a3904108b1",
  measurementId: "G-DCY0QK5ZFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);