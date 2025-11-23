"use client";
import { Button } from "../ui/button";

export default function AirlineGroupButton({ airlineGroup, destination, source, drySeason, priceUnder10k }) {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Free checked-in", value: "free" },
    { label: "Paid checked-in", value: "paid" }
  ];

  const handleClick = (value) => {
    const url = new URL(window.location.href);
    url.searchParams.set("airlineGroup", value);
    url.searchParams.set("destination", destination);
    url.searchParams.set("source", source);
    if (drySeason) {
      url.searchParams.set("drySeason", "1");
    } else {
      url.searchParams.delete("drySeason");
    }
    if (priceUnder10k) {
      url.searchParams.set("priceUnder10k", "1");
    } else {
      url.searchParams.delete("priceUnder10k");
    }
    url.searchParams.delete("page");
    window.location.href = url.toString();
  };

  return (
    <div className="flex gap-2 mb-4">
      {buttons.map(btn => (
        <Button
          key={btn.value}
          type="button"
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${airlineGroup === btn.value ? 'bg-blue-600 dark:bg-blue-700 text-white border-blue-600 dark:border-blue-700' : 'bg-white dark:bg-gray-900 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20'}`}
          onClick={() => handleClick(btn.value)}
          aria-pressed={airlineGroup === btn.value}
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
} 