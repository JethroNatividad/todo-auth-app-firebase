import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function signup(email:string, password:string){
  const data = await createUserWithEmailAndPassword(auth, email, password)
  return data
}
export async function login(email:string, password:string){
  const data = await signInWithEmailAndPassword(auth, email, password)
  console.log(data)
  return data
}

export default auth