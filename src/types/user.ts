export interface User {
  uid: string;
  email?: string;
  displayName?: string;
  avatar?: string;
  createdAt: number;
  stats?: UserStats;
}

export interface UserStats {
  totalGamesPlayed: number;
  totalScore: number;
  highScore: number;
  level: number;
  lastPlayedAt?: number;
}

export interface UserProfile extends User {
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: "light" | "dark";
  language: "en" | "es";
  soundEnabled: boolean;
  notificationsEnabled: boolean;
}

