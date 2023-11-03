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
    <div className="flex gap-2 w-[600px]">
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
      onClick={()=> handleUpdate(todo.id, updatedValue)}
    >
      Update
    </button>
  </div>
  )
}

export default EditTodoForm