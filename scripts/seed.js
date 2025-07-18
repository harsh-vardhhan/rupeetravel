import 'dotenv/config';
import { db } from '../src/db/index.js';
import { flight } from '../src/db/schema.js';
import fs from 'fs';
import path from 'path';

async function seedFlights() {
  try {
    console.log('🌱 Starting flight data seeding...');

    // Clear the flight table before seeding
    await db.delete(flight);
    console.log('🧹 Cleared all existing flights from the database.');
    
    // Read the flight-price.json file
    const flightDataPath = path.join(process.cwd(), 'flight-price.json');
    const flightData = JSON.parse(fs.readFileSync(flightDataPath, 'utf8'));
    
    console.log(`📊 Found ${flightData.length} flights to insert`);
    
    // Transform the data to match the database schema
    const transformedFlights = flightData.map(flightItem => ({
      uuid: flightItem.uuid,
      date: flightItem.date,
      origin: flightItem.origin,
      destination: flightItem.destination,
      airline: flightItem.airline,
      link: flightItem.link,
      duration: flightItem.duration,
      flight_type: flightItem.flightType,
      price_inr: flightItem.price_inr,
      origin_country: flightItem.originCountry,
      destination_country: flightItem.destinationCountry,
      rain_probability: flightItem.rainProbability.toString(),
      free_meal: flightItem.freeMeal ? 1 : 0
    }));
    
    console.log('🔄 Inserting flights into database...');
    
    // Insert all flights in batches to avoid overwhelming the database
    const batchSize = 100;
    for (let i = 0; i < transformedFlights.length; i += batchSize) {
      const batch = transformedFlights.slice(i, i + batchSize);
      await db.insert(flight).values(batch);
      console.log(`✅ Inserted batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(transformedFlights.length / batchSize)}`);
    }
    
    console.log('🎉 Flight data seeding completed successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding flight data:', error);
    process.exit(1);
  }
}

seedFlights(); 