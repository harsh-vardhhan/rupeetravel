import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  SimpleGrid,
  Tag,
  Divider,
  CardFooter,
  Button,
  Heading,
} from "@chakra-ui/react";
import Image from 'next/image';
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";
import Link from "next/link";

export default function Home({ features }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Withdraw Vietnam local currency VND from ATM"
        description="Best ATM to withdraw VND with zero forex markup in Vietnam for Indians"
        canonical={"https://www.rupeetravel.com/withdraw-vietnam-currency-atm"}
      />
      <main className={styles.main}>
        <Header title={"Withdraw Vietnam currency for next visit"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="md">
              <CardBody>
                <Image
                  src={"/images/local-currency.webp"}
                  alt="local-currency"
                  height={232}
                  width={310}
                />
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    Withdraw VND for next visit{" "}
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally used
                  </Tag>
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Link spacing="2" href="/atm-vietnam-zero-forex-markup">
                  <Button variant="solid" colorScheme="green">
                    Ocean Bank ATM
                  </Button>
                </Link>
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
      title: `✅ Before you leave, withdraw some VND enough for first few days of your next visit.`,
      color: "green.500",
    },
    {
      item: 2,
      title: `✅ Avoid the hassle of looking for ATM right after your arrive Vietnam.`,
      color: "green.500",
    },
    {
      item: 3,
      title: `✅ Vietnam is still mostly cash only society. No credit card,debit card, or USD will make it as easy as Vietnam currency (VND).`,
      color: "green.500",
    },
    {
      item: 4,
      title: `❌ Try withdrawing money from Ocean Bank ATM since it has zero forex markup charges.`,
      color: "red.400",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
