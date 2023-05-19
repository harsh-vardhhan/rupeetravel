import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Button,
  Alert,
  AlertIcon,
  SimpleGrid,
  Tag,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from "@chakra-ui/react";
import ListView from "@/component/listview";
import Header from "@/component/header";
import Seo from "@/component/seo";

export default function Home({ indigo, vietjet }) {
  return (
    <>
      <Seo
        title="Rupee Travel | India to Vietnam flight ticket"
        description="Lowest Vietnam flight ticket price from India"
        canonical={"https://www.rupeetravel.com/flight-booking-vietnam"}
      />
      <main className={styles.main}>
        <Header title={"Booking flight for Vietnam"} />
        <div style={{ marginTop: "20px" }}>
          <SimpleGrid minChildWidth="350px" spacing="40px">
            <FlightCard
              cardTitle={"Book Vietjet flight to Vietnam"}
              features={vietjet}
              buttonName={"Book Vietjet"}
              buttonLink={"https://www.vietjetair.com/en"}
            />
            <FlightCard
              cardTitle={"Book Indigo flight to Vietnam"}
              features={indigo}
              buttonName={"Book Indigo"}
              buttonLink={"https://www.goindigo.in/"}
            />
            <Card maxW="sm">
              <CardBody>
                <Tag colorScheme="orange">Fellow passenger faced this</Tag>
                <Alert status="error" style={{ marginTop: "10px" }}>
                  <AlertIcon />
                  Please ensure no mistakes are made in filling personal details
                  during booking or else you might have to pay ~5,000 for fixing
                  info at airport.
                </Alert>
              </CardBody>
            </Card>
          </SimpleGrid>
          <ComparisionMatrix />
        </div>
      </main>
    </>
  );
}

const ComparisionMatrix = () => (
  <Card style={{ marginTop: "30px" }}>
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Facilities</Th>
            <Th>Vietjet</Th>
            <Th>Indigo</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Checked-in luggage cost included in ticket price</Td>
            <Td>❌</Td>
            <Td>✅</Td>
          </Tr>
          <Tr>
            <Td>Accepts Amex at payment gateway</Td>
            <Td>❌</Td>
            <Td>✅</Td>
          </Tr>
          <Tr>
            <Td>Direct flight to Vietnam from India (0 stops)</Td>
            <Td>✅</Td>
            <Td>❌</Td>
          </Tr>
          <Tr>
            <Td>Credit Card Reward Program</Td>
            <Td>❌</Td>
            <Td>✅</Td>
          </Tr>
          <Tr>
            <Td>Accepts INR for in-flight services</Td>
            <Td>❌</Td>
            <Td>✅</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  </Card>
);

const FlightCard = ({ cardTitle, features, buttonName, buttonLink }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading as="h2" size="md">
            {cardTitle}
          </Heading>
          <Tag colorScheme="teal" style={{ width: "fit-content" }}>
            Personally used
          </Tag>
          <ListView features={features} />
        </Stack>
      </CardBody>
      <Divider style={{ color: "#e2e8f0" }} />
      <CardFooter>
        <Button colorScheme="green" onClick={() => window.open(buttonLink)}>
          {buttonName}
        </Button>
      </CardFooter>
    </Card>
  );
};

export async function getStaticProps() {
  const vietjet = [
    {
      item: 1,
      title: `✅ Try booking early, you can get prices as low as ₹6,000`,
      color: "green.500",
    },
    {
      item: 2,
      title: `✅ ~₹5,000 is tax on every ticket hence prices can't go lower than that`,
      color: "green.500",
    },
    {
      item: 3,
      title: `✅ Extra ~₹2,000 for checked-in luggage`,
      color: "green.500",
    },
    {
      item: 4,
      title: `✅ If you plan to travel the entire country, try checking the cheapest current route eg: Hanoi, Ho Chi Minh, Da Nang.`,
      color: "green.500",
    },
    {
      item: 5,
      title: `❌ Booking via the Vietjet site from July 2023 will incur 20% TCS. Opt for an Indian booking site that makes INR payments. Disable international transactions to prevent USD payment. [Note: Not applicable if your annual spending on international credit cards is less than INR 7 Lakhs.]`,
      color: "green.500",
    },
    {
      item: 6,
      title: `❌ Food in plane is expensive, you can even carry some airport food in flight.`,
      color: "red.400",
    },
  ];

  const indigo = [
    {
      item: 1,
      title: `✅ Cheaper flights on weekends than Vietjet`,
      color: "green.500",
    },
    {
      item: 2,
      title: `✅ More comfortable seats than Vietjet`,
      color: "green.500",
    },
    {
      item: 3,
      title: `✅ In-flight services accepts INR and USD, whereas Vietjet accepts VND and USD`,
      color: "green.500",
    },
    {
      item: 4,
      title: `✅ Payment gateway for booking flight tickets accepts American Express unlike Vietjet`,
      color: "green.500",
    },
    {
      item: 5,
      title: `✅ You can use Reward cards like Indigo ka-ching whereas Vietjet doesn’t have any partner program with any Indian credit card`,
      color: "green.500",
    },
    {
      item: 6,
      title: `✅ Takes their add-on services like priority check-in very seriously unlike Vietjet which at times denies this service at times even when charging for it.`,
      color: "green.500",
    },
    {
      item: 7,
      title: `✅ No extra charge for checked-in luggage unlike Vietjet`,
      color: "green.500",
    },
    {
      item: 8,
      title: `✅ No 20% TCS since INR payment occurs via the Indigo website.`,
      color: "green.500",
    },
    {
      item: 9,
      title: `❌ Flights from Delhi/Mumbai to Vietnam are not direct, rather via Kolkata. Vietjet has direct flights from Delhi/Mumbai to Vietnam.`,
      color: "red.400",
    },
  ];

  return {
    props: {
      indigo,
      vietjet,
    },
  };
}
