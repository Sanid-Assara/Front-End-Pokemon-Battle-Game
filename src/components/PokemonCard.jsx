import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCards = ({ pokemon, onAdd }) => {
    const handleAddPokemon = () => {
        onAdd(pokemon); // Call the onAdd function when the button is clicked
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <Link to={`/pokemon/${pokemon.id}`} className="block text-center">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32 mx-auto mb-2" />
                <h3 className="text-lg font-semibold">{pokemon.name.toUpperCase()}</h3>
            </Link>
            <button 
                onClick={handleAddPokemon} 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
                Add to My Roster
            </button>
        </div>
    );
};

export default PokemonCards;