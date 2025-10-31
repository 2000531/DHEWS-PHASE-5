// src/components/datadisplay/KeyMetrics.js
import React from 'react';

const mockMetrics = {
  Drought: { VCI: 25, SPI: -1.2 },
  Flood: { FloodIndex: 0.7, Rainfall: 120 },
};

export function getMetricsForHazard(hazard) {
  return mockMetrics[hazard] || {};
}

function KeyMetrics({ selectedHazard }) {
  const metrics = getMetricsForHazard(selectedHazard);
  return (
    <div style={{ marginTop: '10px' }}>
      <h3>{selectedHazard} Metrics</h3>
      <pre>{JSON.stringify(metrics, null, 2)}</pre>
    </div>
  );
}

export default KeyMetrics;
