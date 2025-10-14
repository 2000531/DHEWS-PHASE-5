

import React, { useState } from 'react';

// Import the new AI component and the data function
import AIInsights from './components/ai/AIInsights';
import KeyMetrics, { getMetricsForHazard } from './components/datadisplay/KeyMetrics';

import Header from './components/layout/Header';
import HazardSelector from './components/controls/HazardSelector';
import HistoricalSlider from './components/controls/HistoricalSlider';
import FilterMenu from './components/controls/FilterMenu';
import InteractiveMap from './components/map/InteractiveMap';
import AlertHistoryLog from './components/alerts/AlertHistoryLog';
import ReportButton from './components/alerts/ReportButton';

import './assets/styles.css';

function App() {
  const [hazard, setHazard] = useState('Drought'); // 'Drought' or 'Flood'

  // Get the current metrics data for the selected hazard
  const currentMetrics = getMetricsForHazard(hazard);

  return (
    <div className="app-container">
      <Header />

      {/* Left Sidebar (Control Panel) -*/}
      <aside className="sidebar sidebar-left">
        <h2>Controls</h2>
        <HazardSelector selectedHazard={hazard} onHazardChange={setHazard} />
        <HistoricalSlider />
        <FilterMenu />
        <ReportButton currentHazard={hazard} />
      </aside>

      {/* Main Center Pane  */}
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0 }}>
          <InteractiveMap selectedHazard={hazard} />
        </div>
        <AlertHistoryLog />
      </main>

      {/* Right Sidebar (Data Details) */}
      <aside className="sidebar sidebar-right">
        <h2>Data Details</h2>
        <KeyMetrics selectedHazard={hazard} />
        <AIInsights selectedHazard={hazard} metrics={currentMetrics} />
      </aside>
    </div>
  );
}

export default App;