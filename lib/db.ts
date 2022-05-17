import { collection, CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";
import { Todo, UserData } from "../types";
import {addDoc} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
  }
  

export const usersRef = createCollection<UserData>('users')
export const userRef = (uid:string) => {
    return doc(usersRef, uid)
}
export const todosRef = (uid:string) => createCollection<Todo>(`users/${uid}/todos`)

export const createTodo = async ({completed, text}:Todo) => {
  const auth = getAuth()
  if(auth && auth.currentUser){
    addDoc(todosRef(auth.currentUser.uid), {completed: false, text})
  }
}