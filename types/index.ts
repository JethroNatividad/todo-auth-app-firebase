import { FieldValue } from "firebase/firestore"

export type Todo = {
    text: string
    completed: boolean
    timestamp: FieldValue
}
export type TodoInput = {
    text: string
    completed: boolean
}
export type TodoFront = {
    text: string
    completed: boolean
    id: string
}
export type UserData = {
    username: string
    email: string
    timestamp: FieldValue

}
export type UserDataInput = {
    username: string
    email: string
}
