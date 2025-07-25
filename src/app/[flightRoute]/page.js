import Link from "next/link";
import { Button } from "../../components/ui/server/button";
import FlightSearchForm from "../../components/FlightSearchForm";
import Header from "../../components/ui/server/header";
import FlightCard from "../../components/ui/server/FlightCard";
import Pagination from "../../components/ui/server/Pagination";
import AirlineGroupButton from "../../components/ui/AirlineGroupButton";
import { getFlightSearchData } from "../../lib/getFlightSearchData";
import { cn } from "../../components/lib/utils";
import {
  precipitationData,
  getRainColor,
  getAllWeatherDestinationOptions,
} from "../../lib/flightWeather";
import { getAirportCode, getCityFullName } from '../../lib/flightUtils';

const SortButton = ({
  currentSortBy,
  sortByValue,
  label,
  params,
  baseHref,
}) => {
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) => v !== null && v !== undefined && v !== "",
    ),
  );
  const query = new URLSearchParams(filteredParams);
  query.set("sortBy", sortByValue);
  const href = `${baseHref}?${query.toString()}`;
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

export async function generateStaticParams() {
  const routes = [
    { flightRoute: "mumbai-to-vietnam-flight" },
    { flightRoute: "hyderabad-to-vietnam-flight" },
    { flightRoute: "kolkata-to-vietnam-flight" },
    { flightRoute: "new-delhi-to-vietnam-flight" },
    { flightRoute: "ahmedabad-to-vietnam-flight" },
    { flightRoute: "bangalore-to-vietnam-flight" },
  ];
  return routes;
}

// Dynamically generate metadata for each route
export async function generateMetadata({ params }) {
  // Await params before using its properties
  const resolvedParams = await params;
  
  const sourceCity = resolvedParams.flightRoute
    .split("-to-")[0]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const title = `Flights from ${sourceCity} to Vietnam`;
  const description = `Find the cheapest flights from ${sourceCity} to Vietnam for Hanoi and Ho Chi Minh City.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.rupeetravel.com/${resolvedParams.flightRoute}`,
      siteName: "Rupee Travel",
      images: [
        {
          url: "https://ik.imagekit.io/rupeetravel/preview.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `https://www.rupeetravel.com/${resolvedParams.flightRoute}`,
    },
  };
}

export const revalidate = false; // Or a time-based value like 3600

// --- The Page Component ---

export default async function FlightPage({ params, searchParams }) {
  // Await params before using its properties
  const resolvedParams = await params;
  
  // 1. Get all data and state by calling the reusable logic function
  const {
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
  } = await getFlightSearchData(resolvedParams, searchParams);

  const baseHref = `/${resolvedParams.flightRoute}`;

  // 2. The rest of the component is for rendering the UI
  return (
    <main className="min-h-screen bg-background">
      <Header title={`Flights from ${currentRouteConfig.source} to Vietnam`} />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <FlightSearchForm
            currentDestination={destination}
            currentSource={source}
            sourceOptions={sourceOptions}
            destinationOptions={destinationOptions}
            routeName={resolvedParams.flightRoute}
            drySeason={drySeason}
            showDrySeasonButton={true}
            priceUnder10k={priceUnder10k}
            showPriceUnder10kButton={true}
          />
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
              Page {page} of {totalPages} • {totalCount} results found
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-xs text-gray-500">Sort by:</span>
            <SortButton
              baseHref={baseHref}
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
              baseHref={baseHref}
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No flights found
            </h3>
            <p className="text-gray-500 mb-4">
              No flights available for {getCityFullName(source)} to{" "}
              {getCityFullName(destination)} with the selected filters.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {flights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  getSourceCode={getAirportCode}
                  getDestinationCode={getAirportCode}
                  showRain={true}
                  getRainColor={getRainColor}
                  Button={Button}
                  showWeatherButton={true}
                  precipitationData={precipitationData}
                  destinationOptions={getAllWeatherDestinationOptions()}
                />
              ))}
            </div>
            <Pagination
              page={page}
              totalCount={totalCount}
              totalPages={totalPages}
              limit={limit}
              pageNumbers={pageNumbers}
              baseHref={baseHref}
              queryParams={{
                destination,
                source,
                airlineGroup,
                sortBy,
                ...(drySeason && { drySeason: "1" }),
                ...(priceUnder10k && { priceUnder10k: "1" }),
              }}
              Button={Button}
            />
          </>
        )}
      </div>
    </main>
  );
}