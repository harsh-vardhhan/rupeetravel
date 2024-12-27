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
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text
} from "@chakra-ui/react";
import Header from "@/component/header";
import Seo from "@/component/seo";
import Link from "next/link";
import fs from 'fs';
import path from 'path';

export default function Home({ hotels, rates }) {
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
                🏝️ All hotels are located near the beach.
                <br />
                🚕 You can request the hotel to send a taxi for you at the Da Nang airport.
              </CardBody>
              <Divider style={{ color: "#e2e8f0" }} />
              <CardBody>
                <TableContainer>
                  <Table size='sm'>
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
                              <a href={hotel.contact}>
                                <Button
                                  colorScheme='teal'
                                  size='xs'
                                >
                                  contact
                                </Button>
                              </a>
                            </Td>
                          </Tr>
                        )
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
                  <a href="https://www.facebook.com/lavencos.vn">
                    <Button
                      variant="solid"
                      colorScheme="green"
                    >
                      Contact Lavencos
                    </Button>
                  </a>
                  <Link spacing="2" href="/da-nang-map">
                    <Button variant="solid" colorScheme="green">
                      Da Nang Map
                    </Button>
                  </Link>
                </Stack>

              </CardFooter>
            </Card>
          </SimpleGrid>
        </div>
        <Text
          as="h1"
          fontSize="xl"
          style={{
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {"VinHolidays Fiesta, Phu Quoc, Vietnam"}
        </Text>
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card>
              <CardBody>
                <TableContainer>
                  <Table size='sm'>
                    <Thead>
                      <Tr>
                        <Th>Date</Th>
                        <Th>Price</Th>
                        <Th>Cheapest</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {rates.map((rate, i) => {
                        return (
                          <Tr key={i}>
                            <Td>{rate.date}</Td>
                            <Td>₹{rate.price.toLocaleString('en-IN')}</Td>
                            <Td>
                              <div style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative'
                              }}>
                                <div style={{
                                  position: 'absolute',
                                  left: 2,
                                  zIndex: 1,
                                  paddingRight: '7px',
                                  fontWeight: 'bold'
                                }}>
                                  {Math.floor(rate.percentage)}%
                                </div>
                                <div
                                  style={{
                                    width: `${rate.percentage}%`,
                                    height: '25px',
                                    backgroundColor: '#E1FFBB',
                                    borderColor: 'green',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    position: 'absolute',
                                    left: 0,
                                    zIndex: 0
                                  }}
                                ></div>
                              </div>
                            </Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          </SimpleGrid>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  // Construct the path to your JSON file
  const filePath = path.join(process.cwd(), 'public', 'data', 'vinholidays_fiesta_rates.json');

  // Read the JSON file
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the JSON string into a JavaScript object
  const rates = JSON.parse(fileContents);
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
    {
      item: 7,
      name: "Belle Maison Parosand Hotel",
      contact: "https://www.facebook.com/bellemaisondanang/",
    },
    {
      item: 8,
      name: "Sekong Hotel Da Nang",
      contact: "https://facebook.com/sekonghoteldanang"
    },
    {
      item: 9,
      name: "Cicilia Danang Hotel & Spa",
      contact: "https://www.facebook.com/ciciliadanang/"
    },
    {
      item: 10,
      name: "Aria Grand Hotel Da Nang",
      contact: "https://www.facebook.com/ariagrandhotel/"
    },
  ];

  return {
    props: {
      hotels,
      rates
    },
  };
}
