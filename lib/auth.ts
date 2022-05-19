import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { userRef } from './db'
import { getDoc, setDoc } from "firebase/firestore";
import { getErrorMessage } from "./utils";

export async function getUserData(uid: string) {
  try {
    const user = await getDoc(userRef(uid))
    if (!user.exists() || user.data() === undefined) throw new Error('User doesnt exist')
    return user.data()
  } catch (error: unknown) {
    const message: string = getErrorMessage(error)
    throw new Error(message)
  }
}
export async function signup(username: string, email: string, password: string) {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = data
    // save user in db
    await setDoc(userRef(user.uid), {
      email,
      username
    })


    return [null, { email, username }, user.uid]
  } catch (error: unknown) {
    const message: string = getErrorMessage(error)
    return [message, null, null]
  }

}
export async function login(email: string, password: string) {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password)
    const { user } = data
    console.log(data)
    const userData = await getUserData(user.uid)
    return [null, userData, user.uid]
  } catch (error: unknown) {
    const message: string = getErrorMessage(error)
    return [message, null, null]
  }
}

export default auth