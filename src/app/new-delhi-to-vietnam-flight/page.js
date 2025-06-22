import { db } from "../../db";
import * as schema from "../../db/schema";
import { Button } from "../../components/ui/server/button";
import { eq, asc, sql, and } from "drizzle-orm";
import Link from "next/link";
import FlightSearchForm from "../../components/FlightSearchForm";
import Header from "../../components/ui/server/header";
import { CircularProgressBar } from "../../component/PrecipitationChart";

export default async function DelhiToVietnamFlightPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const destination = params.destination || "Hanoi";
  const source = params.source || "New Delhi";
  const drySeason = params.drySeason === "1";
  const limit = 20;
  const offset = (page - 1) * limit;

  // Define route configuration
  const sourceOptions = [
    { value: "New Delhi", label: "New Delhi, India", country: "India" },
  ];

  const destinationOptions = [
    { value: "Hanoi", label: "Hanoi, Vietnam", country: "Vietnam" },
    {
      value: "Ho Chi Minh City",
      label: "Ho Chi Minh City, Vietnam",
      country: "Vietnam",
    },
  ];

  // Helper function to get full city names
  const getCityFullName = (city) => {
    const cityMap = {
      "New Delhi": "New Delhi, India",
      Hanoi: "Hanoi, Vietnam",
      "Ho Chi Minh City": "Ho Chi Minh City, Vietnam",
      "Da Nang": "Da Nang, Vietnam",
      "Nha Trang": "Nha Trang, Vietnam",
      "Phu Quoc": "Phu Quoc, Vietnam",
    };
    return cityMap[city] || city;
  };

  // Build dynamic where condition
  let whereCondition = and(
    eq(schema.flight.origin, source),
    eq(schema.flight.destination, destination),
  );
  if (drySeason) {
    // Only include flights with rain_probability <= 20
    whereCondition = and(
      whereCondition,
      sql`CAST(${schema.flight.rain_probability} AS INTEGER) <= 20`,
    );
  }

  // Fetch filtered and paginated flights
  const flights = await db
    .select()
    .from(schema.flight)
    .where(whereCondition)
    .orderBy(asc(schema.flight.price_inr))
    .limit(limit)
    .offset(offset);

  // Get total count for pagination
  const totalFlights = await db
    .select({ count: sql`count(*)` })
    .from(schema.flight)
    .where(whereCondition);

  const totalCount = totalFlights[0].count;
  const totalPages = Math.ceil(totalCount / limit);

  // Pagination Logic
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

  // Get source code for display
  const getSourceCode = (city) => {
    const codeMap = {
      "New Delhi": "DEL",
      Mumbai: "BOM",
      Hanoi: "HAN",
      "Ho Chi Minh City": "SGN",
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  const getDestinationCode = (city) => {
    const codeMap = {
      "New Delhi": "DEL",
      Mumbai: "BOM",
      Hanoi: "HAN",
      "Ho Chi Minh City": "SGN",
    };
    return codeMap[city] || city.substring(0, 3).toUpperCase();
  };

  // Rain color logic
  const getRainColor = (probability) => {
    if (probability < 25) return "rgba(46, 204, 113, 0.7)";
    if (probability > 50) return "rgba(231, 76, 60, 0.7)";
    return "rgba(52, 152, 219, 0.7)";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header title="Flights from New Delhi to Vietnam" />
      <div className="px-4 py-6 max-w-7xl mx-auto">
        {/* Search Form */}
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
                  routeName="new-delhi-to-vietnam-flight"
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
                  routeName="new-delhi-to-vietnam-flight"
                />
              );
            }
          })()}
        </div>

        {/* Results Header */}
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
            {/* Flight Cards */}
            <div className="space-y-3 mb-6">
              {flights.map((flight, index) => (
                <div
                  key={flight.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-200 hover:border-blue-200"
                >
                  {/* Airline & Date Row */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {flight.airline.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm leading-tight">
                          {flight.airline}
                        </p>
                        <p className="text-xs text-gray-500">{flight.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-emerald-600">
                        ₹{flight.price_inr.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                  </div>

                  {/* Route & Time Row */}
                  <div className="flex items-center justify-between mb-3 py-3 bg-gray-50 rounded-lg px-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-sm">
                          {getSourceCode(flight.origin)}
                        </p>
                        <p className="text-xs text-gray-500">{flight.origin}</p>
                        <p className="text-xs text-gray-500">
                          {flight.time.split("-")[0]}
                        </p>
                      </div>

                      <div className="flex-1 flex items-center justify-center relative">
                        <div className="w-full h-px bg-gray-300"></div>
                        <div className="absolute bg-white border-2 border-blue-500 rounded-full w-3 h-3"></div>
                        <div className="absolute text-xs text-gray-600 top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          {flight.duration}
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-sm">
                          {getDestinationCode(flight.destination)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {flight.destination}
                        </p>
                        <p className="text-xs text-gray-500">
                          {flight.time.split("-")[1]}
                        </p>
                      </div>
                    </div>
                    {/* Rain Probability Circular Progress */}
                    {(() => {
                      // Find the source option for the current flight
                      const sourceOption = sourceOptions.find(
                        (opt) => opt.value === flight.origin,
                      );
                      return sourceOption &&
                        sourceOption.country === "India" ? (
                        <div className="ml-4 flex-shrink-0 flex flex-col items-center">
                          <CircularProgressBar
                            value={parseInt(flight.rain_probability, 10)}
                            color={getRainColor(
                              parseInt(flight.rain_probability, 10),
                            )}
                            label="Rain"
                          />
                        </div>
                      ) : null;
                    })()}
                  </div>

                  {/* Features Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          flight.flight_type === "direct"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {flight.flight_type}
                      </span>

                      <div className="flex items-center gap-1">
                        <span className="text-sm">🍽️</span>
                        <span
                          className={`text-xs font-medium ${
                            flight.free_meal
                              ? "text-green-600"
                              : "text-gray-400"
                          }`}
                        >
                          {flight.free_meal ? "Meal included" : "No meal"}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(`flights from ${flight.origin} to ${flight.destination} ${flight.date} one way`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors"
                      >
                        Search Flight
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Pagination */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {(page - 1) * limit + 1}-
                  {Math.min(page * limit, totalCount)} of {totalCount}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/new-delhi-to-vietnam-flight?page=${page - 1}&destination=${destination}&source=${source}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page <= 1}
                      className="px-3 py-2 text-sm disabled:opacity-50"
                    >
                      ← Prev
                    </Button>
                  </Link>

                  {/* Page Numbers for larger screens */}
                  <div className="hidden sm:flex items-center gap-1">
                    {pageNumbers.map((pageNum) => (
                      <Link
                        key={`page-${pageNum}`}
                        href={`/new-delhi-to-vietnam-flight?page=${pageNum}&destination=${destination}&source=${source}`}
                      >
                        <Button
                          variant={pageNum === page ? "default" : "outline"}
                          size="sm"
                          className="w-10 h-10 p-0 text-sm"
                        >
                          {pageNum}
                        </Button>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={`/new-delhi-to-vietnam-flight?page=${page + 1}&destination=${destination}&source=${source}`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={page >= totalPages}
                      className="px-3 py-2 text-sm disabled:opacity-50"
                    >
                      Next →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
