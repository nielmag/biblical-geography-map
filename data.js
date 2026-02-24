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
   GARDEN OF EDEN - PROPOSED LOCATIONS
   Various scholarly theories for the location of Eden
   Reference: Genesis 2:10-14
========================= */
const GARDEN_EDEN_LOCATIONS = [
  {
    name: 'Persian Gulf Theory',
    coords: [29.5, 48.5],
    type: 'proposed',
    description: 'Where the Tigris and Euphrates meet near modern Basra. Some scholars suggest Eden was in this region, possibly now submerged under the Persian Gulf which was lower in ancient times.',
    reference: 'Genesis 2:10-14',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A10-14',
    confidence: 'moderate',
  },
  {
    name: 'Armenian Highlands Theory',
    coords: [39.0, 41.0],
    type: 'proposed',
    description: 'Eastern Turkey where both the Tigris and Euphrates have their sources. This mountainous region has been proposed as the location where the rivers originated from a common area.',
    reference: 'Genesis 2:10-14',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A10-14',
    confidence: 'moderate',
  },
  {
    name: 'Southern Mesopotamia Theory',
    coords: [31.0, 46.5],
    type: 'proposed',
    description: 'Near ancient Eridu in southern Iraq, one of the oldest Sumerian cities. Some connect this with the biblical Eden based on the fertile land between the rivers.',
    reference: 'Genesis 2:10-14',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A10-14',
    confidence: 'speculative',
  },
];

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
    coords: [31.88, 35.55],
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
    [31.88, 35.55],   // Jordan Crossing
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
    [31.88, 35.55],   // Jordan Crossing
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
    id: 'tigris',
    name: 'Tigris River',
    coords: [
      [38.3, 39.5],       // Source in Eastern Turkey
      [37.8, 40.5],       // Upper Tigris
      [37.5, 41.5],       // Near Diyarbakir
      [37.0, 42.3],       // Flowing southeast
      [36.5, 43.0],       // Near Mosul/Nineveh
      [36.0, 43.5],       // Assyrian heartland
      [35.5, 43.8],       // Continuing south
      [35.0, 44.2],       // Near Tikrit
      [34.5, 44.4],       // Samarra area
      [33.8, 44.5],       // Approaching Baghdad
      [33.3, 44.6],       // Baghdad area (east side)
      [32.5, 45.8],       // South of Baghdad
      [31.8, 46.8],       // Continuing south
      [31.0, 47.4],       // Near Basra - confluence
    ],
    color: '#0077BE',
    weight: 3,
    labelPosition: [35.5, 43.8],
    labelText: 'TIGRIS RIVER',
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
      [32.5, 44.6],       // West of Tigris
      [31.8, 45.5],       // Continuing south (west of Tigris)
      [31.2, 46.5],       // Near Nasiriyah
      [30.8, 47.2],       // Approaching confluence
      [30.5, 47.8],       // Shatt al-Arab
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
/* =========================
   ANCIENT EMPIRES
   Overlays showing extent of ancient empires
========================= */
const ANCIENT_EMPIRES = [
  {
    id: 'roman-empire',
    name: 'Roman Empire',
    period: 'c. 27 BCE–95 CE',
    description: "The Roman Empire during the New Testament era, under which Jesus was born, the apostles ministered, and the early church spread. This shows the empire's extent by the end of Domitian's reign (95 CE).",
    reference: 'Luke 2:1; Acts 1:8; Revelation 1:9',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Luke+2%3A1',
    color: '#800020',
    opacity: 0.22,
    note: "Note: Rome remained the capital throughout this period. The empire provided roads, common language (Greek/Latin), and peace (Pax Romana) that facilitated the spread of Christianity.",
    cities: [
      {
        name: 'Rome',
        coords: [41.9028, 12.4964],
        type: 'capital',
        description: 'Capital of the Roman Empire. Where Paul was imprisoned and tradition holds both Paul and Peter were martyred. Destination of Paul\'s epistle to the Romans.',
        reference: 'Romans 1:7; Acts 28:16',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Romans+1%3A7',
      },
    ],
    coords: [
      // Start in northwest - Britain
      [50.0, -5.5],      // Cornwall
      [50.5, -1.0],      // South coast
      [51.5, 1.0],       // Southeast (Dover)
      [53.0, 0.5],       // East coast
      [55.0, -2.0],      // Hadrian's Wall area (northern limit ~95 CE)
      [55.0, -4.5],      // West Scotland border
      [54.0, -5.0],      // Northwest England
      [53.0, -4.5],      // Wales
      [51.5, -5.0],      // Southwest Wales
      [50.0, -5.5],      // Back to Cornwall
      // Cross to Gaul (France)
      [49.0, -2.0],      // Brittany north
      [48.5, -4.5],      // Brittany west
      [47.0, -2.5],      // Loire
      [46.0, -1.5],      // Bay of Biscay
      // Iberian Peninsula (Spain/Portugal)
      [44.0, -8.5],      // Northwest Spain
      [42.0, -9.0],      // Portugal north
      [37.0, -9.0],      // Portugal south
      [36.0, -6.0],      // Gibraltar area
      [36.5, -2.0],      // Southern Spain
      [38.0, 0.0],       // Valencia
      [41.0, 2.0],       // Catalonia
      [43.0, 3.0],       // Southern France coast
      // Southern France to Alps
      [43.5, 7.0],       // Nice/Riviera
      [44.0, 8.0],       // Genoa area
      // Northern frontier - Rhine/Danube
      [47.5, 8.0],       // Swiss Alps
      [48.0, 8.5],       // Upper Rhine
      [50.0, 8.0],       // Frankfurt area (Rhine frontier)
      [51.5, 7.0],       // Lower Rhine
      [52.0, 5.0],       // Netherlands
      [51.0, 3.5],       // Belgium coast
      // Back along Rhine-Danube frontier
      [50.0, 9.0],       // Main river
      [49.0, 12.0],      // Danube source area
      [48.0, 14.0],      // Austria
      [48.0, 17.0],      // Vienna area
      [47.5, 19.0],      // Pannonia
      [45.5, 20.0],      // Danube bend
      [44.5, 22.5],      // Serbia (Moesia)
      [44.0, 28.0],      // Danube delta (Black Sea)
      // Black Sea coast (Pontus)
      [43.0, 34.0],      // Pontus coast
      [41.5, 37.0],      // Northern Anatolia
      [41.0, 40.5],      // Eastern Pontus
      // Eastern frontier (Euphrates)
      [39.5, 42.0],      // Armenia border (client kingdom)
      [37.5, 40.5],      // Upper Euphrates
      [36.0, 38.0],      // Commagene
      [35.0, 36.5],      // Syria
      [33.5, 36.0],      // Damascus area
      [33.0, 35.5],      // Tyre/Sidon
      [32.5, 35.3],      // Galilee
      [31.8, 35.5],      // Jerusalem
      [31.0, 34.5],      // Gaza
      [30.5, 34.0],      // Sinai border
      // Egypt
      [31.5, 32.0],      // Nile Delta
      [30.0, 31.2],      // Cairo/Memphis
      [27.0, 31.0],      // Middle Egypt
      [24.0, 33.0],      // First Cataract (Aswan)
      // North Africa westward
      [31.5, 25.0],      // Cyrenaica
      [32.5, 22.0],      // Libya coast
      [32.0, 15.0],      // Gulf of Sidra
      [33.5, 11.0],      // Tripoli
      [37.0, 10.0],      // Carthage/Tunisia
      [36.8, 8.5],       // Tunisia coast
      [36.5, 5.0],       // Algeria
      [35.8, 0.0],       // Oran
      [35.5, -5.0],      // Morocco (Mauretania Tingitana)
      [36.0, -6.0],      // Back to Gibraltar - closes North Africa
      // Close the polygon through Mediterranean
      [36.0, -6.0],      // Gibraltar (polygon will close)
    ],
  },
  {
    id: 'greek-empire',
    name: 'Greek (Macedonian) Empire',
    period: 'c. 336–323 BCE',
    description: "Alexander the Great's empire at its height (323 BCE). Conquered the Persian Empire and spread Greek culture throughout the Near East (Hellenization), setting the stage for the intertestamental period.",
    note: "Note: Babylon was the capital at Alexander's death (323 BCE). Pella was the original Macedonian capital and Alexander's birthplace. Alexandria was founded by Alexander but became a major capital only after the empire split under the Ptolemies.",
    reference: 'Daniel 8:5-8, 21; Daniel 11:3-4',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Daniel+8%3A5-8',
    color: '#1E90FF',
    opacity: 0.22,
    cities: [
      {
        name: 'Babylon',
        coords: [32.5362, 44.4208],
        type: 'capital',
        description: "Alexander's capital and the city where he died in 323 BCE. He planned to make it the center of his empire.",
        reference: 'Daniel 8:5-8',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Daniel+8%3A5-8',
      },
      {
        name: 'Pella',
        coords: [40.7617, 22.5217],
        type: 'capital',
        description: 'Original capital of Macedonia and birthplace of Alexander the Great.',
        reference: 'Daniel 8:21 (Greece/Javan)',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Daniel+8%3A21',
      },
      {
        name: 'Alexandria',
        coords: [31.2001, 29.9187],
        type: 'capital',
        description: 'Founded by Alexander in 331 BCE. Became the capital of Ptolemaic Egypt and a major center of Jewish scholarship (Septuagint translation).',
        reference: 'Acts 18:24',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Acts+18%3A24',
      },
    ],
    coords: [
      // Western border - Greece, Macedonia, Thrace
      [39.5, 20.0],      // Western Greece (Epirus)
      [41.0, 20.5],      // Albania/Macedonia border
      [42.0, 23.0],      // Thrace
      [42.0, 26.0],      // Northern Thrace
      // Black Sea coast / Anatolia
      [42.0, 28.0],      // Bulgarian coast
      [42.0, 33.0],      // Turkish Black Sea
      [41.5, 37.0],      // Pontus
      [42.0, 40.0],      // Eastern Black Sea
      // Caucasus border (not fully controlled)
      [41.5, 43.0],      // Armenia/Georgia edge
      [40.0, 47.0],      // Caspian west
      [38.0, 48.5],      // Caspian south
      // Central Asia - Eastern frontier (Bactria, Sogdiana)
      [40.0, 54.0],      // Hyrcania
      [42.0, 59.0],      // Sogdiana (Samarkand area)
      [39.0, 66.0],      // Bactria (Afghanistan)
      [37.0, 70.0],      // Hindu Kush
      [34.0, 72.0],      // Gandhara (Taxila)
      [30.0, 70.0],      // Punjab - furthest east (turned back here)
      // South along Indus to coast
      [25.0, 68.0],      // Indus delta
      [25.0, 63.0],      // Makran coast (Gedrosia)
      // Persian Gulf coast
      [26.5, 57.0],      // Strait of Hormuz
      [27.0, 51.0],      // Persian Gulf
      [29.5, 48.5],      // Head of Gulf
      // Arabia - only coastal/limited control
      [28.0, 45.0],      // Northern Arabia edge
      [27.0, 40.0],      // Desert edge
      [28.0, 36.0],      // Sinai/Negev
      [29.5, 34.5],      // Gaza
      // Egypt
      [31.0, 32.0],      // Nile Delta
      [30.0, 31.0],      // Cairo area
      [26.0, 32.0],      // Upper Egypt
      [24.0, 32.8],      // Aswan (First Cataract - southern limit)
      // Libya coast
      [31.5, 25.0],      // Cyrenaica
      [32.5, 22.0],      // Libya coast
      [32.0, 20.0],      // Western Libya edge
      // Mediterranean back to Greece
      [34.0, 22.0],      // Crete area
      [35.0, 27.0],      // Rhodes
      [36.5, 28.5],      // SW Turkey coast
      [37.0, 27.0],      // Ionia
      [38.5, 24.0],      // Aegean
      [37.5, 21.5],      // Peloponnese
      [39.5, 20.0],      // Close polygon
    ],
  },
  {
    id: 'persian-empire',
    name: 'Persian Empire',
    period: 'c. 550–330 BCE (Achaemenid)',
    description: 'The Achaemenid Persian Empire at its greatest extent under Darius I (522–486 BCE). Cyrus the Great conquered Babylon in 539 BCE and allowed the Jews to return to Jerusalem.',
    reference: 'Ezra 1:1-4; Daniel 5:30-31; Esther 1:1',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=Ezra+1%3A1-4',
    color: '#DAA520',
    opacity: 0.22,
    cities: [
      {
        name: 'Persepolis',
        coords: [29.9352, 52.8914],
        type: 'capital',
        description: 'Ceremonial capital of the Achaemenid Empire. Built by Darius I and expanded by Xerxes. Destroyed by Alexander the Great in 330 BCE.',
        reference: 'Esther 1:2 (Susa was administrative capital)',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Esther+1%3A2',
      },
      {
        name: 'Susa',
        coords: [32.1877, 48.2536],
        type: 'capital',
        description: 'Administrative capital of the Persian Empire. Setting for the Book of Esther. Where Nehemiah served as cupbearer to King Artaxerxes.',
        reference: 'Esther 1:2; Nehemiah 1:1',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Esther+1%3A2',
      },
    ],
    coords: [
      // Western border - Egypt and Libya
      [31.0, 25.0],      // Libya border
      [30.0, 25.5],      // Western Egypt
      [26.0, 28.0],      // Upper Egypt
      [24.0, 32.8],      // Near First Cataract (Aswan)
      [22.0, 31.5],      // Nubia border
      // Red Sea coast
      [22.0, 36.0],      // Sudan coast
      [20.0, 38.0],      // Eritrea
      [15.0, 42.0],      // Horn of Africa edge
      [12.5, 43.5],      // Gulf of Aden
      // Arabian coast
      [12.5, 45.0],      // Yemen
      [15.0, 52.0],      // Oman coast
      [22.0, 59.5],      // Eastern Arabia
      // Persian Gulf and into Pakistan/India
      [25.0, 61.0],      // Makran coast
      [25.5, 66.0],      // Indus delta region
      [30.0, 70.0],      // Punjab/Indus valley (eastern limit)
      [34.0, 72.0],      // Gandhara
      // Northern/Eastern frontier - Central Asia
      [37.0, 71.0],      // Hindu Kush
      [39.0, 68.0],      // Bactria
      [40.0, 63.0],      // Sogdiana edge
      [42.0, 59.0],      // Aral Sea region
      [42.0, 54.0],      // Chorasmia
      [40.0, 50.0],      // Caspian east
      // Caucasus and Black Sea
      [42.0, 48.0],      // Caspian west / Caucasus
      [42.0, 43.0],      // Georgia/Armenia
      [41.5, 40.0],      // Eastern Anatolia
      [40.0, 35.0],      // Central Anatolia
      [39.0, 30.0],      // Western Anatolia
      [37.5, 27.0],      // Aegean coast (Ionia)
      // Thrace and Macedonia border
      [41.0, 26.0],      // Thrace
      [41.5, 24.0],      // Macedonia border
      [40.0, 23.5],      // Northern Greece edge
      // Aegean islands and back to Mediterranean
      [38.0, 24.0],      // Aegean
      [36.5, 28.0],      // Rhodes area
      [35.0, 32.0],      // Cyprus
      [34.0, 34.0],      // Levant coast
      [32.0, 34.5],      // Judah coast
      [31.0, 32.0],      // Nile Delta
      [31.0, 25.0],      // Close polygon - Libya border
    ],
  },
  {
    id: 'babylonian-empire',
    name: 'Babylonian Empire',
    period: 'c. 626–539 BCE (Neo-Babylonian)',
    description: 'The Neo-Babylonian Empire under Nebuchadnezzar II (605–562 BCE). Conquered Jerusalem in 586 BCE and exiled the Jews to Babylon.',
    reference: '2 Kings 25:1-21; Daniel 1-4',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Kings+25%3A1-21',
    color: '#4B0082',
    opacity: 0.25,
    cities: [
      {
        name: 'Babylon',
        coords: [32.5362, 44.4208],
        type: 'capital',
        description: 'Capital of the Neo-Babylonian Empire. Site of the Hanging Gardens and the Tower of Babel. Where the Jewish exiles were taken.',
        reference: 'Daniel 1:1-2; Jeremiah 52',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Daniel+1%3A1-2',
      },
    ],
    coords: [
      // Southern Levant - border with Egypt at Brook of Egypt (Wadi el-Arish)
      [31.0, 33.5],      // Brook of Egypt / Wadi el-Arish area
      [31.2, 34.2],      // Gaza
      // Mediterranean coast - Levant
      [31.8, 34.5],      // Ashkelon
      [32.5, 34.8],      // Joppa
      [33.0, 35.0],      // Dor
      [33.3, 35.2],      // Tyre
      [34.0, 35.5],      // Sidon
      [34.5, 35.8],      // Byblos
      [35.5, 35.8],      // Northern Lebanon coast
      [35.9, 35.9],      // Ugarit region
      // Northern border - Taurus foothills
      [36.3, 36.3],      // Antioch
      [36.8, 37.0],      // Carchemish (important battle site)
      [36.9, 38.5],      // Upper Euphrates
      [36.9, 39.0],      // Harran (major city, last Assyrian capital)
      // Northern Mesopotamia border with Medes
      [36.5, 40.5],      // Northern frontier
      [36.2, 42.5],      // Upper Tigris
      [35.8, 43.5],      // Near former Nineveh
      // Eastern border - Zagros Mountains (Median border)
      [35.2, 44.5],      // Kurdistan foothills
      [34.3, 45.3],      // Zagros
      [33.2, 45.5],      // Media border
      [32.2, 45.2],      // Luristan
      [31.3, 46.0],      // Elam/Susa region
      [30.5, 47.5],      // Lower Mesopotamia
      [29.8, 48.5],      // Head of Persian Gulf
      // Persian Gulf coast
      [29.0, 48.5],      // Gulf coast
      [28.2, 48.8],      // Eastern Arabia coast
      // Southern border - Arabian Desert edge
      [27.5, 47.0],      // Desert
      [27.0, 44.0],      // Northern Arabia
      [27.5, 40.0],      // Desert
      [28.5, 37.0],      // Edom region
      [29.5, 35.0],      // Negev
      [31.0, 33.5],      // Close polygon
    ],
  },
  {
    id: 'assyrian-empire',
    name: 'Assyrian Empire',
    period: 'c. 911–609 BCE (Neo-Assyrian)',
    description: 'The Neo-Assyrian Empire at its greatest extent under Ashurbanipal (c. 668–627 BCE). Conquered the Northern Kingdom of Israel in 722 BCE and briefly controlled Egypt to Thebes.',
    reference: '2 Kings 17:5-6; Isaiah 36-37',
    referenceUrl: 'https://www.biblegateway.com/passage/?search=2+Kings+17%3A5-6',
    color: '#8B0000',
    opacity: 0.25,
    cities: [
      {
        name: 'Nineveh',
        coords: [36.3589, 43.1528],
        type: 'capital',
        description: 'Capital of the Neo-Assyrian Empire. The city Jonah was sent to preach repentance. Destroyed in 612 BCE by the Babylonians and Medes.',
        reference: 'Jonah 1:1-2; Nahum 1-3',
        referenceUrl: 'https://www.biblegateway.com/passage/?search=Jonah+1%3A1-2',
      },
    ],
    coords: [
      // Egypt - conquered under Esarhaddon/Ashurbanipal (reached Thebes)
      [25.7, 32.6],      // Upper Egypt (near Thebes/Luxor)
      [26.5, 31.5],      // Along Nile
      [28.0, 30.8],      // Middle Egypt
      [30.1, 31.2],      // Cairo/Memphis area
      [31.5, 32.0],      // Nile Delta coast
      // Mediterranean coast - Assyria controlled the entire coastline
      [31.3, 33.0],      // Port Said area
      [31.5, 34.0],      // Gaza coast
      [32.1, 34.6],      // Ashkelon/Ashdod
      [32.8, 34.9],      // Joppa (Tel Aviv)
      [33.3, 35.2],      // Tyre
      [34.0, 35.5],      // Sidon/Beirut
      [34.5, 35.8],      // Byblos
      [35.5, 35.8],      // Ugarit/Latakia
      [36.0, 35.9],      // Antioch coast
      // Cilicia coast (southern Turkey - vassal/controlled)
      [36.5, 34.9],      // Issus
      [36.8, 34.6],      // Tarsus coast
      [36.5, 33.5],      // Cilician coast
      [37.0, 34.5],      // Inland Cilicia
      [37.5, 36.0],      // Cilician Gates
      [37.8, 37.5],      // Commagene
      // Northern frontier (Taurus mountains - border with Phrygia/Urartu)
      [38.0, 39.0],      // Eastern Anatolia
      [37.8, 40.5],      // South of Lake Van (Urartu was enemy, not conquered)
      [37.0, 42.0],      // Upper Tigris region
      [36.5, 43.5],      // Nineveh region (Assyrian heartland)
      // Eastern border - Zagros Mountains (border with Medes)
      [36.0, 45.0],      // Kurdistan
      [35.0, 46.0],      // Zagros foothills
      [34.2, 46.3],      // Media border
      [33.3, 46.0],      // Luristan
      [32.3, 45.5],      // Near Susa/Elam
      [31.2, 47.0],      // Lower Mesopotamia
      [30.5, 48.3],      // Near Persian Gulf
      // Southern border - along desert edge and Gulf
      [29.3, 48.0],      // Northern Gulf
      [29.0, 45.5],      // Desert edge
      [28.5, 42.0],      // Northern Arabia desert edge
      [27.5, 38.0],      // Desert
      [26.0, 34.5],      // Sinai desert edge
      [25.7, 32.6],      // Close polygon at Thebes
    ],
  },
];

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
