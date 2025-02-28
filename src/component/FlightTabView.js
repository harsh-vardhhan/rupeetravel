import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Badge,
  Divider,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  useBreakpointValue,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";;
import { FaPlane, FaClock, FaCalendarAlt, FaUmbrella} from "react-icons/fa";

// Precipitation data for the Vietnamese destinations
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

// Rainfall Indicator Component
const RainfallIndicator = ({ destination, date }) => {
  // Check if we have data for this destination
  if (!precipitationData[destination]) {
    return null;
  }

  // Get month from date
  const month = new Date(date).getMonth() + 1; // Jan is 0, so +1
  
  // Calculate rainfall probability
  const daysInMonth = new Date(new Date(date).getFullYear(), month, 0).getDate();
  const rainyDays = precipitationData[destination][month];
  const probability = Math.round((rainyDays / daysInMonth) * 100);
  
  // Determine color based on probability
  let color = "green.500";
  if (probability > 30 && probability <= 60) {
    color = "yellow.400";
  } else if (probability > 60) {
    color = "red.500";
  }

  return (
    <Tooltip 
      label={`${probability}% chance of rain in ${destination} during this month (${rainyDays} rainy days)`}
      placement="top"
      hasArrow
    >
      <Box>
        <CircularProgress 
          value={probability} 
          color={color} 
          size="38px" 
          thickness="12px"
        >
          <CircularProgressLabel>
            <Flex direction="column" align="center" justify="center">
              <Icon as={FaUmbrella} boxSize={2.5} mb="1px" />
              <Text fontSize="8px" fontWeight="bold">{probability}%</Text>
            </Flex>
          </CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Tooltip>
  );
};

const FlightCard = ({ flight }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const primaryColor = useColorModeValue("blue.500", "blue.300");
  
  // Responsive sizing
  const headingSize = useBreakpointValue({ base: "sm", md: "md" });
  const priceSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const citySize = useBreakpointValue({ base: "md", md: "lg" });
  const padding = useBreakpointValue({ base: 3, md: 5 });
  const iconSize = useBreakpointValue({ base: 4, md: 5 });
  const showCountry = useBreakpointValue({ base: false, sm: true });
  
  // Format currency
  const formattedPrice = new Intl.NumberFormat("en-IN", { 
    style: "currency", 
    currency: "INR" 
  }).format(flight.price_inr);
  
  // Format date
  const formattedDate = new Date(flight.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <Card 
      direction="column"
      overflow="hidden"
      variant="outline"
      borderColor={borderColor}
      bg={cardBg}
      shadow="sm"
      borderRadius="md"
    >
      <CardBody p={padding}>
        <Flex direction="column" gap={2}>
          {/* Airline and Price Row */}
          <Flex justify="space-between" align="center">
            <HStack spacing={2}>
              <Heading size={headingSize} color={primaryColor} noOfLines={1}>
                {flight.airline}
              </Heading>
              <Badge colorScheme={flight.flightType === "Nonstop" ? "green" : "blue"} fontSize="xs">
                {flight.flightType}
              </Badge>
            </HStack>
            <Text fontWeight="bold" fontSize={priceSize} color="green.500">
              {formattedPrice}
            </Text>
          </Flex>
          
          {/* Date, Time and Rainfall Row */}
          <Flex justify="space-between" align="center" fontSize="sm" color="gray.600" mt={1} mb={2}>
            <HStack>
              <Icon as={FaCalendarAlt} boxSize={3} />
              <Text>{formattedDate}</Text>
            </HStack>
            <HStack spacing={4}>
              <HStack>
                <Icon as={FaClock} boxSize={3} />
                <Text>{flight.duration}</Text>
              </HStack>
              
              {/* Rainfall Indicator */}
              {precipitationData[flight.destination] && (
                <RainfallIndicator 
                  destination={flight.destination} 
                  date={flight.date} 
                />
              )}
            </HStack>
          </Flex>
          
          <Divider />
          
          {/* Flight Route Row */}
          <Flex justify="space-between" align="center" py={2}>
            <Flex align="center" gap={3}>
              {/* Origin */}
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="bold" fontSize={citySize}>{flight.origin}</Text>
                {showCountry && (
                  <Text fontSize="xs" color="gray.500">{flight.originCountry}</Text>
                )}
              </VStack>
              
              {/* Flight Path */}
              <Flex direction="column" align="center" mx={1}>
                <Box w="40px" h="1px" bg="gray.300" />
                <Icon as={FaPlane} color={primaryColor} boxSize={iconSize} mx={1} />
              </Flex>
              
              {/* Destination */}
              <VStack align="flex-start" spacing={0}>
                <Text fontWeight="bold" fontSize={citySize}>{flight.destination}</Text>
                {showCountry && (
                  <Text fontSize="xs" color="gray.500">{flight.destinationCountry}</Text>
                )}
              </VStack>
            </Flex>
            
            <Text fontWeight="medium" fontSize="sm">{flight.time}</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

// New TabView component that combines both directions
const FlightTabView = ({ flightRates, originCity, destinationCity }) => {
  const tabStyles = {
      fontWeight: "semibold",
      py: 3,
      px: { base: 2, md: 4 },
      _selected: {
          color: "blue.500",
          borderColor: "blue.500",
          borderBottomWidth: "3px"
      }
  };

  return (
      <Tabs variant="line" colorScheme="blue" width="100%" isFitted>
          <TabList mb={4}>
              <Tab {...tabStyles}>
                  <HStack>
                      <Text>{originCity}</Text>
                      <Icon as={FaPlane} size="sm" />
                      <Text>{destinationCity}</Text>
                  </HStack>
              </Tab>
              <Tab {...tabStyles}>
                  <HStack>
                      <Text>{destinationCity}</Text>
                      <Icon as={FaPlane} size="sm" />
                      <Text>{originCity}</Text>
                  </HStack>
              </Tab>
          </TabList>
          <TabPanels>
              <TabPanel p={0}>
                  <FlightCardList
                      flightRates={flightRates}
                      originFilter={originCity}
                      destinationFilter={destinationCity}
                  />
              </TabPanel>
              <TabPanel p={0}>
                  <FlightCardList
                      flightRates={flightRates}
                      originFilter={destinationCity}
                      destinationFilter={originCity}
                  />
              </TabPanel>
          </TabPanels>
      </Tabs>
  );
};

// Fully dynamic component with no hardcoded origin/destination
const FlightCardList = ({ flightRates, originFilter, destinationFilter }) => {
  // Filter the data based on provided origin and destination filters
  const filteredFlights = flightRates.filter(rate => {
      // If both origin and destination filters are provided
      if (originFilter && destinationFilter) {
          return rate.origin === originFilter && rate.destination === destinationFilter;
      }
      // If only origin filter is provided
      else if (originFilter && !destinationFilter) {
          return rate.origin === originFilter;
      }
      // If only destination filter is provided
      else if (!originFilter && destinationFilter) {
          return rate.destination === destinationFilter;
      }
      // If no filters provided, return all flights
      return true;
  });

  // Sort by price (lowest to highest)
  const sortedFlights = [...filteredFlights].sort((a, b) => a.price_inr - b.price_inr);

  return (
      <Stack spacing={3} w="100%">
          {sortedFlights.length > 0 ? (
              sortedFlights.map((flight, index) => (
                  <FlightCard key={index} flight={flight} />
              ))
          ) : (
              <Box p={4}>
                  <Center>
                      <Text textAlign="center" color="gray.500">No flights found matching the criteria.</Text>
                  </Center>
              </Box>
          )}
      </Stack>
  );
};


export default FlightTabView;