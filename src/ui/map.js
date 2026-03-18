import L from "leaflet";
import "leaflet/dist/leaflet.css";

let map;
let marker;

/**
 * Initialiserar kartan om den inte redan finns.
 * @returns {void}
 */
export function initMap() {
  if (map) {
    return;
  }

  map = L.map("map").setView([62.3908, 17.3069], 6);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
}

/**
 * Uppdaterar kartans position och markör.
 * @param {number} latitude - Latitud.
 * @param {number} longitude - Longitud.
 * @param {string} label - Text för markören.
 * @returns {void}
 */
export function updateMap(latitude, longitude, label) {
  initMap();

  map.setView([latitude, longitude], 11);

  if (marker) {
    marker.remove();
  }

  marker = L.marker([latitude, longitude]).addTo(map).bindPopup(label).openPopup();

  setTimeout(() => {
    map.invalidateSize();
  }, 100);
}