import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function InteractiveMap({ selectedHazard }) {
  // Nairobi, Kenya Coordinates
  const position = [-1.2921, 36.8219];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* In a real application, you would fetch GeoJSON data from your backend
          and render a <GeoJSON /> layer here based on the selectedHazard.
          The color of the polygons would be determined by the risk level.
        */}
        <Marker position={position}>
          <Popup>
            Currently viewing: {selectedHazard} Risk Layer. <br /> A sample marker in Nairobi.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;