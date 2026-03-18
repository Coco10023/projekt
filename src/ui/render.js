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