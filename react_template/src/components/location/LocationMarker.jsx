// src/components/location/LocationMarker.jsx
import React from 'react';

export default function LocationMarker({ location }) {
  return (
    <div className="absolute" style={{ left: location.x, top: location.y }}>
      <div className="bg-white rounded-lg shadow-lg p-2">
        <h4 className="font-semibold">{location.name}</h4>
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="ml-1">{location.rating}</span>
        </div>
      </div>
    </div>
  );
}