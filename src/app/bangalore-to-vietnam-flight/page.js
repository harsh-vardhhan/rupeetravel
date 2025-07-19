import { Button } from "../../components/ui/server/button";
import FlightSearchForm from "../../components/FlightSearchForm";
import Header from "../../components/ui/server/header";
import FlightCard from "../../components/ui/server/FlightCard";
import Pagination from "../../components/ui/server/Pagination";
import AirlineGroupButton from "../../components/ui/AirlineGroupButton";
import {
  precipitationData,
  getRainColor,
  getAllWeatherDestinationOptions,
} from "../../lib/flightWeather";
import { getFlightsFromDb } from "../../lib/flightData";
import { cn } from "../../components/lib/utils";
import Link from "next/link";

const SortButton = ({ currentSortBy, sortByValue, label, params }) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) => v !== null && v !== undefined && v !== "",
    ),
  );
  const query = new URLSearchParams(filteredParams);
  query.set("sortBy", sortByValue);
  const href = `/bangalore-to-vietnam-flight?${query.toString()}`;
  const isActive = currentSortBy === sortByValue;

  return (
    <Link
      href={href}
      scroll={false}
      className={cn(
        "px-3 py-1 text-xs font-medium rounded-full",
        isActive
          ? "bg-slate-800 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200",
      )}
    >
      {label}
    </Link>
  );
};

export const metadata = {
  title: "Flights from Bangalore to Vietnam",
  description:
    "Find and compare the best flights from Bangalore to Vietnam | Buy cheapest Vietnam flight ticket | India to Vietnam flight",
  openGraph: {
    title: "Flights from Bangalore to Vietnam",
    description:
      "Bangalore to Ho Chi Minh City flight | Ho Chi Minh City to Bangalore flight | Cheapest flights from Bangalore to Vietnam",
    url: "https://www.rupeetravel.com/bangalore-to-vietnam-flight",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Flights from Bangalore to Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flights from Bangalore to Vietnam",
    description:
      "Find and compare the best flights from Bangalore to Vietnam | Buy cheapest Vietnam flight ticket | India to Vietnam flight",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/bangalore-to-vietnam-flight",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function BangaloreToVietnamFlightPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;

  const page = parseInt(resolvedSearchParams.page) || 1;
  const source = resolvedSearchParams.source || "Bangalore";
  const destination = resolvedSearchParams.destination || "Ho Chi Minh City";
  const drySeason = resolvedSearchParams.drySeason === "1";
  const priceUnder10k = resolvedSearchParams.priceUnder10k === "1";
  const airlineGroup = resolvedSearchParams.airlineGroup || "all";
  const sortBy = resolvedSearchParams.sortBy || "price";

  let flights, totalCount;
  try {
    const data = await getFlightsFromDb({
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
    console.error(error);
    flights = [];
    totalCount = 0;
  }

  const limit = 20;

  // Define city options
  const indiaCities = [
    { value: "Bangalore", label: "Bangalore, India", country: "India" },
  ];
  const vietnamCities = [
    {
      value: "Ho Chi Minh City",
      label: "Ho Chi Minh City, Vietnam",
      country: "Vietnam",
    },
  ];

  let sourceOptions, destinationOptions;
  if (indiaCities.find((opt) => opt.value === source)) {
    sourceOptions = indiaCities;
    destinationOptions = vietnamCities;
  } else {
    sourceOptions = vietnamCities;
    destinationOptions = indiaCities;
  }

  const getCityFullName = (city) => {
    const cityMap = {
      Bangalore: "Bangalore, India",
      Hanoi: "Hanoi, Vietnam",
      "Ho Chi Minh City": "Ho Chi Minh City, Vietnam",
      "Da Nang": "Da Nang, Vietnam",
      "Nha Trang": "Nha Trang, Vietnam",
      "Phu Quoc": "Phu Quoc, Vietnam",
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
    pageNumbers = Array.from(
      { length: pagesToDisplay },
      (_, i) => startPage + i,
    );
  }

  const getSourceCode = (city) => {
    const codeMap = {
      Bangalore: "BLR",
      Hanoi: "HAN",
      "Ho Chi Minh City": "SGN",
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  const getDestinationCode = (city) => {
    const codeMap = {
      Bangalore: "BLR",
      Mumbai: "BOM",
      Hanoi: "HAN",
      "Ho Chi Minh City": "SGN",
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header title="Flights from Bangalore to Vietnam" />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="mb-6">
          {(() => {
            const sourceOption = sourceOptions.find(
              (opt) => opt.value === source,
            );
            if (sourceOption && sourceOption.country === "India") {
              return (
                <FlightSearchForm
                  currentDestination={destination}
                  currentSource={source}
                  sourceOptions={sourceOptions}
                  destinationOptions={destinationOptions}
                  routeName="bangalore-to-vietnam-flight"
                  drySeason={drySeason}
                  showDrySeasonButton={true}
                  priceUnder10k={priceUnder10k}
                  showPriceUnder10kButton={true}
                />
              );
            } else {
              return (
                <FlightSearchForm
                  currentDestination={destination}
                  currentSource={source}
                  sourceOptions={sourceOptions}
                  destinationOptions={destinationOptions}
                  routeName="bangalore-to-vietnam-flight"
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
          priceUnder10k={priceUnder10k}
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
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500">Sort by:</span>
            <SortButton
              currentSortBy={sortBy}
              sortByValue="price"
              label="Cheapest"
              params={{
                destination,
                source,
                airlineGroup,
                drySeason: drySeason ? "1" : undefined,
                priceUnder10k: priceUnder10k ? "1" : undefined,
              }}
            />
            <SortButton
              currentSortBy={sortBy}
              sortByValue="date"
              label="Earliest"
              params={{
                destination,
                source,
                airlineGroup,
                drySeason: drySeason ? "1" : undefined,
                priceUnder10k: priceUnder10k ? "1" : undefined,
              }}
            />
          </div>
        </div>

        {flights.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.636M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No flights found
            </h3>
            <p className="text-gray-500 mb-4">
              No flights available for {getCityFullName(source)} to{" "}
              {getCityFullName(destination)}
            </p>
            <p className="text-sm text-gray-400">
              Try selecting a different route using the search form above
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {flights.map((flight, index) => {
                const sourceOption = sourceOptions.find(
                  (opt) => opt.value === flight.origin,
                );
                return (
                  <FlightCard
                    key={flight.id}
                    flight={flight}
                    getSourceCode={getSourceCode}
                    getDestinationCode={getDestinationCode}
                    showRain={
                      !!(sourceOption && sourceOption.country === "India")
                    }
                    getRainColor={getRainColor}
                    Button={Button}
                    showWeatherButton={
                      !!(sourceOption && sourceOption.country === "India")
                    }
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
              baseHref="/bangalore-to-vietnam-flight"
              queryParams={{
                destination,
                source,
                airlineGroup,
                sortBy,
                ...(drySeason ? { drySeason: "1" } : {}),
                ...(priceUnder10k ? { priceUnder10k: "1" } : {}),
              }}
              Button={Button}
            />
          </>
        )}
      </div>
    </main>
  );
}
