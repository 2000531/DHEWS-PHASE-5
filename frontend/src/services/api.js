
// /src/services/api.js

/**
 * MOCK DATA: In a real app, this data should come from you guys  backend API.
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
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  //this would be in the real app:
  // const response = await fetch('/api/alerts');
  // const data = await response.json();
  // return data;
  return mockAlerts;
};

/**
 * Generates a briefing report PDF.
 * @param {object} reportData - The current view data (hazard, date, map state).
 */
export const generateReport = (reportData) => {
    console.log("Generating report with data:", reportData);
    alert("Report generation initiated! A PDF would be downloaded in a real application.");
    //  this would make a POST request to the  backend's leon and wanjiku
    // report generation endpoint, which would return a PDF file.
};