import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";

export default function Home({ features }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Food delivery and ride hailing app in Vietnam"
        description="Grab app in Vietnam"
        canonical={"https://www.rupeetravel.com/food-delivery-taxi-vietnam"}
      />
      <main className={styles.main}>
        <Header title={"Food Delivery and Taxi for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={"/images/grab.webp"}
                  alt="Grab Mobile App"
                  width={310}
                  height={425}
                />
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    Download Grab for taxi and food delivery
                  </Heading>
                  <ListView features={features} />
                </Stack>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={() =>
                    window.open("https://www.grab.com/vn/download/")
                  }
                >
                  Download Grab
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
      title: `✅ It's the Uber + Zomato of Vietnam`,
      color: "green.500",
    },
    {
      item: 2,
      title: `❌ Signup with the local Vietnam number`,
      color: "red.400",
    },
    {
      item: 3,
      title: `✅ Indian debit and credit cards don't work with Grab. So keep cash (VND) ready before using it's services.`,
      color: "green.500",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
