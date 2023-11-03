import { useState } from "react";
import Todo from "./Todo";
import { TodoType } from "../types/TodoType";
import EditTodoForm from "./EditTodoForm";

const TodoList = () => {
  const [todosCollection, setTodosCollection] = useState<TodoType[]>([]);
  const [input, setInput] = useState("");

  const handleToggle = (id: number):void => {
    const modifiedCollection = todosCollection.map((todo) =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodosCollection(modifiedCollection);
  };

  const handleUpdate = (id:number, value:string):void =>{
    const modifiedCollection = todosCollection.map((todo)=> todo.id== id? {...todo, task: value,isEditing: !todo.isEditing}: todo);
    setTodosCollection(modifiedCollection);
  }

  const handleAdd = ():void => {
    setTodosCollection([
      ...todosCollection,
      { id: Date.now(), task: input, completed: false, isEditing:false },
    ]);
  };

  const handleDelete = (id: number):void => {
    const modifiedCollection = todosCollection.filter((todo) => todo.id !== id);
    setTodosCollection(modifiedCollection);
  };

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
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col gap-4 w-[600px]">
        {todosCollection.map((todo) => {
            return(
                todo.isEditing?<EditTodoForm handleUpdate={handleUpdate} todo={todo} key={todo.id}/>:
                <Todo 
                todo={todo} 
                key={todo.id}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                handleUpdate={handleUpdate}/>
            )         
            })}
      </div>
    </div>
  );
};

export default TodoList;
