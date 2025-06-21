import { db } from '../../db';
import * as schema from '../../db/schema';
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/server/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/server/table"
import { Button } from "../../components/ui/server/button";
import { eq, asc, sql } from 'drizzle-orm';
import Link from 'next/link';

export default async function FlightsPage({ searchParams }) {
  const params = await searchParams;
  const page = parseInt(params.page) || 1;
  const limit = 20;
  const offset = (page - 1) * limit;

  // Fetch filtered and paginated flights
  const flights = await db
    .select()
    .from(schema.flight)
    .where(
      eq(schema.flight.origin, "New Delhi") && 
      eq(schema.flight.destination, "Hanoi")
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
      eq(schema.flight.destination, "Hanoi")
    );

  const totalCount = totalFlights[0].count;
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-4xl font-bold mb-8">Flights from New Delhi to Hanoi</h1>
      <Card className="w-full max-w-6xl">
        <CardHeader>
          <CardTitle>Flight Information (Sorted by Price - Lowest First)</CardTitle>
          <p className="text-sm text-gray-600">
            Showing {flights.length} of {totalCount} flights (Page {page} of {totalPages})
          </p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Airline</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price (INR)</TableHead>
                <TableHead>Free Meal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flights.map((flight) => (
                <TableRow key={flight.id}>
                  <TableCell>{flight.date}</TableCell>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.origin}</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                  <TableCell>{flight.time}</TableCell>
                  <TableCell>{flight.duration}</TableCell>
                  <TableCell>{flight.flight_type}</TableCell>
                  <TableCell>{flight.price_inr}</TableCell>
                  <TableCell>{flight.free_meal ? 'Yes' : 'No'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </div>
            <div className="flex gap-2">
              <Link href={`/flights?page=${page - 1}`}>
                <Button
                  variant="outline"
                  disabled={page <= 1}
                >
                  Previous
                </Button>
              </Link>
              <Link href={`/flights?page=${page + 1}`}>
                <Button
                  variant="outline"
                  disabled={page >= totalPages}
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