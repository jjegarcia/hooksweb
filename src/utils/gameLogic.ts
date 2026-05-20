import type { GameState, HooksWord } from "@/types/game";

export function initializeWordState(word: HooksWord): string {
  // Return masked word with underscores
  return word.word.split("").map(() => "_").join("");
}

export function revealLetterInWord(
  maskedWord: string,
  word: string,
  letter: string
): string {
  return word
    .split("")
    .map((char, index) => {
      const isCorrect = char.toLowerCase() === letter.toLowerCase();
      return isCorrect ? letter.toUpperCase() : maskedWord[index];
    })
    .join("");
}

export function isWordComplete(maskedWord: string): boolean {
  return !maskedWord.includes("_");
}

export function calculateScore(
  level: number,
  incorrectGuesses: number,
  timeRemaining: number
): number {
  const baseScore = level * 100;
  const penalty = incorrectGuesses * 10;
  const timeBonus = Math.max(0, timeRemaining * 1);
  return Math.max(0, baseScore - penalty + timeBonus);
}

export function updateGameScore(
  gameState: GameState,
  isCorrectGuess: boolean
): GameState {
  const score = isCorrectGuess
    ? gameState.score + gameState.level * 10
    : gameState.score;
  return {
    ...gameState,
    score,
    incorrectGuesses: isCorrectGuess
      ? gameState.incorrectGuesses
      : gameState.incorrectGuesses + 1,
  };
}

