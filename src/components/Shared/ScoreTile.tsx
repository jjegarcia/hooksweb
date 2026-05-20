import { formatScore } from "@/utils/helpers";

interface ScoreTileProps {
  label: string;
  score: number;
  isHighScore?: boolean;
}

export function ScoreTile({ label, score, isHighScore = false }: ScoreTileProps) {
  return (
    <div
      className={`
        p-4 rounded-lg text-center
        ${isHighScore ? "bg-yellow-100 border-2 border-yellow-500" : "bg-gray-100"}
      `}
    >
      <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
      <p className="text-3xl font-bold text-primary">{formatScore(score)}</p>
      {isHighScore && (
        <p className="text-xs text-yellow-600 mt-2 font-semibold">HIGH SCORE!</p>
      )}
    </div>
  );
}

