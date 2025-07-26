"use client";
import { useState } from 'react';
import BottomSheet from '../flight/BottomSheet';
import PrecipitationChart from './PrecipitationChart';

const monthAbbr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function FlightWeatherButton({
  precipitationData,
  destination,
  showWeatherButton = false,
  destinationOptions = [],
  flight
}) {
  const [weatherOpen, setWeatherOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(destination);

  // Extract month from flight.date (format: YYYY-MM-DD or similar)
  let currentMonth = undefined;
  if (flight && flight.date) {
    const dateObj = new Date(flight.date);
    if (!isNaN(dateObj)) {
      currentMonth = monthAbbr[dateObj.getMonth()];
    }
  }

  if (!showWeatherButton) return null;
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-300 hover:bg-indigo-300 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
        onClick={() => {
          setSelectedDestination(destination);
          setWeatherOpen(true);
        }}
      >
        Check weather
      </button>
      <BottomSheet open={weatherOpen} onClose={() => setWeatherOpen(false)}>
        <div className="mb-4 flex flex-wrap gap-2 justify-center">
          {destinationOptions.map(opt => (
            <button
              key={opt.value}
              className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${selectedDestination === opt.value ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
              onClick={() => setSelectedDestination(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <PrecipitationChart
          data={Object.entries(precipitationData[selectedDestination] || {}).map(([month, days]) => ({ month, days }))}
          destinationName={selectedDestination}
          destinationIcon="🌦️"
          subtitle="Monthly rainy days (avg)"
          currentMonth={currentMonth}
        />
      </BottomSheet>
    </>
  );
} 