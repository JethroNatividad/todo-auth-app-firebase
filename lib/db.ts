import { collection, CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";

const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
  }
  const createDoc = <T = DocumentData>(docPath: string) => {
    return doc(db, docPath) as DocumentReference<T>
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
export const userRef = (uid:string):DocumentReference => {
    return createDoc<UserData>(`users/${uid}`)
}
