import styles from "@/styles/Home.module.css";
import {
    Text,
    Box,
} from "@chakra-ui/react";
import Header from "@/component/header";
import Seo from "@/component/seo";
import FlightTabView from "@/component/FlightTabView"; // Import the tabbed component

export default function Home({ flightRates }) {
    // Define the route-specific values
    const originCity = "Mumbai";
    const destinationCity = "Da Nang";
    
    return (
        <>
            <Seo
                title={`Rupee Travel | ${originCity} to ${destinationCity}, Vietnam flight`}
                description={`Lowest ${destinationCity}, Vietnam flight ticket price from ${originCity}, India`}
                canonical={`https://www.rupeetravel.com/${originCity.toLowerCase()}-${destinationCity.toLowerCase()}-vietnam-flight`}
            />
            <main className={styles.main}>
                <Header title={`Booking flight for ${destinationCity}, Vietnam`} />
                <Text
                    as="h2"
                    fontSize="xl"
                    style={{
                        marginTop: "20px",
                        marginBottom: "20px",
                        fontWeight: 600,
                    }}
                >
                    {`${originCity} - ${destinationCity} Flights`}
                </Text>
                
                <Box w="100%">
                    <FlightTabView 
                        flightRates={flightRates}
                        originCity={originCity}
                        destinationCity={destinationCity}
                    />
                </Box>
            </main>
        </>
    );
}

import fs from "fs";
import path from "path";

export async function getStaticProps() {
    try {
        // Read flight data directly from the file instead of calling API
        const filePath = path.join(process.cwd(), "data", "flight-price.json");
        const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const origin = "Mumbai";
        const destination = "Da Nang";

        // Separate outbound and inbound flights
        let outboundFlights = jsonData.filter(flight =>
            flight.origin === origin && flight.destination === destination
        );

        let inboundFlights = jsonData.filter(flight =>
            flight.origin === destination && flight.destination === origin
        );

        // Sort by price (Lowest to Highest)
        outboundFlights.sort((a, b) => a.price_inr - b.price_inr);
        inboundFlights.sort((a, b) => a.price_inr - b.price_inr);

        // Get the top 25 flights from each list
        outboundFlights = outboundFlights.slice(0, 25);
        inboundFlights = inboundFlights.slice(0, 25);

        return {
            props: {
                flightRates: [...outboundFlights, ...inboundFlights],
            },
            revalidate: 3600, // Rebuild every 1 hour
        };
    } catch (error) {
        console.error("Error loading flight data:", error);
        return {
            props: {
                flightRates: [],
            },
        };
    }
}
