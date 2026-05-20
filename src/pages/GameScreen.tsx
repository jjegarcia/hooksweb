import { useState } from "react";
import { TopBar } from "@/components/Controls/TopBar";
import { BottomBar } from "@/components/Controls/BottomBar";
import { ControlButtons } from "@/components/Controls/ControlButtons";
import { Word } from "@/components/Board/Word";
import { BoardTile } from "@/components/Board/BoardTile";
import { BoardList } from "@/components/Board/BoardList";
import { KeyboardGrid } from "@/components/Keyboard/KeyboardGrid";
import { ScoreTile } from "@/components/Shared/ScoreTile";
import { TimerTile } from "@/components/Shared/TimerTile";
import { useGameStore } from "@/stores/gameStore";

export function GameScreen() {
  const gameStore = useGameStore();
  const [maskedWord, setMaskedWord] = useState("_ _ _ _ _");
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);

  const handleKeyClick = (letter: string) => {
    setDisabledLetters((prev) => [...prev, letter]);
  };

  const handleReset = () => {
    setDisabledLetters([]);
    setMaskedWord("_ _ _ _ _");
  };

  const handlePause = () => {
    console.log("Game paused");
  };

  const handleSettings = () => {
    console.log("Settings opened");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <TopBar
        title="HooksWeb"
        subtitle="Guess the React Hooks"
      />

      <div className="container mx-auto max-w-4xl mb-20">
        {/* Game Board */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <Word maskedWord={maskedWord} />

          <BoardList>
            <ScoreTile label="Score" score={gameStore.gameState?.score || 0} />
            <TimerTile timeRemaining={gameStore.gameState?.timeRemaining || 60} />
            <BoardTile
              title="Level"
              value={gameStore.gameState?.level || 1}
            />
          </BoardList>
        </div>

        {/* Keyboard */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <KeyboardGrid
            onKeyClick={handleKeyClick}
            disabledLetters={disabledLetters}
          />
        </div>
      </div>

      {/* Bottom Controls */}
      <BottomBar>
        <ControlButtons
          onReset={handleReset}
          onPause={handlePause}
          onSettings={handleSettings}
        />
      </BottomBar>
    </div>
  );
}

