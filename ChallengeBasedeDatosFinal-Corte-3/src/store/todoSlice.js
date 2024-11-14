// src/store/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../supabase/supabaseClient';

// Acción asíncrona para obtener todos los ToDos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Acción asíncrona para agregar un nuevo ToDo
export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (title, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .insert([{ title }])
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Acción asíncrona para eliminar un ToDo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Acción asíncrona para cambiar el estado de un ToDo
export const toggleTodo = createAsyncThunk(
  'todos/toggleTodo',
  async (id, { getState, rejectWithValue }) => {
    try {
      const { todos } = getState();
      const todo = todos.items.find((todo) => todo.id === id);
      if (!todo) throw new Error('ToDo no encontrado');
      const { data, error } = await supabase
        .from('todos')
        .update({ completed: !todo.completed })
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    adding: false,
    toggling: false,
    deleting: false,
    error: null,
  },
  reducers: {
    // Puedes agregar reducers sincronizados aquí si es necesario
  },
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // addTodo
      .addCase(addTodo.pending, (state) => {
        state.adding = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.adding = false;
        state.items.unshift(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.adding = false;
        state.error = action.payload;
      })
      // deleteTodo
      .addCase(deleteTodo.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.deleting = false;
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.payload;
      })
      // toggleTodo
      .addCase(toggleTodo.pending, (state) => {
        state.toggling = true;
        state.error = null;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.toggling = false;
        const index = state.items.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.toggling = false;
        state.error = action.payload;
      });
  },
});

export default todoSlice.reducer;
