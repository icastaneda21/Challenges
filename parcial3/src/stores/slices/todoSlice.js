// src/stores/slices/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, description: 'Hacer los challenges', done: false },
    { id: 2, description: 'Completar el proyecto', done: false }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: new Date().getTime(),
        description: action.payload,
        done: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
