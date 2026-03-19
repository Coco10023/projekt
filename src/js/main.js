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
 * Hanterar formulärets submit.
 * @param {SubmitEvent} event - Submit-event.
 * @returns {Promise<void>}
 */
async function handleSubmit(event) {
  event.preventDefault();
  await runSearch(cityInput.value.trim());
}