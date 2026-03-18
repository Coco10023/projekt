/**
 * Returnerar svensk väderbeskrivning för given väderkod.
 * @param {number} code - Weather code.
 * @returns {string} Beskrivning av vädret.
 */
export function getWeatherDescription(code) {
  const map = {
    0: "Klar himmel",
    1: "Mestadels klart",
    2: "Delvis molnigt",
    3: "Mulet",
    45: "Dimma",
    48: "Rimfrostdimma",
    51: "Lätt duggregn",
    53: "Måttligt duggregn",
    55: "Tätt duggregn",
    61: "Lätt regn",
    63: "Måttligt regn",
    65: "Kraftigt regn",
    71: "Lätt snöfall",
    73: "Måttligt snöfall",
    75: "Kraftigt snöfall",
    80: "Lätta regnskurar",
    81: "Måttliga regnskurar",
    82: "Kraftiga regnskurar",
    95: "Åska"
  };

  return map[code] || "Okänt väder";
}