import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { userRef} from './db'
import { getDoc, setDoc } from "firebase/firestore";
import { getErrorMessage } from "./utils";

export async function getUserData(uid:string) {
  try {
    const user = await getDoc(userRef(uid))
    if(!user.exists() || user.data() === undefined) throw new Error('User doesnt exist')
    return user.data()
  } catch (error:unknown) {
    const message:string = getErrorMessage(error)
    throw new Error(message)
  }
}
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
    const userData = await getUserData(user.uid)
    
    return [null, userData]
  } catch (error: unknown) {
    const message:string = getErrorMessage(error)
    return [message, null]
  }

}
export async function login(email:string, password:string){
  try {
    const data = await signInWithEmailAndPassword(auth, email, password)
    const {user} = data
    console.log(data)
    const userData = await getUserData(user.uid)
    return [null, userData]
  } catch (error:unknown) {
    const message:string = getErrorMessage(error)
    return [message, null]
  }
}

export default auth