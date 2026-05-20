import { KeyButton } from "./KeyButton";

interface KeyboardGridProps {
  onKeyClick: (letter: string) => void;
  disabledLetters?: string[];
  correctLetters?: string[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function KeyboardGrid({
  onKeyClick,
  disabledLetters = [],
  correctLetters = [],
}: KeyboardGridProps) {
  return (
    <div className="grid grid-cols-6 gap-2 md:grid-cols-13">
      {ALPHABET.map((letter) => (
        <KeyButton
          key={letter}
          letter={letter}
          onClick={onKeyClick}
          disabled={disabledLetters.includes(letter)}
          isCorrect={correctLetters.includes(letter)}
        />
      ))}
    </div>
  );
}

