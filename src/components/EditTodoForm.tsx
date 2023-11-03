import {useDispatch} from "react-redux";
import { handleUpdate } from "../redux/todoSlice"
import { useState } from "react"
import { TodoType } from "../types/TodoType"

interface PropsInterface {
    todo: TodoType
}

const EditTodoForm = ({todo}:PropsInterface) => {

    const [updatedValue, setUpdatedValue] = useState<string>(todo.task);
    const dispatch = useDispatch();

  return (
    <form className="flex gap-2 w-[600px]" onSubmit={()=>{dispatch(handleUpdate({id:todo.id, value:updatedValue}))}}>
    <input
      type="text"
      placeholder="Your pending tasks"
      className="px-2 rounded-sm w-full"
      value={updatedValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setUpdatedValue(e.target.value)
      }
    />
    <button
      className="border-none bg-blue-700 text-white rounded-sm px-4 py-2 "
      // onClick={()=> dispatch(handleUpdate({id:todo.id, value:updatedValue}))}
    >
      Update
    </button>
  </form>
  )
}

export default EditTodoForm