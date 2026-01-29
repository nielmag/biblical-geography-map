/**
 * Biblical Geography Explorer - Data
 * Territory definitions, location markers, and biblical references.
 * Coordinates are [latitude, longitude] for Leaflet.
 */

// Reference coordinates (approximate)
const REFERENCE = {
  jerusalem: [31.7683, 35.2137],
  dan: [33.2486, 35.6522],
  beersheba: [31.243, 34.7925],
  damascus: [33.5138, 36.2765],
  tyre: [33.2704, 35.2038],
  mediterraneanCoast: { latRange: [31.2, 33.5], lng: 34.9 },
  euphratesRegion: { lat: 36, lng: 38.5 },
  wadiElArish: [31.0, 33.8],
};

/**
 * Biblical location markers: cities and geographic features.
 * type: 'city' | 'feature' (features use label positions, not point markers for water bodies)
 */
const BIBLICAL_LOCATIONS = {
  cities: [
    { name: 'Jerusalem', coords: [31.7683, 35.2137] },
    { name: 'Jericho', coords: [31.8704, 35.4432] },
    { name: 'Bethlehem', coords: [31.7054, 35.2024] },
    { name: 'Nazareth', coords: [32.7009, 35.3032] },
    { name: 'Dan', coords: [33.2486, 35.6522] },
    { name: 'Beersheba', coords: [31.243, 34.7925] },
    { name: 'Damascus', coords: [33.5138, 36.2765] },
    { name: 'Tyre', coords: [33.2704, 35.2038] },
    { name: 'Sidon', coords: [33.5579, 35.3715] },
    { name: 'Hebron', coords: [31.5326, 35.0998] },
    { name: 'Samaria', coords: [32.2765, 35.1944] },
    { name: 'Shechem', coords: [32.21, 35.26] },
    { name: 'Ur of the Chaldeans', coords: [30.96, 46.1] },
    { name: 'Haran', coords: [36.87, 39.03] },
  ],
  // Geographic features: label position only (for seas/rivers shown on base map)
  features: [
    { name: 'Dead Sea', coords: [31.5, 35.5], type: 'feature' },
    { name: 'Sea of Galilee', coords: [32.8, 35.6], type: 'feature' },
    { name: 'Jordan River', coords: [32.1, 35.55], type: 'feature' },
    { name: 'Mediterranean Sea', coords: [32.5, 34.5], type: 'feature' },
  ],
};

/**
 * Major rivers: polylines and permanent labels.
 * Always visible; drawn above base map, below territory polygons.
 * Coordinates are [latitude, longitude]. Each river has: id, name, coords, color, weight, labelPosition, labelText.
 */
const RIVERS = [
  {
    id: 'nile',
    name: 'Nile River',
    coords: [
      [24.0, 32.9],   // Aswan area
      [25.7, 32.0],   // South of Luxor
      [26.2, 31.9],   // Luxor
      [27.0, 31.0],   // North of Luxor
      [28.5, 30.9],   // Middle Egypt
      [29.5, 30.8],   // Approaching Cairo
      [30.04, 31.24], // Cairo
      [30.5, 31.0],   // Nile Delta
      [31.0, 31.2],   // Nile Delta (north)
    ],
    color: '#0077BE',
    weight: 5,
    labelPosition: [29.2, 31.0], // Near Cairo
    labelText: 'NILE RIVER',
  },
  {
    id: 'euphrates',
    name: 'Euphrates River',
    coords: [
      [37.0, 38.0],   // Southern Turkey
      [36.5, 38.5],   // Turkey–Syria
      [36.0, 39.0],   // Syria (upstream)
      [35.95, 39.0],  // Raqqa area
      [35.5, 40.0],   // Syria
      [34.5, 40.8],   // Syria–Iraq border
      [34.0, 41.5],   // Iraq
      [34.0, 43.2],   // Hit, Iraq
      [33.31, 44.37], // Baghdad
      [32.5, 44.8],   // South of Baghdad
      [31.5, 46.0],   // Southeast Iraq
      [31.0, 47.0],   // Southeast (approx 31°N, 47°E)
    ],
    color: '#0077BE',
    weight: 5,
    labelPosition: [35.0, 40.2], // Syria–Iraq border area
    labelText: 'EUPHRATES RIVER',
  },
];

/**
 * Abraham's Journey: Ur → Haran → Canaan (Genesis 11:31–12:5).
 * Dashed red polyline, always visible; drawn with rivers above base map, below territory polygons.
 */
const ABRAHAM_JOURNEY = {
  id: 'abraham-journey',
  name: "Abraham's Journey",
  coords: [
    [30.96, 46.1],   // 1. Ur of the Chaldeans – southern Iraq
    [36.87, 39.03],  // 2. Haran – southern Turkey
    [32.21, 35.26],  // 3. Shechem – Nablus (first stop in Canaan, Genesis 12:6)
    [31.93, 35.25],  // 4. Bethel/Ai – hill country (Genesis 12:8)
    [31.25, 34.8],   // 5. The Negev – Beersheba region (Genesis 12:9)
  ],
  color: '#DC143C',
  weight: 5,
  dashArray: '10, 10',
  labelPosition: [34.5, 38.5], // Near Haran / midpoint of northern leg
  labelText: "ABRAHAM'S JOURNEY",
};

/**
 * Territory overlay definitions.
 * Coordinates are [latitude, longitude] for Leaflet (L.polygon expects [lat, lng]).
 */
