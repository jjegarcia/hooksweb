interface Root {
  id: string;
  name: string;
  isActive: boolean;
}

interface RootsListProps {
  rooms: Root[];
  onRoomSelect: (roomId: string) => void;
}

export function RootsList({ rooms, onRoomSelect }: RootsListProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold text-lg mb-4">Available Rooms</h3>
      {rooms.length === 0 ? (
        <p className="text-gray-500 text-sm">No rooms available</p>
      ) : (
        rooms.map((room) => (
          <button
            key={room.id}
            onClick={() => onRoomSelect(room.id)}
            className={`
              w-full px-4 py-2 rounded text-left transition-all
              ${
                room.isActive
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }
            `}
          >
            {room.name}
          </button>
        ))
      )}
    </div>
  );
}

