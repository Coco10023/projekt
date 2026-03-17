/**
 * Söker efter en plats med hjälp av Open-Meteos geokodnings-API.
 * @param {string} query - Namn på orten.
 * @returns {Promise<Object|null>} Första träffen eller null om ingen plats hittas.
 */
export async function getLocationByName(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query
  )}&count=1&language=sv&format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Kunde inte hämta platsinformation.");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    return null;
  }

  return data.results[0];
}