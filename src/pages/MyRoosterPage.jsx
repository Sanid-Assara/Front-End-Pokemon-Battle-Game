import React from 'react';
import { useRoster } from '../components/RosterContext'; // Import of Context

const MyRosterPage = () => {
    const { roster, removePokemon } = useRoster(); // Use Context

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Pokémon Roster</h1>
            {roster.length === 0 ? (
                <p>You haven't added any Pokémon yet.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {roster.map((pokemon) => (
                        <li key={pokemon.id} className="card card-compact bg-yellow-300 shadow-xl">
                            <figure>
                                <img 
                                    src={pokemon.sprites.front_default} 
                                    alt={pokemon.name}
                                    className="w-32 h-32 mx-auto mb-2"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h2 className="card-title">{pokemon.name.toUpperCase()}</h2>
                                <div className="card-actions justify-center mt-4">
                                    <button 
                                        onClick={() => removePokemon(pokemon)} 
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <footer className="mt-8 p-4 bg-blue-600 text-white text-center">
                <p>© {new Date().getFullYear()} Pokémon Inc.</p>
                <p>All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default MyRosterPage;