// Em desenvolvimento: usa o proxy do Vite (relativo)
// Em produção: usa a URL do backend no Render (variável de ambiente)
const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";

export async function fetchDuos(mood) {
  const response = await fetch(`${BASE_URL}/duos?mood=${mood}`);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  return response.json();
}
