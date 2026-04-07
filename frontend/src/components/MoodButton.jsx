export default function MoodButton({ mood, onClick, isActive }) {
  const isSerio = mood === "serio";

  const baseClasses =
    "relative group flex flex-col items-center gap-3 px-10 py-6 border-2 rounded-2xl cursor-pointer select-none transition-all duration-300 ease-out font-lol tracking-widest uppercase font-bold text-xl overflow-hidden min-w-[240px]";

  const serioClasses = isActive
    ? "border-serio-accent bg-serio-primary/80 text-serio-accent shadow-blue-glow scale-105"
    : "border-serio-accent/60 bg-serio-primary/40 text-serio-accent hover:bg-serio-primary/70 hover:border-serio-accent hover:shadow-blue-glow";

  const divertirClasses = isActive
    ? "border-divertir-accent bg-divertir-primary/80 text-divertir-accent shadow-purple-glow scale-105"
    : "border-divertir-accent/60 bg-divertir-primary/40 text-divertir-accent hover:bg-divertir-primary/70 hover:border-divertir-accent hover:shadow-purple-glow";

  return (
    <button
      onClick={() => onClick(mood)}
      className={`${baseClasses} ${isSerio ? serioClasses : divertirClasses}`}
    >
      {/* Shimmer sweep on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

      <span className="text-3xl">{isSerio ? "⚔️" : "🎭"}</span>
      <span className="relative z-10">{isSerio ? "Jogar Sério" : "Se Divertir"}</span>
      <span className="text-xs font-normal tracking-wider opacity-70">
        {isSerio ? "Meta • Sinergias Técnicas" : "Off-meta • Combos Insanos"}
      </span>

      <span className="absolute top-1 left-2 text-xs opacity-40">◆</span>
      <span className="absolute bottom-1 right-2 text-xs opacity-40">◆</span>
    </button>
  );
}
