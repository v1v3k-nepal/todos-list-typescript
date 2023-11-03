import { createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../types/TodoType";

const initialState = {
    todosCollection:[] as TodoType[],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        handleToggle : (state, action) => {
            const todosCollection = state.todosCollection
            const id = action.payload;
            const modifiedCollection = todosCollection.map((todo:TodoType) =>
              todo.id == id ? { ...todo, completed: !todo.completed } : todo
            );
            state.todosCollection = modifiedCollection;
          },
        
        handleUpdate : (state, action) =>{
            const id = action.payload.id;
            const value = action.payload.value;
            const todosCollection = state.todosCollection;
            const modifiedCollection = todosCollection.map((todo)=> todo.id== id? {...todo, task: value,isEditing: !todo.isEditing}: todo);
            state.todosCollection = modifiedCollection;
          },
        
        handleAdd : (state, action) => {
            const input = action.payload;
            const modifiedCollection = [...state.todosCollection, { id: Date.now(), task: input, completed: false, isEditing:false }]
            state.todosCollection = modifiedCollection;
          },
        
        handleDelete : (state, action) => {
            const todosCollection = state.todosCollection;
            const id = action.payload;
            const modifiedCollection = todosCollection.filter((todo) => todo.id !== id);
            state.todosCollection = modifiedCollection;
          },
    }
})

export const {handleUpdate, handleToggle, handleAdd, handleDelete} = todoSlice.actions;
export default todoSlice.reducer;