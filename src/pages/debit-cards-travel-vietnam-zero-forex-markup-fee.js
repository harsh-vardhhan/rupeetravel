import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Text,
  Stack,
  Divider,
  CardFooter,
  Button,
  Image,
  Alert,
  AlertIcon,
  SimpleGrid,
  Tag,
  Heading,
} from "@chakra-ui/react";
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";
import StructuredData from "@/component/structuredData";
import Link from "next/link";

export default function Home({ features }) {
  const structuredData = {
    "@context": "https://www.schema.org",
    "@type": "product",
    brand: "Fi Bank",
    name: "Fi Debit Card",
    image: "https://ik.imagekit.io/rupeetravel/debit-card.webp",
    category: "Debit Card",
    description: " Zero forex markup debit card",
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
        "@type": "Bank",
        name: "Fi Bank",
      },
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | debit card with zero forex markup for travel in Vietnam"
        description="Best debit card with zero forex markup for foreign travel in Vietnam for Indians"
        canonical={
          "https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee"
        }
      />
      <main className={styles.main}>
        <Header title={"Indian Debit Cards for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={"/static/images/debit-card.webp"}
                  alt="Fi Debit Card"
                  borderRadius="lg"
                  style={{ width: "310px", height: "232px" }}
                />
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    Fi Debit Card{" "}
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally using
                  </Tag>

                  <Text>
                    Fi is a no brainer, easy to use neobank account. Suit&apos;s
                    perfect for travelling abroad.
                  </Text>
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Stack direction="row">
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={() => window.open("https://fi.money/")}
                  >
                    Get Fi Account
                  </Button>
                  <Link spacing="2" href="/atm-vietnam-zero-forex-markup">
                    <Button variant="solid" colorScheme="green">
                      Zero forex ATMs
                    </Button>
                  </Link>
                </Stack>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Alert status="info" style={{ marginTop: "10px" }}>
                  <AlertIcon />
                  Do activate the &quot;Apply these settings to international
                  usage&quot; checkbox when abroad
                </Alert>
                <Image
                  src={"/static/images/fisetting.webp"}
                  alt="Fi Settings Mobile"
                  style={{ marginTop: "10px", width: "310px", height: "364px" }}
                  borderRadius="lg"
                />
              </CardBody>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Tag colorScheme="teal">Personally used 😞</Tag>
                <Alert status="error" style={{ marginTop: "10px" }}>
                  <AlertIcon />
                  Please avoid Discover debit cards since they are hardly
                  accepted anywhere. You can check the logo on your debit card
                  in case you aren&apos;t aware.
                </Alert>
                <Image
                  src={"/static/images/discover.webp"}
                  alt="Discover card"
                  borderRadius="lg"
                  style={{ marginTop: "10px", width: "310px", height: "232px" }}
                />
              </CardBody>
            </Card>
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const features = [
    {
      item: 1,
      title: "✅ Zero forex markup on debit card",
      color: "green.500",
    },
    {
      item: 2,
      title: "✅ ₹100 on international ATM cash withdrawl from Fi",
      color: "green.500",
    },
    {
      item: 3,
      title: `❌ Local ATMs in Vietnam will still charge 1.5%-3%
            (minimum amount 30,000 VND -50,000 VND) on withdrawal.
            Hence try using zero forex ATM's.`,
      color: "red.400",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
