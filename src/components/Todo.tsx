// import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { TodoType } from "../types/TodoType";

interface PropsInterface {
  handleUpdate: (id:number, value:string)=> void
  handleDelete: (id: number)=> void
  handleToggle: (id: number)=> void
  todo: TodoType
}

const Todo = (props:PropsInterface) => {

  const {handleDelete, handleToggle, handleUpdate, todo} = props

  return (
    <div className="flex gap-2 items-center p-4 bg-blue-300 rounded-sm w-full">
    <p
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
      className="text-xl cursor-pointer"
      onClick={() => handleToggle(todo.id)}
    >
      {todo.task}
    </p>
    <div className="ml-auto flex gap-4 cursor-pointer">
      <BiEdit size={25} onClick={()=> handleUpdate(todo.id, todo.task)}/>
      <AiOutlineDelete
        size={25}
        onClick={() => handleDelete(todo.id)}
      />
    </div>
  </div>
  )
}

export default Todo