/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "lol-gold": "#C89B3C",
        "lol-gold-light": "#F0E6D3",
        "lol-gold-dark": "#785A28",
        "lol-blue": "#0BC4E3",
        "lol-blue-dark": "#0A2A43",
        "lol-blue-deeper": "#091428",
        "lol-bg": "#010A13",
        "lol-surface": "#0A1628",
        "lol-surface-2": "#112240",
        "tier-s": "#FFD700",
        "tier-a": "#C0C0C0",
        "tier-c": "#CD7F32",
        "tier-d": "#8B4513",
        "tier-f": "#6B21A8",
        "serio-primary": "#1E3A5F",
        "serio-accent": "#4FC3F7",
        "divertir-primary": "#4A0E6B",
        "divertir-accent": "#E040FB",
      },
      fontFamily: {
        lol: ["Roboto", "sans-serif"],
        "lol-body": ["Roboto", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 20px rgba(200, 155, 60, 0.4)",
        "gold-strong": "0 0 35px rgba(200, 155, 60, 0.7)",
        "blue-glow": "0 0 25px rgba(11, 196, 227, 0.5)",
        "purple-glow": "0 0 25px rgba(224, 64, 251, 0.5)",
        "card-hover":
          "0 0 40px rgba(200, 155, 60, 0.6), 0 8px 32px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C89B3C 0%, #F0E6D3 50%, #785A28 100%)",
        "dark-gradient":
          "linear-gradient(180deg, transparent 0%, rgba(1,10,19,0.95) 100%)",
        "header-bg": "linear-gradient(180deg, #010A13 0%, #0A1628 100%)",
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200,155,60,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(200,155,60,0.8)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
