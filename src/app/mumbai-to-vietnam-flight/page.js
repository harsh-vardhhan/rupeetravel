import { Button } from "../../components/ui/server/button";
import FlightSearchForm from '../../components/FlightSearchForm';
import Header from '../../components/ui/server/header';
import FlightCard from '../../components/ui/server/FlightCard';
import Pagination from '../../components/ui/server/Pagination';
import AirlineGroupButton from '../../components/ui/AirlineGroupButton';
import { precipitationData, getRainColor, getAllWeatherDestinationOptions } from '../../lib/flightWeather';
import Seo from '../../component/seo';

async function getFlights(searchParams) {
  const protocol = process.env.NODE_ENV === 'development' ? 'http:' : 'https:';
  const host = process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'rupeetravel.com';
  const baseUrl = `${protocol}//${host}`;

  const url = new URL('/api/flights', baseUrl);
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, value);
    }
  });

  const res = await fetch(url.toString(), {
    next: {
      revalidate: 43200, // 12 hours in seconds
      tags: ['flights']
    }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch flights');
  }

  return res.json();
}

export default async function MumbaiToVietnamFlightPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { flights, totalCount } = await getFlights(resolvedSearchParams);

  const page = parseInt(resolvedSearchParams.page) || 1;
  const destination = resolvedSearchParams.destination || "Hanoi";
  const source = resolvedSearchParams.source || "Mumbai";
  const drySeason = resolvedSearchParams.drySeason === '1';
  const airlineGroup = resolvedSearchParams.airlineGroup || "all";
  const limit = 20;

  const sourceOptions = [
    { value: "Mumbai", label: "Mumbai, India", country: "India" }
  ];

  const destinationOptions = [
    { value: "Hanoi", label: "Hanoi, Vietnam", country: "Vietnam" },
    { value: "Ho Chi Minh City", label: "Ho Chi Minh City, Vietnam", country: "Vietnam" }
  ];

  const getCityFullName = (city) => {
    const cityMap = {
      "Mumbai": "Mumbai, India",
      "Hanoi": "Hanoi, Vietnam",
      "Ho Chi Minh City": "Ho Chi Minh City, Vietnam",
      "Da Nang": "Da Nang, Vietnam",
      "Nha Trang": "Nha Trang, Vietnam",
      "Phu Quoc": "Phu Quoc, Vietnam"
    };
    return cityMap[city] || city;
  };

  const totalPages = Math.ceil(totalCount / limit);

  const pagesToDisplay = Math.min(5, totalPages);
  let pageNumbers = [];
  if (totalPages > 1) {
    let startPage;
    if (totalPages <= 5) {
      startPage = 1;
    } else {
      if (page <= 3) {
        startPage = 1;
      } else if (page >= totalPages - 2) {
        startPage = totalPages - 4;
      } else {
        startPage = page - 2;
      }
    }
    pageNumbers = Array.from({ length: pagesToDisplay }, (_, i) => startPage + i);
  }

  const getSourceCode = (city) => {
    const codeMap = {
      "Mumbai": "BOM",
      "Hanoi": "HAN",
      "Ho Chi Minh City": "SGN"
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  const getDestinationCode = (city) => {
    const codeMap = {
      "Mumbai": "BOM",
      "Hanoi": "HAN",
      "Ho Chi Minh City": "SGN"
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Seo
        title="Flights from Mumbai to Vietnam"
        description="Find and compare the best flights from Mumbai to Vietnam | Buy cheapest Vietnam flight ticket | India to Vietnam flight"
        canonical="https://www.rupeetravel.com/mumbai-to-vietnam-flight"
      />
      <Header title="Flights from Mumbai to Vietnam" />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="mb-6">
          {(() => {
            const sourceOption = sourceOptions.find(opt => opt.value === source);
            if (sourceOption && sourceOption.country === 'India') {
              return (
                <FlightSearchForm
                  currentDestination={destination}
                  currentSource={source}
                  sourceOptions={sourceOptions}
                  destinationOptions={destinationOptions}
                  routeName="mumbai-to-vietnam-flight"
                  drySeason={drySeason}
                  showDrySeasonButton={true}
                />
              );
            } else {
              return (
                <FlightSearchForm
                  currentDestination={destination}
                  currentSource={source}
                  sourceOptions={sourceOptions}
                  destinationOptions={destinationOptions}
                  routeName="mumbai-to-vietnam-flight"
                />
              );
            }
          })()}
        </div>

        <AirlineGroupButton
          airlineGroup={airlineGroup}
          destination={destination}
          source={source}
          drySeason={drySeason}
        />

        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Available Flights
            </h2>
            <p className="text-sm text-gray-500">
              {getCityFullName(source)} → {getCityFullName(destination)}
            </p>
            <p className="text-sm text-gray-500">
              Page {page} of {totalPages} • {flights.length} results
            </p>
          </div>
          <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            Sorted by price
          </div>
        </div>

        {flights.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.636M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No flights found</h3>
            <p className="text-gray-500 mb-4">
              No flights available for {getCityFullName(source)} to {getCityFullName(destination)}
            </p>
            <p className="text-sm text-gray-400">
              Try selecting a different route using the search form above
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {flights.map((flight, index) => {
                const sourceOption = sourceOptions.find(opt => opt.value === flight.origin);
                return (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    getSourceCode={getSourceCode}
                    getDestinationCode={getDestinationCode}
                    showRain={!!(sourceOption && sourceOption.country === 'India')}
                    getRainColor={getRainColor}
                    Button={Button}
                    showWeatherButton={!!(sourceOption && sourceOption.country === 'India')}
                    precipitationData={precipitationData}
                    destinationOptions={getAllWeatherDestinationOptions()}
                  />
                );
              })}
            </div>

            <Pagination
              page={page}
              totalCount={totalCount}
              totalPages={totalPages}
              limit={limit}
              pageNumbers={pageNumbers}
              baseHref="/mumbai-to-vietnam-flight"
              queryParams={{ destination, source }}
              Button={Button}
            />
          </>
        )}
      </div>
    </main>
  );
}