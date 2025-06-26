import Image from "next/image";
import Header from "../../components/ui/server/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/server/card";
import { Badge } from "../../components/ui/server/badge";
import { Button } from "../../components/ui/server/button";
import { Alert, AlertDescription } from "../../components/ui/server/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import StructuredData from "../../component/structuredData";

export const dynamic = "force-static";

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: "✅ Zero forex markup credit card",
    color: "green",
  },
  {
    item: 2,
    title: "✅ Zero Joining/Annual fee",
    color: "green",
  },
  {
    item: 3,
    title:
      "✅ Withdraw cash from ATM without interest till Payment date (48 days interest free cash)",
    color: "green",
  },
  {
    item: 4,
    title: "✅ VISA backed credit card hence higher acceptance in Vietnam",
    color: "green",
  },
  {
    item: 5,
    title: "❌ Secured credit card which needs an FD as collateral",
    color: "red",
  },
  {
    item: 6,
    title: "❌ Only ₹1 Lakh FD limit hence only 1 Lakh credit card limit",
    color: "red",
  },
];

// Structured data for SEO
const structuredData = {
  "@context": "https://www.schema.org",
  "@type": "product",
  brand: "IDFC Bank",
  name: "IDCF First Wow Credit Card",
  image: "https://ik.imagekit.io/rupeetravel/credit-card.webp",
  category: "Credit Card",
  description: " Zero forex markup credit card",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "0",
    itemCondition: "http://schema.org/UsedCondition",
    availability: "http://schema.org/InStock",
    seller: {
      "@type": "Bank",
      name: "IDFC Bank",
    },
  },
};

export const metadata = {
  title:
    "Rupee Travel | credit card with zero international transaction charges",
  description:
    "Best credit card for international travel. Apply IDFC credit card.",
  openGraph: {
    title:
      "Rupee Travel | credit card with zero international transaction charges",
    description:
      "Best credit card for international travel. Apply IDFC credit card.",
    url: "https://www.rupeetravel.com/credit-cards-travel-vietnam-zero-forex-markup-fee",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | credit card with zero international transaction charges | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rupee Travel | credit card with zero international transaction charges",
    description:
      "Best credit card for international travel. Apply IDFC credit card.",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical:
      "https://www.rupeetravel.com/credit-cards-travel-vietnam-zero-forex-markup-fee",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-background">
        <Header title={"Indian Credit Cards for Vietnam"} />
        <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    IDFC First Wow credit card
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800"
                  >
                    Personally using
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src={"/images/credit-card.webp"}
                    alt="IDFC First Wow"
                    height={174}
                    width={310}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div
                        key={feature.item}
                        className="flex items-start gap-2"
                      >
                        <p className="text-sm">{feature.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.idfcfirstbank.com/credit-card/credit-card-against-fixed-deposits"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Apply Now
                  </Button>
                </a>
                <Link
                  href="/posts/india-cross-border-finance"
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full">
              <CardHeader className="pb-2">
                <Badge
                  variant="secondary"
                  className="bg-teal-100 text-teal-800"
                >
                  Personally used 😞
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert
                  variant="destructive"
                  className="bg-red-50 border-red-200 text-red-800"
                >
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please avoid Amex credit cards, since they are hardly
                    accepted anywhere in Vietnam.
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/american-express.webp"}
                  alt="Amex card"
                  height={312}
                  width={310}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
