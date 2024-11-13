import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pokemonApi from '../pokemonApi';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (id) => {
    const response = await pokemonApi.get(`/pokemon/${id}`);
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemon: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemon = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
