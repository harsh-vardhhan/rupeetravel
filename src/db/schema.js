import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const flight = sqliteTable("flight", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  uuid: text("uuid").notNull().unique(),
  date: text("date").notNull(),
  origin: text("origin").notNull(),
  destination: text("destination").notNull(),
  airline: text("airline").notNull(),
  link: text("link").notNull(),
  duration: text("duration").notNull(),
  flight_type: text("flight_type").notNull(),
  price_inr: integer("price_inr").notNull(),
  origin_country: text("origin_country").notNull(),
  destination_country: text("destination_country").notNull(),
  rain_probability: text("rain_probability").notNull(),
  free_meal: integer("free_meal", { mode: "boolean" }).notNull().default(false),
});
