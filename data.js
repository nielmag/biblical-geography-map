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
   JOSHUA'S CONQUEST CITIES
   Cities conquered during Joshua's campaigns
   Reference: Joshua 6-12
========================= */
const JOSHUA_CONQUEST_CITIES = [
  // Jordan Crossing
  {
    name: 'Jordan Crossing',
    coords: [32.02, 35.52],
    type: 'crossing',
    description: 'Where Israel miraculously crossed the Jordan River on dry ground',
    reference: 'Joshua 3:14-17',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+3%3A14-17',
    order: 0,
  },
  // Central Campaign
  {
    name: 'Gilgal (Camp)',
    coords: [31.88, 35.47],
    type: 'camp',
    description: 'Base camp east of Jericho where Israel set up memorial stones',
    reference: 'Joshua 4:19-20',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+4%3A19-20',
    order: 1,
  },
  {
    name: 'Jericho',
    coords: [31.8704, 35.4432],
    type: 'conquered',
    description: 'First city conquered; walls fell after 7-day march',
    reference: 'Joshua 6:1-27',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+6',
    order: 2,
  },
  {
    name: 'Ai',
    coords: [31.91, 35.26],
    type: 'conquered',
    description: 'Second city conquered after initial defeat due to Achan\'s sin',
    reference: 'Joshua 7-8',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+7-8',
    order: 3,
  },
  {
    name: 'Gibeon',
    coords: [31.85, 35.18],
    type: 'treaty',
    description: 'Made peace treaty through deception; later defended by Joshua',
    reference: 'Joshua 9:3-27; 10:1-14',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+9%3A3-27',
    order: 4,
  },
  // Southern Campaign - Five Amorite Kings
  {
    name: 'Makkedah',
    coords: [31.70, 34.92],
    type: 'conquered',
    description: 'Where the five Amorite kings hid in a cave and were executed',
    reference: 'Joshua 10:16-28',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A16-28',
    order: 5,
  },
  {
    name: 'Libnah',
    coords: [31.63, 34.88],
    type: 'conquered',
    description: 'Conquered in the southern campaign',
    reference: 'Joshua 10:29-30',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A29-30',
    order: 6,
  },
  {
    name: 'Lachish',
    coords: [31.565, 34.849],
    type: 'conquered',
    description: 'Major fortified city; conquered in two days',
    reference: 'Joshua 10:31-32',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A31-32',
    order: 7,
  },
  {
    name: 'Eglon',
    coords: [31.50, 34.83],
    type: 'conquered',
    description: 'Conquered same day as Lachish',
    reference: 'Joshua 10:34-35',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A34-35',
    order: 8,
  },
  {
    name: 'Hebron',
    coords: [31.5326, 35.0998],
    type: 'conquered',
    description: 'Ancient city of the Anakim; later given to Caleb',
    reference: 'Joshua 10:36-37',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A36-37',
    order: 9,
  },
  {
    name: 'Debir',
    coords: [31.42, 35.02],
    type: 'conquered',
    description: 'Also called Kiriath-sepher; conquered in southern campaign',
    reference: 'Joshua 10:38-39',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+10%3A38-39',
    order: 10,
  },
  // Northern Campaign
  {
    name: 'Hazor',
    coords: [33.02, 35.57],
    type: 'conquered',
    description: 'Head of all northern kingdoms; burned with fire',
    reference: 'Joshua 11:1-13',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Joshua+11%3A1-13',
    order: 11,
  },
];

/* =========================
   JOSHUA'S CONQUEST ROUTE
   Campaign path showing military movements
========================= */
const JOSHUA_CONQUEST_ROUTE = {
  id: 'joshua-conquest-route',
  name: "Joshua's Conquest Route",
  // Central campaign: Jordan Crossing → Gilgal → Jericho → Ai → Gibeon
  // Then southern campaign loop
  coords: [
    [32.02, 35.52],   // Jordan Crossing
    [31.88, 35.47],   // Gilgal (Camp)
    [31.8704, 35.4432], // Jericho
    [31.91, 35.26],   // Ai
    [31.85, 35.18],   // Gibeon
    [31.70, 34.92],   // Makkedah
    [31.63, 34.88],   // Libnah
    [31.565, 34.849], // Lachish
    [31.50, 34.83],   // Eglon
    [31.5326, 35.0998], // Hebron
    [31.42, 35.02],   // Debir
  ],
  color: '#8B4513',  // Saddle brown - distinct from Abraham's red
  weight: 4,
  dashArray: '8, 6',
  labelPosition: [31.65, 35.15],
  labelText: "JOSHUA'S SOUTHERN CAMPAIGN",
};

/* =========================
   JOSHUA'S NORTHERN CAMPAIGN ROUTE
========================= */
const JOSHUA_NORTHERN_ROUTE = {
  id: 'joshua-northern-route',
  name: "Joshua's Northern Campaign",
  coords: [
    [32.02, 35.52],   // Jordan Crossing
    [31.88, 35.47],   // Gilgal (Camp)
    [32.21, 35.26],   // Through Shechem area
    [32.8, 35.5],     // Past Sea of Galilee
    [33.02, 35.57],   // Hazor
  ],
  color: '#2E8B57',  // Sea green - distinct color for northern campaign
  weight: 4,
  dashArray: '8, 6',
  labelPosition: [32.5, 35.4],
  labelText: "JOSHUA'S NORTHERN CAMPAIGN",
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
    name: 'United Kingdom — Core Territory',
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
    name: 'United Kingdom — Tributary States',
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
    name: 'Northern Kingdom — Israel',
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
    name: 'Southern Kingdom — Judah',
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
