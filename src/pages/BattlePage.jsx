import React, { useState, useEffect } from 'react';
import PokemonSelection from '../components/PokemonSelection.jsx';
import BattleScreen from '../components/BattleScreen.jsx';

const BattlePage = () => {
  const [userName, setUserName] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [battleStarted, setBattleStarted] = useState(false);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [battleResult, setBattleResult] = useState(null);
  const [score, setScore] = useState(0); // New state for score

  // Fetch Pokémon data
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        const fetchDetails = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        Promise.all(fetchDetails).then(details => setPokemonList(details));
      });
  }, []);

  // Function to start the battle
  const startBattle = () => {
    if (selectedPokemon) {
      const randomPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
      setOpponentPokemon(randomPokemon);

      // Battle logic based on comparing stats
      const result = calculateBattleResult(selectedPokemon, randomPokemon);
      setBattleResult(result);

      // Assign score based on the result
      let calculatedScore = 0;
      if (result === 'win') calculatedScore = 100;
      else if (result === 'lose') calculatedScore = 50;
      else calculatedScore = 75; // For draw

      setScore(calculatedScore);

      // Post the score to the backend
      postScore(userName, calculatedScore);

      setBattleStarted(true);
    }
  };

  // Function to calculate the battle result
  const calculateBattleResult = (playerPokemon, opponentPokemon) => {
    const playerStat = playerPokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0);
    const opponentStat = opponentPokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0);

    if (playerStat > opponentStat) return 'win';
    if (playerStat < opponentStat) return 'lose';
    return 'draw';
  };

  // Function to post the score to the backend
  const postScore = async (userName, score) => {
    try {
      const response = await fetch('http://localhost:8000/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          score: score,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post score');
      }

      console.log('Score posted successfully');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-6 max-w-6xl h-screen mx-auto">
      {!battleStarted ? (
        <div className="battle-preparation">
          <h1 className="text-2xl font-bold mb-4">Pokémon Battle Preparation</h1>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Enter your name:</label>
            <input 
              type="text" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
            />
          </div>
          <PokemonSelection 
            pokemonList={pokemonList} 
            selectedPokemon={selectedPokemon} 
            setSelectedPokemon={setSelectedPokemon} 
          />
          <button 
            onClick={startBattle} 
            disabled={!userName || !selectedPokemon}
            className="w-60 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-700"
          >
            Start Battle
          </button>
        </div>
      ) : (
        <BattleScreen 
          selectedPokemon={selectedPokemon} 
          opponentPokemon={opponentPokemon} 
          battleResult={battleResult} 
          score={score}
          onReset={() => setBattleStarted(false)}
        />
      )}
    </div>
  );
};

export default BattlePage;
