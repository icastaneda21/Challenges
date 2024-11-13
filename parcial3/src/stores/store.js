import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import pokemonReducer from './slices/pokemonSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
