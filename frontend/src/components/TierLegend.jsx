const TIERS = [
  {
    tier: "S",
    badge: "bg-tier-s text-black",
    glow: "shadow-[0_0_10px_rgba(255,215,0,0.5)]",
    label: "Meta Absoluta",
    desc: "Pick toda partida. Dominante em qualquer situação.",
  },
  {
    tier: "A",
    badge: "bg-tier-a text-black",
    glow: "shadow-[0_0_10px_rgba(192,192,192,0.4)]",
    label: "Muito Forte",
    desc: "Forte e consistente. Boas trocas na maioria das matchups.",
  },
  {
    tier: "C",
    badge: "bg-tier-c text-white",
    glow: "",
    label: "Situacional",
    desc: "Requer coordenação e execução acima da média.",
  },
  {
    tier: "D",
    badge: "bg-tier-d text-white",
    glow: "",
    label: "Questionável",
    desc: "Difícil de fazer funcionar. Só jogue se souber o que faz.",
  },
  {
    tier: "F",
    badge: "bg-tier-f text-white",
    glow: "shadow-[0_0_10px_rgba(107,33,168,0.6)]",
    label: "Puro Caos",
    desc: "Não espere ganhar. Jogue pelo caos e pelas histórias.",
  },
];

export default function TierLegend() {
  return (
    <div className="lol-panel rounded-2xl bg-lol-surface/60 backdrop-blur-sm p-4 animate-fade-in">
      <p className="text-lol-gold/80 text-sm font-bold tracking-widest uppercase mb-4 text-center">
        Legenda
      </p>
      <div className="lol-divider mb-4" />

      <div className="flex flex-col gap-3">
        {TIERS.map(({ tier, badge, glow, label, desc }) => (
          <div key={tier} className="flex items-start gap-3">
            <div
              className={`flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full font-black text-base ${badge} ${glow}`}
            >
              {tier}
            </div>
            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="text-lol-gold text-sm font-bold">{label}</span>
              <span className="text-lol-gold-light/60 text-xs leading-snug">
                {desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
