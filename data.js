/**
 * Biblical Geography Explorer - Data
 */

/* =========================
   REFERENCE POINTS
========================= */
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

/* =========================
   CITIES & FEATURES
========================= */
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
  features: [
    { name: 'Dead Sea', coords: [31.5, 35.5], type: 'feature' },
    { name: 'Sea of Galilee', coords: [32.8, 35.6], type: 'feature' },
    { name: 'Jordan River', coords: [32.1, 35.55], type: 'feature' },
    { name: 'Mediterranean Sea', coords: [32.5, 34.5], type: 'feature' },
  ],
};

/* =========================
   RIVERS
========================= */
const RIVERS = [
  {
    id: 'nile',
    name: 'Nile River',
    coords: [
      [24.0, 32.9],
      [25.7, 32.0],
      [26.2, 31.9],
      [27.0, 31.0],
      [28.5, 30.9],
      [29.5, 30.8],
      [30.04, 31.24],
      [30.5, 31.0],
      [31.0, 31.2],
    ],
    color: '#0077BE',
    weight: 5,
    labelPosition: [29.2, 31.0],
    labelText: 'NILE RIVER',
  },
  {
    id: 'euphrates',
    name: 'Euphrates River',
    coords: [
      [37.0, 38.0],
      [36.5, 38.5],
      [36.0, 39.0],
      [35.95, 39.0],
      [35.5, 40.0],
      [34.5, 40.8],
      [34.0, 41.5],
      [34.0, 43.2],
      [33.31, 44.37],
      [32.5, 44.8],
      [31.5, 46.0],
      [31.0, 47.0],
    ],
    color: '#0077BE',
    weight: 5,
    labelPosition: [35.0, 40.2],
    labelText: 'EUPHRATES RIVER',
  },
];

/* =========================
   ABRAHAM
========================= */
const ABRAHAM_JOURNEY = {
  id: 'abraham-journey',
  name: "Abraham's Journey",
  coords: [
    [30.96, 46.1],
    [36.87, 39.03],
    [32.21, 35.26],
    [31.93, 35.25],
    [31.25, 34.8],
  ],
  color: '#DC143C',
  weight: 5,
  dashArray: '10, 10',
  labelPosition: [34.5, 38.5],
  labelText: "ABRAHAM'S JOURNEY",
};

/* =========================
   TERRITORIES
========================= */
const TERRITORIES = [
  {
    id: 'abraham-promised',
    name: "Abraham's Promised Land",
    period: 'c. 2000 BCE',
    periodKey: 'patriarchal',
    reference: 'Genesis 15:18–21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Genesis+15%3A18-21',
    description:
      "The land promised to Abraham, 'from the river of Egypt to the great river, the Euphrates'.",
    color: '#FFD700',
    opacity: 0.3,
    coords: [
      [30.04, 31.24],   // Nile Delta / Cairo
      [28.5, 30.9],
      [26.2, 31.9],
      [24.0, 32.9],     // Aswan
      [24.0, 35.0],
      [26.0, 38.0],
      [28.0, 41.0],
      [31.0, 44.5],
      [33.31, 44.37],   // Baghdad / Euphrates
      [34.0, 43.2],
      [35.5, 41.0],
      [36.0, 38.5],
      [36.0, 36.0],
      [33.9, 35.6],
      [32.5, 34.9],
      [31.0, 32.0],
      [30.04, 31.24],
    ],
  },
  {
    id: 'joshua-conquest',
    name: "Joshua's Conquest (West of Jordan)",
    period: 'c. 1400–1350 BCE',
    periodKey: 'conquest',
    coords: [
      [33.2486, 35.6522], // Dan
      [33.30, 35.10],
      [33.10, 35.03],
      [32.70, 34.95],
      [32.30, 34.85],
      [31.90, 34.75],
      [31.55, 34.55],
      [31.2430, 34.7925], // Beersheba
      [31.20, 35.30],
      [31.30, 35.45],
      [31.8704, 35.4432], // Jericho
      [32.25, 35.55],
      [32.80, 35.60],     // Sea of Galilee
      [33.15, 35.63],
      [33.2486, 35.6522], // close
    ],
    color: '#4169E1',
    opacity: 0.35,
    reference: 'Joshua 11:16–23; Joshua 13–21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+11%3A16-23',
    description:
      'Land conquered and allotted under Joshua, west of the Jordan River.',
  },

  {
    id: 'united-kingdom-core',
    name: 'United Kingdom – Core Territory',
    period: 'c. 1010–930 BCE',
    periodKey: 'united-kingdom',
    coords: [
      [33.25, 35.65],
      [33.2, 35.0],
      [31.24, 34.85],
      [31.5, 35.8],
      [32.2, 35.9],
      [32.8, 35.7],
      [33.25, 35.65],
    ],
    color: '#8B008B',
    opacity: 0.4,
    reference: '2 Samuel 5:5; 1 Kings 4:7–19',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Samuel+5%3A5',
    description: 'Core territory of the United Kingdom under David and Solomon.',
  },

  {
    id: 'united-kingdom-tributary',
    name: 'United Kingdom – Tributary States',
    period: 'c. 1010–930 BCE',
    periodKey: 'united-kingdom',
    coords: [
      [33.5, 36.3],
      [33.6, 35.2],
      [32.0, 34.9],
      [30.5, 35.0],
      [31.0, 36.0],
      [32.0, 36.2],
      [33.2, 36.5],
      [33.5, 36.3],
    ],
    color: '#DDA0DD',
    opacity: 0.25,
    reference: '2 Samuel 8:1–14; 1 Kings 4:21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Samuel+8%3A1-14',
    description:
      'Tributary states and sphere of influence under David and Solomon.',
  },

  {
    id: 'northern-kingdom-israel',
    name: 'Northern Kingdom – Israel',
    period: '930–722 BCE',
    periodKey: 'divided-kingdom',
    coords: [
      [33.25, 35.65],
      [33.3, 35.0],
      [32.4, 34.95],
      [31.78, 35.25],
      [31.9, 35.5],
      [32.8, 35.6],
      [33.25, 35.65],
    ],
    color: '#228B22',
    opacity: 0.35,
    reference: '1 Kings 12:16–20; 2 Kings 17:5–6',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=1+Kings+12%3A16-20',
    description:
      'Northern Kingdom of Israel with capital at Samaria.',
  },

  {
    id: 'southern-kingdom-judah',
    name: 'Southern Kingdom – Judah',
    period: '930–586 BCE',
    periodKey: 'divided-kingdom',
    coords: [
      [31.78, 35.25],
      [31.9, 35.0],
      [31.24, 34.85],
      [31.3, 35.2],
      [31.6, 35.5],
      [31.77, 35.22],
      [31.78, 35.25],
    ],
    color: '#B8860B',
    opacity: 0.35,
    reference: '1 Kings 12:21–24; 2 Kings 25:1–21',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=1+Kings+12%3A21-24',
    description:
      'Southern Kingdom of Judah with Jerusalem as capital.',
  },
];
