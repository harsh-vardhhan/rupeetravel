import CheckListItemCard from "../components/ui/CheckListItemCard";
import Image from "next/image";

// Force static generation
export const dynamic = "force-static";

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
    heading: ` Bali travel guide for Indians`,
    subHeading: ` 7 day itinerary for Couples in Bali`,
    tagText: `Blog`,
    tagColor: `red`,
    link: `/bali-travel-guide-for-indians`,
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
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Subtle Ambient Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-500/10 via-green-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <main className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-3.5 py-1 text-xs sm:text-sm font-semibold text-teal-800 dark:text-teal-300">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              India ✈️ Vietnam Travel Guide
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Rupee Travel
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground/90 leading-relaxed max-w-3xl">
              The ultimate checklist for Vietnam travel from India 🇻🇳
            </h2>

            {/* Featured in news section */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs sm:text-sm font-bold text-foreground/70 uppercase tracking-wider">Featured in</span>
              <a
                href="https://www.livemint.com/money/personal-finance/travel-series-goa-beach-destination-vietnam-mumbai-techie-da-nang-budget-destination-hotels-flights-federal-bank-11733038109690.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/images/mint-logo.avif"
                  alt="Mint logo"
                  width={110}
                  height={45}
                  style={{ maxWidth: 140, maxHeight: 60 }}
                  className="object-contain rounded-lg border border-orange-200 dark:border-orange-900/60 shadow-sm bg-white dark:bg-card px-3.5 py-1.5 hover:shadow-md transition-all"
                  priority
                />
              </a>
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CheckListItemCard
                title={"Before you arrive 🇮🇳"}
                list={beforeArrivals}
              />
              <CheckListItemCard title={"Arrived 🇻🇳"} list={arrivals} />
              <CheckListItemCard
                title={"Before you depart 🇻🇳"}
                list={beforeDeparture}
              />
              <CheckListItemCard title={"Blogs 📝"} list={blogs} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
