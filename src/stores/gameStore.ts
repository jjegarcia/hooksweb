import { create } from "zustand";
import type { GameState, GameSessionData } from "@/types/game";

interface GameStore {
  gameState: GameState | null;
  selectedLevel: number;
  sessions: GameSessionData[];
  setGameState: (state: GameState) => void;
  updateGameState: (state: Partial<GameState>) => void;
  resetGameState: () => void;
  setSelectedLevel: (level: number) => void;
  addSession: (session: GameSessionData) => void;
  clearSessions: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  gameState: null,
  selectedLevel: 1,
  sessions: [],
  setGameState: (state) => set({ gameState: state }),
  updateGameState: (state) =>
    set((prev) => ({
      gameState: prev.gameState ? { ...prev.gameState, ...state } : null,
    })),
  resetGameState: () => set({ gameState: null }),
  setSelectedLevel: (level) => set({ selectedLevel: level }),
  addSession: (session) =>
    set((prev) => ({ sessions: [...prev.sessions, session] })),
  clearSessions: () => set({ sessions: [] }),
}));

