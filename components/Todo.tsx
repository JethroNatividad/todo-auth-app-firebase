import { Todo as TodoType } from "../types";

const Todo = ({ completed, text }: TodoType) => {
    return (
        <div className="bg-gray-50 px-3 py-2 shadow-sm hover:shadow-md transition-all ease-in-out">
            <p className={`${completed && 'line-through'}`}>{text}</p>
        </div>
    );
}

export default Todo;