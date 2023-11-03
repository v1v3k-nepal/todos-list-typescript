import { useState } from "react";
import Todo from "./Todo";
import { TodoType } from "../types/TodoType";
import EditTodoForm from "./EditTodoForm";
import {useSelector, useDispatch} from "react-redux";
import { handleAdd } from "../redux/todoSlice";

const TodoList = () => {

const todosCollection = useSelector((state)=> state.todo.todosCollection);
const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen border-2 bg-[#b3d7fd] max-w-[800px] mx-auto">
      <h1 className="font-semibold text-2xl mb-5">Todo List</h1>
      <div className="flex gap-2 w-[600px]">
        <input
          type="text"
          placeholder="Your pending tasks"
          className="px-2 rounded-sm w-full"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          className="border-none bg-blue-700 text-white rounded-sm px-4 py-2 "
          onClick={()=>dispatch(handleAdd(input))}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4 w-[600px]">
        {todosCollection.map((todo:TodoType) => {
            return(
                todo.isEditing?<EditTodoForm 
                todo={todo} key={todo.id}/>:
                <Todo 
                todo={todo} 
                key={todo.id}
                />
            )         
            })}
      </div>
    </div>
  );
};

export default TodoList;
