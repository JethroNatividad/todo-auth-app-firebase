import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {usersRef} from './db'
import { addDoc } from "firebase/firestore";

export async function signup(username:string, email:string, password:string){
  try {
    
    const data = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = data
    // save user in db
    const newUser = await addDoc(usersRef, {
      uid: user.uid,
      todos: [],
      email,
      username
    })
  } catch (error) {
    alert(error)
  }

  return true
}
export async function login(email:string, password:string){
  const data = await signInWithEmailAndPassword(auth, email, password)
  console.log(data)
  return data
}

export default auth