import Link from "next/link";
import { Card, CardHeader, CardContent } from "../components/ui/server/card";
import { Badge } from "../components/ui/server/badge";
import Seo from "../component/seo";

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

export default function HomePage() {
  return (
    <>
      <Seo canonical={"https://www.rupeetravel.com"} />
      <div className="min-h-screen bg-background">
        <main className="px-8 py-12">
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold">
              Rupee Travel
            </h1>
            <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold mt-5">
              The ultimate checklist for Vietnam travel from India 🇻🇳
            </h2>
            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Move these components to separate files
const CheckListItemCard = ({ title, list }) => {
  return (
    <Card className="w-[343px] mt-2.5 shadow-md">
      <CardHeader className="p-6 pt-6">
        <h3 className="text-2xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="space-y-4">
          {list.map((arrivals) => (
            <CheckListItem key={arrivals.key} task={arrivals} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CheckListItem = ({ task }) => {
  return (
    <div className="border-b last:border-0 pb-4 last:pb-0">
      <Link href={task.link}>
        <div className="flex items-center gap-2">
          <h4 className="text-xl font-bold">{task.heading}</h4>
          <Badge
            variant={
              task.tagColor === "orange"
                ? "default"
                : task.tagColor === "teal"
                  ? "secondary"
                  : task.tagColor === "red"
                    ? "destructive"
                    : "outline"
            }
            className="w-fit"
            style={{
              backgroundColor:
                task.tagColor === "orange"
                  ? "#FED7AA"
                  : task.tagColor === "teal"
                    ? "#99F6E4"
                    : task.tagColor === "red"
                      ? "#FECACA"
                      : "#F1F5F9",
              color:
                task.tagColor === "orange"
                  ? "#9A3412"
                  : task.tagColor === "teal"
                    ? "#134E4A"
                    : task.tagColor === "red"
                      ? "#991B1B"
                      : "#475569",
              fontWeight: "500",
            }}
          >
            {task.tagText}
          </Badge>
        </div>
        <p className="font-medium text-sm pt-2">{task.subHeading}</p>
      </Link>
    </div>
  );
};
