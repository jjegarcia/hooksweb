interface WordProps {
  maskedWord: string;
}

export function Word({ maskedWord }: WordProps) {
  return (
    <div className="flex justify-center gap-2 text-2xl font-bold tracking-widest mb-6">
      {maskedWord.split("").map((char, index) => (
        <div
          key={index}
          className="w-10 h-10 flex items-center justify-center border-b-4 border-primary text-primary"
        >
          {char}
        </div>
      ))}
    </div>
  );
}

