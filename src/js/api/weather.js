/**
 * Hämtar aktuellt väder och tre dygns prognos för en position.
 * @param {number} latitude - Latitud.
 * @param {number} longitude - Longitud.
 * @returns {Promise<Object>} Väderdata från Open-Meteo.
 */
export async function getWeatherByCoordinates(latitude, longitude) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,weather_code,wind_speed_10m` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&timezone=auto` +
    `&forecast_days=3`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Kunde inte hämta väderdata.");
  }

  return await response.json();
}