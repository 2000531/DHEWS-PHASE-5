import React, { useEffect, useState } from 'react';
import './AIInsights.css';

const mockInsights = {
  Drought: [
    { title: 'Agricultural Alert', details: 'VCI is low; crops may be stressed.' },
    { title: 'Soil Moisture', details: 'Soil moisture levels are below normal.' },
  ],
  Flood: [
    { title: 'Flood Watch', details: 'Heavy rainfall predicted; rivers rising.' },
    { title: 'Infrastructure Risk', details: 'Low-lying roads may be submerged.' },
  ],
};

function AIInsights({ selectedHazard, metrics }) {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate async fetch with mock data
    setTimeout(() => {
      setInsights(mockInsights[selectedHazard] || []);
      setLoading(false);
    }, 500); // half-second delay
  }, [selectedHazard]);

  if (loading) {
    return <div className="ai-insights-container loading">Loading AI insights...</div>;
  }

  return (
    <div className="ai-insights-container">
      <h3>AI Insights - {selectedHazard}</h3>
      {insights.map((insight, index) => (
        <div className="insight-section" key={index}>
          <h4>{insight.title}</h4>
          <p>{insight.details}</p>
        </div>
      ))}
      <div className="insight-section">
        <h4>Metrics Summary</h4>
        <ul>
          {metrics &&
            Object.entries(metrics).map(([key, value], index) => (
              <li key={index}>
                {key}: {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default AIInsights;
