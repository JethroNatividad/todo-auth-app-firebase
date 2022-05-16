import CreateTodo from './CreateTodo';
import Todo from './Todo'

const NoteView = () => {
    return (
        <div className="mx-4 my-3 shadow-md rounded-xl max-w-4xl space-y-5 pb-5">
          <h1 className="font-semibold text-center">TODOS</h1>
          <Todo completed={false} text={'todo'}/>
          <CreateTodo/>
        </div>
    );
}

export default NoteView;