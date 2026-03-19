import "../scss/main.scss";

import { getLocationByName } from "./api/geocode.js";
import { getWeatherByCoordinates } from "./api/weather.js";
import { saveRecentSearch, getRecentSearches } from "./storage/recentSearches.js";
import { updateMap, initMap } from "./ui/map.js";
import {
  renderStatus,
  clearStatus,
  renderWeatherApp,
  showLoader,
  hideLoader,
  hideResult,
  renderRecentSearches
} from "./ui/render.js";

const form = document.querySelector("#search-form");
const cityInput = document.querySelector("#city");
const recentSearchesContainer = document.querySelector("#recent-searches-list");


/**
 * Kör hela sökflödet: plats, väder, karta och lagring.
 * @param {string} city - Ort att söka efter.
 * @returns {Promise<void>}
 */
async function runSearch(city) {
  if (!city.trim()) {
    renderStatus("Du måste skriva in en ort.", "error");
    hideResult();
    return;
  }

  try {
    clearStatus();
    showLoader();
    hideResult();

    const location = await getLocationByName(city);

    if (!location) {
      throw new Error("Ingen ort hittades. Försök med en annan sökning.");
    }

    const weather = await getWeatherByCoordinates(
      location.latitude,
      location.longitude
    );

    renderWeatherApp(location, weather);
    updateMap(location.latitude, location.longitude, location.name);

    saveRecentSearch(city);
    renderRecentSearches(getRecentSearches());
    cityInput.value = city;
  } catch (error) {
    renderStatus(error.message, "error");
  } finally {
    hideLoader();
  }
}


/**
 * Hanterar formulärets submit.
 * @param {SubmitEvent} event - Submit-event.
 * @returns {Promise<void>}
 */
async function handleSubmit(event) {
  event.preventDefault();
  await runSearch(cityInput.value.trim());
}

/**
 * Hanterar klick på tidigare sökningar.
 * @param {MouseEvent} event - Klick-event.
 * @returns {Promise<void>}
 */
async function handleRecentSearchClick(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (!target.matches(".recent-search-btn")) {
    return;
  }

  const city = target.dataset.city;

  if (city) {
    await runSearch(city);
  }
}

/**
 * Initierar appen.
 * @returns {void}
 */
function init() {
  form.addEventListener("submit", handleSubmit);
  recentSearchesContainer.addEventListener("click", handleRecentSearchClick);

  renderRecentSearches(getRecentSearches());
  initMap();
}

init();