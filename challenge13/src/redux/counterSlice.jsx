import { createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
  count: 0,
};

// Crear el slice para el contador
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // Acción para incrementar el contador en 1
    increment: (state) => {
      state.count += 1;
    },
    // Acción para decrementar el contador en 1
    decrement: (state) => {
      state.count -= 1;
    },
    // Acción para incrementar el contador por un valor específico
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Exportar las acciones para usarlas en los componentes
export const { increment, decrement, incrementBy } = counterSlice.actions;

// Exportar el reducer para integrarlo en el store
export default counterSlice.reducer;
