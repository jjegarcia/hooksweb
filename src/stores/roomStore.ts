import { create } from "zustand";
import type { GameRoom } from "@/types/game";

interface RoomStore {
  rooms: GameRoom[];
  currentRoom: GameRoom | null;
  setRooms: (rooms: GameRoom[]) => void;
  setCurrentRoom: (room: GameRoom) => void;
  addRoom: (room: GameRoom) => void;
  removeRoom: (roomId: string) => void;
  leaveRoom: () => void;
}

export const useRoomStore = create<RoomStore>((set) => ({
  rooms: [],
  currentRoom: null,
  setRooms: (rooms) => set({ rooms }),
  setCurrentRoom: (room) => set({ currentRoom: room }),
  addRoom: (room) =>
    set((prev) => ({
      rooms: [...prev.rooms, room],
    })),
  removeRoom: (roomId) =>
    set((prev) => ({
      rooms: prev.rooms.filter((r) => r.roomId !== roomId),
    })),
  leaveRoom: () => set({ currentRoom: null }),
}));

