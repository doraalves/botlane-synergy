const DDRAGON_VERSION = "14.9.1";

const DDRAGON_NAME_OVERRIDES = {
  Wukong: "MonkeyKing",
  "Nunu & Willump": "Nunu",
  "Renata Glasc": "Renata",
  "Kai'Sa": "Kaisa",
  LeBlanc: "Leblanc",
};

export default function ChampionCard({ champion, className = "" }) {
  const { name, role } = champion;
  const ddragonName =
    DDRAGON_NAME_OVERRIDES[name] || name.replace(/\s+/g, "").replace(/'/g, "");

  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${ddragonName}_0.jpg`;
  const fallbackUrl = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${ddragonName}.png`;

  const roleStyles = {
    ADC: "bg-red-700/80 text-red-100 border-red-500/50",
    SUP: "bg-blue-800/80 text-blue-100 border-blue-500/50",
  };

  return (
    <div className={`relative group rounded-2xl border border-lol-gold/40 transition-all duration-300 hover:border-lol-gold/90 hover:shadow-card-hover hover:scale-105 cursor-pointer overflow-hidden ${className}`}>
      {/* Portrait — natural image height, no cropping */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackUrl;
          }}
        />

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-dark-gradient pointer-events-none" />

        {/* Role badge */}
        <div
          className={`absolute top-2 right-2 z-10 px-1.5 py-0.5 text-[10px] font-bold tracking-widest uppercase border rounded-full backdrop-blur-sm ${roleStyles[role] || "bg-gray-800/80 text-gray-200 border-gray-500/50"}`}
        >
          {role}
        </div>

        {/* Champion name */}
        <div className="absolute bottom-0 inset-x-0 p-2 z-10">
          <p className="text-lol-gold-light text-sm font-bold tracking-wide text-center leading-tight drop-shadow-lg">
            {name}
          </p>
        </div>
      </div>

      {/* Gold shimmer on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-lol-gold/10 to-transparent pointer-events-none" />
    </div>
  );
}
