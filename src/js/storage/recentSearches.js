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