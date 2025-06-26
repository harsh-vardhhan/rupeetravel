import Image from 'next/image';
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
import { AlertCircle, Info } from "lucide-react";
import Link from "next/link";
import StructuredData from "../../components/ui/server/structured-data";

export const dynamic = 'force-static';

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: "✅ Zero forex markup on debit card",
    color: "green",
  },
  {
    item: 2,
    title: "✅ ₹100 on international ATM cash withdrawl from Fi",
    color: "green",
  },
  {
    item: 3,
    title:
      "✅ For unlimited zero forex spending, maintain ₹50,000 minimum balance.",
    color: "green",
  },
  {
    item: 4,
    title:
      "✅ For zero forex spending till ₹50,000, maintain ₹10,000 minimum balance.",
    color: "green",
  },
  {
    item: 5,
    title: `❌ Local ATMs in Vietnam will still charge 1.5%-3%
          (minimum amount 30,000 VND -50,000 VND) on withdrawal.
          Hence try using zero forex ATM's.`,
    color: "red",
  },
];

// Structured data for SEO
const structuredData = {
  "@context": "https://www.schema.org",
  "@type": "product",
  brand: "Fi Bank",
  name: "Fi Debit Card",
  image: "https://ik.imagekit.io/rupeetravel/debit-card.webp",
  category: "Debit Card",
  description: " Zero forex markup debit card",
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
      name: "Fi Bank",
    },
  },
};

export const metadata = {
  title: "Rupee Travel | debit card with zero forex markup for travel in Vietnam",
  description: "Best debit card with zero forex markup for foreign travel in Vietnam for Indians",
  openGraph: {
    title: "Rupee Travel | debit card with zero forex markup for travel in Vietnam",
    description: "Best debit card with zero forex markup for foreign travel in Vietnam for Indians",
    url: "https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | debit card with zero forex markup for travel in Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | debit card with zero forex markup for travel in Vietnam",
    description: "Best debit card with zero forex markup for foreign travel in Vietnam for Indians",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-background">
        <Header title={"Indian Debit Cards for Vietnam"} />
        <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    Fi Debit Card
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
                    src={"/images/debit-card.webp"}
                    alt="Fi Debit Card"
                    height={232}
                    width={310}
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground">
                    Fi is a no brainer, easy to use neobank account. Suit&apos;s
                    perfect for travelling abroad.
                  </p>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div key={feature.item} className="flex items-start gap-2">
                        <p className="text-sm">
                          {feature.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="https://fi.money/"
                  className="w-full"
                >
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Get Fi Account
                  </Button>
                </a>
                <Link 
                  href="/atm-vietnam-zero-forex-markup"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Zero forex ATMs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full">
              <CardHeader className="pb-2">
                <h2 className="text-xl font-bold">Fi Settings</h2>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <Alert className="bg-blue-50 border-blue-200 text-blue-800">
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Do activate the &quot;Apply these settings to international
                    usage&quot; checkbox when abroad
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/fisetting.webp"}
                  alt="Fi Settings Mobile"
                  height={364}
                  width={310}
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
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
                <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please avoid Discover debit cards since they are hardly
                    accepted anywhere. You can check the logo on your debit card
                    in case you aren&apos;t aware.
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/discover.webp"}
                  alt="Discover card"
                  height={232}
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