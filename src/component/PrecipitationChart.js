import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Box,
  Text,
  VStack,
  Badge,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

// Helper function to determine emoji based on precipitation days
const getRainEmoji = (days) => {
  if (days <= 2) return "☀️";
  if (days <= 8) return "🌤️";
  if (days <= 15) return "🌦️";
  if (days <= 25) return "🌧️";
  return "☔";
};

// Helper function to get current month abbreviation
const getCurrentMonth = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[new Date().getMonth()];
};

// Memoized tooltip component
const CustomTooltip = React.memo(({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const emoji = getRainEmoji(value);
    return (
      <Box
        bg="rgba(255, 255, 255, 0.95)"
        p={4}
        borderRadius="xl"
        shadow="2xl"
        border="1px solid"
        borderColor="gray.100"
        backdropFilter="blur(10px)"
      >
        <Flex align="center" gap={2}>
          <Text fontSize="2xl">{emoji}</Text>
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold" fontSize="md" color="gray.800">
              {label}
            </Text>
            <Text color="blue.600" fontSize="sm" fontWeight="medium">
              {value} rainy days
            </Text>
          </VStack>
        </Flex>
      </Box>
    );
  }
  return null;
});

CustomTooltip.displayName = "CustomTooltip";

// Memoized label component
const CustomizedLabel = React.memo((props) => {
  const { x, y, width, value } = props;

  const days = value || 0;
  const emoji = getRainEmoji(days);

  if (x === undefined || y === undefined || width === undefined) {
    return null;
  }

  return (
    <text
      x={x + width / 2}
      y={y - 15}
      textAnchor="middle"
      fontSize="22"
      style={{
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
      }}
    >
      {emoji}
    </text>
  );
});

CustomizedLabel.displayName = "CustomizedLabel";

// Pre-defined styles to avoid inline object creation
const currentMonthStyle = {
  filter: "drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3))",
};

const regularMonthStyle = {
  filter: "drop-shadow(0 4px 8px rgba(147, 197, 253, 0.2))",
};

// Main reusable component
const PrecipitationChart = React.memo(
  ({
    data,
    destinationName = "Location",
    destinationIcon = "🌍",
    currentMonth = getCurrentMonth(),
    subtitle,
  }) => {
    // Memoize processed data to prevent unnecessary recalculations
    const processedData = useMemo(
      () =>
        data.map((item) => ({
          ...item,
          emoji: getRainEmoji(item.days),
        })),
      [data],
    );

    // Memoize chart subtitle
    const chartSubtitle = useMemo(
      () => subtitle || "Monthly precipitation patterns",
      [subtitle],
    );

    // Memoize gradient definitions
    const gradientDefs = useMemo(
      () =>
        processedData.map((entry, index) => (
          <linearGradient
            key={`gradient-${index}`}
            id={`gradient-${index}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={entry.month === currentMonth ? "#3B82F6" : "#93C5FD"}
            />
            <stop
              offset="100%"
              stopColor={entry.month === currentMonth ? "#1E40AF" : "#60A5FA"}
            />
          </linearGradient>
        )),
      [processedData, currentMonth],
    );

    // Memoize bar cells
    const barCells = useMemo(
      () =>
        processedData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={`url(#gradient-${index})`}
            stroke={entry.month === currentMonth ? "#1E40AF" : "transparent"}
            strokeWidth={entry.month === currentMonth ? 3 : 0}
            style={
              entry.month === currentMonth
                ? currentMonthStyle
                : regularMonthStyle
            }
          />
        )),
      [processedData, currentMonth],
    );

    // Hide X-axis on mobile
    const showXAxis = useBreakpointValue({ base: false, md: true });

    return (
      <Box
        bg="linear-gradient(#FFD6BA, #FFE8CD 0%, #FFF2EB 100%)"
        position="relative"
      >
        {/* Background pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.1"
          bgImage="radial-gradient(circle at 25px 25px, white 2px, transparent 0)"
          bgSize="50px 50px"
        />

        <VStack
          spacing={{ base: 6, md: 8 }}
          p={{ base: 4, md: 8 }}
          position="relative"
        >
          {/* Header */}
          <VStack spacing={4} textAlign="center" pt={{ base: 4, md: 8 }}>
            <Badge
              colorScheme="whiteAlpha"
              variant="solid"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
              bg="#FFDCDC"
              color="black"
              backdropFilter="blur(10px)"
            >
              {destinationIcon} {destinationName}
            </Badge>

            <VStack spacing={2}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="black"
                fontWeight="medium"
              >
                {chartSubtitle}
              </Text>
            </VStack>
          </VStack>

          {/* Chart Container */}
          <Box
            w="100%"
            maxW="1000px"
            h={{ base: "280px", sm: "320px", md: "550px" }}
            bg="rgba(255, 255, 255, 0.95)"
            p={{ base: 4, sm: 6, md: 8 }}
            borderRadius="3xl"
            shadow="2xl"
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor="whiteAlpha.200"
            position="relative"
            overflow="hidden"
          >
            {/* Subtle inner glow */}
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              borderRadius="3xl"
              bg="linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)"
              pointerEvents="none"
            />

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={processedData}
                margin={{
                  top: 50,
                  right: 20,
                  left: 10,
                  bottom: 20,
                }}
              >
                <defs>{gradientDefs}</defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(156, 163, 175, 0.3)"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#6B7280",
                    fontWeight: 500,
                  }}
                  interval={0}
                  hide={!showXAxis}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
                />
                <Bar
                  dataKey="days"
                  radius={[8, 8, 0, 0]}
                  label={<CustomizedLabel />}
                >
                  {barCells}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </VStack>
      </Box>
    );
  },
);

PrecipitationChart.displayName = "PrecipitationChart";

export default PrecipitationChart;
