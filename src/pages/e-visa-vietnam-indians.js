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
} from "@chakra-ui/react";
import ListView from "@/component/listview";
import Header from "@/component/header";
import StructuredData from "@/component/structuredData";
import Seo from "@/component/seo";

export default function Home({ features }) {
  const structuredData = {
    "@context": "https://www.schema.org",
    "@type": "product",
    brand: "Vietnam E-visa",
    name: "Vietnam E-visa application",
    image: "https://ik.imagekit.io/rupeetravel/local-currency.webp",
    category: "E-visa",
    description: " Vietnam E-visa application",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "2100",
      itemCondition: "http://schema.org/UsedCondition",
      availability: "http://schema.org/InStock",
      seller: {
        "@type": "Vietnam Immigration",
        name: "Vietnam E-visa",
      },
    },
  };
  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Apply for Vietnam e-visa"
        description="Vietnam e-visa application. Vietnam visa for Indians."
        canonical={"https://www.rupeetravel.com/e-visa-vietnam-indians"}
      />
      <main className={styles.main}>
        <Header title={"Apply E-Visa for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    E-Visa for Vietnam
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally used
                  </Tag>
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Button
                  colorScheme="green"
                  onClick={() =>
                    window.open(
                      "https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu",
                    )
                  }
                >
                  Apply E-Visa
                </Button>
              </CardFooter>
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
      title: `✅ you can stay for maximum one month`,
      color: "green.500",
    },
    {
      item: 2,
      title: `✅ Usually visa approved within 5 days max.`,
      color: "green.500",
    },
    {
      item: 3,
      title: `✅ Very unlikely to get rejected 🙂`,
      color: "green.500",
    },
    {
      item: 4,
      title: `❌ Please don't use any third party agency, apply on the official government site link given below`,
      color: "red.400",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
