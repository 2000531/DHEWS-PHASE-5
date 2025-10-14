import React, { useState } from 'react';
import Header from './components/layout/Header';
import HazardSelector from './components/controls/HazardSelector';
import KeyMetrics from './components/datadisplay/KeyMetrics';
import InteractiveMap from './components/map/InteractiveMap';
import './assets/styles.css';

function App() {
  const [hazard, setHazard] = useState('Drought'); // 'Drought' or 'Flood'

  return (
    <div className="app-container">
      <Header />

      {/* Left Sidebar (Control Panel) */}
      <aside className="sidebar sidebar-left">
        <h2>Controls</h2>
        <HazardSelector selectedHazard={hazard} onHazardChange={setHazard} />
        {/* Other controls like HistoricalSlider would go here */}
      </aside>

      {/* Main Center Pane (Map) */}
      <main className="main-content">
        <InteractiveMap selectedHazard={hazard} />
      </main>

      {/* Right Sidebar (Data Details) */}
      <aside className="sidebar sidebar-right">
        <h2>Data Details</h2>
        <KeyMetrics selectedHazard={hazard} />
        {/* ImpactSummary and other details would go here */}
      </aside>
    </div>
  );
}

export default App;