import React, { useState, useEffect } from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonSelection = ({ selectedPokemon, setSelectedPokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const savedRoster = localStorage.getItem('pokemonRoster');
    if (savedRoster) {
      setPokemonList(JSON.parse(savedRoster));
    }
  }, []);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select your Pokémon:</label>
      <div 
        className="grid grid-cols-6 gap-4 overflow-y-auto"
        style={{ gridAutoRows: 'minmax(0, 1fr)' }}
      >
        {pokemonList.map((pokemon, index) => (
          <PokemonListItem 
            key={index} 
            pokemon={pokemon} 
            isSelected={selectedPokemon === pokemon} 
            onSelect={() => setSelectedPokemon(pokemon)} 
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonSelection;