// src/services/api.js

// Mock metrics for each hazard
const mockData = {
  Drought: [
    { name: 'Soil Moisture', value: 18, unit: '%', severity: 'Warning' },
    { name: 'Precipitation', value: 12, unit: 'mm', severity: 'Alert' },
    { name: 'Temperature', value: 36, unit: '°C', severity: 'Watch' },
  ],
  Flood: [
    { name: 'River Level', value: 4.6, unit: 'm', severity: 'Warning' },
    { name: 'Rainfall', value: 120, unit: 'mm', severity: 'Alert' },
    { name: 'Soil Saturation', value: 88, unit: '%', severity: 'Warning' },
  ],
};

// Mock regions for the map
export const getRegions = async () => {
  return [
    { id: 1, name: 'Nairobi County', risk: 'Moderate', coords: [-1.2921, 36.8219] },
    { id: 2, name: 'Mombasa County', risk: 'High', coords: [-4.0435, 39.6682] },
    { id: 3, name: 'Kisumu County', risk: 'Low', coords: [-0.0917, 34.7679] },
    { id: 4, name: 'Eldoret Region', risk: 'Severe', coords: [0.5143, 35.2698] },
  ];
};


// ✅ This is what App.js expects
export const getMetricsForHazard = async (hazard) => {
  return mockData[hazard] || [];
};

// Mock alerts history
export const getAlerts = async (hazard) => {
  return [
    { id: 1, region: 'Region B', severity: 'Alert', date: '2025-10-29' },
    { id: 2, region: 'Region C', severity: 'Warning', date: '2025-10-30' },
  ];
};

// Simple AI summary generator
export const getAIAnalysis = async (hazard) => {
  const metrics = await getMetricsForHazard(hazard);
  if (!metrics || metrics.length === 0) {
    return { summary: `No data available for ${hazard}.` };
  }

  const avg =
    metrics.reduce((acc, m) => acc + (m.value || 0), 0) / metrics.length;
  return {
    summary: `The AI analysis for ${hazard} indicates an average metric value of ${avg.toFixed(
      1
    )}. Severity levels show ${metrics
      .map((m) => `${m.name}: ${m.severity}`)
      .join(', ')}.`,
  };
};
