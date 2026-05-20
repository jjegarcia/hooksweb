interface BoardTileProps {
  title: string;
  value: string | number;
  className?: string;
}

export function BoardTile({ title, value, className = "" }: BoardTileProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 text-center ${className}`}
    >
      <p className="text-gray-600 text-sm font-medium mb-2">{title}</p>
      <p className="text-2xl font-bold text-primary">{value}</p>
    </div>
  );
}

