import { useRef } from "react";
import {
  Text,
  Heading,
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
  UnorderedList,
  ListItem,
  Flex
} from "@chakra-ui/react";
import Seo from "@/component/seo";
import Header from "@/component/header";
import Image from "next/image";
import CurrencyConverter from "@/component/CurrencyConverter";
import PrecipitationChart from "@/component/PrecipitationChart";
import VisaStamp from "@/component/VisaStamp";
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

  const baliData = [
    { month: 'Jan', days: 19 },
    { month: 'Feb', days: 18 },
    { month: 'Mar', days: 20 },
    { month: 'Apr', days: 12 },
    { month: 'May', days: 8 },
    { month: 'Jun', days: 7 },
    { month: 'Jul', days: 4 },
    { month: 'Aug', days: 3 },
    { month: 'Sep', days: 3 },
    { month: 'Oct', days: 6 },
    { month: 'Nov', days: 10 },
    { month: 'Dec', days: 16 }
  ];

  const TableRow = ({ onClick, label }) => (
    <Tr onClick={onClick} style={{ cursor: "pointer" }}>
      <Td fontSize={{ base: "md", md: "lg", lg: "xl" }}>
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
      <Flex justify="center" flex={1}>
        <Box
          maxW={{ base: "375px", md: "80vw", lg: "700px" }}
          mt={{ base: "10px", md: "15px", lg: "20px" }}
          p={{ base: "20px", md: "15px", lg: "20px" }}
          className="container"
          mx="auto"
        >
          <Header title={"Bali travel guide for Indians"} blog={true} />
          <Image
            src={"/images/bali-rice-field.webp"}
            alt="Bali rice field"
            height={1536}
            width={2048}
            style={{
              marginTop: "10px",
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <TableContainer
            style={{
              borderWidth: "medium",
              borderColor: "aliceblue",
              marginTop: "10px",
              width: "100%",
              overflowX: "auto"
            }}
          >
            <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
              <Thead>
                <Tr>
                  <Th fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                    Table of content
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <TableRow
                  onClick={FlightAndVisaClick}
                  label="Preparing for Bali trip"
                />
                <TableRow onClick={Day1Click} label="Day 1 - Kuta" />
                <TableRow onClick={Day2Click} label="Day 2 - Seminyak" />
                <TableRow onClick={Day3Click} label="Day 3 - Canggu" />
                <TableRow onClick={Day4Click} label="Day 4 - Ubud" />
                <TableRow onClick={Day5Click} label="Day 5 - Ubud" />
                <TableRow onClick={Day6Click} label="Day 6 - Ubud" />
                <TableRow onClick={Day7Click} label="Day 7 - Uluwatu" />
                <TableRow onClick={HotelsClick} label="Hotels" />
                <TableRow
                  onClick={MoneySavingClick}
                  label="Money saving tips"
                />
                <TableRow onClick={TotalCostClick} label="Total cost" />
              </Tbody>
            </Table>
          </TableContainer>

          <Heading
            style={{ marginTop: "20px" }}
            ref={FlightAndVisaRef}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Preparing for Bali trip
          </Heading>

          <Heading
            as={'h3'}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            Bali weather
          </Heading>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            The best months to travel Bali are:
          </Text>

          <UnorderedList fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            <ListItem>July</ListItem>
            <ListItem>August</ListItem>
            <ListItem>September</ListItem>
          </UnorderedList>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Other months can seriously ruin your holiday experience.
            A day spent waiting for rain to stop is a day wasted from your holiday.
          </Text>
          <PrecipitationChart
            data={baliData}
            destinationName="Bali"
            destinationIcon="🌴"
          />
          <Heading
            as={'h3'}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            Delhi to Bali flight
          </Heading>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            You can affordable return flights to Bali from New Delhi and
            Mumbai both. Just use{" "}
            <Link
              href="https://www.google.com/travel/flights"
              isExternal
              fontWeight="bold"
              textDecoration="underline"
            >
              {"Google Flights"}
            </Link>
            {` to see which date has the cheapest flight. If you want to book a
              cheap flight, be flexible with your travel dates. For those who are price conscious like me, fly with VietJet Air. 
              Even though it doesn't offer a direct flight to Bali, it's a lot cheaper than direct flights.`}
          </Text>

          <div
            style={{
              marginTop: "10px",
              borderWidth: "medium",
              borderColor: "aliceblue",
              width: "100%"
            }}
          >
            <Image
              src={"/images/bali-return-flight.webp"}
              alt="Bali return flight"
              height={700}
              width={1000}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </div>

          <Heading
            as={'h3'}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          >
            Visa for Bali
          </Heading>
          <VisaStamp />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Though Indonesia provides facility to apply for e-visa for Indian
              citizens, it is not mandatory. You can simply get visa on arrival
              at the airport. You need to pay 500,000 IDR for visa on arrival
              either via USD currency notes or via credit/debit card.`}
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

          <Heading
            ref={Day1Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 1: Kuta
          </Heading>

          <div
            style={{
              marginTop: "10px",
              borderWidth: "medium",
              borderColor: "aliceblue",
              width: "100%"
            }}
          >
            <Image
              src={"/images/bali-kuta-arabica-cafe.webp"}
              alt="Bali Kuta Arabica Cafe"
              height={700}
              width={1000}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </div>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`What is the budget food option available?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
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
                style={{
                  marginTop: "10px",
                  height: "auto",
                  objectFit: "cover"
                }}
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
            </div>
          </Card>

          <div
            style={{
              marginTop: "10px",
              width: "100%"
            }}
          >
            <Image
              src={"/images/azul-beach-club.webp"}
              alt="Bali Kuta Arabica Cafe"
              height={700}
              width={500}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </div>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Kuta has multiple beach clubs that you can visit in the evening
            time. We visited Azul Beach Club. You can enjoy the sunset view
            from the beach club.
          </Text>

          <Card
            style={{
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`What is the budget drink option available?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                Since you need to buy a drink to sit at a beach club, you can
                try out Bali Cider. We had a bottle of Bali Cider for 49,000 IDR
                each.
              </Text>
              <Image
                src={"/images/azul-beach-club-cider.webp"}
                alt="Bali Cider at Azul Beach Club"
                height={200}
                width={400}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
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
            </div>
          </Card>

          <Heading
            ref={Day2Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 2: Seminyak
          </Heading>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Card
            style={{
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`What is the budget food option available?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                We had a Margherita pizza at a restaurant on Raya Seminyak for
                93,000 IDR. The place is called The Shisha House.
              </Text>
              <Image
                src={"/images/margherita-seminyak.webp"}
                alt="Margherita pizza at The Shisha House, Seminyak"
                height={300}
                width={500}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
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
            </div>
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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
              'width': "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`By the night, within Seminyak beach, you can enjoy the beach clubs.
                            Beach clubs here are pretty much right on the beach unlike Kuta where they are
                            across the road. This makes the experience even more special.`}
          </Text>

          <Heading
            ref={Day3Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 3: Canggu
          </Heading>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Canggu has the amazing beach clubs for late night partying in Bali.
                        One of the most popular one is FINNS Beach Club. The best part is that club has zero entry fee.
                        You have to only pay for the food and drinks you order.`}
          </Text>

          <Box display="flex" justifyContent="center" mt={4}>
            <Box
              as="iframe"
              width={{ base: "100%", md: "320px" }}
              height={{ base: "400px", md: "560px" }}
              src="https://www.youtube.com/embed/GEymJ1R24wk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Box>

          <Card
            style={{
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`What is the budget drink option available?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
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
            </div>
          </Card>

          <Heading
            ref={Day4Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 4: Ubud
          </Heading>

          <Card
            style={{
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`How to reach Ubud?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
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
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
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
            </div>
          </Card>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`You can visit Alas Hurum where you can experience mountainous rice fields.
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`The entrance fee to Alas Hurum costs 50,000 IDR/person`}
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
              padding: { base: "10px", md: "15px", lg: "20px" },
              marginTop: "10px",
              backgroundColor: "#FAF3F0",
              width: "100%"
            }}
          >
            <div style={{
              marginLeft: "5%",
              width: '90%',
              marginRight: "5%",
              marginTop: 20,
              marginBottom: 20
            }}>
              <Heading
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                {`What is the budget food option available?`}
              </Heading>
              <Text
                style={{ marginTop: "20px" }}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
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
                alt="Smoked BBQ Chicken at Cretya Club, Ubud"
                height={700}
                width={1000}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
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
            </div>
          </Card>

          <Heading
            ref={Day5Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Tirta Empul temple is the Hindu temple where you take bath in the holy water.
                            We travelled to this temple by renting a scooty cause its a lot cheaper than taxi.
                            The entrance fee to temple is 75,000 IDR/person`}
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

          <Heading
            ref={Day6Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 6: Ubud
          </Heading>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Tegenungan waterfall comprises of an experience
                             where you get to walk down the stairs
                            of a mountain eventually reaching the waterfall.
                            The entrance cost to waterfall is 20,000 IDR/person`}
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
            alt="Tegenungan waterfall, Bali"
            height={700}
            width={1000}
            style={{
              marginTop: "10px",
              borderWidth: "medium",
              borderColor: "aliceblue",
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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

          <Heading
            ref={Day7Ref}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Day 7: Uluwatu
          </Heading>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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

          <Heading
            ref={HotelsRef}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Hotels we stayed
          </Heading>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Here is the list of hotels in which we stayed`}
          </Text>

          <TableContainer
            style={{
              borderWidth: "medium",
              borderColor: "aliceblue",
              marginTop: "10px",
              width: "100%",
              overflowX: "auto"
            }}
          >
            <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
              <Thead>
                <Tr>
                  <Th fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                    Hotel
                  </Th>
                  <Th fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                    Price
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    <Link
                      isExternal
                      fontWeight="bold"
                      textDecoration="underline"
                      href="https://www.google.com/search?q=zuri+kuta+hotel">
                      Grand Zuri Hotel, Kuta
                    </Link>
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,100
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    <Link
                      isExternal
                      fontWeight="bold"
                      textDecoration="underline"
                      href="https://www.google.com/search?q=lokasari+retreat+ubud">
                      Lokasari Retreat, Ubud
                    </Link>
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,074
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    <Link
                      isExternal
                      fontWeight="bold"
                      textDecoration="underline"
                      href="https://www.google.com/search?q=Puri+Padma+Hotel+%26+Resort+ubud">
                      Puri Padma Hotel & Resort
                    </Link>
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,800
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`but its important
                            you don't blindly go for the same options.
                            Instead check on Google Map with hotel filter to see the budget hotels that exist around you
                            when you're in Bali.`}
          </Text>

          <Image
            src={"/images/google-map-with-hotels-filter.webp"}
            alt="Google Map with hotels filter"
            height={700}
            width={1000}
            style={{
              marginTop: "10px",
              borderWidth: "medium",
              borderColor: "aliceblue",
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Heading
            ref={MoneySavingRef}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Money saving tips
          </Heading>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            If you would like to further save money, but at the cost of less
            convenience, you can bring USD currency notes from India and get
            them converted to IDR at a forex dealer. By using a forex dealer,
            not only you save on the mark-up fee, but you also get better
            conversion rates.
          </Text>

          <Image
            src={"/images/IDR-forex-dealer.webp"}
            alt="Forex dealer in Bali"
            height={400}
            width={700}
            style={{
              marginTop: "10px",
              borderWidth: "medium",
              borderColor: "aliceblue",
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
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

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Book hotels which have free breakfast included with the booking.
            Free breakfast for couples saves decent money every morning.
          </Text>

          <Heading
            ref={TotalCostRef}
            style={{ marginTop: "20px" }}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            Bali trip cost from India for couple
          </Heading>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Despite being fairly detailed about the cost, still consider
            significant variation in cost for your own trip since personal
            preferences vary.
          </Text>

          <TableContainer
            style={{
              borderWidth: "medium",
              borderColor: "aliceblue",
              marginTop: "10px",
              width: "100%",
              overflowX: "auto"
            }}
          >
            <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
              <Thead>
                <Tr>
                  <Th fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                    Category
                  </Th>
                  <Th fontSize={{ base: "md", md: "lg", lg: "xl" }}>
                    Cost
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 1 - Kuta
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 660
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 660
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Drinks
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 530
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,100
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Coffee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 300
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 2 - Seminyak
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 500
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Drinks
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 530
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,100
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Coconut
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 320
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 3 - Canggu
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Tanah Lot Temple
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 800
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Drinks
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 900
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,100
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 4 - Ubud
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Alas Hurum Entry Fee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 540
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 675
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,074
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Scooter
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 450
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 5 - Ubud
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Empul Temple Entry Fee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 810
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 675
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,074
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Scooter
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 450
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 6 - Ubud
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Waterfall Entry Fee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 216
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 675
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,800
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Scooter
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 450
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Coffee (Omma Club)
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 250
                  </Td>
                </Tr>

                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Day 7 - Uluwatu
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Uluwatu Temple Entry Fee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 540
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Lunch
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 600
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Dinner
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 675
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Hotel
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 2,074
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Scooter
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 450
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Coffee
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 250
                  </Td>
                </Tr>
                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Miscellaneous
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Visa on Arrival
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 5,400
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Flight
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 63,000
                  </Td>
                </Tr>
                <Tr>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Grab Taxi
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 10,000
                  </Td>
                </Tr>
                <Tr>
                  <Td style={{ fontWeight: "bold" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    Total Cost
                  </Td>
                  <Td fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    ₹ 1,10,228
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
}