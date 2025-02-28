import React from 'react';
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
  Tooltip,
  Circle,
  Grid, // Added for responsive calendar layout
} from '@chakra-ui/react';
import { FaPlane, FaUmbrella } from 'react-icons/fa';

// Precipitation data (unchanged)
const precipitationData = {
  "Hanoi": {
    1: 1.9, 2: 2.2, 3: 4.6, 4: 6.7, 5: 12.2, 6: 14.4, 
    7: 16.3, 8: 17.2, 9: 12.6, 10: 8.0, 11: 4.2, 12: 2.0
  },
  "Ho Chi Minh City": {
    1: 0.9, 2: 0.6, 3: 1.6, 4: 4.3, 5: 11.7, 6: 15.9, 
    7: 16.7, 8: 15.7, 9: 16.6, 10: 16.5, 11: 8.4, 12: 2.9
  },
  "Da Nang": {
    1: 4.5, 2: 1.8, 3: 2.0, 4: 3.2, 5: 7.2, 6: 7.2, 
    7: 7.1, 8: 10.8, 9: 15.5, 10: 18.3, 11: 13.8, 12: 9.7
  },
  "Phu Quoc": {
    1: 2.0, 2: 2.3, 3: 5.2, 4: 9.7, 5: 15.8, 6: 19.6, 
    7: 21.3, 8: 21.6, 9: 20.6, 10: 19.4, 11: 11.0, 12: 3.9
  }
};

// Calculate rainfall probability (unchanged)
const getMonthlyRainfallProbabilities = (destination) => {
  if (!precipitationData[destination]) {
    return null;
  }
  
  const probabilities = {};
  
  for (let month = 1; month <= 12; month++) {
    const daysInMonth = new Date(new Date().getFullYear(), month, 0).getDate();
    const rainyDays = precipitationData[destination][month];
    probabilities[month] = Math.round((rainyDays / daysInMonth) * 100);
  }
  
  return probabilities;
};

// Updated RainfallCalendar component
const RainfallCalendar = ({ destination }) => {
  if (!precipitationData[destination]) {
    return null;
  }

  const probabilities = getMonthlyRainfallProbabilities(destination);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const getProbabilityColor = (probability) => {
    if (probability <= 30) return "green.400";
    if (probability <= 60) return "yellow.400";
    return "red.400";
  };

  return (
    <Box mt={2}>
      <Text fontSize="sm" color="gray.500" mb={1}>Rainfall probability by month:</Text>
      <Grid
        templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(6, 1fr)", md: "repeat(12, 1fr)" }}
        gap={1}
      >
        {months.map((month, index) => {
          const monthNumber = index + 1;
          const probability = probabilities[monthNumber];
          const color = getProbabilityColor(probability);
          
          return (
            <Tooltip
              key={month}
              label={`${probability}% chance of rain in ${month}`}
              placement="top"
              hasArrow
            >
              <VStack spacing={0.5} align="center">
                <Text fontSize="xs" color="gray.500">{month}</Text>
                <Circle
                  size="20px"
                  bg={color}
                  opacity={probability / 100}
                >
                  <Text fontSize="10px" fontWeight="bold" color="white">
                    {probability}
                  </Text>
                </Circle>
              </VStack>
            </Tooltip>
          );
        })}
      </Grid>
    </Box>
  );
};

// FlightCard component (unchanged)
const FlightCard = ({ origin, destination, originCountry, destinationCountry }) => {
  const toUrlPath = (cityName) => {
    return cityName.toLowerCase().replace(/ /g, '-');
  };

  const href = `/${toUrlPath(origin)}-${toUrlPath(destination)}-vietnam-flight`;
  
  return (
    <a href={href} style={{ textDecoration: 'none' }}>
      <Card 
        variant="outline" 
        mb={3} 
        borderRadius="md" 
        boxShadow="sm" 
        _hover={{ 
          boxShadow: "md", 
          borderColor: "green.500",
          transform: "translateY(-2px)"
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
                    <Text fontSize="sm" color="gray.500">{originCountry}</Text>
                    <Text fontWeight="bold" fontSize="lg">{origin}</Text>
                  </Box>
                  
                  <Flex flex="1" align="center" px={2}>
                    <Divider flex="1" />
                    <Icon as={FaPlane} mx={2} color="green.500" />
                    <Divider flex="1" />
                  </Flex>
                  
                  <Box textAlign={["left", "right"]}>
                    <Text fontSize="sm" color="gray.500">{destinationCountry}</Text>
                    <Text fontWeight="bold" fontSize="lg">{destination}</Text>
                  </Box>
                </HStack>
              </Flex>
              
              {precipitationData[destination] && (
                <RainfallCalendar destination={destination} />
              )}
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </a>
  );
};

// FlightSearchCards component (unchanged)
const FlightSearchCards = () => {
  const routes = [
    { origin: "New Delhi", destination: "Phu Quoc", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "New Delhi", destination: "Da Nang", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "New Delhi", destination: "Hanoi", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "New Delhi", destination: "Ho Chi Minh City", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "Mumbai", destination: "Phu Quoc", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "Mumbai", destination: "Da Nang", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "Mumbai", destination: "Hanoi", originCountry: "India", destinationCountry: "Vietnam" },
    { origin: "Mumbai", destination: "Ho Chi Minh City", originCountry: "India", destinationCountry: "Vietnam" }
  ];

  return (
    <Container maxW="2xl" p={4}>
      <Box mb={6} textAlign="center">
        <Heading as="h2" size="lg" mb={2}>
          Book cheapest flights to Vietnam
        </Heading>
        <Text color="gray.600">Flights from India to popular Vietnam destinations</Text>
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