// flightData.js

const API_BASE_URL = 'https://emz8lgvgm2.execute-api.ap-south-1.amazonaws.com/api/flights';

// This is the centralized function that now uses the external API instead of direct database queries.
export async function getFlightsFromDb(searchParams) {
  const page = parseInt(searchParams.page) || 1;
  const destination = searchParams.destination || "Hanoi";
  const source = searchParams.source; // Your frontend uses 'source'
  const drySeason = searchParams.drySeason === '1';
  const priceUnder10k = searchParams.priceUnder10k === '1';
  const airlineGroup = searchParams.airlineGroup || "all";
  const sortBy = searchParams.sortBy || "price";
  const limit = parseInt(searchParams.limit) || 20;

  // If no source is provided, we can't search.
  if (!source) {
    return { flights: [], totalCount: 0 };
  }

  try {
    // Build query parameters using the correct API parameter names
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      origin: source, // Map 'source' to 'origin' for the API
      destination,
      sort_by: sortBy // API supports 'date' or 'price'
    });

    // Add price filter - API uses 'max_price'
    if (priceUnder10k) {
      queryParams.append('max_price', '10000');
    }

    // Add rain probability filter for dry season - API uses 'max_rain'
    if (drySeason) {
      queryParams.append('max_rain', '20');
    }

    // Add airline filter - API accepts comma-separated airline names
    if (airlineGroup === "free") {
      queryParams.append('airline', 'Vietnam Airlines,Air India,IndiGo');
    } else if (airlineGroup === "paid") {
      queryParams.append('airline', 'Vietjet');
    }

    const url = `${API_BASE_URL}?${queryParams.toString()}`;
    console.log('Fetching from:', url); // For debugging
    
    // Make the API call
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers if needed (e.g., API keys)
        // 'Authorization': 'Bearer your-token-here',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
    }

    const apiData = await response.json();
    
    // The API returns { data: [...], page: 1, total_pages: 139, total_items: 2776 }
    // We need to transform it to match your expected format { flights: [...], totalCount: number }
    const flights = apiData.data || [];
    const totalCount = apiData.total_items || 0;

    // Apply client-side filtering only if needed (the API should handle most filtering)
    let filteredFlights = flights;

    // All filtering should now be handled by the API, but keep fallbacks just in case
    // The API uses 'max_rain' so this shouldn't be needed
    if (drySeason && flights.length > 0 && !url.includes('max_rain')) {
      filteredFlights = filteredFlights.filter(flight => 
        parseFloat(flight.rain_probability) <= 20
      );
    }

    // The API uses 'max_price' so this shouldn't be needed  
    if (priceUnder10k && flights.length > 0 && !url.includes('max_price')) {
      filteredFlights = filteredFlights.filter(flight => 
        flight.price_inr < 10000
      );
    }

    // The API uses 'airline' parameter so this shouldn't be needed
    if (airlineGroup !== "all" && flights.length > 0 && !url.includes('airline')) {
      if (airlineGroup === "free") {
        const freeAirlines = ['Vietnam Airlines', 'Air India', 'IndiGo'];
        filteredFlights = filteredFlights.filter(flight => 
          freeAirlines.includes(flight.airline)
        );
      } else if (airlineGroup === "paid") {
        filteredFlights = filteredFlights.filter(flight => 
          flight.airline === 'Vietjet'
        );
      }
    }

    // The API uses 'sort_by' so this shouldn't be needed
    if (sortBy && flights.length > 0 && !url.includes('sort_by')) {
      filteredFlights.sort((a, b) => {
        if (sortBy === 'date') {
          return new Date(a.date) - new Date(b.date);
        } else if (sortBy === 'price') {
          return a.price_inr - b.price_inr;
        }
        return 0;
      });
    }

    // Return in the same format as your original function
    return {
      flights: filteredFlights,
      totalCount: filteredFlights.length !== flights.length ? filteredFlights.length : totalCount
    };

  } catch (error) {
    console.error('API request failed:', error);
    throw new Error('Failed to fetch flight data from API.');
  }
}