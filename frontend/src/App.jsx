import { useState } from "react";
import MoodButton from "./components/MoodButton.jsx";
import DuoCard from "./components/DuoCard.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import TierLegend from "./components/TierLegend.jsx";
import { fetchDuos } from "./services/api.js";

export default function App() {
  const [mood, setMood] = useState(null);
  const [duos, setDuos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleMoodSelect(selectedMood) {
    setMood(selectedMood);
    setLoading(true);
    setError(null);
    setDuos([]);
    try {
      const data = await fetchDuos(selectedMood);
      setDuos(data.duos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const isSerio = mood === "serio";
  const titleGradient =
    mood === null
      ? "from-lol-gold via-lol-gold-light to-lol-gold"
      : isSerio
        ? "from-serio-accent via-lol-gold-light to-serio-accent"
        : "from-divertir-accent via-lol-gold-light to-divertir-accent";

  return (
    <div className="min-h-screen bg-lol-bg flex flex-col">

      {/* HEADER — full width, content centered inside */}
      <header className="relative text-center py-10 px-4 overflow-hidden w-full">
        <div className="absolute inset-0 bg-header-bg opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lol-gold/60 to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-3 max-w-2xl mx-auto">
          <p className="text-lol-gold/60 text-sm tracking-[0.4em] uppercase font-medium">
            ◆ League of Legends ◆
          </p>

          <h1
            className={`text-5xl md:text-6xl font-black tracking-wide bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent transition-all duration-700`}
          >
            Bot Synergy
          </h1>

          <div className="flex items-center gap-3 mt-1">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-lol-gold/60" />
            <span className="text-lol-gold text-sm">◆</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-lol-gold/60" />
          </div>

          <p className="text-lol-gold-light/70 text-base max-w-md font-lol-body">
            Escolha seu estilo de jogo e descubra os melhores duos para a bot lane
          </p>
        </div>
      </header>

      {/* MOOD SELECTOR */}
      <section className="flex justify-center gap-6 px-4 py-8 flex-wrap">
        <MoodButton
          mood="serio"
          onClick={handleMoodSelect}
          isActive={mood === "serio"}
        />
        <MoodButton
          mood="divertir"
          onClick={handleMoodSelect}
          isActive={mood === "divertir"}
        />
      </section>

      {/* RESULTS — centered container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 pb-12">
        {loading && <LoadingSpinner />}

        {error && (
          <div className="flex justify-center">
            <div className="lol-panel rounded-2xl bg-red-950/40 p-6 text-center max-w-md">
              <p className="text-red-400 font-bold text-base">
                Erro ao invocar campeões
              </p>
              <p className="text-red-300/70 text-sm mt-2">{error}</p>
              <p className="text-lol-gold/50 text-sm mt-3">
                Verifique se o servidor está rodando na porta 3001
              </p>
            </div>
          </div>
        )}

        {!mood && !loading && (
          <div className="text-center py-20 flex flex-col items-center gap-5 animate-fade-in">
            <span className="text-7xl">⚔️</span>
            <p className="text-lol-gold/60 tracking-widest text-base uppercase font-medium">
              Selecione um modo acima para começar
            </p>
          </div>
        )}

        {!loading && duos.length > 0 && (
          <>
            {/* Section label */}
            <div className="flex flex-col items-center gap-2 mb-6 animate-fade-in">
              <div className="lol-divider w-full max-w-xs" />
              <p className="text-lol-gold/80 text-sm tracking-[0.3em] uppercase font-semibold mt-2">
                {isSerio ? "⚔️ Duos da Meta" : "🎭 Combos do Caos"}
              </p>
            </div>

            {/* Cards + Legend side by side */}
            <div className="flex gap-6 items-start">

              {/* Duo cards grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {duos.map((duo, index) => (
                  <div
                    key={duo.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}
                  >
                    <DuoCard duo={duo} mood={mood} />
                  </div>
                ))}
              </div>

              {/* Legend sidebar */}
              <div className="hidden lg:block w-60 flex-shrink-0">
                <TierLegend />
              </div>
            </div>

            {/* Legend below on small screens */}
            <div className="lg:hidden mt-6">
              <TierLegend />
            </div>

            <div className="text-center mt-6 animate-fade-in">
              <p className="text-lol-gold/40 text-sm tracking-widest">
                Clique novamente no botão para sortear novos duos ◆
              </p>
            </div>
          </>
        )}
      </main>

      {/* FOOTER */}
      <footer className="text-center py-4 border-t border-lol-gold/10 w-full">
        <p className="text-lol-gold/30 text-xs tracking-widest uppercase">
          Bot Synergy • Riot Games Data Dragon • Not affiliated with Riot Games
        </p>
      </footer>
    </div>
  );
}
