import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

console.log("TURSO_DB_URL:", process.env.TURSO_DB_URL);

const client = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client); 