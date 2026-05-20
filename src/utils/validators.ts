export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUsername(username: string): boolean {
  return username.length >= 3 && username.length <= 20;
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

export function isValidLevel(level: number): boolean {
  return level >= 1 && level <= 4 && Number.isInteger(level);
}

export function validateGameState(gameState: unknown): gameState is Record<string, unknown> {
  return typeof gameState === "object" && gameState !== null;
}

