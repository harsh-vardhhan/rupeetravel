// flightData.js

const API_BASE_URL = 'https://rupeetravel-api-production.up.railway.app/api/flights';

// This is the centralized function that now uses the external API instead of direct database queries.
export async function getFlightsFromApi(searchParams) {
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
    // Build query parameters - the API uses 'origin' instead of 'source'
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      origin: source, // Map 'source' to 'origin' for the API
      destination,
    });

    // Add sorting if the API supports it
    if (sortBy) {
      queryParams.append('sort_by', sortBy);
    }

    // Add price filter if API supports it
    if (priceUnder10k) {
      queryParams.append('max_price', '10000');
    }

    // Add rain probability filter for dry season
    if (drySeason) {
      queryParams.append('max_rain_probability', '20');
    }

    // Add airline filter if API supports it
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

    // Apply client-side filtering if the API doesn't support certain filters
    let filteredFlights = flights;

    // Client-side filtering for dry season if API doesn't support it
    if (drySeason && !queryParams.has('max_rain_probability')) {
      filteredFlights = filteredFlights.filter(flight => 
        parseFloat(flight.rain_probability) <= 20
      );
    }

    // Client-side filtering for price if API doesn't support it
    if (priceUnder10k && !queryParams.has('max_price')) {
      filteredFlights = filteredFlights.filter(flight => 
        flight.price_inr < 10000
      );
    }

    // Client-side filtering for airlines if API doesn't support it
    if (airlineGroup === "free" && !queryParams.has('airline')) {
      const freeAirlines = ['Vietnam Airlines', 'Air India', 'IndiGo'];
      filteredFlights = filteredFlights.filter(flight => 
        freeAirlines.includes(flight.airline)
      );
    } else if (airlineGroup === "paid" && !queryParams.has('airline')) {
      filteredFlights = filteredFlights.filter(flight => 
        flight.airline === 'Vietjet'
      );
    }

    // Client-side sorting if API doesn't support it
    if (sortBy && !queryParams.has('sort_by')) {
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

// Alternative version with better error handling and retry logic
export async function getFlightsFromApiWithRetry(searchParams, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await getFlightsFromApi(searchParams);
    } catch (error) {
      lastError = error;
      console.warn(`API call attempt ${attempt} failed:`, error.message);
      
      if (attempt < maxRetries) {
        // Wait before retrying (exponential backoff)
        const delay = Math.pow(2, attempt - 1) * 1000; // 1s, 2s, 4s
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

// For backward compatibility, you can keep this alias
export const getFlightsFromDb = getFlightsFromApi;