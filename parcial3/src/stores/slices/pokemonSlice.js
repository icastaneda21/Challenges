import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import pokemonApi from '../pokemonApi';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (page = 0) => {
    const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    return response.data.results;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokemons: [], isLoading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
