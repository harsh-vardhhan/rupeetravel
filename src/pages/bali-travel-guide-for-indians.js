import { useRef } from "react";
import styles from '@/styles/Home.module.css';
import {
    Text,
    Heading,
    Tag,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Link,
    Card,
    Box
} from '@chakra-ui/react';
import Seo from '@/component/seo';
import Header from "@/component/header";
import Image from 'next/image';
import CurrencyConverter from "@/component/CurrencyConverter";
import {
    IDRINRMarketRate
} from '../currency/currency';

export default function Home() {

    const FlightAndVisaRef = useRef(null);
    const FlightAndVisaClick = () => {
        FlightAndVisaRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day1Ref = useRef(null);
    const Day1Click = () => {
        Day1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day2Ref = useRef(null);
    const Day2Click = () => {
        Day2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day3Ref = useRef(null);
    const Day3Click = () => {
        Day3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day4Ref = useRef(null);
    const Day4Click = () => {
        Day4Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day5Ref = useRef(null);
    const Day5Click = () => {
        Day5Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day6Ref = useRef(null);
    const Day6Click = () => {
        Day6Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const Day7Ref = useRef(null);
    const Day7Click = () => {
        Day7Ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const TableRow = ({ onClick, label, tag, tagColor }) => (
        <Tr onClick={onClick} style={{ cursor: "pointer" }}>
            <Td>
                {tag && <Tag colorScheme={tagColor}>{tag}</Tag>}
                {tag && <br />}
                <div style={{ marginTop: tag ? 10 : 0 }}>
                    <b><u>{label}</u></b>
                </div>
            </Td>
        </Tr>
    );

    return (
        <>
            <Seo
                title="Rupee Travel | Bali travel guide for Indians"
                description="Bali Indonesia | Bali Currency | Bali Visa | Bali Travel Guide | Bali Travel Tips | Bali Travel Blog | Bali Travel Itinerary | Bali Travel Cost | Bali Travel Packages | Bali Travel Guide for Indians | Bali Travel Guide for Indian Tourists | Bali Travel Guide for Indian Families | Bali Travel Guide for Indian Couples | Bali Travel Guide for Indian Solo Travelers | Bali Travel Guide for Indian Backpackers | Bali Travel Guide for Indian Honeymooners | Bali Travel Guide for Indian"
                canonical={"https://www.rupeetravel.com/bali-travel-guide-for-indians"}
            />
            <main className={styles.main} >
                <Header
                    title={"Bali travel guide for Indians"}
                    blog={true}
                />
                <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div
                        className={"container mx-auto"}
                        style={{ maxWidth: '700px', marginTop: '20px' }}
                    >
                        <Image
                            src={"/images/bali-rice-field.webp"}
                            alt="Bali rice field"
                            height={1536}
                            width={2048}
                            style={{ marginTop: "10px" }}
                        />

                        <TableContainer style={{
                            borderWidth: 'medium',
                            borderColor: 'aliceblue',
                            marginTop: '10px',
                        }}>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Table of content</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <TableRow onClick={FlightAndVisaClick} label="Booking flights and applying visa" />
                                    <TableRow onClick={Day1Click} label="Day 1 - Kuta" tagColor="red" />
                                    <TableRow onClick={Day2Click} label="Day 2 - Seminyak" tagColor="teal" />
                                    <TableRow onClick={Day3Click} label="Day 3 - Canggu" tagColor="teal" />
                                    <TableRow onClick={Day4Click} label="Day 4 - Ubud" tagColor="teal" />
                                    <TableRow onClick={Day5Click} label="Day 5 - Ubud" tagColor="teal" />
                                    <TableRow onClick={Day6Click} label="Day 6 - Ubud" tagColor="teal" />
                                    <TableRow onClick={Day7Click} label="Day 7 - Uluwatu" tagColor="teal" />
                                </Tbody>
                            </Table>
                        </TableContainer>

                        <Heading style={{ marginTop: '20px' }} ref={FlightAndVisaRef}> Booking flight and applying visa</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            You can affordable return flights to Bali from New Delhi and Mumbai both. Just use
                            {" "}
                            <Link
                                href="https://www.google.com/travel/flights"
                                isExternal fontWeight="bold"
                                textDecoration="underline"
                            >
                                {"Google Flights"}
                            </Link>
                            {" "}
                            to see which date has the cheapest flight.
                            If you want to book a cheap flight, be flexible with your travel dates.

                        </Text>

                        <div style={{
                            marginTop: "10px",
                            borderWidth: 'medium',
                            borderColor: 'aliceblue'
                        }}>
                            <Image
                                src={"/images/bali-return-flight.webp"}
                                alt="Bali return flight"
                                height={700}
                                width={1000}
                            />
                        </div>

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Though Indonesia provides facility to apply for e-visa for Indian citizens, it is not mandatory.
                            You can simply get visa on arrival at the airport.
                            You need to pay 500,000 IDR for visa on arrival either via USD currency notes or via credit/debit card.
                        </Text>

                        <CurrencyConverter
                            currencyPair={'IDRINR'}
                            exchange={'forex market'}
                            rate={IDRINRMarketRate}
                            base={'IDR'}
                            quote={'INR'}
                            quoteSymbol={'₹'}
                            amount={500000}
                            region={'en-ID'}
                        />

                        <Heading ref={Day1Ref} style={{ marginTop: '20px' }}> Day 1: Kuta</Heading>

                        <div style={{
                            marginTop: "10px",
                            borderWidth: 'medium',
                            borderColor: 'aliceblue'
                        }}>
                            <Image
                                src={"/images/bali-kuta-arabica-cafe.webp"}
                                alt="Bali Kuta Arabica Cafe"
                                height={700}
                                width={1000}
                            />
                        </div>

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Kuta is a destination near the airport. You can enjoy walking on the beach, or visiting
                            {" "}
                            <Link
                                href="https://beachwalkbali.com/"
                                isExternal fontWeight="bold"
                                textDecoration="underline"
                            >
                                {"Beachwalk Shopping Center"}
                            </Link>
                            .
                            You might what can be so special about a shopping mall ?
                            well they have designed the mall aligned with theme of Bali.
                            Hence its unlike any other mall you have visited in India.
                            You can also try out Arabica cafe which is a Japanese coffee chain.
                            Their white themed cafe is great for Instagram photos.
                        </Text>

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What is the budget food option available?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                You can enjoy some good food within the Beachwalk Shopping Center.
                                They have a food court with a variety of options. We went for Padang kurin Restaurant.
                                We had chicken and rice dish for 61,000 IDR each.
                            </Text>
                            <Image
                                src={"/images/kuta-food.webp"}
                                alt="Chicken and rice at Padang kurin Restaurant"
                                height={300}
                                width={500}
                                style={{ marginTop: "10px" }}
                            />
                            <CurrencyConverter
                                currencyPair={'IDRINR'}
                                exchange={'forex market'}
                                rate={IDRINRMarketRate}
                                base={'IDR'}
                                quote={'INR'}
                                quoteSymbol={'₹'}
                                amount={61000}
                                region={'en-ID'}
                            />
                        </Card>

                        <div style={{
                            marginTop: "10px",
                        }}>
                            <Image
                                src={"/images/azul-beach-club.webp"}
                                alt="Bali Kuta Arabica Cafe"
                                height={700}
                                width={500}
                            />
                        </div>

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Kuta has multiple beach clubs that you can visit in the evening time. We visited Azul Beach Club.
                            You can enjoy the sunset view from the beach club.
                        </Text>

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What is the budget drink option available?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                Since you need to buy a drink to sit at a beach club, you can try out Bali Cider.
                                We had a bottle of Bali Cider for 49,000 IDR each.
                            </Text>
                            <Image
                                src={"/images/azul-beach-club-cider.webp"}
                                alt="Bali Cider at Azul Beach Club"
                                height={200}
                                width={400}
                                style={{ marginTop: "10px" }}
                            />
                            <CurrencyConverter
                                currencyPair={'IDRINR'}
                                exchange={'forex market'}
                                rate={IDRINRMarketRate}
                                base={'IDR'}
                                quote={'INR'}
                                quoteSymbol={'₹'}
                                amount={49000}
                                region={'en-ID'}
                            />
                        </Card>

                        <Heading ref={Day2Ref} style={{ marginTop: '20px' }}> Day 2: Seminyak</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`Raya Seminyak is a street which offers boutiques, art shops. 
                            you can also enjoy great cafe's and restaurants. Also, if you are looking for cash, 
                            there is an abundance of ATMs on this street.`}
                        </Text>

                        <Image
                            src={"/images/bali-seminyak-atms.webp"}
                            alt="ATMs at Raya Seminyak, Bali"
                            height={700}
                            width={1000}
                            style={{
                                marginTop: "10px",
                                borderWidth: 'medium',
                                borderColor: 'aliceblue'
                            }}

                        />

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What is the budget food option available?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                We had a Margherita pizza at a restaurant on Raya Seminyak for 93,000 IDR.
                                The place is called The Shisha House.
                            </Text>
                            <Image
                                src={"/images/margherita-seminyak.webp"}
                                alt="Margherita pizza at The Shisha House, Seminyak"
                                height={300}
                                width={500}
                                style={{ marginTop: "10px" }}
                            />
                            <CurrencyConverter
                                currencyPair={'IDRINR'}
                                exchange={'forex market'}
                                rate={IDRINRMarketRate}
                                base={'IDR'}
                                quote={'INR'}
                                quoteSymbol={'₹'}
                                amount={93000}
                                region={'en-ID'}
                            />
                        </Card>

                        <Image
                            src={"/images/seminyak-coconut-beach.webp"}
                            alt="Coconut water at Seminyak beach"
                            height={200}
                            width={400}
                            style={{
                                marginTop: "10px",
                                borderWidth: 'medium',
                                borderColor: 'aliceblue'
                            }}
                        />

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`By the evening, as the sun sets, you can visit the beach. 
                            There are multiple coconut vendors there but you can go with the one who 
                            offer free chairs to sit and enjoy the sunset.
                            The coconut water costs 30,000 IDR but you can bargain and get it for 25,000 IDR.`}
                        </Text>

                        <CurrencyConverter
                            currencyPair={'IDRINR'}
                            exchange={'forex market'}
                            rate={IDRINRMarketRate}
                            base={'IDR'}
                            quote={'INR'}
                            quoteSymbol={'₹'}
                            amount={30000}
                            region={'en-ID'}
                        />


                        <Image
                            src={"/images/seminyak-beach-bean-bag.webp"}
                            alt="Seminayk beach bean bag"
                            height={200}
                            width={400}
                            style={{
                                marginTop: "10px",
                                borderWidth: 'medium',
                                borderColor: 'aliceblue'
                            }}
                        />

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`By the night, within Seminyak beach, you can enjoy the beach clubs.
                            Beach clubs here are pretty much right on the beach unlike Kuta where they are 
                            across the road. This makes the experience even more special.`}
                        </Text>

                        <Heading ref={Day3Ref} style={{ marginTop: '20px' }}> Day 3: Canggu</Heading>

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`In day time you can visit Tanah lot temple. You can take a taxi via Grab app.
                            it's best to visit this place when in Canggu cause it's the closest from here.
                            The enterance fee to the temple costs 75,000 IDR/person`}
                        </Text>

                        <CurrencyConverter
                            currencyPair={'IDRINR'}
                            exchange={'forex market'}
                            rate={IDRINRMarketRate}
                            base={'IDR'}
                            quote={'INR'}
                            quoteSymbol={'₹'}
                            amount={75000}
                            region={'en-ID'}
                        />

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`Canggu has the amazing beach clubs for late night partying in Bali. 
                        One of the most popular one is FINNS Beach Club. The best part is that club has zero entry fee.
                        You have to only pay for the food and drinks you order.`}
                        </Text>

                        <Box display="flex" justifyContent="center" mt={4}>
                            <Box
                                as="iframe"
                                width="320px"
                                height="560px"
                                src="https://www.youtube.com/embed/GEymJ1R24wk"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </Box>

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What is the budget drink option available?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                To keep your partying experience budget friendly,
                                you can try out a Bintang beer.
                                along with that try to use the
                                {" "}
                                <Link
                                    href="https://finnsbeachclub.com/venue/beach-deluxe/drink-menu/#hh"
                                    isExternal fontWeight="bold"
                                    textDecoration="underline"
                                >
                                    {"happy hours"}
                                </Link>
                                {" "}
                                to get two bintang beers at the price of one
                                which will cost you 85,000 IDR.
                            </Text>
                            <CurrencyConverter
                                currencyPair={'IDRINR'}
                                exchange={'forex market'}
                                rate={IDRINRMarketRate}
                                base={'IDR'}
                                quote={'INR'}
                                quoteSymbol={'₹'}
                                amount={85000}
                                region={'en-ID'}
                            />
                        </Card>

                        <Heading ref={Day4Ref} style={{ marginTop: '20px' }}> Day 4: Ubud</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`You can visit Alas Hurum where you can experience mountainuous rice fields.
                            An amazing place for couple photoshoot.`}
                        </Text>

                        <Image
                            src={"/images/alas-hurum-ubud-bali.webp"}
                            alt="Alas Hurum, Ubud, Bali"
                            height={700}
                            width={1000}
                            style={{
                                marginTop: "10px",
                                borderWidth: 'medium',
                                borderColor: 'aliceblue'
                            }}
                        />

                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`The enterance fee to Alas Hurum costs 50,000 IDR/person`}
                        </Text>

                        <CurrencyConverter
                            currencyPair={'IDRINR'}
                            exchange={'forex market'}
                            rate={IDRINRMarketRate}
                            base={'IDR'}
                            quote={'INR'}
                            quoteSymbol={'₹'}
                            amount={50000}
                            region={'en-ID'}
                        />

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What is the budget food option available?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                We had a Smoked Bbq Chicken at the
                                {" "}
                                <Link
                                    href="https://alasharum.com/en/cretya-ubud"
                                    isExternal fontWeight="bold"
                                    textDecoration="underline"
                                >
                                    {"Cretya Club."}
                                </Link>
                                {" "}. It had cost us 125,000 IDR and buying that food also gives you access to their pool.
                            </Text>
                            <Image
                                src={"/images/alas-hurum-cretya-ubud.webp"}
                                alt="Margherita pizza at The Shisha House, Seminyak"
                                height={700}
                                width={1000}
                                style={{ marginTop: "10px" }}
                            />
                            <CurrencyConverter
                                currencyPair={'IDRINR'}
                                exchange={'forex market'}
                                rate={IDRINRMarketRate}
                                base={'IDR'}
                                quote={'INR'}
                                quoteSymbol={'₹'}
                                amount={125000}
                                region={'en-ID'}
                            />
                        </Card>

                        {/* <Heading ref={Day5Ref} style={{ marginTop: '20px' }}> Day 5: Ubud</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text>

                        <Heading ref={Day6Ref} style={{ marginTop: '20px' }}> Day 6: Ubud</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text>

                        <Heading ref={Day7Ref} style={{ marginTop: '20px' }}> Day 7: Uluwatu</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text> */}

                    </div>
                </div>
            </main >
        </>
    )
}

