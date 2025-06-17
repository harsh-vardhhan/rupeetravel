"use client";

import React from "react";
import { Badge } from "../components/ui/server/badge";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

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

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const emoji = getRainEmoji(value);
    return (
      <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-gray-100 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">{label}</span>
            <span className="text-sm font-medium text-blue-600">
              {value} rainy days
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

// Custom label component
const CustomLabel = ({ x, y, width, value }) => {
  if (x === undefined || y === undefined || width === undefined) {
    return null;
  }
  const emoji = getRainEmoji(value);
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
};

// Main component
const PrecipitationChart = ({
  data,
  destinationName = "Location",
  destinationIcon = "🌍",
  currentMonth = getCurrentMonth(),
  subtitle = "Monthly precipitation patterns",
}) => {
  // Process data to add emojis
  const processedData = data.map((item) => ({
    ...item,
    emoji: getRainEmoji(item.days),
  }));

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
              {subtitle}
            </p>
          </div>
        </div>

        {/* Chart Container */}
        <div className="w-full max-w-[1000px] h-[280px] sm:h-[320px] md:h-[550px] bg-white/95 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg backdrop-blur-xl border border-white/20 relative overflow-hidden">
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
              <defs>
                {processedData.map((entry, index) => (
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
                      stopColor={
                        entry.month === currentMonth ? "#3B82F6" : "#93C5FD"
                      }
                    />
                    <stop
                      offset="100%"
                      stopColor={
                        entry.month === currentMonth ? "#1E40AF" : "#60A5FA"
                      }
                    />
                  </linearGradient>
                ))}
              </defs>

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
                className="hidden sm:block"
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
              />
              <Bar dataKey="days" radius={[8, 8, 0, 0]} label={<CustomLabel />}>
                {processedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`url(#gradient-${index})`}
                    stroke={
                      entry.month === currentMonth ? "#1E40AF" : "transparent"
                    }
                    strokeWidth={entry.month === currentMonth ? 3 : 0}
                    style={{
                      filter:
                        entry.month === currentMonth
                          ? "drop-shadow(0 8px 16px rgba(59, 130, 246, 0.3))"
                          : "drop-shadow(0 4px 8px rgba(147, 197, 253, 0.2))",
                    }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PrecipitationChart;
