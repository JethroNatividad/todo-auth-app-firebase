import { collection, CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
  }
  

export type Todo = {
    text:string
    completed: boolean
}

export type UserData = {
    username: string
    email: string
    todos: Todo[]
}
export const usersRef = createCollection<UserData>('users')
export const userRef = (uid:string) => {
    return doc(usersRef, uid)
}
