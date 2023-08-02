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
  TableContainer,
} from "@chakra-ui/react";
import Image from "next/image";
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";
import Link from "next/link";

export default function Home({ hotels }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Lowest Vietnam hotel room price"
        description="Vietnam cheap hotels"
        canonical={"https://www.rupeetravel.com/hotel-booking-vietnam"}
      />
      <main className={styles.main}>
        <Header title={"Booking hotel in Da Nang, Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card>
              <CardBody>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Hotel</Th>
                        <Th>Contact</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {hotels.map((hotel, i) => {
                        return (
                          <Tr key={i}>
                            <Td>{hotel.name}</Td>
                            <Td>
                              <Button
                                colorScheme="teal"
                                size="xs"
                                onClick={() => window.open(hotel.contact)}
                              >
                                contact
                              </Button>
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardBody>
                <Tag colorScheme="teal">Personally used</Tag>
                <br />
                Incase you want to stay in the same city (Da Nang) and same
                hotel (Lavencos) where I stayed 😂, you can contact below
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardFooter>
                <Stack direction="row">
                  <Button
                    variant="solid"
                    colorScheme="green"
                    onClick={() =>
                      window.open("https://www.facebook.com/lavencos.vn")
                    }
                  >
                    Contact Lavencos Hotel
                  </Button>
                  <Link spacing="2" href="/da-nang-map">
                    <Button variant="solid" colorScheme="green">
                      Zero forex ATMs
                    </Button>
                  </Link>
                </Stack>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const hotels = [
    {
      item: 1,
      name: `Sala Danang Beach Hotel`,
      contact: "https://www.facebook.com/saladanangbeachhotel/",
    },
    {
      item: 2,
      name: "Lavencos Hotel",
      contact: "https://www.facebook.com/lavencos.vn",
    },
    {
      item: 3,
      name: "Paracel Danang Hotel",
      contact: "https://www.facebook.com/paraceldananghotel/",
    },
    {
      item: 4,
      name: "BlueSun Hotel",
      contact: "https://www.facebook.com/bluesundanang/",
    },
    {
      item: 5,
      name: "Golden Lotus Hotel",
      contact: "https://www.facebook.com/goldenlotushoteldanang/",
    },
    {
      item: 6,
      name: "Avatar Danang Hotel",
      contact: "https://www.facebook.com/AvatarDananghotel/",
    },
  ];

  return {
    props: {
      hotels,
    },
  };
}
