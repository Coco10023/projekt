import {
  formatDate,
  getActivities,
  getWeatherDescription
} from "../utils/formatters.js";

const statusEl = document.querySelector("#status");
const loaderEl = document.querySelector("#loader");
const resultEl = document.querySelector("#result");
const placeNameEl = document.querySelector("#place-name");
const placeMetaEl = document.querySelector("#place-meta");
const currentTempEl = document.querySelector("#current-temp");
const currentDescEl = document.querySelector("#current-desc");
const currentWindEl = document.querySelector("#current-wind");
const activityListEl = document.querySelector("#activity-list");
const forecastListEl = document.querySelector("#forecast-list");
const recentSearchesListEl = document.querySelector("#recent-searches-list");

/**
 * Visar statusmeddelande.
 * @param {string} message - Meddelande att visa.
 * @param {"info"|"error"} type - Typ av meddelande.
 * @returns {void}
 */
export function renderStatus(message, type = "info") {
  statusEl.textContent = message;
  statusEl.className = `status ${type}`;
}

/**
 * Rensar statusmeddelande.
 * @returns {void}
 */
export function clearStatus() {
  statusEl.textContent = "";
  statusEl.className = "status";
}

/**
 * Visar loader.
 * @returns {void}
 */
export function showLoader() {
  loaderEl.classList.remove("hidden");
}

/**
 * Döljer loader.
 * @returns {void}
 */
export function hideLoader() {
  loaderEl.classList.add("hidden");
}