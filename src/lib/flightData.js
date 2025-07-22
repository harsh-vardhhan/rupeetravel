import { db } from '../db'; // Your Drizzle/Turso setup
import * as schema from '../db/schema';
import { eq, asc, sql, and, lt } from 'drizzle-orm';

// Add this at the top or import from a shared location
const luggagePolicies = {
  "Vietjet": {
    carryOn: { weight: "7kg", free: true },
    checked: { weight: "0kg", free: false, note: "Must purchase separately" },
    extraCheckedOptions: [
      { weight: "20kg", weightValue: 20, beforeThreeHours: 2030, afterThreeHours: 4060 },
      { weight: "30kg", weightValue: 30, beforeThreeHours: 3080, afterThreeHours: 5180 },
      { weight: "40kg", weightValue: 40, beforeThreeHours: 4060, afterThreeHours: 6160 },
      { weight: "50kg", weightValue: 50, beforeThreeHours: 5180, afterThreeHours: 7210 },
      { weight: "60kg", weightValue: 60, beforeThreeHours: 6160, afterThreeHours: 8210 },
      { weight: "70kg", weightValue: 70, beforeThreeHours: 7210, afterThreeHours: 10160 },
    ],
  },
  "Vietnam Airlines": {
    carryOn: { weight: "12kg", free: true },
    checked: { weight: "23kg", free: true },
  },
  "Air India": {
    carryOn: { weight: "7kg", free: true },
    checked: { weight: "25kg", free: true },
  },
  "IndiGo": {
    carryOn: { weight: "7kg", free: true },
    checked: { weight: "30kg", free: true },
  },
};

// Helper to enrich flight with luggage info
function enrichFlightWithLuggage(flight) {
  const policy = luggagePolicies[flight.airline];
  if (flight.airline === "Vietjet" && policy && !policy.checked.free) {
    const minCheckedOption = policy.extraCheckedOptions[0];
    flight.minCheckedLuggagePrice = minCheckedOption.beforeThreeHours;
    flight.minCheckedLuggageWeight = minCheckedOption.weight;
    flight.totalWithMinLuggage = flight.price_inr + minCheckedOption.beforeThreeHours;
  }
  return flight;
}

// This is the centralized function that holds all your database logic.
export async function getFlightsFromDb(searchParams) {
  const page = parseInt(searchParams.page) || 1;
  const destination = searchParams.destination || "Hanoi";
  const source = searchParams.source;
  const drySeason = searchParams.drySeason === '1';
  const priceUnder10k = searchParams.priceUnder10k === '1';
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
      conditions.push(sql`CAST(${schema.flight.rain_probability} AS INTEGER) <= 20`);
    }
    if (priceUnder10k) {
      conditions.push(lt(schema.flight.price_inr, 10000));
    }
    if (airlineGroup === "free") {
      conditions.push(sql`${schema.flight.airline} IN ('Vietnam Airlines', 'Air India', 'IndiGo')`);
    } else if (airlineGroup === "paid") {
      conditions.push(eq(schema.flight.airline, "Vietjet"));
    }

    const whereCondition = and(...conditions);
    const orderBy = sortBy === 'date' ? asc(schema.flight.date) : asc(schema.flight.price_inr);

    const [flights, totalFlightsResult] = await Promise.all([
      db.select().from(schema.flight).where(whereCondition).orderBy(orderBy).limit(limit).offset(offset),
      db.select({ count: sql`count(*)` }).from(schema.flight).where(whereCondition)
    ]);
    
    const totalCount = totalFlightsResult[0].count;
    return { flights: flights, totalCount };

  } catch (error) {
    console.error('Database query failed:', error);
    throw new Error('Failed to fetch flight data.'); // It's better to throw so the caller can handle it
  }
}