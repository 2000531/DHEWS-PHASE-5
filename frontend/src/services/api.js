// /src/services/api.js

const API_BASE_URL = 'http://localhost:5000/mock_api'; // Assuming your Blueprint is registered under /mock_api

/**
 * Helper function to handle the fetch request and JSON parsing.
 * @param {string} endpoint - The path (e.g., '/alerts').
 * @returns {Promise<any>} The parsed JSON data.
 */
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      // Throw an error if the HTTP status is 4xx or 5xx
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    // Return an empty array or throw the error based on application needs
    return [];
  }
};

/**
 * Fetches the list of all active and recent alerts.
 * Corresponds to Flask route: GET /alerts
 */
export const getAlerts = async () => {
  console.log("Fetching all alerts from Flask backend...");
  return fetchData("/alerts");
};

/**
 * Fetches the list of regions (e.g., for initial map bounds/layers).
 * Corresponds to Flask route: GET /regions
 */
export const getRegions = async () => {
  console.log("Fetching regions from Flask backend...");
  return fetchData("/regions");
};

/**
 * Fetches the list of alerts filtered by hazard type.
 * Corresponds to Flask route: GET /alerts/<hazard>
 */
export const getAlertsByHazard = async (hazardType) => {
  console.log(`Fetching alerts filtered by: ${hazardType}`);
  // Your Flask route handles capitalization, but it's good practice to normalize the input
  return fetchData(`/alerts/${hazardType.toLowerCase()}`);
};

/**
 * Action: Generates a briefing report PDF.
 * This still needs a proper Flask endpoint to handle the report generation logic.
 */
export const generateReport = (reportData) => {
    console.log("Generating report initiated. (Needs POST /api/reports endpoint in Flask)");
    alert("Report generation request sent to the backend.");
    // In a real app, you'd implement a fetch POST call here:
    /*
    fetch('/api/reports', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(reportData)
    });
    */
};

// --- AI Analysis Mock Data (Kept for frontend development flow) ---

const mockAIResponses = { /* ... (The mock AI responses you defined previously) ... */ };

export const getAIAnalysis = async (hazard, metrics) => {
  console.log(`Requesting AI analysis for ${hazard}. (Using frontend mock data for now)`);
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockAIResponses[hazard];
};
