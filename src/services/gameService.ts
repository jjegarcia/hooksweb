import type { GameState, HooksWord } from "@/types/game";

export interface GameServiceInterface {
  startGame(level: number): Promise<GameState>;
  endGame(gameState: GameState): Promise<void>;
  guessLetter(letter: string, gameState: GameState): Promise<GameState>;
  skipWord(): Promise<HooksWord>;
}

class GameService implements GameServiceInterface {
  async startGame(level: number): Promise<GameState> {
    // TODO: Implement game initialization logic
    return {
      currentWord: "",
      level,
      score: 0,
      timeRemaining: 60,
      isActive: true,
      guessedLetters: [],
      incorrectGuesses: 0,
    };
  }

  async endGame(gameState: GameState): Promise<void> {
    // TODO: Save game session to Firebase
    console.log("Game ended with state:", gameState);
  }

  async guessLetter(letter: string, gameState: GameState): Promise<GameState> {
    // TODO: Implement letter guessing logic
    return {
      ...gameState,
      guessedLetters: [...gameState.guessedLetters, letter],
    };
  }

  async skipWord(): Promise<HooksWord> {
    // TODO: Fetch next word from database
    return {
      id: "",
      word: "",
      hint: "",
      category: "",
      difficulty: 1,
    };
  }
}

export default new GameService();

