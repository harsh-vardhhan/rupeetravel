import { useRef } from "react";
import styles from "@/styles/Home.module.css";
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
  Box,
} from "@chakra-ui/react";
import Seo from "@/component/seo";
import Header from "@/component/header";
import Image from "next/image";
import CurrencyConverter from "@/component/CurrencyConverter";
import { IDRINRMarketRate } from "../currency/currency";

export default function Home() {
  const FlightAndVisaRef = useRef(null);
  const FlightAndVisaClick = () => {
    FlightAndVisaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day1Ref = useRef(null);
  const Day1Click = () => {
    Day1Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day2Ref = useRef(null);
  const Day2Click = () => {
    Day2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day3Ref = useRef(null);
  const Day3Click = () => {
    Day3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day4Ref = useRef(null);
  const Day4Click = () => {
    Day4Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day5Ref = useRef(null);
  const Day5Click = () => {
    Day5Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day6Ref = useRef(null);
  const Day6Click = () => {
    Day6Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const Day7Ref = useRef(null);
  const Day7Click = () => {
    Day7Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const HotelsRef = useRef(null);
  const HotelsClick = () => {
    HotelsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const MoneySavingRef = useRef(null);
  const MoneySavingClick = () => {
    MoneySavingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const TotalCostRef = useRef(null);
  const TotalCostClick = () => {
    TotalCostRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const TableRow = ({ onClick, label }) => (
    <Tr onClick={onClick} style={{ cursor: "pointer" }}>
      <Td>
        <div>
          <b>
            <u>{label}</u>
          </b>
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
      <main className={styles.main}>
        <Header title={"Bali travel guide for Indians"} blog={true} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className={"container mx-auto"}
            style={{ maxWidth: "700px", marginTop: "20px" }}
          >
            <Image
              src={"/images/bali-rice-field.webp"}
              alt="Bali rice field"
              height={1536}
              width={2048}
              style={{ marginTop: "10px" }}
            />

            <TableContainer
              style={{
                borderWidth: "medium",
                borderColor: "aliceblue",
                marginTop: "10px",
              }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Table of content</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TableRow
                    onClick={FlightAndVisaClick}
                    label="Booking flights and applying visa"
                  />
                  <TableRow onClick={Day1Click} label="Day 1 - Kuta" />
                  <TableRow onClick={Day2Click} label="Day 2 - Seminyak" />
                  <TableRow onClick={Day3Click} label="Day 3 - Canggu" />
                  <TableRow onClick={Day4Click} label="Day 4 - Ubud" />
                  <TableRow onClick={Day5Click} label="Day 5 - Ubud" />
                  <TableRow onClick={Day6Click} label="Day 6 - Ubud" />
                  <TableRow onClick={Day7Click} label="Day 7 - Uluwatu" />
                  <TableRow onClick={HotelsClick} label="Hotels we stayed" />
                  <TableRow
                    onClick={MoneySavingClick}
                    label="Money saving tips"
                  />
                  <TableRow onClick={TotalCostClick} label="Total cost" />
                </Tbody>
              </Table>
            </TableContainer>

            <Heading style={{ marginTop: "20px" }} ref={FlightAndVisaRef}>
              {" "}
              Booking flight and applying visa
            </Heading>
            <Text style={{ marginTop: "20px" }} fontSize="xl">
              You can affordable return flights to Bali from New Delhi and
              Mumbai both. Just use{" "}
              <Link
                href="https://www.google.com/travel/flights"
                isExternal
                fontWeight="bold"
                textDecoration="underline"
              >
                {"Google Flights"}
              </Link>{" "}
              to see which date has the cheapest flight. If you want to book a
              cheap flight, be flexible with your travel dates.
            </Text>

            <div
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            >
              <Image
                src={"/images/bali-return-flight.webp"}
                alt="Bali return flight"
                height={700}
                width={1000}
              />
            </div>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Though Indonesia provides facility to apply for e-visa for Indian
              citizens, it is not mandatory. You can simply get visa on arrival
              at the airport. You need to pay 500,000 IDR for visa on arrival
              either via USD currency notes or via credit/debit card.
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={500000}
              region={"en-ID"}
            />

            <Heading ref={Day1Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 1: Kuta
            </Heading>

            <div
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            >
              <Image
                src={"/images/bali-kuta-arabica-cafe.webp"}
                alt="Bali Kuta Arabica Cafe"
                height={700}
                width={1000}
              />
            </div>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Kuta is a destination near the airport. You can enjoy walking on
              the beach, or visiting{" "}
              <Link
                href="https://beachwalkbali.com/"
                isExternal
                fontWeight="bold"
                textDecoration="underline"
              >
                {"Beachwalk Shopping Center"}
              </Link>
              . You might think what can be so special about a shopping mall ?
              well they have designed the mall aligned with theme of Bali. Hence
              its unlike any other mall you have visited in India. You can also
              try out Arabica cafe which is a Japanese coffee chain. Their white
              themed cafe is great for Instagram photos.
            </Text>

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading
                fontSize={"lg"}
              >{` What is the budget food option available?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                You can enjoy some good food within the Beachwalk Shopping
                Center. They have a food court with a variety of options. We
                went for Padang kurin Restaurant. We had chicken and rice dish
                for 61,000 IDR each.
              </Text>
              <Image
                src={"/images/kuta-food.webp"}
                alt="Chicken and rice at Padang kurin Restaurant"
                height={300}
                width={500}
                style={{ marginTop: "10px" }}
              />
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={61000}
                region={"en-ID"}
              />
            </Card>

            <div
              style={{
                marginTop: "10px",
              }}
            >
              <Image
                src={"/images/azul-beach-club.webp"}
                alt="Bali Kuta Arabica Cafe"
                height={700}
                width={500}
              />
            </div>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Kuta has multiple beach clubs that you can visit in the evening
              time. We visited Azul Beach Club. You can enjoy the sunset view
              from the beach club.
            </Text>

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading
                fontSize={"lg"}
              >{` What is the budget drink option available?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                Since you need to buy a drink to sit at a beach club, you can
                try out Bali Cider. We had a bottle of Bali Cider for 49,000 IDR
                each.
              </Text>
              <Image
                src={"/images/azul-beach-club-cider.webp"}
                alt="Bali Cider at Azul Beach Club"
                height={200}
                width={400}
                style={{ marginTop: "10px" }}
              />
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={49000}
                region={"en-ID"}
              />
            </Card>

            <Heading ref={Day2Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 2: Seminyak
            </Heading>
            <Text style={{ marginTop: "20px" }} fontSize="xl">
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
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading
                fontSize={"lg"}
              >{` What is the budget food option available?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                We had a Margherita pizza at a restaurant on Raya Seminyak for
                93,000 IDR. The place is called The Shisha House.
              </Text>
              <Image
                src={"/images/margherita-seminyak.webp"}
                alt="Margherita pizza at The Shisha House, Seminyak"
                height={300}
                width={500}
                style={{ marginTop: "10px" }}
              />
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={93000}
                region={"en-ID"}
              />
            </Card>

            <Image
              src={"/images/seminyak-coconut-beach.webp"}
              alt="Coconut water at Seminyak beach"
              height={200}
              width={400}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`By the evening, as the sun sets, you can visit the beach. 
                            There are multiple coconut vendors there but you can go with the one who 
                            offer free chairs to sit and enjoy the sunset.
                            The coconut water costs 30,000 IDR but you can bargain and get it for 25,000 IDR.`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={30000}
              region={"en-ID"}
            />

            <Image
              src={"/images/seminyak-beach-bean-bag.webp"}
              alt="Seminayk beach bean bag"
              height={200}
              width={400}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`By the night, within Seminyak beach, you can enjoy the beach clubs.
                            Beach clubs here are pretty much right on the beach unlike Kuta where they are 
                            across the road. This makes the experience even more special.`}
            </Text>

            <Heading ref={Day3Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 3: Canggu
            </Heading>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`In day time you can visit Tanah lot temple. You can take a taxi via Grab app.
                            it's best to visit this place when in Canggu cause it's the closest from here.
                            The enterance fee to the temple costs 75,000 IDR/person`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={75000}
              region={"en-ID"}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
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

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading
                fontSize={"lg"}
              >{` What is the budget drink option available?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                To keep your partying experience budget friendly, you can try
                out a Bintang beer. Along with that, try to use the{" "}
                <Link
                  href="https://finnsbeachclub.com/venue/beach-deluxe/drink-menu/#hh"
                  isExternal
                  fontWeight="bold"
                  textDecoration="underline"
                >
                  {"happy hours"}
                </Link>{" "}
                to get two bintang beers at the price of one which will cost you
                85,000 IDR.
              </Text>
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={85000}
                region={"en-ID"}
              />
            </Card>

            <Heading ref={Day4Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 4: Ubud
            </Heading>

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading fontSize={"lg"}>{` How to reach Ubud?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                {`Ubud is relatively far from Canggu hence we couldn't go by scooter. 
                            You can also book a Grab taxi like us. It had cost us 351,000 IDR for the trip.`}
              </Text>
              <Image
                src={"/images/canggu-to-ubud-grab.webp"}
                alt="Canggu to Ubud in Grab taxi"
                height={700}
                width={400}
                style={{
                  marginTop: "10px",
                  borderWidth: "medium",
                  borderColor: "aliceblue",
                }}
              />
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={351000}
                region={"en-ID"}
              />
            </Card>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
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
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`The enterance fee to Alas Hurum costs 50,000 IDR/person`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={50000}
              region={"en-ID"}
            />

            <Card
              style={{
                padding: "20px",
                marginTop: "10px",
                backgroundColor: "#FAF3F0",
              }}
            >
              <Heading
                fontSize={"lg"}
              >{` What is the budget food option available?`}</Heading>
              <Text style={{ marginTop: "20px" }} fontSize="xl">
                We had a Smoked Bbq Chicken at the{" "}
                <Link
                  href="https://alasharum.com/en/cretya-ubud"
                  isExternal
                  fontWeight="bold"
                  textDecoration="underline"
                >
                  {"Cretya Club."}
                </Link>{" "}
                . It had cost us 125,000 IDR and buying that food also gives you
                access to their pool.
              </Text>
              <Image
                src={"/images/alas-hurum-cretya-ubud.webp"}
                alt="Margherita pizza at The Shisha House, Seminyak"
                height={700}
                width={1000}
                style={{ marginTop: "10px" }}
              />
              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={125000}
                region={"en-ID"}
              />
            </Card>

            <Heading ref={Day5Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 5: Ubud
            </Heading>

            <Image
              src={"/images/tirta-empul-temple-ubud.webp"}
              alt="Tirta Empul temple, Bali"
              height={700}
              width={1000}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />
            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`Tirta Empul temple is the Hindu temple where you take bath in the holy water. 
                            We travelled to this temple by renting a scooty cause its a lot cheaper than taxi. 
                            The enterance fee to temple is 75,000 IDR/person`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={75000}
              region={"en-ID"}
            />

            <Heading ref={Day6Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 6: Ubud
            </Heading>
            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`Tegenungan waterfall comprises of an experience
                             where you get to walk down the stairs
                            of a mountain eventually reaching the waterfall. 
                            The enterance cost to waterfall is 20,000 IDR/person`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={20000}
              region={"en-ID"}
            />

            <Image
              src={"/images/tegenungan-waterfall-omma-club.webp"}
              alt="Tirta Empul temple, Bali"
              height={700}
              width={1000}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              <Link
                href="https://ommabali.com/"
                isExternal
                fontWeight="bold"
                textDecoration="underline"
              >
                {"Omma Club"}
              </Link>
              {` is the fun part which gives you access to pool with a view of the waterfall.
                            You can have certain sittings in the club and access to the pool
                            for free, if you order food or coffee.`}
            </Text>

            <Heading ref={Day7Ref} style={{ marginTop: "20px" }}>
              {" "}
              Day 7: Uluwatu
            </Heading>
            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`We went for Uluwatu to see the Uluwatu temple. Also being close to the airport, we planned it for our last day`}
            </Text>

            <Image
              src={"/images/uluwatu-temple.webp"}
              alt="Uluwatu temple, Bali"
              height={200}
              width={400}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`Uluwatu temple has a scenic view of sea from the mountain.
                              Be precautious, a lot of monkeys in the temple and nearby areas. 
                              The entry fee of the temple is 50,000 IDR/person`}
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={50000}
              region={"en-ID"}
            />

            <Heading ref={HotelsRef} style={{ marginTop: "20px" }}>
              Hotels we stayed
            </Heading>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`Here is the list of hotels in which we stayed`}
            </Text>

            <TableContainer
              style={{
                borderWidth: "medium",
                borderColor: "aliceblue",
                marginTop: "10px",
              }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Hotel </Th>
                    <Th>Price </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Zuri Hotel, Kuta</Td>
                    <Td>₹ 2,100</Td>
                  </Tr>
                  <Tr>
                    <Td>Lokasari Retreat</Td>
                    <Td>₹ 2,074</Td>
                  </Tr>
                  <Tr>
                    <Td>Puri Padma Hotel & Resort</Td>
                    <Td>₹ 2,800</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              {`but its important 
                            you don't blindly go for the same options. 
                            Instead check on Google Map with hotel filter to see the budget hotels that exist around you
                            when you're in Bali.`}
            </Text>

            <Image
              src={"/images/google-map-with-hotels-filter.webp"}
              alt="Uluwatu temple, Bali"
              height={700}
              width={1000}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Heading ref={MoneySavingRef} style={{ marginTop: "20px" }}>
              Money saving tips
            </Heading>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Avoid using ATMs with mark-up fee. The ATMs will most likely
              inform you before cash withdrawal
            </Text>

            <Image
              src={"/images/atm-mark-up-fee.webp"}
              alt="ATM mark-up fee"
              height={400}
              width={400}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              If you would like to further save money, but at the cost of less
              convenience, you can bring USD currency notes from India and get
              them converted to IDR at a forex dealer. By using a forex dealer,
              not only do you save on the markup, but you also get better
              conversion rates.
            </Text>

            <Image
              src={"/images/IDR-forex-dealer.webp"}
              alt="ATM mark-up fee"
              height={400}
              width={700}
              style={{
                marginTop: "10px",
                borderWidth: "medium",
                borderColor: "aliceblue",
              }}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Grab Taxi is a relatively more expensive option to commute in
              Bali. Instead, rent a scooter to travel. We got a scooter at a
              cost of 75,000 IDR per day, which already had 1 litre of petrol.
            </Text>

            <CurrencyConverter
              currencyPair={"IDRINR"}
              exchange={"forex market"}
              rate={IDRINRMarketRate}
              base={"IDR"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={75000}
              region={"en-ID"}
            />

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Book hotels which have free breakfast included with the booking.
              Free breakfast for couples saves decent money every morning.
            </Text>

            <Heading ref={TotalCostRef} style={{ marginTop: "20px" }}>
              {" "}
              Total cost of trip for a couple
            </Heading>

            <Text style={{ marginTop: "20px" }} fontSize="xl">
              Depsite being fairly detailed about the cost, still consider
              significant variation in cost for your own trip since personal
              preferences can vary.
            </Text>

            <TableContainer
              style={{
                borderWidth: "medium",
                borderColor: "aliceblue",
                marginTop: "10px",
              }}
            >
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th>Category</Th>
                    <Th>Cost</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Day 1 - Kuta</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 660</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 660</Td>
                  </Tr>
                  <Tr>
                    <Td>Drinks</Td>
                    <Td>₹ 530</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,100</Td>
                  </Tr>
                  <Tr>
                    <Td>Coffee</Td>
                    <Td>₹ 300</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 2 - Seminyak</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 500</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Drinks</Td>
                    <Td>₹ 530</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,100</Td>
                  </Tr>
                  <Tr>
                    <Td>Coconut</Td>
                    <Td>₹ 320</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 3 - Canggu</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Tanah Lot Temple</Td>
                    <Td>₹ 800</Td>
                  </Tr>
                  <Tr>
                    <Td>Drinks</Td>
                    <Td>₹ 900</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,100</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 4 - Ubud</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Alas Hurum Entry Fee</Td>
                    <Td>₹ 540</Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 675</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,074</Td>
                  </Tr>
                  <Tr>
                    <Td>Scooter</Td>
                    <Td>₹ 450</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 5 - Ubud</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Empul Temple Entry Fee</Td>
                    <Td>₹ 810</Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 675</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,074</Td>
                  </Tr>
                  <Tr>
                    <Td>Scooter</Td>
                    <Td>₹ 450</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 6 - Ubud</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Waterfall Entry Fee</Td>
                    <Td>₹ 216</Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 675</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,800</Td>
                  </Tr>
                  <Tr>
                    <Td>Scooter</Td>
                    <Td>₹ 450</Td>
                  </Tr>
                  <Tr>
                    <Td>Coffee (Omma Club)</Td>
                    <Td>₹ 250</Td>
                  </Tr>

                  <Tr>
                    <Td>Day 7 - Uluwatu</Td>
                    <Td></Td>
                  </Tr>
                  <Tr>
                    <Td>Uluwatu Temple Entry Fee</Td>
                    <Td>₹ 540</Td>
                  </Tr>
                  <Tr>
                    <Td>Lunch</Td>
                    <Td>₹ 600</Td>
                  </Tr>
                  <Tr>
                    <Td>Dinner</Td>
                    <Td>₹ 675</Td>
                  </Tr>
                  <Tr>
                    <Td>Hotel</Td>
                    <Td>₹ 2,074</Td>
                  </Tr>
                  <Tr>
                    <Td>Scooter</Td>
                    <Td>₹ 450</Td>
                  </Tr>
                  <Tr>
                    <Td>Coffee</Td>
                    <Td>₹ 250</Td>
                  </Tr>

                  <Tr>
                    <Td>Visa on Arrival</Td>
                    <Td>₹ 5,400</Td>
                  </Tr>
                  <Tr>
                    <Td>Flight</Td>
                    <Td>₹ 63,000</Td>
                  </Tr>
                  <Tr>
                    <Td>Grab Taxi</Td>
                    <Td>₹ 10,000</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Cost</Td>
                    <Td>₹ 1,10,228</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
    </>
  );
}
