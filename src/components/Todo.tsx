import { handleDelete, handleToggle, handleUpdate } from "../redux/todoSlice";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { TodoType } from "../types/TodoType";
import {useDispatch} from "react-redux";

interface PropsInterface {
  todo: TodoType
}

const Todo = ({todo}:PropsInterface) => {

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center p-4 bg-blue-300 rounded-sm w-full">
    <p
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      className="text-xl cursor-pointer"
      onClick={() => dispatch(handleToggle(todo.id))}
    >
      {todo.task}
    </p>
    <div className="ml-auto flex gap-4 cursor-pointer">
      <BiEdit size={25} onClick={()=> dispatch(handleUpdate({id:todo.id, value: todo.task}))}/>
      <AiOutlineDelete
        size={25}
        onClick={() => dispatch(handleDelete(todo.id))}
      />
    </div>
  </div>
  )
}

export default Todo