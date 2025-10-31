import React, { useEffect, useState } from 'react';

const mockAlerts = {
  Drought: [
    { id: 1, region: 'Nairobi County', date: '2025-10-30', severity: 'Moderate', description: 'Reduced rainfall, mild water stress.' },
    { id: 2, region: 'Eldoret Region', date: '2025-10-29', severity: 'Severe', description: 'Extended dry spell causing crop losses.' },
    { id: 3, region: 'Nyeri County', date: '2025-10-28', severity: 'Moderate', description: 'Low river levels affecting irrigation.' },
    { id: 4, region: 'Machakos County', date: '2025-10-27', severity: 'High', description: 'Prolonged drought affecting livestock.' },
    { id: 5, region: 'Kakamega County', date: '2025-10-26', severity: 'Low', description: 'Slightly reduced rainfall this month.' },
    { id: 6, region: 'Kitale County', date: '2025-10-25', severity: 'Moderate', description: 'Crop yield predictions below average.' },
    { id: 7, region: 'Laikipia County', date: '2025-10-24', severity: 'Severe', description: 'Water reservoirs critically low.' },
    { id: 8, region: 'Embu County', date: '2025-10-23', severity: 'Moderate', description: 'Small-scale water rationing in place.' },
    { id: 9, region: 'Baringo County', date: '2025-10-22', severity: 'High', description: 'Agricultural losses reported across county.' },
    { id: 10, region: 'Turkana County', date: '2025-10-21', severity: 'Severe', description: 'Extreme arid conditions, emergency relief ongoing.' },
  ],
  Flood: [
    { id: 11, region: 'Mombasa County', date: '2025-10-31', severity: 'High', description: 'Heavy rains causing localized flooding.' },
    { id: 12, region: 'Kisumu County', date: '2025-10-30', severity: 'Moderate', description: 'Lake Victoria levels rising.' },
    { id: 13, region: 'Nakuru County', date: '2025-10-29', severity: 'High', description: 'River overflow affecting residential areas.' },
    { id: 14, region: 'Thika County', date: '2025-10-28', severity: 'Moderate', description: 'Small stream flooding reported.' },
    { id: 15, region: 'Meru County', date: '2025-10-27', severity: 'Low', description: 'Minor waterlogging in urban areas.' },
    { id: 16, region: 'Kajiado County', date: '2025-10-26', severity: 'High', description: 'Roads and bridges submerged in parts.' },
    { id: 17, region: 'Kilifi County', date: '2025-10-25', severity: 'Moderate', description: 'Coastal flooding affecting crops.' },
    { id: 18, region: 'Garissa County', date: '2025-10-24', severity: 'Low', description: 'Localized flash floods reported.' },
    { id: 19, region: 'Busia County', date: '2025-10-23', severity: 'High', description: 'River Busia bursts banks, emergency alerts issued.' },
    { id: 20, region: 'Trans Nzoia County', date: '2025-10-22', severity: 'Moderate', description: 'Flood-prone areas partially submerged.' },
  ],
};

const getColor = (severity) => {
  switch (severity) {
    case 'Low': return '#4CAF50';
    case 'Moderate': return '#FFEB3B';
    case 'High': return '#FF9800';
    case 'Severe': return '#F44336';
    default: return '#9E9E9E';
  }
};

function AlertHistoryLog({ selectedHazard, setParentAlerts }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const hazardKey = selectedHazard ? 
      selectedHazard.charAt(0).toUpperCase() + selectedHazard.slice(1).toLowerCase() 
      : '';
    const timer = setTimeout(() => {
      const fetchedAlerts = mockAlerts[hazardKey] || [];
      setAlerts(fetchedAlerts);
      setParentAlerts(fetchedAlerts); 
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedHazard, setParentAlerts]);

  return (
    <div style={{ height: '250px', overflowY: 'auto', background: '#fff', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>{selectedHazard || 'Hazard'} Alerts</h3>
      {alerts.length === 0 ? (
        <p>No alerts available.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {alerts.map(alert => (
            <li key={alert.id} style={{ borderLeft: `6px solid ${getColor(alert.severity)}`, background: '#fafafa', marginBottom: '8px', padding: '10px', borderRadius: '8px' }}>
              <strong>{alert.region}</strong>
              <div style={{ fontSize: '0.9em', color: '#555' }}>Date: {alert.date}</div>
              <div style={{ fontSize: '0.9em', color: '#555' }}>Severity: <b style={{ color: getColor(alert.severity) }}>{alert.severity}</b></div>
              <p style={{ marginTop: '4px', fontSize: '0.9em' }}>{alert.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertHistoryLog;
