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
    const destinationCity = "Phu Quoc";
    
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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const origin = "Mumbai";
    const destination = "Phu Quoc";

    const res = await fetch(`${baseUrl}/api/flights?origin=${origin}&destination=${destination}`);
    const flightRates = await res.json();

    return {
        props: {
            flightRates,
        },
        revalidate: 3600, // Rebuild every 1 hour
    };
}