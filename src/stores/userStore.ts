import { create } from "zustand";
import type { User, UserProfile, UserPreferences } from "@/types/user";

interface UserStore {
  user: User | null;
  profile: UserProfile | null;
  isLoggedIn: boolean;
  setUser: (user: User) => void;
  setProfile: (profile: UserProfile) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  profile: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
  setProfile: (profile) => set({ profile }),
  updatePreferences: (prefs) =>
    set((prev) => ({
      profile: prev.profile
        ? {
            ...prev.profile,
            preferences: { ...prev.profile.preferences, ...prefs },
          }
        : null,
    })),
  logout: () => set({ user: null, profile: null, isLoggedIn: false }),
}));

