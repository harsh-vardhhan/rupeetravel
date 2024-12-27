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

export default function Home({ delhi_da_nang_rates, da_nang_delhi_rates }) {
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
                      {delhi_da_nang_rates.map((rate, i) => {
                        return (
                          <Tr key={i}>
                            <Td>{rate.date}</Td>
                            <Td>₹{rate.price.toLocaleString("en-IN")}</Td>
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
                      {da_nang_delhi_rates.map((rate, i) => {
                        return (
                          <Tr key={i}>
                            <Td>{rate.date}</Td>
                            <Td>₹{rate.price.toLocaleString("en-IN")}</Td>
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
  const filePathDelhi = path.join(
    process.cwd(),
    "public",
    "data",
    "delhi_da_nang_dates_rates.json",
  );
  const fileContentsDelhi = fs.readFileSync(filePathDelhi, "utf8");
  const delhi_da_nang_rates = JSON.parse(fileContentsDelhi);

  const filePathDaNang = path.join(
    process.cwd(),
    "public",
    "data",
    "da_nang_delhi_dates_rates.json",
  );
  const fileContentsDaNang = fs.readFileSync(filePathDaNang, "utf8");
  const da_nang_delhi_rates = JSON.parse(fileContentsDaNang);

  return {
    props: {
      delhi_da_nang_rates,
      da_nang_delhi_rates,
    },
  };
}
