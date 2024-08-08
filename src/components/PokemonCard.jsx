import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCards = ({ pokemon, onAdd }) => {
    const handleAddPokemon = () => {
        onAdd(pokemon); // Call the onAdd function when the button is clicked
    };

    return (
        <div className="card card-compact glass bg-yellow-300 flex flex-wrap justify-center opacity-90 transform hover:scale-105 transition-transform duration-200">
            <figure>
                <img 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.name} 
                    className="w-32 h-32 mx-auto mb-2" 
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title">{pokemon.name.toUpperCase()}</h2>
                <div className="card-actions justify-center flex flex-col items-center mt-4">
                    <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary btn-sm w-full mb-2">
                        View Details
                    </Link>
                    <button 
                        onClick={handleAddPokemon} 
                        className="btn btn-secondary btn-sm w-full"
                    >
                        Add to My Roster
                    </button>
                </div>
            </div>
        </div>
    );
  
};

export default PokemonCards;