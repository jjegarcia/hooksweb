interface ControlButtonsProps {
  onReset: () => void;
  onPause: () => void;
  onSettings: () => void;
}

export function ControlButtons({
  onReset,
  onPause,
  onSettings,
}: ControlButtonsProps) {
  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={onReset}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onPause}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
      >
        Pause
      </button>
      <button
        onClick={onSettings}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
      >
        Settings
      </button>
    </div>
  );
}

