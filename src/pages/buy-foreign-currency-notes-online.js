import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  SimpleGrid,
  Tag,
  Heading,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Header from "@/component/header";
import ListView from "@/component/listview";
import Seo from "@/component/seo";
import StructuredData from "@/component/structuredData";

export default function Home({ features }) {
  const structuredData = {
    "@context": "https://www.schema.org",
    "@type": "product",
    brand: "BookMyForex",
    name: "USD foriegn currency notes",
    image: "https://ik.imagekit.io/rupeetravel/currency.webp",
    category: "foreign currency notes",
    description: "Buy USD forex cash at best prices.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      itemCondition: "http://schema.org/UsedCondition",
      availability: "http://schema.org/InStock",
      seller: {
        "@type": "Currency Dealer",
        name: "BookMyForex",
      },
    },
  };
  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Buy forex currency notes in India"
        description="best foreign currency exchange online in India"
        canonical={
          "https://www.rupeetravel.com/buy-foreign-currency-notes-online"
        }
      />
      <main className={styles.main}>
        <Header title={"Buy foreign currency notes"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    BookMyForex for USD currency notes
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally using
                  </Tag>
                  <Image
                    src={"/images/currency.webp"}
                    alt="foriegn currency notes"
                    borderRadius="lg"
                    height={330}
                    width={310}
                    style={{
                      marginTop: "10px",
                    }}
                  />
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() => window.open("https://www.bookmyforex.com/")}
                >
                  Book My Forex
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
          <ComparisionMatrix />
        </div>
      </main>
    </>
  );
}

const ComparisionMatrix = () => (
  <Card style={{ marginTop: "30px" }}>
    <CardBody>
      <Stack mt="6" spacing="3">
        <Heading as="h2" size="md">
          {"Only Order USD currency notes in India"}
        </Heading>
      </Stack>
    </CardBody>

    <Box overflowX="auto">
      <Table variant="simple" size="sm">
        <TableCaption>
          Cost of VND currency notes over USD currency notes in India
        </TableCaption>
        <Thead>
          <Tr>
            <Th>conversion rate on 31st July 2023</Th>
            <Th>INR</Th>
            <Th>VND (INRVND)</Th>
            <Th>USD (INRUSD)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>BookMyForex Rate</Td>
            <Td>₹1,000</Td>
            <Td>₫222,222</Td>
            <Td>$12</Td>
          </Tr>
          <Tr>
            <Td>Real forex rate</Td>
            <Td>₹1,000</Td>
            <Td>₫287,845</Td>
            <Td>$12.15</Td>
          </Tr>
          <Tr>
            <Td>Conversion cost </Td>
            <Td></Td>
            <Td>₫65,623</Td>
            <Td>$0.15</Td>
          </Tr>
          <Tr>
            <Td>Conversion cost %</Td>
            <Td></Td>
            <Td>⚠️ 22.8%</Td>
            <Td>1.2%</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  </Card>
);

export async function getStaticProps() {
  const features = [
    {
      item: 1,
      title:
        "✅ Buy USD as an extra emergency fund. You can use it for your other non-Vietnam trips as well",
      color: "green.500",
    },
    {
      item: 2,
      title:
        "✅ BookMyForex is an easy to use online service to get foreign currency",
      color: "green.500",
    },
    {
      item: 3,
      title: `✅ You can keep the foreign currency if its not more than $2000 per person`,
      color: "green.500",
    },
    {
      item: 4,
      title:
        "❌ Place the order atleast 2 working days before you plan to leave ",
      color: "red.400",
    },
    {
      item: 5,
      title:
        "❌ Ensure you select product type as currency note and NOT travel card",
      color: "red.400",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
