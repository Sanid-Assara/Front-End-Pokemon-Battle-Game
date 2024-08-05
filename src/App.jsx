import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'

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
  

export default App
