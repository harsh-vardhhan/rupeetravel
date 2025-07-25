'use client';

import { useState, useEffect } from 'react';
import { getAirportCode } from '../lib/flightUtils';

export default function FlightSearchForm({ 
  currentDestination, 
  currentSource,
  sourceOptions = [],
  destinationOptions = [],
  showDrySeasonButton = false,
  showPriceUnder10kButton = false
}) {
  const [source, setSource] = useState(currentSource);
  const [destination, setDestination] = useState(currentDestination);
  const [drySeason, setDrySeason] = useState(false);
  const [priceUnder10k, setPriceUnder10k] = useState(false);
  
  useEffect(() => {
    const url = new URL(window.location);
    setDrySeason(url.searchParams.get('drySeason') === '1');
    setPriceUnder10k(url.searchParams.get('priceUnder10k') === '1');
  }, []);

  // Determine if the component is in a "flipped" state (e.g., Vietnam to India)
  const isFlipped = !sourceOptions.find(opt => opt.value === source);

  // --- Event Handlers ---
  const navigateWithParams = (params) => {
    const url = new URL(window.location);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
      }
    });
    url.searchParams.delete('page'); // Reset to first page
    window.location.href = url.toString();
  };

  const handleDestinationChange = (newDestination) => {
    setDestination(newDestination);
    navigateWithParams({ destination: newDestination, source });
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
    navigateWithParams({ source: newSource, destination });
  };

  const handleFlip = () => {
    navigateWithParams({ source: destination, destination: source });
  };

  const handleDrySeasonToggle = () => {
    navigateWithParams({ drySeason: !drySeason ? '1' : null, source, destination });
  };

  const handlePriceUnder10kToggle = () => {
    navigateWithParams({ priceUnder10k: !priceUnder10k ? '1' : null, source, destination });
  };

  // --- Dropdown Logic ---
  const getSourceOptions = () => isFlipped ? destinationOptions : sourceOptions;
  const getDestinationOptions = () => isFlipped ? sourceOptions : destinationOptions;

  const currentSourceOptions = getSourceOptions();
  const currentDestinationOptions = getDestinationOptions();

  // A dropdown is disabled if its options are Indian cities OR if there's only one option.
  const isSourceDropdownDisabled = currentSourceOptions?.[0]?.country === 'India' || currentSourceOptions?.length <= 1;
  const isDestinationDropdownDisabled = currentDestinationOptions?.[0]?.country === 'India' || currentDestinationOptions?.length <= 1;

  return (
    <div className="w-full bg-card rounded-xl shadow-sm border border-border p-3 mb-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-card-foreground">Find Flights</h2>
        <div className="flex items-center gap-2">
          {/* Filter Buttons */}
          {showDrySeasonButton && (
            <button type="button" onClick={handleDrySeasonToggle} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${drySeason ? 'bg-green-100 border-green-400 text-green-800' : 'bg-muted border-border text-muted-foreground hover:bg-green-50 hover:text-green-700'}`} aria-pressed={drySeason}>
              Dry Season
            </button>
          )}
          {showPriceUnder10kButton && (
            <button type="button" onClick={handlePriceUnder10kToggle} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${priceUnder10k ? 'bg-green-100 border-green-400 text-green-800' : 'bg-muted border-border text-muted-foreground hover:bg-green-50 hover:text-green-700'}`} aria-pressed={priceUnder10k}>
              under ₹10,000
            </button>
          )}
        </div>
      </div>

      {/* Route Selection */}
      <div className="flex items-center gap-2">
        {/* Source Dropdown */}
        <div className="flex-1">
          <label htmlFor="source-select" className="block text-xs font-medium text-muted-foreground mb-1">From</label>
          <div className="relative">
            <select
              id="source-select"
              value={source}
              onChange={(e) => handleSourceChange(e.target.value)}
              disabled={isSourceDropdownDisabled}
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              {currentSourceOptions.map((src) => (
                <option key={src.value} value={src.value}>
                  {getAirportCode(src.value)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>

        {/* Flip Button */}
        <div className="pt-5">
          <button type="button" onClick={handleFlip} aria-label="Flip source and destination" className="bg-card border-2 border-border rounded-full p-2 shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
          </button>
        </div>

        {/* Destination Dropdown */}
        <div className="flex-1">
          <label htmlFor="destination-select" className="block text-xs font-medium text-muted-foreground mb-1">To</label>
          <div className="relative">
            <select
              id="destination-select"
              value={destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
              disabled={isDestinationDropdownDisabled}
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-sm disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              {currentDestinationOptions.map((dest) => (
                <option key={dest.value} value={dest.value}>
                  {getAirportCode(dest.value)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
