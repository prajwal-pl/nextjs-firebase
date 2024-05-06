// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfu8zkR9JwX5_ev-4YPTpZHfPPdynGeQ4",
  authDomain: "nextjs-firebase-fd85c.firebaseapp.com",
  projectId: "nextjs-firebase-fd85c",
  storageBucket: "nextjs-firebase-fd85c.appspot.com",
  messagingSenderId: "384744324346",
  appId: "1:384744324346:web:7bce37f22d2ca9dc539d43",
  measurementId: "G-RVKW97582V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export default { app, auth };
