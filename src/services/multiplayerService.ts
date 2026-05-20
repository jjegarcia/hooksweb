import type { GameRoom } from "@/types/game";

export interface MultiplayerServiceInterface {
  createRoom(playerId: string): Promise<GameRoom>;
  joinRoom(roomId: string, playerId: string): Promise<GameRoom>;
  leaveRoom(roomId: string, playerId: string): Promise<void>;
  sendGameState(roomId: string, gameState: unknown): Promise<void>;
  subscribeToRoom(roomId: string, callback: (room: GameRoom) => void): void;
}

class MultiplayerService implements MultiplayerServiceInterface {
  async createRoom(playerId: string): Promise<GameRoom> {
    // TODO: Implement room creation with Firebase Realtime Database
    return {
      roomId: Math.random().toString(36).substring(7),
      players: [playerId],
      gameState: {
        currentWord: "",
        level: 1,
        score: 0,
        timeRemaining: 60,
        isActive: false,
        guessedLetters: [],
        incorrectGuesses: 0,
      },
      createdAt: Date.now(),
      maxPlayers: 4,
    };
  }

  async joinRoom(_roomId: string, _playerId: string): Promise<GameRoom> {
    // TODO: Implement room joining logic
    throw new Error("Not implemented");
  }

  async leaveRoom(roomId: string, playerId: string): Promise<void> {
    // TODO: Implement room leaving logic
    console.log(`Player ${playerId} left room ${roomId}`);
  }

  async sendGameState(roomId: string, gameState: unknown): Promise<void> {
    // TODO: Implement game state sync
    console.log(`Sending game state to room ${roomId}:`, gameState);
  }

  subscribeToRoom(roomId: string, _callback: (room: GameRoom) => void): void {
    // TODO: Implement Firebase Realtime Database subscription
    console.log(`Subscribed to room ${roomId}`);
  }
}

export default new MultiplayerService();


