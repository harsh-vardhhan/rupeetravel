import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  TableContainer,
} from "@chakra-ui/react";
import Header from "@/component/header";
import Seo from "@/component/seo";
import fs from "fs";
import path from "path";

export default function Home({ flightRates }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Delhi to Da Nang, Vietnam flight"
        description="Lowest Da Nang, Vietnam flight ticket price from India"
        canonical={
          "https://www.rupeetravel.com/new-delhi-da-nang-vietnam-flight"
        }
      />
      <main className={styles.main}>
        <Header title={"Booking flight for Da Nang, Vietnam"} />
        <Text
          as="h2"
          fontSize="xl"
          style={{
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {"New Delhi to Da Nang, Vietnam"}
        </Text>
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card>
              <CardBody>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Date</Th>
                        <Th>Price</Th>
                        <Th>Cheapest</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {flightRates
                        .filter(
                          (rate) =>
                            rate.origin === "New Delhi" &&
                            rate.destination === "Da Nang",
                        )
                        .map((rate, i) => {
                          return (
                            <Tr key={i}>
                              <Td>{rate.date}</Td>
                              <Td>{rate.price}</Td>
                              <Td>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 2,
                                      zIndex: 1,
                                      paddingRight: "7px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {Math.floor(rate.percentage)}%
                                  </div>
                                  <div
                                    style={{
                                      width: `${rate.percentage}%`,
                                      height: "25px",
                                      backgroundColor: "#E1FFBB",
                                      borderColor: "green",
                                      borderWidth: "1px",
                                      borderStyle: "solid",
                                      position: "absolute",
                                      left: 0,
                                      zIndex: 0,
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
        <Text
          as="h2"
          fontSize="xl"
          style={{
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {"Da Nang, Vietnam to New Delhi"}
        </Text>
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <Card>
              <CardBody>
                <TableContainer>
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th>Date</Th>
                        <Th>Price</Th>
                        <Th>Cheapest</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {flightRates
                        .filter(
                          (rate) =>
                            rate.destination === "New Delhi" &&
                            rate.origin === "Da Nang",
                        )
                        .map((rate, i) => {
                          return (
                            <Tr key={i}>
                              <Td>{rate.date}</Td>
                              <Td>{rate.price}</Td>
                              <Td>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: 2,
                                      zIndex: 1,
                                      paddingRight: "7px",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {Math.floor(rate.percentage)}%
                                  </div>
                                  <div
                                    style={{
                                      width: `${rate.percentage}%`,
                                      height: "25px",
                                      backgroundColor: "#E1FFBB",
                                      borderColor: "green",
                                      borderWidth: "1px",
                                      borderStyle: "solid",
                                      position: "absolute",
                                      left: 0,
                                      zIndex: 0,
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
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "flight-price.json",
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const flightRates = JSON.parse(fileContents);

  return {
    props: {
      flightRates,
    },
  };
}
