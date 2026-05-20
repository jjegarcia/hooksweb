interface DotIndicatorsProps {
  total: number;
  active: number;
}

export function DotIndicators({ total, active }: DotIndicatorsProps) {
  return (
    <div className="flex gap-2 justify-center mb-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-colors ${
            index < active ? "bg-green-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

