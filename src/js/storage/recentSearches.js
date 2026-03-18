const STORAGE_KEY = "weathertrip_recent_searches";
const MAX_ITEMS = 5;

/**
 * Hämtar sparade sökningar från localStorage.
 * @returns {string[]} Lista med tidigare sökningar.
 */
export function getRecentSearches() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

/**
 * Sparar en ny sökning i localStorage.
 * @param {string} city - Söksträng att spara.
 * @returns {void}
 */
export function saveRecentSearch(city) {
  const current = getRecentSearches();
  const normalizedCity = city.trim();

  const updated = [
    normalizedCity,
    ...current.filter((item) => item.toLowerCase() !== normalizedCity.toLowerCase())
  ].slice(0, MAX_ITEMS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}