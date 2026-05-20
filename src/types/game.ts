export interface GameState {
  currentWord: string;
  level: number;
  score: number;
  timeRemaining: number;
  isActive: boolean;
  guessedLetters: string[];
  incorrectGuesses: number;
}

export interface GameSessionData {
  sessionId: string;
  playerId: string;
  level: number;
  score: number;
  startTime: number;
  endTime?: number;
  finalScore: number;
}

export interface HooksWord {
  id: string;
  word: string;
  hint: string;
  category: string;
  difficulty: number;
}

export interface GameRoom {
  roomId: string;
  players: string[];
  gameState: GameState;
  createdAt: number;
  maxPlayers: number;
}

