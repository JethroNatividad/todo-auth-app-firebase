import { Todo as TodoType } from "../types";

const Todo = ({ completed, text }: TodoType) => {
    return (
        <div className="bg-gray-50 px-3 py-2 shadow-sm hover:shadow-md transition-all ease-in-out">
            <div className="flex">
                <div className={`${completed && 'line-through'} flex-1 break-all`}>{text}</div>
                <div>edit</div>
            </div>

        </div>
    );
}

export default Todo;