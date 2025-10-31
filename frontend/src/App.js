import React, { useState } from 'react';

import Header from './components/layout/Header';
import HazardSelector from './components/controls/HazardSelector';
import HistoricalSlider from './components/controls/HistoricalSlider';
import FilterMenu from './components/controls/FilterMenu';
import InteractiveMap from './components/map/InteractiveMap';
import AlertHistoryLog from './components/alerts/AlertHistoryLog';
import ReportButton from './components/alerts/ReportButton';
import KeyMetrics, { getMetricsForHazard } from './components/datadisplay/KeyMetrics';
import AIInsights from './components/ai/AIInsights';

import './assets/styles.css';

function App() {
  const [hazard, setHazard] = useState('Drought'); // 'Drought' or 'Flood'
  const [currentAlerts, setCurrentAlerts] = useState([]);

  // Use the correct exported function
  const currentMetrics = getMetricsForHazard(hazard);

  return (
    <div className="app-container">
      <Header />

      {/* Left Sidebar */}
      <aside className="sidebar sidebar-left">
        <h2>Controls</h2>
        <HazardSelector selectedHazard={hazard} onHazardChange={setHazard} />
        <HistoricalSlider />
        <FilterMenu />
        <ReportButton currentHazard={hazard} alerts={currentAlerts} />
      </aside>

      {/* Main Center Pane */}
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <InteractiveMap selectedHazard={hazard} />
        </div>
        <AlertHistoryLog selectedHazard={hazard} setParentAlerts={setCurrentAlerts} />
      </main>

      {/* Right Sidebar */}
      <aside className="sidebar sidebar-right">
        <h2>Data Details</h2>
        <KeyMetrics selectedHazard={hazard} />
        <AIInsights selectedHazard={hazard} metrics={currentMetrics} />
      </aside>
    </div>
  );
}

export default App;

