export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-6">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-lol-gold/20" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-lol-gold animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lol-gold text-xl animate-pulse">◆</span>
        </div>
      </div>
      <p className="text-lol-gold/70 text-sm tracking-widest uppercase animate-pulse">
        Invocando Campeões...
      </p>
    </div>
  );
}
