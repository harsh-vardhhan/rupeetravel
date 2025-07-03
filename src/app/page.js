import CheckListItemCard from "../components/ui/server/CheckListItemCard";

// Force static generation
export const dynamic = 'force-static';

// Move static data outside of component
const beforeArrivals = [
  {
    key: 1,
    heading: `Debit Card`,
    subHeading: `Zero forex markup fee debit card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/debit-cards-travel-vietnam-zero-forex-markup-fee`,
  },
  {
    key: 2,
    heading: `Credit Card`,
    subHeading: `Zero forex markup fee credit card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/credit-cards-travel-vietnam-zero-forex-markup-fee`,
  },
  {
    key: 3,
    heading: `Foreign Currency Notes`,
    subHeading: `Buy foreign currency notes online`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/buy-foreign-currency-notes-online`,
  },
  {
    key: 4,
    heading: `E-Visa`,
    subHeading: `Apply online E-Visa for Vietnam`,
    tagText: `Mandatory`,
    tagColor: `teal`,
    link: `/e-visa-vietnam-indians`,
  },
  {
    key: 5,
    heading: `Flight Booking`,
    subHeading: `Cheapest flights from India to Vietnam`,
    tagText: `Mandatory`,
    tagColor: `teal`,
    link: `/flight-booking-vietnam`,
  },
  {
    key: 6,
    heading: `Travel insurance`,
    subHeading: `Best travel insurance for Indians`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/travel-insurance-india-vietnam`,
  },
  {
    key: 7,
    heading: `Luggage`,
    subHeading: `Quick travel hack for luggage`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/travel-luggage-bag`,
  },
  {
    key: 8,
    heading: `Hotel Booking`,
    subHeading: `Book Vietnam hotel online`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/hotel-booking-vietnam`,
  },
  {
    key: 9,
    heading: `eSim`,
    subHeading: `Get Vietnam eSim for single sim phone`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/esim-vietnam`,
  },
];

const arrivals = [
  {
    key: 1,
    heading: `Food & Taxi`,
    subHeading: `Download the Zomato + Uber of Vietnam`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/food-delivery-taxi-vietnam`,
  },
  {
    key: 2,
    heading: `Local mobile SIM card`,
    subHeading: `Get local Vietnam SIM card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/local-sim-card-vietnam`,
  },
  {
    key: 3,
    heading: `Place to work`,
    subHeading: `Best place for remote work in Vietnam`,
    tagText: `Remote work`,
    tagColor: `red`,
    link: `/remote-work-vietnam`,
  },
  {
    key: 4,
    heading: `ATM cash withdrawal`,
    subHeading: `zero forex markup charges ATM`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/atm-vietnam-zero-forex-markup`,
  },
];

const beforeDeparture = [
  {
    key: 1,
    heading: ` VND for next visit`,
    subHeading: `Withdraw Vietnam currency from ATM `,
    tagText: `Frequent visitors`,
    tagColor: `blue`,
    link: `/withdraw-vietnam-currency-atm`,
  },
];

const blogs = [
  {
    key: 1,
    heading: ` Accidental Nomad`,
    subHeading: `Month long stay in Da Nang `,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/posts/digital-nomad-da-nang`,
  },
  {
    key: 2,
    heading: ` Indian passport sucks, but not its financial services`,
    subHeading: ` Cross border financial tools`,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/posts/india-cross-border-finance`,
  },
  {
    key: 3,
    heading: ` How to get Vietnam currency in India`,
    subHeading: ` Foreign currency note conversion rates `,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/how-to-get-vietnam-currency`,
  },
  {
    key: 4,
    heading: ` Budget experiences of Da Nang, Vietnam`,
    subHeading: ` Affordable experiences to enjoy in Da Nang `,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/da-nang-vietnam-experiences`,
  },
  {
    key: 5,
    heading: ` Bali travel guide for Indians`,
    subHeading: ` 7 day itinerary for Couples in Bali`,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/bali-travel-guide-for-indians`,
  },
];

const flights = [
  {
    key: 1,
    heading: ` New Delhi to Vietnam flights`,
    subHeading: `Cheapest flights from New Delhi to Vietnam`,
    tagText: `Fights`,
    tagColor: `teal`,
    link: `/new-delhi-to-vietnam-flight`,
  },
  {
    key: 2,
    heading: ` Mumbai to Vietnam flights`,
    subHeading: ` Cheapest flights from Mumbai to Vietnam`,
    tagText: `Flights`,
    tagColor: `teal`,
    link: `/mumbai-to-vietnam-flight`,
  },
  {
    key: 3,
    heading: ` Bangalore to Vietnam flights`,
    subHeading: ` Cheapest flights from Bangalore to Vietnam`,
    tagText: `Flights`,
    tagColor: `teal`,
    link: `/bangalore-to-vietnam-flight`,
  },
  {
    key: 4,
    heading: ` Kolkata to Vietnam flights`,
    subHeading: ` Cheapest flights from Kolkata to Vietnam`,
    tagText: `Flights`,
    tagColor: `teal`,
    link: `/kolkata-to-vietnam-flight`,
  },
];

export const metadata = {
  title: "Rupee Travel | Vietnam trip for Indians",
  description: "Vietnam budget travel checklist for Indians",
  openGraph: {
    title: "Rupee Travel | Vietnam trip for Indians",
    description: "Vietnam budget travel checklist for Indians",
    url: "https://www.rupeetravel.com",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Vietnam trip for Indians | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Vietnam trip for Indians",
    description: "Vietnam budget travel checklist for Indians",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <main className="px-4 sm:px-8 py-8 sm:py-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold">
              Rupee Travel
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mt-4 sm:mt-5">
              The ultimate checklist for Vietnam travel from India 🇻🇳
            </h2>
            <div className="mt-8 sm:mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                <CheckListItemCard
                  title={"Before you arrive 🇮🇳"}
                  list={beforeArrivals}
                />
                <CheckListItemCard title={"Arrived 🇻🇳"} list={arrivals} />
                <CheckListItemCard
                  title={"Before you depart 🇻🇳"}
                  list={beforeDeparture}
                />
                <CheckListItemCard title={"Blogs"} list={blogs} />
                <CheckListItemCard title={"Flights"} list={flights} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}