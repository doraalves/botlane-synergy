const BASE_URL = "/api";

export async function fetchDuos(mood) {
  const response = await fetch(`${BASE_URL}/duos?mood=${mood}`);
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  return response.json();
}
