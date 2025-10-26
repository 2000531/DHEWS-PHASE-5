import React, { useState, useEffect } from 'react';
import { getAlerts } from '../../services/api';
import './Alerts.css'; // We'll create a small CSS file for this

function AlertHistoryLog() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch alerts when the component first loads
    getAlerts().then(data => {
      setAlerts(data);
      setLoading(false);
    });
  }, []); // The empty array [] means this effect runs only once

  if (loading) {
    return <p>Loading alerts...</p>;
  }

  return (
    <div className="alert-log-container">
      <h3>Alert History Log</h3>
      <table>
        <thead>
          <tr>
            <th>Hazard</th>
            <th>Severity</th>
            <th>Location</th>
            <th>Time Issued</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.hazard_type}</td>
              <td className={`severity-${alert.severity.toLowerCase()}`}>{alert.severity}</td>
              <td>{alert.location}</td>
              <td>{alert.issue_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertHistoryLog;
