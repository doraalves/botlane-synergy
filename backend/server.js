import express from "express";
import cors from "cors";
import { synergies } from "./data/synergies.js";

const app = express();
const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGIN = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

app.get("/api/duos", (req, res) => {
  const { mood } = req.query;
  if (!mood || !["serio", "divertir"].includes(mood)) {
    return res
      .status(400)
      .json({ error: 'mood must be "serio" or "divertir"' });
  }

  const pool = synergies[mood];
  let selected;

  if (mood === "divertir") {
    // Guarantee at least one S-tier in the result
    const sTier = pool.filter((d) => d.tier === "S");
    const rest = pool.filter((d) => d.tier !== "S");
    const pickedS = shuffleArray(sTier).slice(0, 1);
    const pickedRest = shuffleArray(rest).slice(0, 2);
    selected = shuffleArray([...pickedS, ...pickedRest]);
  } else {
    selected = shuffleArray(pool).slice(0, 3);
  }

  res.json({ mood, duos: selected });
});

app.listen(PORT, () => {
  console.log(`BotLane Synergy API running on http://localhost:${PORT}`);
});
