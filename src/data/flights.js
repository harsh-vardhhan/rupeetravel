export const vietjetFeatures = [
  { id: 1, isPro: true, text: "Try booking early for prices as low as ₹6,000" },
  { id: 2, isPro: true, text: "~₹5,000 is tax on every ticket (price floor)" },
  { id: 3, isPro: true, text: "Direct flights (0 stops) from Delhi/Mumbai to Vietnam" },
  { id: 4, isPro: true, text: "Flexible route options (Hanoi, Ho Chi Minh, Da Nang)" },
  { id: 5, isPro: false, text: "Extra ~₹2,000 charge for checked-in luggage" },
  { id: 6, isPro: false, text: "Booking on Vietjet site incurs 20% TCS (opt for Indian booking portals)" },
  { id: 7, isPro: false, text: "In-flight meals are expensive (carry airport snacks in flight)" },
];

export const indigoFeatures = [
  { id: 1, isPro: true, text: "Checked-in luggage included in base ticket price" },
  { id: 2, isPro: true, text: "No 20% TCS charge (INR payment via IndiGo website)" },
  { id: 3, isPro: true, text: "Cheaper weekend flights & more comfortable seating" },
  { id: 4, isPro: true, text: "In-flight services accept INR payments" },
  { id: 5, isPro: true, text: "Accepts American Express & 6E Rewards (Ka-ching) cards" },
  { id: 6, isPro: true, text: "Strictly honors priority check-in add-on services" },
  { id: 7, isPro: false, text: "Flights from Delhi/Mumbai have 1 layover (usually via Kolkata)" },
];

export const comparisonMatrixData = [
  { facility: "Checked-in luggage included in ticket", vietjet: false, indigo: true },
  { facility: "Accepts Amex at payment gateway", vietjet: false, indigo: true },
  { facility: "Direct flight (0 stops) from Delhi/Mumbai", vietjet: true, indigo: false },
  { facility: "Credit Card Reward Program (Ka-ching)", vietjet: false, indigo: true },
  { facility: "Accepts INR for in-flight purchases", vietjet: false, indigo: true },
  { facility: "No 20% TCS tax on booking", vietjet: false, indigo: true },
];
