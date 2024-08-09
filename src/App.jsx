import { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/HomePage';

import PokemonDetails from './pages/PokemonDetailsPage';
import MyRoster from './pages/MyRoosterPage';
import Battle from './pages/BattlePage';
import Leaderboard from './pages/LeaderboardPage';
import Layout from './components/Layout';
import { RosterProvider } from './components/RosterContext';



function App() { 
  const [myPokemonList, setMyPokemonList] = useState([]);

  const handleAddPokemon = (pokemon) => {
    setMyPokemonList((prevList) => [...prevList, pokemon]);
  };
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/pokemon/:pokemonId' element={<PokemonDetails onAdd={handleAddPokemon} />} />
      <Route path='/leaderboard' element={<Leaderboard />} /> 
      <Route path='/battle' element={<Battle />} />
      <Route path='/my-roster' element={<MyRoster />} />
       

    </Route>
  ));

  return (
    <RosterProvider> 
      <RouterProvider router={router} />
    </RosterProvider>
  );
}
  

export default App;
