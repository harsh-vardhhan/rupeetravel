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

// Make sure the function itself is marked as async
export const useFlightSearchLogic = async (params, searchParams) => {
  // 1. AWAIT params and searchParams to get their actual values
  //    This resolves the Promises returned by the dynamic APIs.
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // 2. Use the resolved values to get the configuration for the current route
  const currentRouteConfig =
    routeConfig[resolvedParams.flightRoute] || routeConfig["mumbai-to-vietnam-flight"];

  // 3. Resolve all search parameters using the awaited searchParams object
  const page = parseInt(resolvedSearchParams.page) || 1;
  const source = resolvedSearchParams.source || currentRouteConfig.source;
  const destination =
    resolvedSearchParams.destination || currentRouteConfig.defaultDestination;
  const drySeason = resolvedSearchParams.drySeason === "1";
  const priceUnder10k = resolvedSearchParams.priceUnder10k === "1";
  const airlineGroup = resolvedSearchParams.airlineGroup || "all";
  const sortBy = resolvedSearchParams.sortBy || "price";
  const limit = 20; // This can remain synchronous as it's a local constant

  // 4. Fetch flight data from the database using the resolved parameters
  let flights, totalCount;
  try {
    const data = await getFlightsFromDb({
      ...resolvedSearchParams, // Pass the awaited object if needed by getFlightsFromDb
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

  // 5. Determine the source and destination options for the dropdowns
  //    (Logic remains the same, but uses the resolved `source`)
  const isIndiaToVietnam = allIndiaCities.some((city) => city.value === source);

  let sourceOptions, destinationOptions;

  if (isIndiaToVietnam) {
    sourceOptions = allIndiaCities;
    destinationOptions = allVietnamCities.filter((city) =>
      currentRouteConfig.destinations.includes(city.value),
    );
  } else {
    sourceOptions = allVietnamCities.filter((city) =>
      currentRouteConfig.destinations.includes(city.value),
    );
    destinationOptions = allIndiaCities.filter(
      (city) => city.value === currentRouteConfig.source,
    );
  }

  // 6. Calculate pagination details (Logic remains the same)
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

  // 7. Return all processed data for the page component
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
    currentRouteConfig,
  };
};