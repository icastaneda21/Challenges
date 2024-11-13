import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../stores/slices/pokemonSlice';

const PokemonComponent = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const dispatch = useDispatch();
  const { pokemon, isLoading, error } = useSelector((state) => state.pokemon);

  const handleFetchPokemon = () => {
    dispatch(fetchPokemon(pokemonId));
  };

  return (
    <div>
      <h2>Pokémon Info</h2>
      <input
        type="number"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
        min="1"
        placeholder="Enter Pokémon ID"
      />
      <button onClick={handleFetchPokemon}>Fetch Pokémon</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonComponent;
