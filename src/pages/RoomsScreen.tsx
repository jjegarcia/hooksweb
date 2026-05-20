import { TopBar } from "@/components/Controls/TopBar";

interface Room {
  id: string;
  name: string;
  players: number;
}

export function RoomsScreen() {
  const rooms: Room[] = [
    { id: "1", name: "Beginner Room", players: 2 },
    { id: "2", name: "Intermediate Room", players: 3 },
    { id: "3", name: "Advanced Room", players: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <TopBar
        title="Available Rooms"
        subtitle="Choose a room to play with others"
      />

      <div className="container mx-auto max-w-2xl">
        <div className="grid gap-4">
          {rooms.map((room) => (
            <button
              key={room.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-left"
            >
              <h3 className="text-xl font-bold text-primary mb-2">
                {room.name}
              </h3>
              <p className="text-gray-600">
                Players: <span className="font-semibold">{room.players}</span>
              </p>
            </button>
          ))}
        </div>

        <button className="w-full mt-6 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors">
          Create New Room
        </button>
      </div>
    </div>
  );
}

