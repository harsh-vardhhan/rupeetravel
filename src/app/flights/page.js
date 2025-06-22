import { db } from '../../db';
import * as schema from '../../db/schema';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { eq, asc, sql } from 'drizzle-orm';
import Link from 'next/link';
import FlightSearchForm from '../../components/FlightSearchForm';

export default async function FlightsPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const destination = params.destination || "Hanoi";
  const limit = 20;
  const offset = (page - 1) * limit;

  // Fetch filtered and paginated flights
  const flights = await db
    .select()
    .from(schema.flight)
    .where(
      eq(schema.flight.origin, "New Delhi") && 
      eq(schema.flight.destination, destination)
    )
    .orderBy(asc(schema.flight.price_inr))
    .limit(limit)
    .offset(offset);

  // Get total count for pagination
  const totalFlights = await db
    .select({ count: sql`count(*)` })
    .from(schema.flight)
    .where(
      eq(schema.flight.origin, "New Delhi") && 
      eq(schema.flight.destination, destination)
    );

  const totalCount = totalFlights[0].count;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 sm:p-8 bg-gray-50">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">
        Flights from New Delhi to {destination}
      </h1>
      
      <FlightSearchForm currentDestination={destination} />

      <Card className="w-full max-w-6xl mt-4">
        <CardHeader>
          <CardTitle className="text-lg sm:text-2xl">Flight Information (Sorted by Price - Lowest First)</CardTitle>
          <p className="text-xs sm:text-sm text-gray-600">
            Showing {flights.length} of {totalCount} flights (Page {page} of {totalPages})
          </p>
        </CardHeader>
        <CardContent>
          {/* Flight Cards Grid */}
          <div className="flex flex-col gap-2">
            {flights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white rounded-lg shadow p-3 flex flex-col gap-2 border-l-2 border-blue-500 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm text-blue-700 truncate">{flight.airline}</span>
                  <span className="text-xs text-gray-400">{flight.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium">{flight.origin}</span>
                    <span className="text-base text-blue-400">→</span>
                    <span className="text-xs font-medium">{flight.destination}</span>
                  </div>
                  <span className="text-xs text-gray-600 text-right">{flight.time} • {flight.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {flight.flight_type}
                  </span>
                  <span className="text-lg font-bold text-green-700">
                    ₹{flight.price_inr}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    🍽️ Meal
                  </span>
                  <span className={`text-xs font-semibold ${flight.free_meal ? "text-green-600" : "text-red-500"}`}>
                    {flight.free_meal ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
            <div className="text-xs sm:text-sm text-gray-600">
              Page {page} of {totalPages}
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Link href={`/flights?page=${page - 1}&destination=${destination}`} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  disabled={page <= 1}
                  className="w-full sm:w-auto"
                >
                  Previous
                </Button>
              </Link>
              <Link href={`/flights?page=${page + 1}&destination=${destination}`} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  disabled={page >= totalPages}
                  className="w-full sm:w-auto"
                >
                  Next
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}