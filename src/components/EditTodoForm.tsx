// import React from 'react'

import { useState } from "react"
import { TodoType } from "../types/TodoType"

interface PropsInterface {
    handleUpdate: (id:number, value:string) => void
    todo: TodoType
}

const EditTodoForm = ({todo, handleUpdate}:PropsInterface) => {

    const [updatedValue, setUpdatedValue] = useState<string>(todo.task)
  return (
    <form className="flex gap-2 w-[600px]" onSubmit={(e)=>{
      e.preventDefault();
      handleUpdate(todo.id, updatedValue);
      }}>
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
      type="submit"
      onClick={()=> handleUpdate(todo.id, updatedValue)}
    >
      Update
    </button>
  </form>
  )
}

export default EditTodoForm