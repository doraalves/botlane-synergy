import ChampionCard from "./ChampionCard.jsx";

const TIER_STYLES = {
  S: {
    badge: "bg-tier-s text-black",
    glow: "shadow-[0_0_15px_rgba(255,215,0,0.6)]",
  },
  A: {
    badge: "bg-tier-a text-black",
    glow: "shadow-[0_0_15px_rgba(192,192,192,0.5)]",
  },
  C: {
    badge: "bg-tier-c text-white",
    glow: "",
  },
  D: {
    badge: "bg-tier-d text-white",
    glow: "",
  },
  F: {
    badge: "bg-tier-f text-white",
    glow: "shadow-[0_0_15px_rgba(107,33,168,0.7)]",
  },
};

export default function DuoCard({ duo, mood }) {
  const { champion1, champion2, synergy_title, description, tier } = duo;
  const tierStyle = TIER_STYLES[tier] || TIER_STYLES.C;

  return (
    <div className="lol-panel flex flex-col rounded-2xl bg-lol-surface/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-lol-gold/50 hover:shadow-gold h-full">
      {/* Champions side by side — flex-1 so each fills half the card width */}
      <div className="flex gap-2 p-3 pb-2 bg-lol-bg/50">
        <ChampionCard champion={champion1} className="flex-1 min-w-0" />

        {/* Separator */}
        <div className="flex flex-col items-center justify-center gap-1 px-0.5 flex-shrink-0">
          <div className="text-lol-gold/60 text-xs">◆</div>
          <div className="text-lol-gold font-bold text-sm">+</div>
          <div className="text-lol-gold/60 text-xs">◆</div>
        </div>

        <ChampionCard champion={champion2} className="flex-1 min-w-0" />
      </div>

      <div className="lol-divider mx-4" />

      {/* Synergy info */}
      <div className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lol-gold font-bold text-base leading-tight flex-1">
            {synergy_title}
          </h3>
          <div
            className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-black text-base ${tierStyle.badge} ${tierStyle.glow}`}
          >
            {tier}
          </div>
        </div>

        <p className="text-lol-gold/50 text-xs tracking-widest uppercase font-medium">
          {champion1.name} + {champion2.name}
        </p>

        <p className="text-lol-gold-light/80 text-sm leading-relaxed mt-1 font-lol-body border-t border-lol-gold/10 pt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
