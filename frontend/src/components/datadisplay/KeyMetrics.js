import React from 'react';

// Mock data for demonstration purposes
const mockData = {
  Drought: {
    status: 'Alert',
    indexName: 'VCI',
    indexValue: 25.3,
    impact: 'Moderate vegetation stress detected. Agricultural yields may be affected.'
  },
  Flood: {
    status: 'Watch',
    indexName: 'SPI-1',
    indexValue: 1.8,
    impact: 'High short-term rainfall. Risk of localized flash flooding in low-lying areas.'
  }
};

function KeyMetrics({ selectedHazard }) {
  const data = mockData[selectedHazard];

  return (
    <div>
      <div className="control-group">
        <h3>Current {selectedHazard} Status: {data.status}</h3>
      </div>
      <div className="control-group">
        <label>Key Index Value</label>
        <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{data.indexName}: {data.indexValue}</p>
      </div>
      <div className="control-group">
        <label>Impact Summary</label>
        <p>{data.impact}</p>
      </div>
    </div>
  );
}

export default KeyMetrics;