// src/pages/Explore.jsx
import React from 'react';
import LocationMap from '../components/location/LocationMap';

export default function Explore() {
  const locations = [
    {
      id: 1,
      name: 'Eiffel Tower',
      rating: 4.8,
      x: 100,
      y: 100
    }
    // More locations...
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore Destinations</h1>
      <LocationMap locations={locations} />
    </div>
  );
}