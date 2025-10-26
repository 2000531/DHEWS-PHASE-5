import React from 'react';

// This data now only contains the raw metrics, not the interpretation
const mockData = {
  Drought: { status: 'Alert', indexName: 'VCI', indexValue: 25.3 },
  Flood: { status: 'Watch', indexName: 'SPI-1', indexValue: 1.8 }
};

function KeyMetrics({ selectedHazard }) {
  const data = mockData[selectedHazard];

  return (
    <div className="key-metrics-container">
      <div className="control-group">
        <h3>Current {selectedHazard} Status: {data.status}</h3>
      </div>
      <div className="control-group">
        <label>Key Index Value</label>
        <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{data.indexName}: {data.indexValue}</p>
      </div>
    </div>
  );
}

// We also export the data so App.js can pass it to the AI component
export const getMetricsForHazard = (hazard) => mockData[hazard];

export default KeyMetrics;
