import type { HooksWord } from "@/types/game";
import { hooks1En } from "@/data/hooks1_en";
import { hooks1Es } from "@/data/hooks1_es";

export interface WordServiceInterface {
  getWordsByLevel(level: number, language: string): Promise<HooksWord[]>;
  getRandomWord(level: number, language: string): Promise<HooksWord>;
}

class WordService implements WordServiceInterface {
  private wordDatabase: Record<string, HooksWord[]> = {
    "1-en": hooks1En,
    "1-es": hooks1Es,
  };

  async getWordsByLevel(level: number, language: string): Promise<HooksWord[]> {
    const key = `${level}-${language}`;
    return this.wordDatabase[key] || [];
  }

  async getRandomWord(level: number, language: string): Promise<HooksWord> {
    const words = await this.getWordsByLevel(level, language);
    if (words.length === 0) {
      throw new Error(`No words found for level ${level} in ${language}`);
    }
    return words[Math.floor(Math.random() * words.length)];
  }
}

export default new WordService();

