import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {Firestore, getFirestore, collection, CollectionReference, DocumentData} from "firebase/firestore"
import { Auth, getAuth } from 'firebase/auth'
const firebaseConfig:FirebaseOptions = {
  apiKey: "AIzaSyBLt0RYWVBykAkzJlU-xHZPwugxmG-xpGo",
  authDomain: "todoauthapp.firebaseapp.com",
  projectId: "todoauthapp",
  storageBucket: "todoauthapp.appspot.com",
  messagingSenderId: "618509592336",
  appId: "1:618509592336:web:6763502cfe197901d2a795",
  measurementId: "G-QZ9J6FRYD0"
};

// Initialize Firebase
const app:FirebaseApp = initializeApp(firebaseConfig)
// Init firestore
export const db:Firestore = getFirestore()
export const auth:Auth = getAuth()

export default app