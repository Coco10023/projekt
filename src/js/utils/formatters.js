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


/**
 * Ger aktivitetsförslag beroende på väder och temperatur.
 * @param {number} code - Weather code.
 * @param {number} temperature - Aktuell temperatur.
 * @returns {string[]} Lista med aktiviteter.
 */
export function getActivities(code, temperature) {
  const rainyCodes = [51, 53, 55, 61, 63, 65, 80, 81, 82];
  const snowyCodes = [71, 73, 75];
  const thunderCodes = [95];

  if (thunderCodes.includes(code)) {
    return [
      "Besök museum eller galleri",
      "Välj inomhusaktiviteter",
      "Undvik längre vistelser utomhus"
    ];
  }

  if (snowyCodes.includes(code)) {
    return [
      "Ta en vinterpromenad",
      "Fotografera vintermiljön",
      "Planera ett cafébesök efteråt"
    ];
  }

  if (rainyCodes.includes(code)) {
    return [
      "Besök ett museum eller shoppingcenter",
      "Planera restaurang- eller cafébesök",
      "Ta med paraply om du går ut"
    ];
  }

  if (temperature >= 20) {
    return [
      "Ta en stadspromenad",
      "Ät på uteservering",
      "Utforska parker och utsiktsplatser"
    ];
  }

  if (temperature >= 10) {
    return [
      "Promenera i centrum",
      "Besök sevärdheter utomhus",
      "Ta en kortare utflykt"
    ];
  }

  return [
    "Välj inomhusattraktioner",
    "Ta en kort promenad med varma kläder",
    "Värm dig på ett café"
  ];
}

/**
 * Formaterar datum till svensk läsbar text.
 * @param {string} dateString - Datumsträng i format YYYY-MM-DD.
 * @returns {string} Formaterat datum.
 */
export function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("sv-SE", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}