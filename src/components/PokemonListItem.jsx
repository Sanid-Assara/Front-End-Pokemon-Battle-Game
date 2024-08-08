import React from 'react';

const PokemonListItem = ({ pokemon, isSelected, onSelect }) => {
  return (
    <div 
      onClick={onSelect} 
      className={`cursor-pointer p-4 border ${isSelected ? 'border-blue-500' : 'border-gray-300'} rounded-md shadow-sm hover:shadow-md`}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full mb-2" />
      <h3 className="text-lg font-semibold text-center">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonListItem;