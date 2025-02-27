import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  VStack,
  Container,
  HStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaPlane } from "react-icons/fa";

const FlightCard = ({
  origin,
  destination,
  originCountry,
  destinationCountry,
}) => {
  // Function to convert city names to URL-friendly format
  const toUrlPath = (cityName) => {
    return cityName.toLowerCase().replace(/ /g, "-");
  };

  const href = `/${toUrlPath(origin)}-${toUrlPath(destination)}-vietnam-flight`;

  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <Card
        variant="outline"
        mb={3}
        borderRadius="md"
        boxShadow="sm"
        _hover={{
          boxShadow: "md",
          borderColor: "green.500",
          transform: "translateY(-2px)",
        }}
        transition="all 0.2s ease-in-out"
        cursor="pointer"
      >
        <CardBody>
          <Flex direction={["column", "row"]} justifyContent="space-between">
            <Box flex="1">
              <Flex align="center" mb={2}>
                <HStack spacing={4} align="center" width="full">
                  <Box>
                    <Text fontSize="sm" color="gray.500">
                      {originCountry}
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      {origin}
                    </Text>
                  </Box>

                  <Flex flex="1" align="center" px={2}>
                    <Divider flex="1" />
                    <Icon as={FaPlane} mx={2} color="green.500" />
                    <Divider flex="1" />
                  </Flex>

                  <Box textAlign={["left", "right"]}>
                    <Text fontSize="sm" color="gray.500">
                      {destinationCountry}
                    </Text>
                    <Text fontWeight="bold" fontSize="lg">
                      {destination}
                    </Text>
                  </Box>
                </HStack>
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </a>
  );
};

const FlightSearchCards = () => {
  const routes = [
    {
      origin: "New Delhi",
      destination: "Phu Quoc",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "New Delhi",
      destination: "Da Nang",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "New Delhi",
      destination: "Hanoi",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "New Delhi",
      destination: "Ho Chi Minh City",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "Mumbai",
      destination: "Phu Quoc",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "Mumbai",
      destination: "Da Nang",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "Mumbai",
      destination: "Hanoi",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
    {
      origin: "Mumbai",
      destination: "Ho Chi Minh City",
      originCountry: "India",
      destinationCountry: "Vietnam",
    },
  ];

  return (
    <Container maxW="2xl" p={4}>
      <Box mb={6} textAlign="center">
        <Heading as="h2" size="lg" mb={2}>
          Book cheapest flights to Vietnam
        </Heading>
        <Text color="gray.600">
          Flights from India to popular Vietnam destinations
        </Text>
      </Box>
      <VStack spacing={3} align="stretch">
        {routes.map((route, index) => (
          <FlightCard
            key={index}
            origin={route.origin}
            destination={route.destination}
            originCountry={route.originCountry}
            destinationCountry={route.destinationCountry}
          />
        ))}
      </VStack>
    </Container>
  );
};

export default FlightSearchCards;
