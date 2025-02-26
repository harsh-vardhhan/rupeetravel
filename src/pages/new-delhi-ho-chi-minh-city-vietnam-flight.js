import styles from "@/styles/Home.module.css";
import {
    Text,
    Box,
} from "@chakra-ui/react";
import Header from "@/component/header";
import Seo from "@/component/seo";
import FlightTabView from "@/component/FlightTabView"; // Import the tabbed component
import fs from "fs";
import path from "path";

export default function Home({ flightRates }) {
    // Define the route-specific values
    const originCity = "New Delhi";
    const destinationCity = "Ho Chi Minh City";
    
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

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "public", "data", "flight-price.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    let flightRates = JSON.parse(fileContents);

    // Apply the same filtering logic from FlightTabView.js at build time
    const originCity = "New Delhi";
    const destinationCity = "Ho Chi Minh City";

    flightRates = flightRates.filter(rate => 
        (rate.origin === originCity && rate.destination === destinationCity) ||
        (rate.origin === destinationCity && rate.destination === originCity)
    );

    // Sort flights by price (lowest to highest)
    flightRates.sort((a, b) => a.price_inr - b.price_inr);

    return {
        props: {
            flightRates,
        },
    };
}