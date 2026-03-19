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

/**
 * Döljer resultatsektionen.
 * @returns {void}
 */
export function hideResult() {
  resultEl.classList.add("hidden");
}


/**
 * Renderar väderappens innehåll.
 * @param {Object} location - Platsdata.
 * @param {Object} weather - Väderdata.
 * @returns {void}
 */
export function renderWeatherApp(location, weather) {
  const current = weather.current;
  const daily = weather.daily;

  placeNameEl.textContent = location.name;
  placeMetaEl.textContent =
    `${location.country || ""}` +
    `${location.admin1 ? `, ${location.admin1}` : ""}` +
    ` · lat ${location.latitude.toFixed(2)}, lon ${location.longitude.toFixed(2)}`;

  currentTempEl.textContent = `${Math.round(current.temperature_2m)}°C`;
  currentDescEl.textContent = getWeatherDescription(current.weather_code);
  currentWindEl.textContent = `Vind: ${Math.round(current.wind_speed_10m)} m/s`;

  const activities = getActivities(current.weather_code, current.temperature_2m);
  activityListEl.innerHTML = activities.map((item) => `<li>${item}</li>`).join("");

  forecastListEl.innerHTML = daily.time
    .map((date, index) => {
      const description = getWeatherDescription(daily.weather_code[index]);

      return `
        <div class="forecast-item">
          <h4>${formatDate(date)}</h4>
          <p>${description}</p>
          <p>Min: ${Math.round(daily.temperature_2m_min[index])}°C</p>
          <p>Max: ${Math.round(daily.temperature_2m_max[index])}°C</p>
        </div>
      `;
    })
    .join("");

  resultEl.classList.remove("hidden");
}