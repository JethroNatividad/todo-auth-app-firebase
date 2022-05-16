import { collection, CollectionReference, doc, DocumentData, DocumentReference } from "firebase/firestore";
import { db } from "./firebase";
import { UserData } from "../types";
const createCollection = <T = DocumentData>(collectionName: string) => {
    return collection(db, collectionName) as CollectionReference<T>
  }
  

export const usersRef = createCollection<UserData>('users')
export const userRef = (uid:string) => {
    return doc(usersRef, uid)
}
