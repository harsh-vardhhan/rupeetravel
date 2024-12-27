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

export default function Home({ delhi_phu_quoc_rates, phu_quoc_delhi_rates }) {
  return (
    <>
      <Seo
        title="Rupee Travel | Delhi to Phu Quoc, Vietnam flight"
        description="Lowest Phu Quoc, Vietnam flight ticket price from India"
        canonical={
          "https://www.rupeetravel.com/new-delhi-phu-quoc-vietnam-flight"
        }
      />
      <main className={styles.main}>
        <Header title={"Booking flight for Phu Quoc, Vietnam"} />
        <Text
          as="h2"
          fontSize="xl"
          style={{
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {"New Delhi to Phu Quoc, Vietnam"}
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
                      {delhi_phu_quoc_rates.map((rate, i) => {
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
          {"Phu Quoc, Vietnam to New Delhi"}
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
                      {phu_quoc_delhi_rates.map((rate, i) => {
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
  // Construct the path to your JSON file
  const filePathDelhi = path.join(
    process.cwd(),
    "public",
    "data",
    "delhi_phu_quoc_dates_rates.json",
  );
  // Read the JSON file
  const fileContentsDelhi = fs.readFileSync(filePathDelhi, "utf8");

  // Parse the JSON string into a JavaScript object
  const delhi_phu_quoc_rates = JSON.parse(fileContentsDelhi);

  const filePathPhuQuoc = path.join(
    process.cwd(),
    "public",
    "data",
    "phu_quoc_delhi_dates_rates.json",
  );
  const fileContentsPhuQuoc = fs.readFileSync(filePathPhuQuoc, "utf8");
  const phu_quoc_delhi_rates = JSON.parse(fileContentsPhuQuoc);

  return {
    props: {
      delhi_phu_quoc_rates,
      phu_quoc_delhi_rates,
    },
  };
}
