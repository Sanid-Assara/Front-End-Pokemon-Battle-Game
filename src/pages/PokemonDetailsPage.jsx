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
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{pokemonDetails.name.toUpperCase()}</h2>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} className="mb-4" />
            <h3 className="text-lg font-bold">Details:</h3>
            <p><strong>Height:</strong> {pokemonDetails.height}</p>
            <p><strong>Weight:</strong> {pokemonDetails.weight}</p>
            <p><strong>Types:</strong> {pokemonDetails.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Abilities:</strong> {pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <button onClick={handleAddPokemon} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add to my roster</button>
            <button onClick={handleBack} className="ml-4 bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Back to Home</button>
        </div>
    );
};

export default PokemonDetailsPage;