import { formatTime } from "@/utils/helpers";

interface TimerTileProps {
  timeRemaining: number;
}

export function TimerTile({ timeRemaining }: TimerTileProps) {
  const isLowTime = timeRemaining <= 10;

  return (
    <div
      className={`
        p-4 rounded-lg text-center
        ${isLowTime ? "bg-red-100 border-2 border-red-500" : "bg-gray-100"}
      `}
    >
      <p className="text-gray-600 text-sm font-medium mb-2">Time Left</p>
      <p
        className={`text-3xl font-bold ${isLowTime ? "text-red-600 animate-pulse" : "text-primary"}`}
      >
        {formatTime(timeRemaining)}
      </p>
    </div>
  );
}


