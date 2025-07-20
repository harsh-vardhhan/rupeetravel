"use client";

import { useState, useEffect } from "react";

export default function FlightSearchForm({
  currentDestination,
  currentSource,
  sourceOptions = [],
  destinationOptions = [],
  showDrySeasonButton = false,
  showPriceUnder10kButton = false,
}) {
  const [source, setSource] = useState(currentSource);
  const [destination, setDestination] = useState(currentDestination);
  const [drySeason, setDrySeason] = useState(false);
  const [priceUnder10k, setPriceUnder10k] = useState(false);

  useEffect(() => {
    // Check if drySeason=1 is present in the URL
    const url = new URL(window.location);
    setDrySeason(url.searchParams.get("drySeason") === "1");
    setPriceUnder10k(url.searchParams.get("priceUnder10k") === "1");
  }, []);

  // Helper function to get short label (airport code)
  const getShortLabel = (cityName) => {
    const codeMap = {
      "New Delhi": "DEL",
      Mumbai: "BOM",
      Hanoi: "HAN",
      "Ho Chi Minh City": "SGN",
      "Da Nang": "DAD",
      "Nha Trang": "CXR",
      "Phu Quoc": "PQC",
    };
    return codeMap[cityName] || cityName.substring(0, 3).toUpperCase();
  };

  // Determine if we're in flipped state (destinations to source)
  const isFlipped = !sourceOptions.find((opt) => opt.value === source);

  const handleDestinationChange = (newDestination) => {
    setDestination(newDestination);
    const url = new URL(window.location);
    url.searchParams.set("destination", newDestination);
    url.searchParams.set("source", source);
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
    const url = new URL(window.location);
    url.searchParams.set("source", newSource);
    url.searchParams.set("destination", destination);
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  const handleFlip = () => {
    const tempSource = source;
    const tempDestination = destination;

    setSource(tempDestination);
    setDestination(tempSource);

    // Update URL with flipped parameters
    const url = new URL(window.location);
    url.searchParams.set("destination", tempSource);
    url.searchParams.set("source", tempDestination);
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  const handleDrySeasonToggle = () => {
    const url = new URL(window.location);
    if (drySeason) {
      url.searchParams.delete("drySeason");
    } else {
      url.searchParams.set("drySeason", "1");
    }
    url.searchParams.set("destination", destination);
    url.searchParams.set("source", source);
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  const handlePriceUnder10kToggle = () => {
    const url = new URL(window.location);
    if (priceUnder10k) {
      url.searchParams.delete("priceUnder10k");
    } else {
      url.searchParams.set("priceUnder10k", "1");
    }
    url.searchParams.set("destination", destination);
    url.searchParams.set("source", source);
    url.searchParams.delete("page");
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
    <div className="w-full bg-card rounded-xl shadow-sm border border-border p-3 mb-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-semibold text-card-foreground">
          Find Flights
        </h2>
        <div className="flex items-center gap-2">
          <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
            One Way
          </div>
          {showDrySeasonButton && (
            <button
              type="button"
              onClick={handleDrySeasonToggle}
              className={`ml-2 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${drySeason ? "bg-green-100 border-green-400 text-green-800" : "bg-muted border-border text-muted-foreground hover:bg-green-50 hover:border-green-400 hover:text-green-700"}`}
              aria-pressed={drySeason}
            >
              Dry Season
            </button>
          )}
          {showPriceUnder10kButton && (
            <button
              type="button"
              onClick={handlePriceUnder10kToggle}
              className={`ml-2 px-3 py-1 rounded-full text-xs font-medium border transition-colors ${priceUnder10k ? "bg-green-100 border-green-400 text-green-800" : "bg-muted border-border text-muted-foreground hover:bg-green-50 hover:border-green-400 hover:text-green-700"}`}
              aria-pressed={priceUnder10k}
            >
              under ₹10,000
            </button>
          )}
        </div>
      </div>

      {/* Route Selection - All in one line */}
      <div className="flex items-center gap-2 mb-3">
        {/* Source */}
        <div className="flex-1">
          <label
            htmlFor="source-select"
            className="block text-xs font-medium text-muted-foreground mb-1"
          >
            From
          </label>
          {shouldShowSourceDropdown() ? (
            <div className="relative">
              <select
                id="source-select"
                value={source}
                onChange={(e) => handleSourceChange(e.target.value)}
                className="w-full p-3 bg-muted border border-border rounded-lg text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
              >
                {getSourceOptions().map((src) => (
                  <option key={src.value} value={src.value}>
                    {getShortLabel(src.value)}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="w-full p-3 bg-muted border border-border rounded-lg text-foreground font-medium text-sm">
              {getShortLabel(source)}
            </div>
          )}
        </div>

        {/* Flip Button */}
        <div className="flex items-end pb-0">
          <button
            type="button"
            onClick={handleFlip}
            aria-label="Flip source and destination"
            className="bg-card border-2 border-border rounded-full p-2 shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 mt-5"
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
          <label
            htmlFor="destination-select"
            className="block text-xs font-medium text-muted-foreground mb-1"
          >
            To
          </label>
          <div className="relative">
            <select
              id="destination-select"
              value={destination}
              onChange={(e) => handleDestinationChange(e.target.value)}
              className="w-full p-3 bg-muted border border-border rounded-lg text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm"
            >
              {getDestinationOptions().map((dest) => (
                <option key={dest.value} value={dest.value}>
                  {getShortLabel(dest.value)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
