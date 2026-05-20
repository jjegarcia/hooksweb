import { TopBar } from "@/components/Controls/TopBar";

interface RoomPlayer {
  id: string;
  name: string;
  score: number;
}

export function RoomDetailsScreen() {
  const players: RoomPlayer[] = [
    { id: "1", name: "Player 1", score: 150 },
    { id: "2", name: "Player 2", score: 120 },
    { id: "3", name: "Player 3", score: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <TopBar
        title="Room Details"
        subtitle="View room information and player scores"
      />

      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Players in Room</h2>
          <div className="space-y-3">
            {players.map((player) => (
              <div
                key={player.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded"
              >
                <span className="font-semibold">{player.name}</span>
                <span className="text-primary font-bold">{player.score} pts</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
          Start Game
        </button>
      </div>
    </div>
  );
}

