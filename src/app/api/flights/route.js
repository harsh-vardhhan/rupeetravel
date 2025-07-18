import { db } from "../../../db";
import * as schema from "../../../db/schema";
import { eq, asc, sql, and, lt } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const destination = searchParams.get("destination") || "Hanoi";
  const source = searchParams.get("source");
  const drySeason = searchParams.get("drySeason") === "1";
  const priceUnder10k = searchParams.get("priceUnder10k") === "1";
  const airlineGroup = searchParams.get("airlineGroup") || "all";
  const sortBy = searchParams.get("sortBy") || "price";
  const limit = 20;
  const offset = (page - 1) * limit;

  // Airline group filter logic
  let airlineFilter = null;
  if (airlineGroup === "free") {
    airlineFilter = sql`${schema.flight.airline} IN ('Vietnam Airlines', 'Air India', 'IndiGo')`;
  } else if (airlineGroup === "paid") {
    airlineFilter = eq(schema.flight.airline, "Vietjet");
  }

  // Build dynamic where condition
  const conditions = [];

  if (source) {
    conditions.push(eq(schema.flight.origin, source));
    conditions.push(eq(schema.flight.destination, destination));
  } else {
    // If no source is provided, return no flights.
    return NextResponse.json({ flights: [], totalCount: 0 });
  }

  if (drySeason) {
    conditions.push(
      sql`CAST(${schema.flight.rain_probability} AS INTEGER) <= 20`,
    );
  }

  if (priceUnder10k) {
    conditions.push(lt(schema.flight.price_inr, 10000));
  }

  if (airlineFilter) {
    conditions.push(airlineFilter);
  }

  const whereCondition = and(...conditions);

  try {
    const orderBy =
      sortBy === "date"
        ? asc(schema.flight.date)
        : asc(schema.flight.price_inr);
    // Fetch filtered and paginated flights
    const flights = await db
      .select()
      .from(schema.flight)
      .where(whereCondition)
      .orderBy(orderBy)
      .limit(limit)
      .offset(offset);

    // Get total count for pagination
    const totalFlightsResult = await db
      .select({ count: sql`count(*)` })
      .from(schema.flight)
      .where(whereCondition);

    const totalCount = totalFlightsResult[0].count;

    return NextResponse.json({ flights, totalCount });
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch flight data." },
      { status: 500 },
    );
  }
}
