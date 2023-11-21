// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp0IYSGBMWbf--LpTFLEPgJFgBepc4IlQ",
  authDomain: "invoiceapp-19736.firebaseapp.com",
  projectId: "invoiceapp-19736",
  storageBucket: "invoiceapp-19736.appspot.com",
  messagingSenderId: "780230725780",
  appId: "1:780230725780:web:528d89865ae2e7eac5a481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;