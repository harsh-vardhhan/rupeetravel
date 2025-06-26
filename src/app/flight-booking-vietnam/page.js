import Header from "../../components/ui/server/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import { Alert, AlertDescription } from "../../components/ui/server/alert";
import { AlertCircle } from "lucide-react";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | India to Vietnam flight ticket",
  description: "Lowest Vietnam flight ticket price from India",
  openGraph: {
    title: "Rupee Travel | India to Vietnam flight ticket",
    description: "Lowest Vietnam flight ticket price from India",
    url: "https://www.rupeetravel.com/flight-booking-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | India to Vietnam flight ticket | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | India to Vietnam flight ticket",
    description: "Lowest Vietnam flight ticket price from India",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/flight-booking-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

// Define the data directly in the component since it's static
const vietjet = [
  {
    item: 1,
    title: `✅ Try booking early, you can get prices as low as ₹6,000`,
    color: "green",
  },
  {
    item: 2,
    title: `✅ ~₹5,000 is tax on every ticket hence prices can't go lower than that`,
    color: "green",
  },
  {
    item: 3,
    title: `✅ Extra ~₹2,000 for checked-in luggage`,
    color: "green",
  },
  {
    item: 4,
    title: `✅ If you plan to travel the entire country, try checking the cheapest current route eg: Hanoi, Ho Chi Minh, Da Nang.`,
    color: "green",
  },
  {
    item: 5,
    title: `❌ Booking via the Vietjet site from July 2023 will incur 20% TCS. Opt for an Indian booking site that makes INR payments. Disable international transactions to prevent USD payment. [Note: Not applicable if your annual international spending on credit cards is less than INR 7 Lakhs.]`,
    color: "red",
  },
  {
    item: 6,
    title: `❌ Food in plane is expensive, you can even carry some airport food in flight.`,
    color: "red",
  },
];

const indigo = [
  {
    item: 1,
    title: `✅ Cheaper flights on weekends than Vietjet`,
    color: "green",
  },
  {
    item: 2,
    title: `✅ More comfortable seats than Vietjet`,
    color: "green",
  },
  {
    item: 3,
    title: `✅ In-flight services accepts INR and USD, whereas Vietjet accepts VND and USD`,
    color: "green",
  },
  {
    item: 4,
    title: `✅ Payment gateway for booking flight tickets accepts American Express unlike Vietjet`,
    color: "green",
  },
  {
    item: 5,
    title: `✅ You can use Reward cards like Indigo ka-ching whereas Vietjet doesn't have any partner program with any Indian credit card`,
    color: "green",
  },
  {
    item: 6,
    title: `✅ Takes their add-on services like priority check-in very seriously unlike Vietjet which at times denies this service at times even when charging for it.`,
    color: "green",
  },
  {
    item: 7,
    title: `✅ No extra charge for checked-in luggage unlike Vietjet`,
    color: "green",
  },
  {
    item: 8,
    title: `✅ No 20% TCS since INR payment occurs via the Indigo website.`,
    color: "green",
  },
  {
    item: 9,
    title: `❌ Flights from Delhi/Mumbai to Vietnam are not direct, rather via Kolkata. Vietjet has direct flights from Delhi/Mumbai to Vietnam.`,
    color: "red",
  },
];

const ComparisonMatrix = () => (
  <Card className="mt-8">
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left font-medium">Facilities</th>
              <th className="p-4 text-left font-medium">Vietjet</th>
              <th className="p-4 text-left font-medium">Indigo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Checked-in luggage cost included in ticket price</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Accepts Amex at payment gateway</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Direct flight to Vietnam from India (0 stops)</td>
              <td className="p-4">✅</td>
              <td className="p-4">❌</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Credit Card Reward Program</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Accepts INR for in-flight services</td>
              <td className="p-4">❌</td>
              <td className="p-4">✅</td>
            </tr>
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const FlightCard = ({ cardTitle, features, buttonName, buttonLink }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{cardTitle}</h2>
          <Badge 
            variant="secondary"
            className="bg-teal-200 text-teal-900"
          >
            Personally used
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature.item} className="flex items-start gap-2">
              <p className="text-sm">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
        <a 
          href={buttonLink}
          className="w-full"
        >
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            {buttonName}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Booking flight for Vietnam"} />
        <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <FlightCard
              cardTitle={"Book Vietjet flight to Vietnam"}
              features={vietjet}
              buttonName={"Book Vietjet"}
              buttonLink={"https://www.vietjetair.com/en"}
            />
            <FlightCard
              cardTitle={"Book Indigo flight to Vietnam"}
              features={indigo}
              buttonName={"Book Indigo"}
              buttonLink={"https://www.goindigo.in/"}
            />
            <Card className="w-full">
              <CardContent className="pt-6">
                <Badge 
                  variant="secondary"
                  className="bg-orange-200 text-orange-900 mb-4"
                >
                  Fellow passenger faced this
                </Badge>
                <Alert className="bg-green-100 border-green-300 text-green-900">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please ensure no mistakes are made in filling personal details
                    during booking or else you might have to pay ~5,000 for fixing
                    info at airport.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
          <ComparisonMatrix />
        </main>
      </div>
    </>
  );
}

// Remove getStaticProps since we're using App Router RSC
// The vietjet and indigo data are now defined directly in the component