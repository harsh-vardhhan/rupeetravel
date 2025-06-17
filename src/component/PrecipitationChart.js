"use client";

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
import { Badge } from "../components/ui/server/badge";
import { Card, CardContent } from "../components/ui/server/card";

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
      <Card className="bg-white/95 p-4 shadow-lg border border-gray-100 backdrop-blur-md">
        <CardContent className="p-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{emoji}</span>
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm text-gray-800">{label}</span>
              <span className="text-sm font-medium text-blue-600">
                {value} rainy days
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
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
      className="drop-shadow-md"
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
    console.log(data);
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

    return (
      <div className="relative bg-gradient-to-b from-[#FFD6BA] via-[#FFE8CD] to-[#FFF2EB]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative flex flex-col gap-6 md:gap-8 p-4 md:p-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center pt-4 md:pt-8">
            <Badge
              variant="secondary"
              className="px-4 py-2 rounded-full text-sm font-medium bg-[#FFDCDC] text-black backdrop-blur-md"
            >
              {destinationIcon} {destinationName}
            </Badge>

            <div className="flex flex-col gap-2">
              <p className="text-base md:text-lg text-black font-medium">
                {chartSubtitle}
              </p>
            </div>
          </div>

          {/* Chart Container */}
          <Card className="w-full max-w-[1000px] h-[280px] sm:h-[320px] md:h-[550px] bg-white/95 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg backdrop-blur-xl border border-white/20 relative overflow-hidden">
            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
              }}
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
                  hide={false}
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
          </Card>
        </div>
      </div>
    );
  },
);

PrecipitationChart.displayName = "PrecipitationChart";

export default PrecipitationChart;
