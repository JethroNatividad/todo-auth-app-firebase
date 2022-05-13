import { collection, CollectionReference, DocumentData } from "firebase/firestore";
import { db } from "./firebase";

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
