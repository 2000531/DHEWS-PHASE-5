import React from 'react';

function HazardSelector({ selectedHazard, onHazardChange }) {
  return (
    <div className="control-group">
      <label>Hazard Selector</label>
      <div>
        <button
          onClick={() => onHazardChange('Drought')}
          style={{
            backgroundColor: selectedHazard === 'Drought' ? '#007bff' : '#f0f0f0',
            color: selectedHazard === 'Drought' ? 'white' : 'black',
            border: '1px solid #ccc',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
        >
          Drought Risk
        </button>
        <button
          onClick={() => onHazardChange('Flood')}
          style={{
            backgroundColor: selectedHazard === 'Flood' ? '#007bff' : '#f0f0f0',
            color: selectedHazard === 'Flood' ? 'white' : 'black',
            border: '1px solid #ccc',
            padding: '10px 15px',
            cursor: 'pointer',
          }}
        >
          Flood Risk
        </button>
      </div>
    </div>
  );
}

export default HazardSelector;