export const BRICS_REGIONS = [
  {
    id: 'in-punjab',
    country: 'India',
    flag: '🇮🇳',
    regionName: 'Punjab Agricultural Belt',
    lat: 30.9009,
    lng: 75.8573,
    soilType: 'Alluvial Loam',
    soilMoisture: 42, // %
    soilpH: 7.2,
    organicCarbon: 0.58, // %
    ndvi: 0.74, // 0 to 1
    droughtRisk: 'Low',
    temperature: 28.4, // °C
    rainfallForecast: '14mm expected (Next 7 days)',
    currentCrop: 'Wheat (Post-Harvest)',
    recommendedRotation: [
      { crop: 'Mung Bean (Legume)', benefit: 'Nitrogen Fixation (+35 kg N/ha)', term: '60 Days' },
      { crop: 'Basmati Rice', benefit: 'Soil Moisture Retention', term: '120 Days' },
      { crop: 'Mustard / Cover Crop', benefit: 'Bio-fumigation against Soil Nematodes', term: '90 Days' }
    ],
    bricsTelemetryPartner: 'ICAR (Indian Council of Agricultural Research)',
    schemaStatus: 'Verified (Federated Node #IN-04)'
  },
  {
    id: 'br-matogrosso',
    country: 'Brazil',
    flag: '🇧🇷',
    regionName: 'Mato Grosso Savanna Basin',
    lat: -12.6819,
    lng: -55.7042,
    soilType: 'Ferralsol / Latosol',
    soilMoisture: 38,
    soilpH: 5.8,
    organicCarbon: 1.12,
    ndvi: 0.81,
    droughtRisk: 'Moderate',
    temperature: 31.2,
    rainfallForecast: '42mm expected (Seasonal Shift)',
    currentCrop: 'Soybean',
    recommendedRotation: [
      { crop: 'Safrinha Maize + Brachiaria', benefit: 'Biomass Cover & Carbon Sequestration (+2.4 t C/ha)', term: '110 Days' },
      { crop: 'Cover Crop (Crotalaria)', benefit: 'Nematode Suppression', term: '70 Days' }
    ],
    bricsTelemetryPartner: 'EMBRAPA (Brazilian Agricultural Research Corporation)',
    schemaStatus: 'Verified (Federated Node #BR-01)'
  },
  {
    id: 'cn-heilongjiang',
    country: 'China',
    flag: '🇨🇳',
    regionName: 'Heilongjiang Black Soil Plain',
    lat: 45.7500,
    lng: 126.6500,
    soilType: 'Chernozem (Black Earth)',
    soilMoisture: 55,
    soilpH: 6.5,
    organicCarbon: 2.45,
    ndvi: 0.68,
    droughtRisk: 'Very Low',
    temperature: 16.8,
    rainfallForecast: '8mm expected (Cooling Trend)',
    currentCrop: 'Maize',
    recommendedRotation: [
      { crop: 'Soybean', benefit: 'Soil Organic Matter Preservation & Crop Diversity', term: '115 Days' },
      { crop: 'Winter Wheat', benefit: 'Erosion Prevention', term: '140 Days' }
    ],
    bricsTelemetryPartner: 'CAAS (Chinese Academy of Agricultural Sciences)',
    schemaStatus: 'Verified (Federated Node #CN-09)'
  },
  {
    id: 'za-freestate',
    country: 'South Africa',
    flag: '🇿🇦',
    regionName: 'Free State Grain Plateau',
    lat: -28.4541,
    lng: 26.7968,
    soilType: 'Plinthosol / Sandy Loam',
    soilMoisture: 24,
    soilpH: 6.1,
    organicCarbon: 0.42,
    ndvi: 0.49,
    droughtRisk: 'High',
    temperature: 25.1,
    rainfallForecast: '2mm expected (Dry Spells)',
    currentCrop: 'Sunflower',
    recommendedRotation: [
      { crop: 'Sorghum (Drought Resistant)', benefit: 'Deep Root Subsoil Aeration & Minimal Water Requirement', term: '100 Days' },
      { crop: 'Cowpea', benefit: 'Nitrogen Enrichment in Arid Zones', term: '75 Days' }
    ],
    bricsTelemetryPartner: 'ARC (Agricultural Research Council South Africa)',
    schemaStatus: 'Verified (Federated Node #ZA-03)'
  },
  {
    id: 'ru-krasnodar',
    country: 'Russia',
    flag: '🇷🇺',
    regionName: 'Krasnodar Chernozem Belt',
    lat: 45.0355,
    lng: 38.9753,
    soilType: 'Deep Chernozem',
    soilMoisture: 48,
    soilpH: 7.0,
    organicCarbon: 3.10,
    ndvi: 0.77,
    droughtRisk: 'Low',
    temperature: 19.5,
    rainfallForecast: '22mm expected (Autumn Rain)',
    currentCrop: 'Winter Wheat',
    recommendedRotation: [
      { crop: 'Sugar Beet', benefit: 'Deep Nutrient Cycling', term: '150 Days' },
      { crop: 'Sainfoin (Perennial Legume)', benefit: 'Carbon Storage & Pollinator Habitat', term: 'Perennial' }
    ],
    bricsTelemetryPartner: 'Vavilov Institute of Plant Industry',
    schemaStatus: 'Verified (Federated Node #RU-02)'
  },
  {
    id: 'eg-niledelta',
    country: 'Egypt',
    flag: '🇪🇬',
    regionName: 'Nile Delta Alluvial Plain',
    lat: 30.8667,
    lng: 31.0000,
    soilType: 'Fluvisol / Silt Loam',
    soilMoisture: 50,
    soilpH: 7.8,
    organicCarbon: 0.85,
    ndvi: 0.82,
    droughtRisk: 'Moderate (Salinity Watch)',
    temperature: 30.0,
    rainfallForecast: '0mm expected (Drip Irrigated)',
    currentCrop: 'Cotton',
    recommendedRotation: [
      { crop: 'Berseem Clover', benefit: 'Salinity Mitigation & Nitrogen Fixation', term: '90 Days' },
      { crop: 'Fava Bean', benefit: 'Soil Restorative Protein Crop', term: '110 Days' }
    ],
    bricsTelemetryPartner: 'ARC Egypt (Agricultural Research Center)',
    schemaStatus: 'Verified (Federated Node #EG-05)'
  },
  {
    id: 'et-oromia',
    country: 'Ethiopia',
    flag: '🇪🇹',
    regionName: 'Oromia Highlands',
    lat: 7.5500,
    lng: 39.2833,
    soilType: 'Nitisol / Volcanic Dark Red',
    soilMoisture: 41,
    soilpH: 6.3,
    organicCarbon: 1.80,
    ndvi: 0.72,
    droughtRisk: 'Moderate',
    temperature: 21.0,
    rainfallForecast: '18mm expected',
    currentCrop: 'Teff & Coffee Agroforestry',
    recommendedRotation: [
      { crop: 'Chickpea', benefit: 'Phosphorus Solubilization', term: '85 Days' },
      { crop: 'Enset (False Banana)', benefit: 'Climate Emergency Resilience Buffer', term: 'Multi-Year' }
    ],
    bricsTelemetryPartner: 'EIAR (Ethiopian Institute of Agricultural Research)',
    schemaStatus: 'Verified (Federated Node #ET-07)'
  },
  {
    id: 'ae-alain',
    country: 'UAE',
    flag: '🇦🇪',
    regionName: 'Al Ain Arid Hydro-Agri Oasis',
    lat: 24.2075,
    lng: 55.7447,
    soilType: 'Sandy Aridisol',
    soilMoisture: 18,
    soilpH: 8.1,
    organicCarbon: 0.21,
    ndvi: 0.35,
    droughtRisk: 'Extreme',
    temperature: 37.5,
    rainfallForecast: '0mm (Precision Hydroponics & Biochar Treated)',
    currentCrop: 'Date Palms & Regenerative Cover',
    recommendedRotation: [
      { crop: 'Salicornia (Halophyte)', benefit: 'Hyper-Saline Soil Remediation', term: '120 Days' },
      { crop: 'Moringa Oleifera', benefit: 'Heat Tolerant Biomass & Micronutrients', term: 'Perennial' }
    ],
    bricsTelemetryPartner: 'ICBA (International Center for Biosaline Agriculture)',
    schemaStatus: 'Verified (Federated Node #AE-11)'
  }
];
