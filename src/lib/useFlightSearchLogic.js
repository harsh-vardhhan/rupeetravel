import { getFlightsFromDb } from "./flightData";

/**
 * Configuration object for all supported flight routes.
 * This makes it easy to add new routes or modify existing ones.
 * Each key is the URL slug (the [flightRoute] parameter).
 *
 * Properties:
 * - source: The name of the source city.
 * - defaultDestination: The destination selected by default if none is specified in the URL.
 * - destinations: An array of available destination cities for this specific route.
 */
const routeConfig = {
  "mumbai-to-vietnam-flight": {
    source: "Mumbai",
    defaultDestination: "Hanoi",
    destinations: ["Hanoi", "Ho Chi Minh City"],
  },
  "new-delhi-to-vietnam-flight": {
    source: "New Delhi",
    defaultDestination: "Hanoi",
    destinations: ["Hanoi", "Ho Chi Minh City"],
  },
  "kolkata-to-vietnam-flight": {
    source: "Kolkata",
    defaultDestination: "Hanoi",
    destinations: ["Hanoi", "Ho Chi Minh City"],
  },
  "bangalore-to-vietnam-flight": {
    source: "Bangalore",
    defaultDestination: "Ho Chi Minh City",
    destinations: ["Ho Chi Minh City"], // This route only allows flights to HCMC
  },
  "ahmedabad-to-vietnam-flight": {
    source: "Ahmedabad",
    defaultDestination: "Hanoi",
    destinations: ["Hanoi", "Ho Chi Minh City"],
  },
  "hyderabad-to-vietnam-flight": {
    source: "Hyderabad",
    defaultDestination: "Ho Chi Minh City",
    destinations: ["Ho Chi Minh City"], // This route only allows flights to HCMC
  },
};

// Centralized city definitions
const allIndiaCities = [
  { value: "Mumbai", label: "Mumbai, India", country: "India" },
  { value: "New Delhi", label: "New Delhi, India", country: "India" },
  { value: "Kolkata", label: "Kolkata, India", country: "India" },
  { value: "Bangalore", label: "Bangalore, India", country: "India" },
  { value: "Ahmedabad", label: "Ahmedabad, India", country: "India" },
  { value: "Hyderabad", label: "Hyderabad, India", country: "India" },
];

const allVietnamCities = [
  { value: "Hanoi", label: "Hanoi, Vietnam", country: "Vietnam" },
  {
    value: "Ho Chi Minh City",
    label: "Ho Chi Minh City, Vietnam",
    country: "Vietnam",
  },
];

/**
 * A reusable server-side function to encapsulate all flight search logic.
 * It fetches data and resolves parameters based on the dynamic route.
 * @param {object} params - The route parameters from Next.js (e.g., { flightRoute: '...' }).
 * @param {object} searchParams - The URL search parameters.
 * @returns {Promise<object>} An object containing all data and state for the page component.
 */
export const useFlightSearchLogic = async (params, searchParams) => {
  // 1. Get the configuration for the current route, with a fallback
  const currentRouteConfig =
    routeConfig[params.flightRoute] || routeConfig["mumbai-to-vietnam-flight"];

  // 2. Resolve all search parameters
  const page = parseInt(searchParams.page) || 1;
  const source = searchParams.source || currentRouteConfig.source;
  const destination =
    searchParams.destination || currentRouteConfig.defaultDestination;
  const drySeason = searchParams.drySeason === "1";
  const priceUnder10k = searchParams.priceUnder10k === "1";
  const airlineGroup = searchParams.airlineGroup || "all";
  const sortBy = searchParams.sortBy || "price";
  const limit = 20;

  // 3. Fetch flight data from the database
  let flights, totalCount;
  try {
    const data = await getFlightsFromDb({
      ...searchParams,
      page,
      destination,
      source,
      airlineGroup,
      sortBy,
      priceUnder10k: priceUnder10k ? "1" : undefined,
    });
    flights = data.flights;
    totalCount = data.totalCount;
  } catch (error) {
    console.error("Failed to fetch flight data:", error);
    flights = [];
    totalCount = 0;
  }

  // 4. Determine the source and destination options for the dropdowns
  const isIndiaToVietnam = allIndiaCities.some((city) => city.value === source);

  let sourceOptions, destinationOptions;

  if (isIndiaToVietnam) {
    // This is a standard trip from India to Vietnam
    sourceOptions = allIndiaCities;
    // The destinations are the ones allowed by the specific route config
    destinationOptions = allVietnamCities.filter((city) =>
      currentRouteConfig.destinations.includes(city.value),
    );
  } else {
    // This is a flipped/return trip from Vietnam to India
    // The sources are the Vietnamese cities allowed by the route config
    sourceOptions = allVietnamCities.filter((city) =>
      currentRouteConfig.destinations.includes(city.value),
    );
    // The only possible destination is the original source city of the route
    destinationOptions = allIndiaCities.filter(
      (city) => city.value === currentRouteConfig.source,
    );
  }

  // 5. Calculate pagination details
  const totalPages = Math.ceil(totalCount / limit);
  const pagesToDisplay = Math.min(5, totalPages);
  let pageNumbers = [];
  if (totalPages > 1) {
    let startPage = 1;
    if (totalPages > 5 && page > 3) {
      startPage = page >= totalPages - 2 ? totalPages - 4 : page - 2;
    }
    pageNumbers = Array.from(
      { length: Math.min(pagesToDisplay, totalPages - startPage + 1) },
      (_, i) => startPage + i,
    );
  }

  // 6. Return all processed data for the page component
  return {
    flights,
    totalCount,
    totalPages,
    pageNumbers,
    limit,
    page,
    source,
    destination,
    drySeason,
    priceUnder10k,
    airlineGroup,
    sortBy,
    sourceOptions,
    destinationOptions,
    currentRouteConfig, // Pass the config for use in the page
  };
};
