'use client';

import { useState } from 'react';
import { Button } from "./ui/server/button";

export default function FlightSearchForm({ 
  currentDestination, 
  currentSource,
  sourceOptions = [],
  destinationOptions = [],
  routeName = "flight"
}) {
  const [source, setSource] = useState(currentSource);
  const [destination, setDestination] = useState(currentDestination);
  
  // Helper function to get short label (airport code)
  const getShortLabel = (cityName) => {
    const codeMap = {
      "New Delhi": "DEL",
      "Mumbai": "BOM",
      "Hanoi": "HAN",
      "Ho Chi Minh City": "SGN",
      "Da Nang": "DAD",
      "Nha Trang": "CXR",
      "Phu Quoc": "PQC"
    };
    return codeMap[cityName] || cityName.substring(0, 3).toUpperCase();
  };

  // Determine if we're in flipped state (destinations to source)
  const isFlipped = !sourceOptions.find(opt => opt.value === source);

  const handleDestinationChange = (newDestination) => {
    setDestination(newDestination);
    const url = new URL(window.location);
    url.searchParams.set('destination', newDestination);
    url.searchParams.set('source', source);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
    const url = new URL(window.location);
    url.searchParams.set('source', newSource);
    url.searchParams.set('destination', destination);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  };

  const handleFlip = () => {
    const tempSource = source;
    const tempDestination = destination;
    
    setSource(tempDestination);
    setDestination(tempSource);
    
    // Update URL with flipped parameters
    const url = new URL(window.location);
    url.searchParams.set('destination', tempSource);
    url.searchParams.set('source', tempDestination);
    url.searchParams.delete('page');
    window.location.href = url.toString();
  };

  // Get available options based on flip state
  const getSourceOptions = () => {
    return isFlipped ? destinationOptions : sourceOptions;
  };

  const getDestinationOptions = () => {
    return isFlipped ? sourceOptions : destinationOptions;
  };

  // Check if source should be a dropdown or fixed display
  const shouldShowSourceDropdown = () => {
    return isFlipped ? destinationOptions.length > 1 : sourceOptions.length > 1;
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-3 mb-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-gray-900">Find Flights</h2>
        <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
          One Way
        </div>
      </div>

      {/* Route Selection - All in one line */}
      <div className="flex items-center gap-2 mb-3">
        {/* Source */}
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            From
          </label>
          {shouldShowSourceDropdown() ? (
            <div className="relative">
              <select
                value={source}
                onChange={(e) => handleSourceChange(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
              >
                {getSourceOptions().map((src) => (
                  <option key={src.value} value={src.value}>
                    {getShortLabel(src.value)}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          ) : (
            <div className="w-full p-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-900 font-medium text-sm">
              {getShortLabel(source)}
            </div>
          )}
        </div>

        {/* Flip Button */}
        <div className="flex items-end pb-0">
          <button
            type="button"
            onClick={handleFlip}
            className="bg-white border-2 border-blue-500 rounded-full p-2 shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 mt-5"
          >
            <svg 
              className="w-4 h-4 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
              />
            </svg>
          </button>
        </div>

        {/* Destination */}
        <div className="flex-1">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative">
            <select
              value={destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
            >
              {getDestinationOptions().map((dest) => (
                <option key={dest.value} value={dest.value}>
                  {getShortLabel(dest.value)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
      >
        🔍 Search Flights
      </Button>
    </div>
  );
}