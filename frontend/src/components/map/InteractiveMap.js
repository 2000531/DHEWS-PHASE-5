import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Mock data for Kenyan regions (each has coordinates + risk level)
const mockRegions = [
  { id: 1, name: 'Nairobi County', risk: 'Moderate', center: [-1.2921, 36.8219], coords: [[-1.28, 36.80], [-1.30, 36.83], [-1.29, 36.85], [-1.27, 36.82]] },
  { id: 2, name: 'Mombasa County', risk: 'High', center: [-4.0435, 39.6682], coords: [[-4.04, 39.66], [-4.05, 39.67], [-4.03, 39.67], [-4.02, 39.66]] },
  { id: 3, name: 'Kisumu County', risk: 'Low', center: [-0.0917, 34.7679], coords: [[-0.09, 34.76], [-0.10, 34.77], [-0.08, 34.77], [-0.07, 34.76]] },
  { id: 4, name: 'Nakuru County', risk: 'Moderate', center: [-0.3031, 36.0800], coords: [[-0.30, 36.07], [-0.31, 36.08], [-0.29, 36.09], [-0.28, 36.08]] },
  { id: 5, name: 'Eldoret County', risk: 'Low', center: [0.5143, 35.2699], coords: [[0.51, 35.26], [0.52, 35.27], [0.50, 35.27], [0.49, 35.26]] },
  { id: 6, name: 'Thika County', risk: 'Moderate', center: [-1.0333, 37.0694], coords: [[-1.03, 37.06], [-1.04, 37.07], [-1.02, 37.07], [-1.01, 37.06]] },
  { id: 7, name: 'Nyeri County', risk: 'High', center: [-0.4167, 36.9500], coords: [[-0.41, 36.94], [-0.42, 36.95], [-0.40, 36.96], [-0.39, 36.95]] },
  { id: 8, name: 'Meru County', risk: 'Moderate', center: [0.0471, 37.6493], coords: [[0.04, 37.64], [0.05, 37.65], [0.06, 37.65], [0.05, 37.64]] },
  { id: 9, name: 'Machakos County', risk: 'High', center: [-1.5167, 37.2667], coords: [[-1.51, 37.26], [-1.52, 37.27], [-1.50, 37.27], [-1.49, 37.26]] },
  { id: 10, name: 'Kitale County', risk: 'Low', center: [1.0167, 35.0100], coords: [[1.01, 35.00], [1.02, 35.01], [1.00, 35.01], [0.99, 35.00]] },
  { id: 11, name: 'Garissa County', risk: 'High', center: [0.4550, 39.6580], coords: [[0.45, 39.65], [0.46, 39.66], [0.44, 39.66], [0.43, 39.65]] },
  { id: 12, name: 'Kakamega County', risk: 'Moderate', center: [0.2820, 34.7510], coords: [[0.28, 34.75], [0.29, 34.75], [0.27, 34.76], [0.26, 34.75]] },
  { id: 13, name: 'Kajiado County', risk: 'High', center: [-2.0433, 36.7810], coords: [[-2.04, 36.78], [-2.05, 36.78], [-2.03, 36.79], [-2.02, 36.78]] },
  { id: 14, name: 'Kilifi County', risk: 'Moderate', center: [-3.6333, 39.8500], coords: [[-3.63, 39.84], [-3.64, 39.85], [-3.62, 39.85], [-3.61, 39.84]] },
  { id: 15, name: 'Baringo County', risk: 'Low', center: [0.5000, 35.9583], coords: [[0.50, 35.95], [0.51, 35.96], [0.49, 35.96], [0.48, 35.95]] },
  { id: 16, name: 'Busia County', risk: 'Moderate', center: [0.4550, 34.1000], coords: [[0.45, 34.10], [0.46, 34.11], [0.44, 34.11], [0.43, 34.10]] },
  { id: 17, name: 'Turkana County', risk: 'High', center: [3.0167, 35.5833], coords: [[3.01, 35.58], [3.02, 35.59], [3.00, 35.59], [2.99, 35.58]] },
  { id: 18, name: 'Trans Nzoia County', risk: 'Low', center: [1.0000, 35.0000], coords: [[1.00, 34.99], [1.01, 35.00], [0.99, 35.00], [0.98, 34.99]] },
  { id: 19, name: 'Embu County', risk: 'Moderate', center: [-0.5333, 37.4500], coords: [[-0.53, 37.44], [-0.54, 37.45], [-0.52, 37.45], [-0.51, 37.44]] },
  { id: 20, name: 'Laikipia County', risk: 'Low', center: [0.4333, 36.9500], coords: [[0.43, 36.94], [0.44, 36.95], [0.42, 36.95], [0.41, 36.94]] },
];

// Utility: color per risk level
const getColor = (risk) => {
  switch (risk) {
    case 'Low': return '#4CAF50';
    case 'Moderate': return '#FFEB3B';
    case 'High': return '#FF9800';
    case 'Severe': return '#F44336';
    default: return '#9E9E9E';
  }
};

function InteractiveMap({ selectedHazard }) {
  const [regions, setRegions] = useState([]);
  const position = [-1.2921, 36.8219]; // Default map center (Nairobi)

  useEffect(() => {
    // In real app, fetch from backend — here we use mock
    setRegions(mockRegions);
  }, [selectedHazard]);

  return (
    <div className="map-container" style={{ height: '100%', width: '100%' }}>
      <MapContainer center={position} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {/* Render polygons for each region */}
        {regions.map((r) => (
          <Polygon
            key={r.id}
            pathOptions={{
              color: getColor(r.risk),
              fillColor: getColor(r.risk),
              fillOpacity: 0.5,
              weight: 2,
            }}
            positions={r.coords}
          >
            <Popup>
              <strong>{r.name}</strong><br />
              Hazard: {selectedHazard}<br />
              Risk Level: <b style={{ color: getColor(r.risk) }}>{r.risk}</b>
            </Popup>
          </Polygon>
        ))}

        {/* Optional: Add markers at region centers */}
        {regions.map((r) => (
          <Marker
            key={`marker-${r.id}`}
            position={r.center}
            icon={L.divIcon({
              className: 'custom-icon',
              html: `<div style="background-color:${getColor(r.risk)};width:14px;height:14px;border-radius:50%;border:2px solid white;"></div>`,
              iconSize: [14, 14],
            })}
          >
            <Popup>
              <strong>{r.name}</strong><br />
              {selectedHazard} Risk: {r.risk}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;
