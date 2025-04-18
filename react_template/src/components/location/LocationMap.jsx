// src/components/location/LocationMap.jsx
import React from 'react';
import LocationMarker from './LocationMarker';

export default function LocationMap({ locations = [] }) {
  return (
    <div className="h-[500px] w-full bg-gray-100 relative">
      {/* Placeholder for actual map implementation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">Map will be implemented with Google Maps</p>
      </div>
      {locations.map((location) => (
        <LocationMarker
          key={location.id}
          location={location}
        />
      ))}
    </div>
  );
}