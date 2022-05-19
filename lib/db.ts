import { collection, CollectionReference, deleteDoc, doc, DocumentData, DocumentReference, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Todo, UserData } from "../types";
import { addDoc } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>
}


export const usersRef = createCollection<UserData>('users')
export const userRef = (uid: string) => {
  return doc(usersRef, uid)
}
export const todosRef = (uid: string) => createCollection<Todo>(`users/${uid}/todos`)

export const todoRef = (todosRef: CollectionReference<Todo>, id: string) => {
  return doc(todosRef, id)
}

export const createTodo = async ({ completed, text }: Todo) => {
  const auth = getAuth()
  if (auth && auth.currentUser) {
    addDoc(todosRef(auth.currentUser.uid), { completed, text, timestamp: serverTimestamp() })
  }
}
export const editTodo = async (id: string, { completed, text }: Todo) => {
  const auth = getAuth()
  if (auth && auth.currentUser) {
    const refTodos = todosRef(auth.currentUser.uid)
    setDoc(todoRef(refTodos, id), { completed, text })
  }
}
export const deleteTodo = async (id: string) => {
  const auth = getAuth()
  if (auth && auth.currentUser) {
    const refTodos = todosRef(auth.currentUser.uid)
    deleteDoc(todoRef(refTodos, id))
  }
}