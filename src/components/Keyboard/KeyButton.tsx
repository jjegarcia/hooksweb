interface KeyButtonProps {
  letter: string;
  onClick: (letter: string) => void;
  disabled?: boolean;
  isCorrect?: boolean;
}

export function KeyButton({
  letter,
  onClick,
  disabled = false,
  isCorrect = false,
}: KeyButtonProps) {
  return (
    <button
      onClick={() => onClick(letter)}
      disabled={disabled}
      className={`
        w-10 h-10 rounded font-bold text-sm
        transition-all duration-200
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isCorrect
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
        }
      `}
    >
      {letter}
    </button>
  );
}

