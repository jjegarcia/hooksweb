interface TopBarProps {
  title: string;
  subtitle?: string;
}

export function TopBar({ title, subtitle }: TopBarProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
    </div>
  );
}

