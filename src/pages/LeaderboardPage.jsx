import { useEffect, useState } from 'react';
import axios from 'axios';

const LeaderboardPage = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopTenPlayers = async () => {
            try {
                const { data } = await axios.get('http://localhost:8000/api/leaderboard');
                setLeaderboard(data);
            } catch (error) {
                console.error("Error fetching leaderboard data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopTenPlayers();
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4">Top 10 Players</h1>
            <div className="overflow-x-auto">
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : leaderboard.length === 0 ? (
                    <p className="text-center text-gray-500">Leaderboard is empty</p>
                ) : (
                    <table className="min-w-full divide-y divide-gray-200 bg-white border border-gray-300">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {leaderboard.map((player, index) => (
                                <tr
                                    key={player._id || `player-${index}`}
                                    className={index === 0 ? 'bg-yellow-100' : ''}
                                >
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${index === 0 ? 'text-yellow-800' : 'text-gray-900'}`}>
                                        {index + 1}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${index === 0 ? 'font-bold text-yellow-800' : 'text-gray-500'}`}>
                                        {player.name}
                                    </td>
                                    <td className={`px-6 py-4 whitespace-nowrap text-sm ${index === 0 ? 'font-bold text-yellow-800' : 'text-gray-500'}`}>
                                        {player.score}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default LeaderboardPage;
