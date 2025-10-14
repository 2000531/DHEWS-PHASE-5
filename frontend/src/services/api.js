// /src/services/api.js

/**
 * MOCK DATA for Alerts
 */
const mockAlerts = [
  { id: 1, hazard_type: 'Drought', severity: 'Alert', location: 'Sub-Region A', issue_time: '2025-10-14 10:00 EAT' },
  { id: 2, hazard_type: 'Flood', severity: 'Warning', location: 'River Basin X', issue_time: '2025-10-12 15:30 EAT' },
  { id: 3, hazard_type: 'Drought', severity: 'Watch', location: 'Sub-Region B', issue_time: '2025-10-11 09:00 EAT' },
];

/**
 * Fetches the list of active and recent alerts.
 * @returns {Promise<Array>} A promise that resolves to an array of alert objects.
 */
export const getAlerts = async () => {
  console.log("Fetching alerts from API...");
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockAlerts;
};

/**
 * Generates a briefing report PDF.
 * @param {object} reportData - The current view data (hazard, date, map state).
 */
export const generateReport = (reportData) => {
    console.log("Generating report with data:", reportData);
    alert("Report generation initiated! A PDF would be downloaded in a real application.");
};

/**
 * MOCK AI ANALYSIS
 */
const mockAIResponses = {
  Drought: {
    summary: "The current Vegetation Condition Index (VCI) of 25.3 indicates moderate to severe drought conditions.",
    impact: "Expect reduced crop yields and stress on livestock. Water rationing may be necessary in the most affected agricultural zones.",
    forecast: "Conditions are expected to persist or slightly worsen over the next 7 days with no significant rainfall predicted.",
    recommendations: [
      "Issue a 'Drought Alert' to regional water authorities.",
      "Prepare water tankers for deployment to critical areas.",
      "Advise farmers to implement water conservation techniques."
    ]
  },
  Flood: {
    summary: "The Standardized Precipitation Index (SPI-1) value of 1.8 signifies extremely moist conditions and a high potential for short-term flooding.",
    impact: "Flash floods are likely in low-lying areas and regions with poor drainage. Minor rivers may overflow their banks. Risk of damage to infrastructure like rural roads and bridges.",
    forecast: "Heavy rainfall is forecast to continue for the next 48 hours, increasing the flood risk to 'Warning' level.",
    recommendations: [
      "Activate emergency response teams for potential deployment.",
      "Issue a 'Flood Watch' advisory to the public via SMS and radio.",
      "Inspect and clear critical drainage infrastructure."
    ]
  }
};

/**
 * Fetches AI-powered analysis for a given hazard and its data.
 * @param {string} hazard - The type of hazard ('Drought' or 'Flood').
 * @param {object} metrics - The key data points (e.g., { vci: 25.3 }).
 * @returns {Promise<object>} A promise that resolves to the AI analysis object.
 */
export const getAIAnalysis = async (hazard, metrics) => {
  console.log(`Requesting AI analysis for ${hazard} with metrics:`, metrics);
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockAIResponses[hazard];
};