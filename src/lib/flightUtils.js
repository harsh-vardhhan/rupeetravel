/**
 * @file lib/flightUtils.js
 * @description A centralized utility file for flight-related helper functions.
 * This file serves as a single source of truth for city names, airport codes,
 * and other related data to avoid duplication across the application.
 */

// A comprehensive map of city names to their IATA airport codes.
// This is the single source of truth for airport codes.
const airportCodeMap = {
  // India
  "Mumbai": "BOM",
  "New Delhi": "DEL",
  "Kolkata": "CCU",
  "Bangalore": "BLR",
  "Ahmedabad": "AMD",
  "Hyderabad": "HYD",

  // Vietnam
  "Hanoi": "HAN",
  "Ho Chi Minh City": "SGN",
  "Da Nang": "DAD",
  "Nha Trang": "CXR",
  "Phu Quoc": "PQC",
};

// A map for getting the full, display-friendly name of a city.
const cityFullNameMap = {
    // India
    "Mumbai": "Mumbai, India",
    "New Delhi": "New Delhi, India",
    "Kolkata": "Kolkata, India",
    "Bangalore": "Bangalore, India",
    "Ahmedabad": "Ahmedabad, India",
    "Hyderabad": "Hyderabad, India",
  
    // Vietnam
    "Hanoi": "Hanoi, Vietnam",
    "Ho Chi Minh City": "Ho Chi Minh City, Vietnam",
    "Da Nang": "Da Nang, Vietnam",
    "Nha Trang": "Nha Trang, Vietnam",
    "Phu Quoc": "Phu Quoc, Vietnam",
};


/**
 * Retrieves the IATA airport code for a given city name.
 * @param {string} cityName - The name of the city (e.g., "Kolkata").
 * @returns {string} The 3-letter airport code (e.g., "CCU") or a fallback.
 */
export const getAirportCode = (cityName) => {
  return airportCodeMap[cityName] || cityName?.substring(0, 3).toUpperCase() || "";
};

/**
 * Retrieves the full display name for a given city (e.g., "Mumbai, India").
 * @param {string} cityName - The short name of the city (e.g., "Mumbai").
 * @returns {string} The full city name with country, or the original name if not found.
 */
export const getCityFullName = (cityName) => {
    return cityFullNameMap[cityName] || cityName || "";
};
