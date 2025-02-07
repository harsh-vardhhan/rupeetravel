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

  const TableRow = ({ onClick, label, tag, tagColor }) => (
    <Tr onClick={onClick} style={{ cursor: "pointer" }}>
      <Td>
        {tag && <Tag colorScheme={tagColor}>{tag}</Tag>}
        {tag && <br />}
        <div style={{ marginTop: tag ? 10 : 0 }}>
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
                  <TableRow
                    onClick={Day1Click}
                    label="Day 1 - Kuta"
                    tagColor="red"
                  />
                  <TableRow
                    onClick={Day2Click}
                    label="Day 2 - Seminyak"
                    tagColor="teal"
                  />
                  <TableRow
                    onClick={Day3Click}
                    label="Day 3 - Canggu"
                    tagColor="teal"
                  />
                  <TableRow
                    onClick={Day4Click}
                    label="Day 4 - Ubud"
                    tagColor="teal"
                  />
                  <TableRow
                    onClick={Day5Click}
                    label="Day 5 - Ubud"
                    tagColor="teal"
                  />
                  <TableRow
                    onClick={Day6Click}
                    label="Day 6 - Ubud"
                    tagColor="teal"
                  />
                  <TableRow
                    onClick={Day7Click}
                    label="Day 7 - Uluwatu"
                    tagColor="teal"
                  />
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
              citizens, it is not mandatory. You can simply get get visa on
              arrival at the airport. You need to pay 500,000 IDR for visa on
              arrival either via USD currency notes or via credit/debit card.
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
              . You might what can be so special about a shopping mall ? well
              they have designed the mall aligned with theme of Bali. Hence its
              unlike any other mall you have visited in India. You can also try
              out Arabica cafe which is a Japanese coffee chain. Their white
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

            {/* <Heading ref={Day2Ref} style={{ marginTop: '20px' }}> Day 2: Seminyak</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text>

                        <Heading ref={Day3Ref} style={{ marginTop: '20px' }}> Day 3: Canggu</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text>

                        <Heading ref={Day4Ref} style={{ marginTop: '20px' }}> Day 4: Ubud</Heading>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {` `}
                        </Text>

                        <Heading ref={Day5Ref} style={{ marginTop: '20px' }}> Day 5: Ubud</Heading>
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
      </main>
    </>
  );
}
