import { getAuth } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { todosRef } from '../lib/db';
import { Todo as TodoType } from '../types';
import CreateTodo from './CreateTodo';
import Todo from './Todo'

type Props = {
  todos: TodoType[]
}
const TodoList = ({todos}:Props) => {
  
  
    return (
        <div className="mx-4 my-3 shadow-md rounded-xl max-w-4xl space-y-5 pb-5">
          <h1 className="font-semibold text-center">TODOS</h1>
          <div className='space-y-1'>
          {
            todos.map((todo) => 
            <Todo completed={todo.completed} text={todo.text}/>
            )
          }
          </div>
          <CreateTodo/>
        </div>
    );
}

export default TodoList