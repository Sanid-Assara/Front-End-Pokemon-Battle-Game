import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PokemonDetailsPage = ({ onAdd }) => {
    const { pokemonId } = useParams(); // Get Pokémon ID from the URL
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // To navigate back to the home page

    // Function to fetch Pokémon details from PokeAPI
    const fetchPokemonDetails = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            setPokemonDetails(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemonDetails();
    }, [pokemonId]);

    const handleAddPokemon = () => {
        if (pokemonDetails) {
            onAdd(pokemonDetails); // Call the onAdd function to add the Pokémon
        }
    };

    const handleBack = () => {
        navigate('/'); // Navigate back to the home page
    };

    if (loading) {
        return <div className="animate-spin">Loading Pokémon details...</div>;
    }

    if (error) {
        return (
            <div className="text-red-500">
                <p>An error occurred: {error}</p>
                <button onClick={fetchPokemonDetails} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Try Again</button>
            </div>
        );
    }

    if (!pokemonDetails) {
        return null; // In case the Pokémon could not be fetched
    }

    return (
        <div className="min-h-screen bg-green-50 p-6 flex flex-col justify-between">
        <div className="card card-side bg-yellow-300 shadow-xl flex flex-row p-6 opacity-90">
            <figure className="flex-shrink-0 w-1/2">
                <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} className="w-full h-auto mx-auto" />
            </figure>
        <div className="card-body text-center md:text-left flex flex-col justify-between w-1/2">
            <h2 className="card-title text-2xl font-bold mb-4">{pokemonDetails.name.toUpperCase()}</h2>
            <h3 className="text-lg font-bold">Details:</h3>
            <p><strong>Height:</strong> {pokemonDetails.height}</p>
            <p><strong>Weight:</strong> {pokemonDetails.weight}</p>
            <p><strong>Types:</strong> {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Abilities:</strong> {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <div className="card-actions justify-center md:justify-start mt-4">
        <button onClick={handleAddPokemon} className="btn btn-secondary btn-sm w-full mb-2">Add to my roster</button>
        <button onClick={handleBack} className="btn btn-default btn-sm w-full">Back to Home</button>
      </div>
    </div>
  </div>

            <footer className="mt-8 p-4 bg-blue-600 text-white text-center">
                <p>© {new Date().getFullYear()} Pokémon Inc.</p>
                <p>All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default PokemonDetailsPage;