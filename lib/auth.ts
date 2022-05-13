import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function signup(email:string, password:string){
  return await createUserWithEmailAndPassword(auth, email, password)
}

export default auth