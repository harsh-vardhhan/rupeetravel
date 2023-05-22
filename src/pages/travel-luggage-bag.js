import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  SimpleGrid,
  Tag,
  Heading,
} from "@chakra-ui/react";
import Image from 'next/image';
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";

export default function Home({ features }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Best travel hack for luggage"
        description="hack for travel luggage on airports"
        canonical={"https://www.rupeetravel.com/travel-luggage-bag"}
      />
      <main className={styles.main}>
        <Header title={"luggage"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={"/images/luggage-travel-hack.webp"}
                  alt="Luggage"
                  height={187}
                  width={310}
                />
                <Stack mt="6" spacing="3">
                  <Heading as="h2" size="md">
                    Luggage travel hack
                  </Heading>
                  <Tag colorScheme="teal" style={{ width: "fit-content" }}>
                    Personally experienced 😞
                  </Tag>
                  <ListView features={features} />
                </Stack>
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
      title: `✅ Put a laminated name label on your checked-in luggage`,
      color: "green.500",
    },
    {
      item: 2,
      title: `❌ It avoids the chances of others accidentally picking your luggage`,
      color: "red.400",
    },
    {
      item: 3,
      title: `✅ It also helps you recognise your luggage quickly on the conveyer belt.`,
      color: "green.500",
    },
  ];

  return {
    props: {
      features,
    },
  };
}
