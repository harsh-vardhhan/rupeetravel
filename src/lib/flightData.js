import { db } from "../db"; // Your Drizzle/Turso setup
import * as schema from "../db/schema";
import { eq, asc, sql, and, lt } from "drizzle-orm";

// This is the centralized function that holds all your database logic.
export async function getFlightsFromDb(searchParams) {
  const page = parseInt(searchParams.page) || 1;
  const destination = searchParams.destination || "Hanoi";
  const source = searchParams.source;
  const drySeason = searchParams.drySeason === "1";
  const priceUnder10k = searchParams.priceUnder10k === "1";
  const airlineGroup = searchParams.airlineGroup || "all";
  const sortBy = searchParams.sortBy || "price";
  const limit = 20;
  const offset = (page - 1) * limit;

  // If no source is provided, we can't search.
  if (!source) {
    return { flights: [], totalCount: 0 };
  }

  try {
    const conditions = [];
    conditions.push(eq(schema.flight.origin, source));
    conditions.push(eq(schema.flight.destination, destination));

    if (drySeason) {
      conditions.push(
        sql`CAST(${schema.flight.rain_probability} AS INTEGER) <= 20`,
      );
    }
    if (priceUnder10k) {
      conditions.push(lt(schema.flight.price_inr, 10000));
    }
    if (airlineGroup === "free") {
      conditions.push(
        sql`${schema.flight.airline} IN ('Vietnam Airlines', 'Air India', 'IndiGo')`,
      );
    } else if (airlineGroup === "paid") {
      conditions.push(eq(schema.flight.airline, "Vietjet"));
    }

    const whereCondition = and(...conditions);
    const orderBy =
      sortBy === "date"
        ? asc(schema.flight.date)
        : asc(schema.flight.price_inr);

    const [flights, totalFlightsResult] = await Promise.all([
      db
        .select()
        .from(schema.flight)
        .where(whereCondition)
        .orderBy(orderBy)
        .limit(limit)
        .offset(offset),
      db
        .select({ count: sql`count(*)` })
        .from(schema.flight)
        .where(whereCondition),
    ]);

    const totalCount = totalFlightsResult[0].count;
    return { flights, totalCount };
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to fetch flight data."); // It's better to throw so the caller can handle it
  }
}
