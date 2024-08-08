import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <img 
                src="https://www.svgrepo.com/show/276264/pokeball-pokemon.svg" 
                alt="Pokéball"
                className="h-8 w-8 mr-2"
            />
            <h1 className="text-white text-xl font-bold">Pokémon Battle Game</h1>
        </div>
        <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            </li>
            <li>
                <Link to="/my-roster" className="text-white hover:text-gray-400">My Roster</Link>
            </li>
            <li>
                <Link to="/battle" className="text-white hover:text-gray-400">Battle</Link>
            </li>
            <li>
                <Link to="/leaderboard" className="text-white hover:text-gray-400">Leaderboard</Link>
            </li>
        </ul>
    </div>
</nav>
    );
};

export default Navbar;
