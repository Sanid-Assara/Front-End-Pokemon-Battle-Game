import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
// import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import PokemonDetails from './pages/PokemonDetailsPage';
import MyRoster from './pages/MyRosterPage';
import Battle from './pages/BattlePage';
import Leaderboard from './pages/LeaderboardPage';
import Layout from './components/Layout';

function App() { 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/pokemon/:id' element={<PokemonDetails />} />
      <Route path='/my-roster' element={<MyRoster />} />
      <Route path='/battle' element={<Battle />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
    </Route>
  ));

  return <RouterProvider router={router} />;
}
  

export default App;
