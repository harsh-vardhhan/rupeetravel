import React from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Flex,
  Center,
  Divider
} from '@chakra-ui/react';

const VisaStamp = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <Center bg="white" p={4}>
      <Box position="relative">
        {/* Main stamp container */}
        <Box
          bg="white"
          border="4px solid"
          borderColor="red.600"
          borderRadius="lg"
          p={6}
          shadow="lg"
          position="relative"
          overflow="hidden"
          w={{ base: "90vw", sm: "350px", md: "400px" }}
          maxW="400px"
        >
          {/* Decorative border pattern */}
          <Box
            position="absolute"
            top={2}
            left={2}
            right={2}
            bottom={2}
            border="2px dashed"
            borderColor="red.500"
            borderRadius="md"
          />
          
          {/* Content */}
          <VStack spacing={3} position="relative" zIndex={10}>
            {/* Header */}
            <VStack spacing={1} pb={2} borderBottom="2px solid" borderColor="red.600" w="full">
              <Text
                fontSize={{ base: "md", sm: "lg" }}
                fontWeight="bold"
                color="red.700"
                textTransform="uppercase"
                letterSpacing="wide"
                textAlign="center"
              >
                Republic of Indonesia
              </Text>
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="semibold"
                color="red.600"
                textTransform="uppercase"
                textAlign="center"
              >
                Ministry of Tourism
              </Text>
            </VStack>
            
            {/* Visa Type */}
            <Box py={2}>
              <Text
                fontSize={{ base: "lg", sm: "xl" }}
                fontWeight="bold"
                color="black"
                textTransform="uppercase"
                textAlign="center"
              >
                Tourist Visa
              </Text>
            </Box>
            
            {/* Visa Details */}
            <VStack spacing={2} fontSize="sm" w="full">
              <HStack justify="space-between" w="full">
                <Text fontWeight="semibold" color="gray.700">VISA:</Text>
                <Text fontWeight="bold" color="black" bg="yellow.100" px={2} py={1} borderRadius="md">
                  B2
                </Text>
              </HStack>
              
              <HStack justify="space-between" w="full">
                <Text fontWeight="semibold" color="gray.700">DURATION:</Text>
                <Text fontWeight="bold" color="black">30 DAYS</Text>
              </HStack>
              
              <HStack justify="space-between" w="full">
                <Text fontWeight="semibold" color="gray.700">FEE:</Text>
                <Text fontWeight="bold" color="green.700">500,000 IDR</Text>
              </HStack>
            </VStack>
            
            {/* Date and stamp info */}
            <VStack spacing={1} pt={3} mt={4} borderTop="2px solid" borderColor="red.600" w="full">
              <HStack justify="space-between" fontSize="xs" w="full">
                <Text color="gray.600">ISSUED:</Text>
                <Text fontWeight="semibold" color="black">{currentDate}</Text>
              </HStack>
              <HStack justify="space-between" fontSize="xs" w="full">
                <Text color="gray.600">ENTRY:</Text>
                <Text fontWeight="semibold" color="black">DENPASAR</Text>
              </HStack>
            </VStack>
            
            {/* Official stamp mark */}
            <Box mt={4} pt={2}>
              <Center
                w={16}
                h={16}
                mx="auto"
                borderRadius="full"
                border="2px solid"
                borderColor="red.600"
                bg="red.50"
              >
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="red.700"
                  textAlign="center"
                  lineHeight="tight"
                >
                  OFFICIAL<br />STAMP
                </Text>
              </Center>
            </Box>
          </VStack>
          
          {/* Background watermark */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%) rotate(45deg)"
            fontSize="6xl"
            fontWeight="bold"
            color="red.600"
            opacity={0.05}
            pointerEvents="none"
            zIndex={1}
          >
            VISA
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default VisaStamp;