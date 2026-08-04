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
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import StructuredData from "../../components/util/structuredData";
import { creditCardFeatures } from "../../data/cards.js";

export const dynamic = 'force-static';

const structuredData = {
  "@context": "https://www.schema.org",
  "@type": "product",
  "brand": "IDFC Bank",
  "name": "IDCF First Wow Credit Card",
  "image": "https://ik.imagekit.io/rupeetravel/credit-card.webp",
  "category": "Credit Card",
  "description": " Zero forex markup credit card",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "0",
    "itemCondition": "http://schema.org/UsedCondition",
    "availability": "http://schema.org/InStock",
    "seller": {
      "@type": "Bank",
      "name": "IDFC Bank"
    },
  }
};

export const metadata = {
  title: "Rupee Travel | credit card with zero international transaction charges",
  description: "Best credit card for international travel. Apply IDFC credit card.",
  openGraph: {
    title: "Rupee Travel | credit card with zero international transaction charges",
    description: "Best credit card for international travel. Apply IDFC credit card.",
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
    title: "Rupee Travel | credit card with zero international transaction charges",
    description: "Best credit card for international travel. Apply IDFC credit card.",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/credit-cards-travel-vietnam-zero-forex-markup-fee" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">
                    IDFC First Wow credit card
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
                    src={"/images/credit-card.webp"}
                    alt="IDFC First Wow"
                    height={174}
                    width={310}
                    className="w-full h-auto rounded-lg border border-border/60"
                  />
                  <div className="space-y-2.5">
                    {creditCardFeatures.map((feature) => (
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
                  href="https://www.idfcfirstbank.com/credit-card/credit-card-against-fixed-deposits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Apply Now
                  </Button>
                </a>
                <Link 
                  href="/posts/india-cross-border-finance"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full border-border/80 shadow-sm">
              <CardHeader className="pb-3">
                <Badge 
                  variant="outline"
                  className="bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-200 font-semibold w-fit"
                >
                  Avoid Amex in Vietnam ❌
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-900 dark:bg-red-950/50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="font-medium text-sm">
                    Please avoid Amex credit cards, since they are hardly accepted
                    anywhere in Vietnam.
                  </AlertDescription>
                </Alert>
                <Image
                  src={"/images/american-express.webp"}
                  alt="Amex card"
                  height={312}
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