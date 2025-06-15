"use client";

import { useRef } from "react";
import {
  Text,
  Heading,
  CardFooter,
  ListItem,
  UnorderedList,
  Stack,
  Card,
  Tag,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  CardBody,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Seo from "../../component/seo";
import Header from "../../component/header";
import Image from "next/image";
import StructuredData from "../../component/structuredData";
import CurrencyConverter from "../../component/CurrencyConverter";
import {
  USDINRMarketRate,
  USDINRBookMyForexRate,
  INRVNDMarketRate,
  INRVNDBookMyForexRate,
  VNDINRMarketRate,
} from "../../currency/currency";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "But why use cash in Vietnam and not credit or debit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vietnam is still predominantly a cash-first country. Using only credit and debit cards will limit the places you can visit, like street food places or even getting a Grab bike. Hence, you always want to keep Vietnamese Dong, the local currency, with your credit and debit cards.",
        },
      },
      {
        "@type": "Question",
        name: "Why is buying VND so expensive in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vietnamese currency VND is a exotic currency, meaning the currency does not have sufficient demand in the global market. Less buyer and sellers of the currency makes the buying and selling cost very high.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy USD currency notes from BookMyForex whenever I want?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can only buy USD currency notes from an authorized forex dealer like BookMyForex when you have a valid visa, like Vietnam's e-visa and air tickets for the travel destination.",
        },
      },
      {
        "@type": "Question",
        name: "What if I didn't spend all the USD I purchased for my Vietnam travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As an Indian citizen, you can keep $2,000 physical currency notes. Since USD is a globally accepted currency, you can use it for your next international travel to any other country.",
        },
      },
      {
        "@type": "Question",
        name: "So, if you have zero forex markup debit card, you don't need to carry USD currency notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, I would recommend keeping USD currency notes as an alternate solution. That's cause there have been events where banks like Niyo and Paytm disabled international transactions due to regulatory issues. Physical USD currency notes keep you immune from such situations.",
        },
      },
      {
        "@type": "Question",
        name: "Why is conversion rates for VND via Vietnam ATM's so great?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment networks like Visa and MasterCard use the forex market (which are very liquid - many buyers and sellers of currency) to get great conversion rates unlike local forex dealer. Also, behind the scene it's simulating the same smart conversion technique (INR - USD - VND).",
        },
      },
      {
        "@type": "Question",
        name: "Can you bring back the Vietnam currency to India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can bring back ₫15,000,000 VND of physical currency notes to India without declaring to the Vietnamese customs.",
        },
      },
      {
        "@type": "Question",
        name: "What to do with the unspent Vietnam currency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you plan to travel to Vietnam again, you can keep it for your next visit. But if you don't, you can sell it in exchange for Indian Rupee to an authorized Forex dealer, like BookMyForex.",
        },
      },
    ],
  };

  const INRVNDRef = useRef(null);
  const INRVNDClick = () => {
    INRVNDRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buyVNDRef = useRef(null);
  const buyVNDClick = () => {
    buyVNDRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buyUSDRef = useRef(null);
  const buyUSDClick = () => {
    buyUSDRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const withdrawVNDRef = useRef(null);
  const withdrawVNDClick = () => {
    withdrawVNDRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const VNDNotesRef = useRef(null);
  const VNDNotesClick = () => {
    VNDNotesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Get Vietnam currency in India"
        description="Vietnam currency | Vietnamese Dong | VND"
        canonical={"https://www.rupeetravel.com/how-to-get-vietnam-currency"}
      />

      <Flex justify="center" flex={1}>
        <Box
          maxW={{ base: "375px", md: "80vw", lg: "700px" }}
          mt={{ base: "10px", md: "15px", lg: "20px" }}
          p={{ base: "20px", md: "15px", lg: "20px" }}
          className="container"
          mx="auto"
        >
          <Header title={"How to get Vietnam currency in India"} blog={true} />
          <Image
            src={"/images/tools.avif"}
            alt="Zero forex charges cards"
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
                <Tr onClick={() => INRVNDClick()}>
                  <Td>
                    <b>
                      <u>INR to Vietnam currency</u>
                    </b>
                  </Td>
                </Tr>
                <Tr onClick={() => buyVNDClick()}>
                  <Td>
                    <Tag colorScheme="red">Dumb way</Tag>
                    <br />
                    <div style={{ marginTop: 10 }}>
                      <b>
                        <u>Buy Vietnam currency in India</u>
                      </b>
                    </div>
                  </Td>
                </Tr>
                <Tr onClick={() => buyUSDClick()}>
                  <Td>
                    <Tag colorScheme="teal">Smart way</Tag>
                    <br />
                    <div style={{ marginTop: 10 }}>
                      <b>
                        <u>Buy USD in India</u>
                      </b>
                    </div>
                  </Td>
                </Tr>
                <Tr onClick={() => withdrawVNDClick()}>
                  <Td>
                    <Tag colorScheme="teal">Smartest way</Tag>
                    <br />
                    <div style={{ marginTop: 10 }}>
                      <b>
                        <u>Withdraw VND from Vietnam ATM</u>
                      </b>
                    </div>
                  </Td>
                </Tr>
                <Tr onClick={() => VNDNotesClick()}>
                  <Td>
                    <b>
                      <u>Vietnam currency in Indian Rupees</u>
                    </b>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Getting foreign currency is a crucial piece of travel experience. In
            a foreign country, no access to local currency can be a scary
            experience.
            <br />
            Hence, we will learn how to get Vietnamese Dong (VND):
          </Text>
          <UnorderedList style={{ marginTop: "10px", fontSize: "1.25rem" }}>
            <ListItem>at right rates</ListItem>
            <ListItem>in the legal way</ListItem>
            <ListItem>in your own country (get VND in India)</ListItem>
            <ListItem>in foreign country (get VND in Vietnam)</ListItem>
            <ListItem>in the right amount</ListItem>
          </UnorderedList>

          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{` But why use cash in Vietnam and not credit or debit cards?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              Vietnam is still predominantly a cash-first country. Using only
              credit and debit cards will limit the places you can visit, like
              street food places or even getting a{" "}
              <a href="https://www.rupeetravel.com/food-delivery-taxi-vietnam">
                <b>
                  <u>{`Grab`}</u>
                </b>
              </a>{" "}
              bike. Hence, you always want to keep Vietnamese Dong, the local
              currency, with your credit and debit cards.
            </Text>
          </Card>

          <Heading style={{ marginTop: "20px" }} ref={INRVNDRef}>
            {" "}
            INR to Vietnam currency
          </Heading>
          <CurrencyConverter
            currencyPair={"INRVND"}
            exchange={"forex market"}
            rate={INRVNDMarketRate}
            base={"INR"}
            quote={"VND"}
            quoteSymbol={"₫"}
            amount={100}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            Try to buy Vietnamese Dong (VND) closest to the forex rate. This is
            where it gets tricky. You need to get the right foriegn currency at
            the right place to get the right price.
          </Text>
          <Heading ref={buyVNDRef} style={{ marginTop: "20px" }}>
            {" "}
            Buy Vietnam currency in India
          </Heading>
          <CurrencyConverter
            currencyPair={"INRVND"}
            exchange={"BookMyForex"}
            rate={INRVNDBookMyForexRate}
            base={"INR"}
            quote={"VND"}
            quoteSymbol={"₫"}
            amount={100}
            region={"en-VN"}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            <b>The dumb way:</b>
            {` You can buy VND in India from an authorised forex dealer like BookMyforex.
                            But it can be seen that rate offered by BookMyForex is not great compared to the offering in the forex market.`}
          </Text>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              {" "}
              Why is buying VND so expensive in India?
            </Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              Vietnamese currency VND is a exotic currency, meaning the currency
              does not have sufficient demand in the global market. Less buyer
              and sellers of the currency makes the buying and selling cost very
              high.
            </Text>
          </Card>
          <Heading ref={buyUSDRef} style={{ marginTop: "20px" }}>
            {" "}
            Buy USD in India
          </Heading>
          <Image
            src={"/images/usd-currency.avif"}
            alt="USD currency notes"
            height={700}
            width={1000}
            style={{ marginTop: "10px" }}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            <b>The smart way:</b>
            {` Wait? but why? I am travelling to Vietnam, not the US, why should I buy USD.
                            Well, that's cause USD has the highest global demand hence the buy/sell rate
                            are great even in India.`}
          </Text>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              {" "}
              Can I buy USD currency notes from BookMyForex whenever I want?
            </Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              No. You can only buy USD currency notes from an authorized forex
              dealer like BookMyForex when you have a valid visa, like{" "}
              <a href="https://www.rupeetravel.com/e-visa-vietnam-indians">
                <b>
                  <u>{`Vietnam's e-visa`}</u>
                </b>
              </a>{" "}
              and air tickets for the travel destination.
            </Text>
          </Card>
          <Card
            bg={useColorModeValue("green.50", "green.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{` Are online forex brokers like BookMyForex always giving better rates than brick-and-mortar ones?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`I asked a local forex broker in Mumbai for USD currency notes.
                                It turned out that both the local forex dealer and BookMyForex
                                are offering USD currency notes at the same rate.
                                So please don't go with the perception that online brokers offer a better rate.
                                First, compare whose offering better rates.`}
            </Text>
            <Image
              src={"/images/authorised-forex-dealer.avif"}
              alt="USD currency notes"
              height={700}
              width={500}
              style={{ marginTop: "10px" }}
            />
          </Card>
          <Image
            src={"/images/buy-USD-currency-notes.avif"}
            alt="BookMyForex"
            height={300}
            width={500}
            style={{ marginTop: "10px" }}
          />
          <CurrencyConverter
            currencyPair={"USDINR"}
            exchange={"BookMyForex"}
            rate={USDINRBookMyForexRate}
            base={"USD"}
            quote={"INR"}
            quoteSymbol={"₹"}
            amount={100}
            region={"en-IN"}
          />
          <CurrencyConverter
            currencyPair={"USDINR"}
            exchange={"forex market"}
            rate={USDINRMarketRate}
            base={"USD"}
            quote={"INR"}
            quoteSymbol={"₹"}
            amount={100}
            region={"en-IN"}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            The difference between rates offered between BookMyForex and the
            forex market is minimal. You can carry the{" "}
            <a href="https://www.rupeetravel.com/buy-foreign-currency-notes-online">
              <b>
                <u>{`USD purchased in India`}</u>
              </b>
            </a>{" "}
            to Vietnam and buy VND from it at the airport. The USD is even
            accepted directly at many places in Vietnam, specially tourist hubs
            like{" "}
            <a href="https://www.rupeetravel.com/da-nang-map">
              <b>
                <u>{`Da Nang`}</u>
              </b>
            </a>
            .
          </Text>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{` What if I didn't spend all the USD I purchased for my Vietnam travel?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`As an Indian citizen, you can keep $2,000 physical currency notes.
                                Since USD is a globally accepted currency, you can use it for your
                                next international travel to any other country. `}
            </Text>
            <CurrencyConverter
              currencyPair={"USDINR"}
              exchange={"forex market"}
              rate={USDINRMarketRate}
              base={"USD"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={2000}
              region={"en-IN"}
            />
          </Card>

          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{` How much foreign currency can I carry from India?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`You can carry up to $3,000 foreign currency notes from India.
                                  If you need more foreign currency, then you can carry credit and debit cards.`}
            </Text>
            <CurrencyConverter
              currencyPair={"USDINR"}
              exchange={"forex market"}
              rate={USDINRMarketRate}
              base={"USD"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={3000}
              region={"en-IN"}
            />
          </Card>

          <Heading ref={withdrawVNDRef} style={{ marginTop: "20px" }}>
            {" "}
            Withdraw VND from Vietnam ATM
          </Heading>
          <Image
            src={"/images/ocean-bank-atm.avif"}
            alt="Zero forex charges ATM - Ocean Bank ATM"
            height={700}
            width={500}
            style={{ marginTop: "10px" }}
          />
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            <b>The smartest way:</b> Get a{" "}
            <a href="https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee">
              <b>
                <u>{`zero forex markup debit card`}</u>
              </b>
            </a>{" "}
            and use it to withdraw VND from a{" "}
            <a href="https://www.rupeetravel.com/atm-vietnam-zero-forex-markup">
              <b>
                <u>{`zero forex markup ATM`}</u>
              </b>
            </a>
            {`. This not only give you great conversion rates,
                            but you can also skip the hassle of buying any
                            currency notes before your actual trip. It also
                            allows you skip the hassle of buying USD currency
                            notes just for great conversion rates.`}
          </Text>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`So, if you have zero forex markup debit card, you don't need to carry USD currency notes?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`No, I would recommend keeping USD currency notes as an
                                alternate solution. That's cause there have been events
                                where banks like `}
              <a href="https://inc42.com/buzz/neobank-niyo-users-bear-the-brunt-as-partner-sbm-bank-india-comes-under-rbi-radar/">
                <b>
                  <u>{` Niyo`}</u>
                </b>
              </a>
              {" and "}
              <a href="https://entrackr.com/2023/10/paytm-payments-bank-halts-intl-transactions-on-debit-cards/">
                <b>
                  <u>{` Paytm`}</u>
                </b>
              </a>
              {` disabled international transactions due to regulatory
                                issues. Physical USD currency
                                notes keep you immune from such situations. `}
            </Text>
          </Card>

          <Card
            bg={useColorModeValue("red.50", "red.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`How to find zero forex markup ATMs for cash withdrawal in Vietnam?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`You can search for `}
              <u>
                <b>
                  <a href="https://www.google.com/maps?q=Ocean+Bank+ATM">
                    Ocean Bank
                  </a>
                </b>
              </u>
              {" or "}
              <u>
                <b>
                  <a href="https://www.google.com/maps?q=MB+Bank+ATM">
                    MB Bank
                  </a>
                </b>
              </u>
              .
              {` Both ATMs accept international Visa and MasterCard
                                debit cards and are zero forex markup ATMs.`}
            </Text>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              <b>Note:</b> These Google map links will give you the right
              results only when you are in Vietnam.
            </Text>
          </Card>

          <Card
            bg={useColorModeValue("yellow.50", "yellow.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`Which debit cards are accepted in Vietnam ATMs for cash withdrawal?`}</Heading>
            <Image
              src={"/images/enable-card.avif"}
              alt="enable cash withdrawal and international usage"
              height={500}
              width={300}
              style={{ marginTop: "10px" }}
            />
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              Visa and MasterCard are the widely accepted cards in Vietnam ATMs.
              You will have to{" "}
              <b>enable ATM withdrawals and international usage</b>. Please do
              not carry RuPay or Discover for cash withdrawals in Vietnam. No
              ATMs are likely to accept them.
            </Text>
          </Card>
          <Card
            bg={useColorModeValue("green.50", "green.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
              {`Will using any ATM for cash withdrawal cost me
                                zero charges if I use a zero forex markup debit card?`}
            </Heading>
            <Image
              src={"/images/forex-charges-atm.avif"}
              alt="ATM with forex charges"
              height={600}
              width={400}
              style={{ marginTop: "10px" }}
            />
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`No, Using any random ATM can cause you
                                forex charges up to 3%. Hence, using a zero
                                forex charge debit card isn't enough. It's essential
                                that you also use that card in a zero-forex ATM.`}
            </Text>
          </Card>
          <Card
            bg={useColorModeValue("teal.50", "teal.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`What is forex card?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              <a href="https://www.bookmyforex.com/forex-card/">
                <b>
                  <u>{`Forex cards`}</u>
                </b>
              </a>
              {` provide the same benefit as `}
              <a href="https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee">
                <b>
                  <u>{`zero forex markup debit cards`}</u>
                </b>
              </a>
              {`, which are zero charges for cash withdrawals, but they come with the hassle of reloading USD on them. Zero forex markup debit cards come with dynamic conversion (INR -> USD -> VND), so there is no need to worry about loading USD every time.`}
            </Text>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`Also, no forex cards, as of now, support loading Vietnam currency VND. Hence, the hassle of currency conversion and forex conversion cost is still there (USD -> VND).`}
            </Text>
          </Card>
          <Card
            bg={useColorModeValue("blue.50", "blue.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`Why is conversion rates for VND via Vietnam ATM's so great?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`Payment networks like Visa and MasterCard use the forex market
                                (which are very liquid - many buyers and sellers of currency)
                                to get great conversion rates unlike local forex dealer. Also, behind the scene it's
                                simulating the same smart conversion technique (INR -> USD -> VND). `}
            </Text>
          </Card>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`Can you bring back the Vietnam currency to India?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`Yes. You can bring back ₫15,000,000 VND of physical currency notes
                                 to India without declaring to the Vietnamese customs. `}
            </Text>
            <CurrencyConverter
              currencyPair={"VNDINR"}
              exchange={"forex market"}
              rate={VNDINRMarketRate}
              base={"VND"}
              quote={"INR"}
              quoteSymbol={"₹"}
              amount={15000000}
              region={"en-IN"}
            />
          </Card>
          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <Heading
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            >{`How to exchange foreign currency to Indian rupees?`}</Heading>
            <Text
              style={{ marginTop: "20px" }}
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              {`You can sell it in exchange for Indian Rupee to an
                                authorized Forex dealer, like BookMyForex. `}
            </Text>
          </Card>
          <Heading ref={VNDNotesRef} style={{ marginTop: "20px" }}>
            {" "}
            Vietnam currency in Indian Rupees
          </Heading>
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
                  <Th>Major currency notes of Vietnam</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <b>₫500,000 VND</b>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>₫200,000 VND</b>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>₫100,000 VND</b>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <b>₫50,000 VND</b>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text
            style={{ marginTop: "20px" }}
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
          >
            {`Let us understand the physical currency notes in Vietnam and how much they value in Indian Rupees.`}
          </Text>
          <Image
            src={"/images/vietnam-currency-notes.avif"}
            alt="Vietnam currency notes"
            height={700}
            width={500}
            style={{ marginTop: "10px" }}
          />
          <Heading fontSize={"xl"} style={{ marginTop: "20px" }} as="h3">
            {`₫500,000 VND currency notes to INR`}
          </Heading>
          <CurrencyConverter
            currencyPair={"VNDINR"}
            exchange={"forex market"}
            rate={VNDINRMarketRate}
            base={"VND"}
            quote={"INR"}
            baseSymbol={"₫"}
            quoteSymbol={"₹"}
            amount={500000}
            region={"en-IN"}
          />

          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <CardBody>
              <Image
                src={"/images/hotel-booking-receipt.avif"}
                alt="Hotel booking receipt"
                height={900}
                width={700}
                style={{ marginTop: "10px" }}
              />
              <Stack mt="6" spacing="3">
                <Heading
                  size="md"
                  as="h4"
                >{`What ₫500,000 VND gets you in Vietnam`}</Heading>
                <Text
                  style={{ marginTop: "20px" }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                >
                  {` Roughly the same amount gets you a hotel room in Da Nang for a night.`}
                </Text>
                <Text fontSize="2xl">₫600,000/night</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <a href="https://www.rupeetravel.com/hotel-booking-vietnam">
                  <Button variant="solid" colorScheme="green">
                    Book Hotel
                  </Button>
                </a>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Heading fontSize={"xl"} style={{ marginTop: "20px" }} as="h3">
            {`₫200,000 VND currency notes to INR`}
          </Heading>
          <CurrencyConverter
            currencyPair={"VNDINR"}
            exchange={"forex market"}
            rate={VNDINRMarketRate}
            base={"VND"}
            quote={"INR"}
            baseSymbol={"₫"}
            quoteSymbol={"₹"}
            amount={200000}
            region={"en-IN"}
          />

          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <CardBody>
              <Image
                src={"/images/sushi.avif"}
                alt="Sushi"
                height={900}
                width={700}
                style={{ marginTop: "10px" }}
              />
              <Stack mt="6" spacing="3">
                <Heading
                  size="md"
                  as="h4"
                >{`What ₫200,000 VND gets you in Vietnam`}</Heading>
                <Text
                  style={{ marginTop: "20px" }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                >
                  {` You can enjoy sushi at a nice high-end restaurant (Tram Sushi, Hanoi).`}
                </Text>
                <Text fontSize="2xl">₫220,000</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <a href="https://tramsushi.com/">
                  <Button variant="solid" colorScheme="green">
                    Visit website
                  </Button>
                </a>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Heading fontSize={"xl"} style={{ marginTop: "20px" }} as="h3">
            {`₫100,000 VND currency notes to INR`}
          </Heading>
          <CurrencyConverter
            currencyPair={"VNDINR"}
            exchange={"forex market"}
            rate={VNDINRMarketRate}
            base={"VND"}
            quote={"INR"}
            baseSymbol={"₫"}
            quoteSymbol={"₹"}
            amount={100000}
            region={"en-IN"}
          />
          <Heading fontSize={"xl"} style={{ marginTop: "20px" }} as="h3">
            {`₫50,000 VND currency notes to INR`}
          </Heading>
          <CurrencyConverter
            currencyPair={"VNDINR"}
            exchange={"forex market"}
            rate={VNDINRMarketRate}
            base={"VND"}
            quote={"INR"}
            baseSymbol={"₫"}
            quoteSymbol={"₹"}
            amount={50000}
            region={"en-IN"}
          />

          <Card
            bg={useColorModeValue("orange.50", "orange.900")}
            p={{ base: "10px", md: "15px", lg: "20px" }}
            mt="10px"
            w="100%"
          >
            <CardBody>
              <Image
                src={"/images/rice-dish.avif"}
                alt="rice dish"
                height={700}
                width={500}
                style={{ marginTop: "10px" }}
              />
              <Stack mt="6" spacing="3">
                <Heading
                  size="md"
                  as="h4"
                >{`What ₫50,000 VND gets you in Vietnam`}</Heading>
                <Text
                  style={{ marginTop: "20px" }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                >
                  {`It gets you a vegan dish called com chay.`}
                </Text>
                <Text fontSize="2xl">₫45,000</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <a href="https://lovinghut.com/vn/">
                  <Button variant="solid" colorScheme="green">
                    Visit website
                  </Button>
                </a>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </>
  );
}