const TERRITORIES = [
  {
    id: 'abraham-promised',
    name: "Abraham's Promised Land",
    period: 'c. 2000 BCE',
    periodKey: 'patriarchal',
    // Genesis 15:18–21: "from the river of Egypt to the great river, the Euphrates"
    // Maximalist: "river of Egypt" = Nile. [lat, lng]. Trace: Nile Delta → S along Nile to Aswan →
    // E across N Arabia → Euphrates (Iraq) → N along Euphrates (Syria) → W along Mediterranean → Nile Delta
    coords: [
      [30.04, 31.24],   // 1. Nile Delta / Cairo (river of Egypt)
      [28.5, 30.9],     // 2. South along Nile
      [26.2, 31.9],     // 3. Nile (Luxor area)
      [24.0, 32.9],     // 4. Aswan region (south along Nile)
      [24.0, 35.0],     // 5. East across desert / Red Sea region
      [26.0, 38.0],     // 6. Northern Arabia
      [28.0, 41.0],     // 7. Northern Arabia toward Euphrates
      [31.0, 44.5],     // 8. Euphrates S Iraq (great river – south of Baghdad)
      [33.31, 44.37],   // 9. Baghdad – Euphrates River (great river at ~44°E)
      [34.0, 43.2],     // 10. Hit, Iraq – Euphrates
      [35.5, 41.0],     // 11. Euphrates in Syria
      [36.0, 38.5],     // 12. Euphrates N Syria
      [36.0, 36.0],     // 13. Mediterranean – S Turkey / N Syria
      [33.9, 35.6],     // 14. Lebanon coast
      [32.5, 34.9],     // 15. Israel/Palestine coast
      [31.0, 32.0],     // 16. N Egypt, Mediterranean coast
      [30.04, 31.24],   // 17. Close at Nile Delta
    ],
    color: '#FFD700',
    opacity: 0.3,
    reference: 'Genesis 15:18-21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Genesis+15%3A18-21',
    description: "The land promised to Abraham, 'from the river of Egypt to the great river, the Euphrates'.",
  },
  {
    id: 'joshua-conquest',
    name: "Joshua's Conquest",
    period: 'c. 1400-1350 BCE',
    periodKey: 'conquest',
    coords: [
      [33.25, 35.65],  // Dan (N)
      [33.3, 35.0],    // Mediterranean coast N
      [32.0, 34.9],    // Coast center
      [31.24, 34.8],   // Beersheba / coast S
      [31.24, 35.0],   // Beersheba east
      [31.9, 35.5],   // Jordan valley S
      [32.8, 35.6],   // Sea of Galilee
      [33.25, 35.65],  // Back to Dan
    ],
    color: '#4169E1',
    opacity: 0.35,
    reference: 'Joshua 11:16-23, Joshua 13-21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+11%3A16-23',
    description: 'Territories conquered under Joshua and allotted to the twelve tribes.',
  },
  {
    id: 'united-kingdom-core',
    name: 'United Kingdom - Core Territory',
    period: 'c. 1010-930 BCE',
    periodKey: 'united-kingdom',
    coords: [
      [33.25, 35.65],  // Dan
      [33.2, 35.0],    // West
      [31.24, 34.85],  // Beersheba
      [31.5, 35.8],    // Transjordan S (Moab edge)
      [32.2, 35.9],    // Transjordan center
      [32.8, 35.7],    // Gilead
      [33.25, 35.65],
    ],
    color: '#8B008B',
    opacity: 0.4,
    reference: '2 Samuel 5:5, 1 Kings 4:7-19',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Samuel+5%3A5',
    description: 'Core territory of the United Kingdom under David and Solomon.',
  },
  {
    id: 'united-kingdom-tributary',
    name: 'United Kingdom - Tributary States',
    period: 'c. 1010-930 BCE',
    periodKey: 'united-kingdom',
    coords: [
      [33.5, 36.3],   // Damascus (Aram)
      [33.6, 35.2],   // Sidon/Tyre coast
      [32.0, 34.9],   // Coast
      [30.5, 35.0],   // Edom region
      [31.0, 36.0],   // Moab
      [32.0, 36.2],   // Ammon
      [33.2, 36.5],   // North
      [33.5, 36.3],
    ],
    color: '#DDA0DD',
    opacity: 0.25,
    reference: '2 Samuel 8:1-14, 1 Kings 4:21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Samuel+8%3A1-14',
    description: 'Tributary states and sphere of influence under David and Solomon.',
  },
  {
    id: 'northern-kingdom-israel',
    name: 'Northern Kingdom - Israel',
    period: '930-722 BCE',
    periodKey: 'divided-kingdom',
    coords: [
      [33.25, 35.65],  // Dan
      [33.3, 35.0],    // Mediterranean
      [32.4, 34.95],   // Coast (N of Jerusalem)
      [31.78, 35.25],  // Just north of Jerusalem
      [31.9, 35.5],   // Jordan
      [32.8, 35.6],   // Sea of Galilee
      [33.25, 35.65],
    ],
    color: '#228B22',
    opacity: 0.35,
    reference: '1 Kings 12:16-20, 2 Kings 17:5-6',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=1+Kings+12%3A16-20',
    description: 'Northern Kingdom of Israel with capital at Samaria.',
  },
  {
    id: 'southern-kingdom-judah',
    name: 'Southern Kingdom - Judah',
    period: '930-586 BCE',
    periodKey: 'divided-kingdom',
    coords: [
      [31.78, 35.25],  // North border (Jerusalem area)
      [31.9, 35.0],   // West
      [31.24, 34.85],  // Beersheba
      [31.3, 35.2],   // East Negev
      [31.6, 35.5],   // Dead Sea coast
      [31.77, 35.22],  // Jerusalem
      [31.78, 35.25],
    ],
    color: '#B8860B',
    opacity: 0.35,
    reference: '1 Kings 12:21-24, 2 Kings 25:1-21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=1+Kings+12%3A21-24',
    description: 'Southern Kingdom of Judah with Jerusalem as capital.',
  },
];