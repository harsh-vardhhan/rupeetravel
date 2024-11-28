import { useState } from "react";
import Seo from "@/component/seo";
import styles from "@/styles/Home.module.css";
import Header from "@/component/header";
import Link from "next/link";
import {
  Button,
  Card,
  CardBody,
  Divider,
  CardFooter,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Home({ deviceType }) {
  const [label, setLabel] = useState(false);

  if (deviceType === "mobile") {
    return (
      <>
        <Seo
          title="Rupee Travel | Da Nang Map"
          description="Best places to visit in Da Nang"
          canonical={"https://www.rupeetravel.com/da-nang-map"}
        />
        <main className={styles.main}>
          <Header title={"Da Nang Map"} />
          <Card maxW="sm">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading as="h2" size="md">
                  Click on map
                </Heading>
                {label ? (
                  <Image
                    src={"/images/map.svg"}
                    alt="Hotel booking receipt"
                    height={476}
                    width={381}
                    style={{ marginTop: "10px" }}
                    onClick={() => setLabel(!label)}
                  />
                ) : (
                  <Image
                    src={"/images/map_label.svg"}
                    alt="Hotel booking receipt"
                    height={476}
                    width={381}
                    style={{ marginTop: "10px" }}
                    onClick={() => setLabel(!label)}
                  />
                )}
              </Stack>
            </CardBody>
            <Divider style={{ color: "#e2e8f0" }} />
            <CardFooter>
              <Link spacing="2" href="/hotel-booking-vietnam">
                <Button variant="solid" colorScheme="green">
                  Book Hotel
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </>
    );
  } else {
    return (
      <>
        <Seo
          title="Rupee Travel | Da Nang Map"
          description="Best places to visit in Da Nang"
          canonical={"https://www.rupeetravel.com/da-nang-map"}
        />
        <main className={styles.main}>
          <Header title={"Da Nang Map"} />
          <Card>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading as="h2" size="md">
                  Click on map
                </Heading>
                {label ? (
                  <Image
                    src={"/images/map.svg"}
                    alt="Hotel booking receipt"
                    height={800}
                    width={800}
                    style={{ marginTop: "10px" }}
                    onClick={() => setLabel(!label)}
                  />
                ) : (
                  <Image
                    src={"/images/map_label.svg"}
                    alt="Hotel booking receipt"
                    height={800}
                    width={800}
                    style={{ marginTop: "10px" }}
                    onClick={() => setLabel(!label)}
                  />
                )}
              </Stack>
            </CardBody>

            <Divider style={{ color: "#e2e8f0" }} />
            <CardFooter>
              <Link spacing="2" href="/hotel-booking-vietnam">
                <Button variant="solid" colorScheme="green">
                  Book Hotel
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"];
  const isMobile = Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
    ),
  );

  return {
    props: {
      deviceType: isMobile ? "mobile" : "desktop",
    },
  };
}
