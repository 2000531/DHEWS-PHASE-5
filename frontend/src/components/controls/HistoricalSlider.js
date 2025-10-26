import React, { useState } from 'react';

function HistoricalSlider() {
  const [daysAgo, setDaysAgo] = useState(0);

  const handleSliderChange = (event) => {
    setDaysAgo(event.target.value);
  };

  const getDisplayDate = () => {
    if (daysAgo == 0) return "Today";
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-CA'); // YYYY-MM-DD format
  };

  return (
    <div className="control-group">
      <label htmlFor="historical-slider">Historical Data</label>
      <input
        type="range"
        id="historical-slider"
        min="0"
        max="30" // Last 30 days
        value={daysAgo}
        onChange={handleSliderChange}
        style={{ width: '100%' }}
      />
      <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
        Viewing Data For: {getDisplayDate()}
      </p>
    </div>
  );
}

export default HistoricalSlider;
