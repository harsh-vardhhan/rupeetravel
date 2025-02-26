import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    // Load JSON file
    const filePath = path.join(process.cwd(), "data", "flight-price.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Get query parameters (case-insensitive)
    const { origin, destination } = req.query;
    if (!origin || !destination) {
      return res.status(400).json({ error: "Origin and destination are required." });
    }

    const originLower = origin.toLowerCase();
    const destinationLower = destination.toLowerCase();

    // Separate outbound and inbound flights
    let outboundFlights = jsonData.filter(flight =>
      flight.origin.toLowerCase() === originLower && flight.destination.toLowerCase() === destinationLower
    );

    let inboundFlights = jsonData.filter(flight =>
      flight.origin.toLowerCase() === destinationLower && flight.destination.toLowerCase() === originLower
    );

    // Sort both lists by `price_inr` (Lowest to Highest)
    outboundFlights.sort((a, b) => a.price_inr - b.price_inr);
    inboundFlights.sort((a, b) => a.price_inr - b.price_inr);

    // Get the top 25 flights from each list
    outboundFlights = outboundFlights.slice(0, 25);
    inboundFlights = inboundFlights.slice(0, 25);

    // Combine results
    const filteredFlights = [...outboundFlights, ...inboundFlights];

    res.status(200).json(filteredFlights);
  } catch (error) {
    console.error("Error loading flight data:", error);
    res.status(500).json({ error: "Failed to load data" });
  }
}
