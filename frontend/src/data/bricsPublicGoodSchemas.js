export const BRICS_PUBLIC_GOOD_SCHEMA = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "AgriN-BRICS-Interoperable-Soil-Telemetry-Standard-v1.2",
  description: "Federated Digital Public Good Schema for Cross-Border Agro-Intelligence & Soil Health Data Exchange among BRICS member states.",
  type: "object",
  required: ["node_id", "country_code", "timestamp", "geospatial_telemetry", "soil_biochemistry", "ai_diagnostic_model"],
  properties: {
    node_id: { type: "string", example: "AGRIN-NODE-IN-PUNJAB-04" },
    country_code: { type: "string", enum: ["IND", "BRA", "CHN", "ZAF", "RUS", "EGY", "ETH", "ARE"] },
    timestamp: { type: "string", format: "date-time" },
    geospatial_telemetry: {
      type: "object",
      properties: {
        latitude: { type: "number", minimum: -90, maximum: 90 },
        longitude: { type: "number", minimum: -180, maximum: 180 },
        ndvi_index: { type: "number", minimum: -1, maximum: 1 },
        soil_moisture_percentage: { type: "number", minimum: 0, maximum: 100 },
        surface_temp_celsius: { type: "number" }
      }
    },
    soil_biochemistry: {
      type: "object",
      properties: {
        ph_level: { type: "number" },
        organic_carbon_percentage: { type: "number" },
        nitrogen_kg_ha: { type: "number" },
        phosphorus_kg_ha: { type: "number" },
        potassium_kg_ha: { type: "number" }
      }
    },
    regenerative_advisory: {
      type: "object",
      properties: {
        recommended_cover_crop: { type: "string" },
        estimated_carbon_sequestration_ton_ha: { type: "number" },
        synthetic_fertilizer_reduction_pct: { type: "number" }
      }
    },
    ai_diagnostic_model: {
      type: "object",
      properties: {
        model_version: { type: "string", example: "AgriN-Vision-ViT-v3.1" },
        federated_weights_hash: { type: "string", example: "sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855" },
        privacy_compliance: { type: "string", example: "Differential Privacy (epsilon=0.5)" }
      }
    }
  }
};

export const BRICS_NODES_STATUS = [
  { country: 'India', code: 'IND', institute: 'ICAR National Agricultural Higher Education', status: 'ONLINE', latency: '42ms', syncRecords: 142090, version: 'v1.2-dp' },
  { country: 'Brazil', code: 'BRA', institute: 'EMBRAPA Agrobiology & Labex', status: 'ONLINE', latency: '118ms', syncRecords: 98450, version: 'v1.2-dp' },
  { country: 'China', code: 'CHN', institute: 'CAAS Digital Agriculture Institute', status: 'ONLINE', latency: '65ms', syncRecords: 215000, version: 'v1.2-dp' },
  { country: 'South Africa', code: 'ZAF', institute: 'ARC Soil & Water Science Unit', status: 'ONLINE', latency: '145ms', syncRecords: 54100, version: 'v1.2-dp' },
  { country: 'Russia', code: 'RUS', institute: 'Federal Research Center Vavilov Institute', status: 'ONLINE', latency: '88ms', syncRecords: 112300, version: 'v1.2-dp' },
  { country: 'Egypt', code: 'EGY', institute: 'Agricultural Research Center Giza', status: 'ONLINE', latency: '76ms', syncRecords: 63200, version: 'v1.2-dp' },
  { country: 'Ethiopia', code: 'ETH', institute: 'EIAR Biotechnology Directorate', status: 'ONLINE', latency: '162ms', syncRecords: 41800, version: 'v1.2-dp' },
  { country: 'UAE', code: 'ARE', institute: 'ICBA Biosaline Agriculture Center', status: 'ONLINE', latency: '52ms', syncRecords: 38900, version: 'v1.2-dp' }
];
