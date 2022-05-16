export type Todo = {
    text:string
    completed: boolean
}

export type UserData = {
    username: string
    email: string
    todos: Todo[]
}