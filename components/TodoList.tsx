import { getAuth } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react';
import { todosRef } from '../lib/db';
import { TodoFront } from '../types';
import CreateTodo from './CreateTodo';
import Todo from './Todo'

type Props = {
  todos: TodoFront[]
  loadingUser: boolean
}
const TodoList = ({ todos, loadingUser }: Props) => {


  return (
    <div className='w-full flex justify-center'>

      <div className="mx-4 my-3 shadow-md rounded-xl w-full max-w-4xl space-y-5 pb-5">
        <h1 className="font-semibold text-center">TODOS</h1>
        <div className='space-y-1'>
          {
            loadingUser ? <div className='text-center'>Loading Todos...</div> : todos.length === 0 && (
              <div className='text-center'>No todos found, create one</div>
            )
          }
          {
            todos.map((todo) =>
              <Todo completed={todo.completed} text={todo.text} key={todo.id} id={todo.id} />
            )
          }
        </div>
        {
          !loadingUser &&
          <CreateTodo />
        }
      </div>
    </div>
  );
}

export default TodoList