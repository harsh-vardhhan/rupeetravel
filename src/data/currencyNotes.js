export const forexNotesFeatures = [
  { id: 1, isPro: true, text: "Buy USD as an extra emergency fund (usable for non-Vietnam trips as well)" },
  { id: 2, isPro: true, text: "BookMyForex is an easy-to-use online service for foreign currency delivery" },
  { id: 3, isPro: true, text: "Legal to hold up to $2,000 USD foreign currency per person upon return" },
  { id: 4, isPro: false, text: "Place the order at least 2 working days before departure" },
  { id: 5, isPro: false, text: "Ensure product type selected is Currency Note and NOT Travel Card" },
];

export const forexComparisonRows = [
  { metric: "BookMyForex Rate", inr: "₹1,000", vnd: "₫222,222", usd: "$12" },
  { metric: "Real Forex Rate", inr: "₹1,000", vnd: "₫287,845", usd: "$12.15" },
  { metric: "Conversion Cost", inr: "-", vnd: "₫65,623", usd: "$0.15" },
  { metric: "Conversion Cost %", inr: "-", vnd: "22.8% (Extreme Markup)", usd: "1.2% (Low Markup)", isHighCostVnd: true },
];
