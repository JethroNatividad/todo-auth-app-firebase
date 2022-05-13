import { FirebaseApp, FirebaseOptions, initializeApp } from "firebase/app";
import {Firestore, getFirestore, collection, CollectionReference, DocumentData} from "firebase/firestore"

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
const db:Firestore = getFirestore()

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
  }

type Todo = {
    text:string
    completed: boolean
}

type UserData = {
    username: string
    email: string
    todos: Todo[]
}
export const usersRef = createCollection<UserData>('users')

export default app