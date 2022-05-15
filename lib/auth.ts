import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {userRef} from './db'
import { getDoc, setDoc } from "firebase/firestore";
import { getErrorMessage } from "./utils";

export async function signup(username:string, email:string, password:string){
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = data
    // save user in db
    await setDoc(userRef(user.uid), {
      todos: [],
      email,
      username
    })
    const userData = (await getDoc(userRef(user.uid))).data()
    
    return [null, userData]
  } catch (error: any) {
    const message:string = getErrorMessage(error)
    return [message, null]
  }

}
export async function login(email:string, password:string){
  try {
    const data = await signInWithEmailAndPassword(auth, email, password)
    const {user} = data
    console.log(data)
    const userData = (await getDoc(userRef(user.uid))).data()
    return [null, userData]
  } catch (error) {
    const message:string = getErrorMessage(error)
    return [message, null]
  }
}

export default auth