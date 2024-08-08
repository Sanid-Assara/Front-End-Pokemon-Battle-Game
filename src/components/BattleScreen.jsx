import React from 'react';
import PokemonListItem from './PokemonListItem';

const BattleScreen = ({ selectedPokemon, opponentPokemon, battleResult, onReset }) => {
  return (
    <div className="battle-screen">
      <h2 className="text-2xl font-bold mb-4">Battle Screen</h2>
      <div className="flex justify-between items-center">
        <PokemonListItem 
          pokemon={selectedPokemon} 
          isSelected={false} 
          onSelect={() => {}} 
        />
        <div className="vs text-3xl font-bold mx-4">VS</div>
        <PokemonListItem 
          pokemon={opponentPokemon} 
          isSelected={false} 
          onSelect={() => {}} 
        />
      </div>
      <p className="text-lg font-semibold mt-4">Result: {battleResult.toUpperCase()}</p>
      <button 
        onClick={onReset} 
        className="w-full px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-gray-700 mt-4"
      >
        Prepare for Next Battle
      </button>
    </div>
  );
};

export default BattleScreen;
