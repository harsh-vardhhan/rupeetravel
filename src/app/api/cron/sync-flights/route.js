import 'dotenv/config';
import { db } from '../../../../db';
import * as schema from '../../../../db/schema';
import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { sql } from 'drizzle-orm';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'flight-price.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    const flights = JSON.parse(fileData);

    if (!flights || flights.length === 0) {
      return NextResponse.json({ message: "No flights to sync." }, { status: 200 });
    }

    const formattedFlights = flights.map((flight) => ({
      uuid: flight.uuid,
      date: flight.date,
      origin: flight.origin,
      destination: flight.destination,
      airline: flight.airline,
      time: flight.time,
      duration: flight.duration,
      flight_type: flight.flightType,
      price_inr: flight.price_inr,
      origin_country: flight.originCountry,
      destination_country: flight.destinationCountry,
      rain_probability: String(flight.rainProbability),
      free_meal: flight.freeMeal,
    }));

    // Using a transaction for the upsert
    await db.transaction(async (tx) => {
      await tx.insert(schema.flight).values(formattedFlights).onConflictDoUpdate({
        target: schema.flight.uuid,
        set: {
          date: sql`excluded.date`,
          origin: sql`excluded.origin`,
          destination: sql`excluded.destination`,
          airline: sql`excluded.airline`,
          time: sql`excluded.time`,
          duration: sql`excluded.duration`,
          flight_type: sql`excluded.flight_type`,
          price_inr: sql`excluded.price_inr`,
          origin_country: sql`excluded.origin_country`,
          destination_country: sql`excluded.destination_country`,
          rain_probability: sql`excluded.rain_probability`,
          free_meal: sql`excluded.free_meal`,
        }
      });
    });

    return NextResponse.json({ message: "Database synced successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error syncing database:", error);
    return NextResponse.json({ message: "Error syncing database", error: error.message }, { status: 500 });
  }
} 