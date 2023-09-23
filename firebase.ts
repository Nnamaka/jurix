import { getFirestore } from 'firebase/firestore'
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSKYdB2PeNVPhrysSOaZDsdTHUmDZNAT8",
  authDomain: "jurix-7a173.firebaseapp.com",
  projectId: "jurix-7a173",
  storageBucket: "jurix-7a173.appspot.com",
  messagingSenderId: "141536058858",
  appId: "1:141536058858:web:abb3afe5ff8672d4126693"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app);

export { db }