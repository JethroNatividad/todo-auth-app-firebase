import { FieldValue } from "firebase/firestore"

export type Todo = {
    text: string
    completed: boolean
    timestamp?: FieldValue
}

export type UserData = {
    username: string
    email: string
    timestamp?: FieldValue

}

export interface TodoFront extends Todo {
    id: string
}