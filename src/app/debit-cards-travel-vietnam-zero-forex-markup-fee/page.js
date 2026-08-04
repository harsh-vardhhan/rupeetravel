import Image from 'next/image';
import Header from "../../components/ui/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Alert, AlertDescription } from "../../components/ui/alert";
import { AlertCircle, Info, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import StructuredData from "../../components/util/structuredData";
import { debitCardFeatures } from "../../data/cards.js";

export const dynamic = 'force-static';

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
        <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4 space-y-6">
          <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="font-semibold text-base">
              Note: Fi debit card is dead
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">
                    Fi Debit Card
                  </h2>
                  <Badge 
                    variant="outline"
                    className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
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
                    className="w-full h-auto rounded-lg border border-border/60"
                  />
                  <p className="text-xs text-muted-foreground">
                    Fi is a no brainer, easy to use neobank account. Suitable for travelling abroad.
                  </p>
                  <div className="space-y-2.5">
                    {debitCardFeatures.map((feature) => (
                      <div key={feature.id} className="flex items-start gap-2.5">
                        {feature.isPro ? (
                          <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-medium text-foreground/90 leading-snug">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="https://fi.money/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Get Fi Account
                  </Button>
                </a>
                <Link 
                  href="/atm-vietnam-zero-forex-markup"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    Zero forex ATMs
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full border-border/80 shadow-sm">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-bold text-foreground">Fi App Settings</h2>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <Alert className="bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/50">
                  <Info className="h-4 w-4 text-blue-600 shrink-0" />
                  <AlertDescription className="text-xs font-medium">
                    Do activate the &quot;Apply these settings to international usage&quot; checkbox when abroad
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/fisetting.webp"}
                  alt="Fi Settings Mobile"
                  height={364}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                />
              </CardContent>
            </Card>

            <Card className="w-full border-border/80 shadow-sm">
              <CardHeader className="pb-3">
                <Badge 
                  variant="outline"
                  className="bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-200 font-semibold w-fit"
                >
                  Avoid Discover Cards ❌
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50">
                  <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                  <AlertDescription className="text-xs font-medium">
                    Please avoid Discover debit cards since they are hardly accepted anywhere in Vietnam.
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/discover.webp"}
                  alt="Discover card"
                  height={232}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}