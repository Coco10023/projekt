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