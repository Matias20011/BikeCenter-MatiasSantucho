
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bike-center-b7f4a.firebaseapp.com",
  projectId: "bike-center-b7f4a",
  storageBucket: "bike-center-b7f4a.appspot.com",
  messagingSenderId: "888343929913",
  appId: "1:888343929913:web:07194b4d32a322f2b5d9e8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

