import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonSelection = ({ pokemonList, selectedPokemon, setSelectedPokemon }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select your Pokémon:</label>
      <div className="grid grid-cols-2 gap-4">
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
