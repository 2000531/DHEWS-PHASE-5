// /src/components/alerts/ReportButton.js

import React from 'react';
import { generateReport } from '../../services/api';

function ReportButton({ currentHazard, currentDate }) {
  const handleGenerateReport = () => {
    // Collect the current state to send to the backend
    const reportData = {
      hazard: currentHazard,
      date: currentDate || new Date().toISOString(),
      // In a real app, you'd also include map bounds, selected layers, etc.
    };
    generateReport(reportData);
  };

  return (
    <button
      onClick={handleGenerateReport}
      style={{
        width: '100%',
        padding: '12px',
        backgroundColor: '#d9534f',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      Generate Briefing Report
    </button>
  );
}

export default ReportButton;