import React, { createContext, useState, useContext, useEffect } from 'react';

const RosterContext = createContext();

export const RosterProvider = ({ children }) => {
    const [roster, setRoster] = useState(() => {
        const savedRoster = localStorage.getItem('pokemonRoster');
        return savedRoster ? JSON.parse(savedRoster) : [];
    });

    useEffect(() => {
        localStorage.setItem('pokemonRoster', JSON.stringify(roster));
    }, [roster]);

    const addPokemon = (pokemon) => {
        setRoster((prevRoster) => [...prevRoster, pokemon]);
    };

    const removePokemon = (pokemonToRemove) => {
        setRoster((prevRoster) => 
            prevRoster.filter((pokemon) => pokemon.id !== pokemonToRemove.id)
        );
    };

    return (
        <RosterContext.Provider value={{ roster, addPokemon, removePokemon }}>
            {children}
        </RosterContext.Provider>
    );
};

export const useRoster = () => {
    return useContext(RosterContext);
};