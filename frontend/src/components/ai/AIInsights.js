import React, { useState, useEffect } from 'react';
import { getAIAnalysis } from '../../services/api';
import './AIInsights.css'; // Add styling

function AIInsights({ selectedHazard, metrics }) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedHazard || !metrics) return;

    setLoading(true);
    getAIAnalysis(selectedHazard, metrics).then(data => {
      setAnalysis(data);
      setLoading(false);
    });
  }, [selectedHazard, metrics]); // Re-run this effect when hazard or metrics change

  if (loading) {
    return <div className="ai-insights-container loading">🧠 Analyzing data...</div>;
  }

  if (!analysis) return null;

  return (
    <div className="ai-insights-container">
      <h3>💡 AI Analysis & Recommendations</h3>

      <div className="insight-section">
        <h4>Summary</h4>
        <p>{analysis.summary}</p>
      </div>

      <div className="insight-section">
        <h4>Predicted Impact</h4>
        <p>{analysis.impact}</p>
      </div>
      
      <div className="insight-section">
        <h4>7-Day Forecast</h4>
        <p>{analysis.forecast}</p>
      </div>

      <div className="insight-section">
        <h4>Actionable Recommendations</h4>
        <ul>
          {analysis.recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AIInsights;