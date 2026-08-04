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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { CheckCircle2, XCircle, DollarSign } from "lucide-react";
import StructuredData from "../../components/util/structuredData";
import { forexNotesFeatures, forexComparisonRows } from "../../data/currencyNotes.js";

export const dynamic = 'force-static';

const structuredData = {
  "@context": "https://www.schema.org",
  "@type": "product",
  brand: "BookMyForex",
  name: "USD foriegn currency notes",
  image: "https://ik.imagekit.io/rupeetravel/currency.webp",
  category: "foreign currency notes",
  description: "Buy USD forex cash at best prices.",
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
      "@type": "Currency Dealer",
      name: "BookMyForex",
    },
  },
};

const ComparisonMatrix = () => (
  <Card className="mt-8 border-border/80 shadow-sm overflow-hidden">
    <CardHeader className="bg-muted/40 border-b border-border/60 py-4 px-6">
      <div className="flex items-center gap-2">
        <DollarSign className="h-5 w-5 text-green-600" />
        <h2 className="text-lg font-bold text-foreground">
          Cost Breakdown: Order USD Cash vs VND Cash in India
        </h2>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <Table className="w-full text-sm">
          <TableHeader>
            <TableRow className="bg-muted/20 border-b border-border">
              <TableHead className="font-semibold">Metrics (Sample Conversion)</TableHead>
              <TableHead className="font-semibold">INR Amount</TableHead>
              <TableHead className="font-semibold">VND (INRVND)</TableHead>
              <TableHead className="font-semibold">USD (INRUSD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-border/60">
            {forexComparisonRows.map((row, idx) => (
              <TableRow key={idx} className="hover:bg-muted/40 transition-colors">
                <TableCell className="font-medium text-foreground">{row.metric}</TableCell>
                <TableCell>{row.inr}</TableCell>
                <TableCell className={row.isHighCostVnd ? "font-bold text-red-600 dark:text-red-400" : ""}>
                  {row.vnd}
                </TableCell>
                <TableCell className={row.isHighCostVnd ? "font-bold text-green-600 dark:text-green-400" : ""}>
                  {row.usd}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export const metadata = {
  title: "Rupee Travel | Buy forex currency notes in India",
  description: "best foreign currency exchange online in India",
  openGraph: {
    title: "Rupee Travel | Buy forex currency notes in India",
    description: "best foreign currency exchange online in India",
    url: "https://www.rupeetravel.com/buy-foreign-currency-notes-online",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Buy forex currency notes in India | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Buy forex currency notes in India",
    description: "best foreign currency exchange online in India",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/buy-foreign-currency-notes-online" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-background">
        <Header title={"Buy foreign currency notes"} />
        <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">
                    BookMyForex
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
                    src={"/images/currency.webp"}
                    alt="BookMyForex currency"
                    height={232}
                    width={310}
                    className="w-full h-auto rounded-lg border border-border/60"
                  />
                  <div className="space-y-2.5">
                    {forexNotesFeatures.map((feature) => (
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
              <CardFooter className="pt-2">
                <a
                  href="https://www.bookmyforex.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Buy USD Notes Online
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full border-border/80 shadow-sm">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-bold text-foreground">Order Proof & Delivery</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src={"/images/buy-USD-currency-notes.avif"}
                  alt="BookMyForex order"
                  height={232}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                />
              </CardContent>
            </Card>
          </div>
          <ComparisonMatrix />
        </main>
      </div>
    </>
  );
}