import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Pokémon Battle Game</h1>
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
