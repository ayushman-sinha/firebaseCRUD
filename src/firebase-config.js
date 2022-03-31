import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCkxKb5aVx1AlLIRFBMVnibA17ak_f3n4w",
    authDomain: "log-auth69.firebaseapp.com",
    projectId: "log-auth69",
    storageBucket: "log-auth69.appspot.com",
    messagingSenderId: "168058663016",
    appId: "1:168058663016:web:ea0223fa2bcb40e02acbdd",
    measurementId: "G-4G7MQX9HN3"
  };
  const app=initializeApp(firebaseConfig);
 export const db=getFirestore(app);