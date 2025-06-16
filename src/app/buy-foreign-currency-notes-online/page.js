"use client";

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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/server/table";
import Seo from "../../component/seo";
import StructuredData from "../../component/structuredData";
import Link from "next/link";

export const dynamic = "force-static";

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title:
      "✅ Buy USD as an extra emergency fund. You can use it for your other non-Vietnam trips as well",
    color: "green",
  },
  {
    item: 2,
    title:
      "✅ BookMyForex is an easy to use online service to get foreign currency",
    color: "green",
  },
  {
    item: 3,
    title: `✅ You can keep the foreign currency if its not more than $2000 per person`,
    color: "green",
  },
  {
    item: 4,
    title:
      "❌ Place the order atleast 2 working days before you plan to leave ",
    color: "red",
  },
  {
    item: 5,
    title:
      "❌ Ensure you select product type as currency note and NOT travel card",
    color: "red",
  },
];

// Structured data for SEO
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
  <Card className="mt-8">
    <CardHeader>
      <h2 className="text-xl font-bold">
        Only Order USD currency notes in India
      </h2>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <Table>
          <TableCaption>
            Cost of VND currency notes over USD currency notes in India
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>conversion rate on 31st July 2023</TableHead>
              <TableHead>INR</TableHead>
              <TableHead>VND (INRVND)</TableHead>
              <TableHead>USD (INRUSD)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>BookMyForex Rate</TableCell>
              <TableCell>₹1,000</TableCell>
              <TableCell>₫222,222</TableCell>
              <TableCell>$12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Real forex rate</TableCell>
              <TableCell>₹1,000</TableCell>
              <TableCell>₫287,845</TableCell>
              <TableCell>$12.15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conversion cost</TableCell>
              <TableCell></TableCell>
              <TableCell>₫65,623</TableCell>
              <TableCell>$0.15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conversion cost %</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-red-500">⛔ 22.8%</TableCell>
              <TableCell>1.2%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Buy forex currency notes in India"
        description="best foreign currency exchange online in India"
        canonical={
          "https://www.rupeetravel.com/buy-foreign-currency-notes-online"
        }
      />
      <div className="min-h-screen bg-background">
        <Header title={"Buy foreign currency notes"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-xl mx-auto">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    BookMyForex for USD currency notes
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
                  <div className="max-w-[310px] mx-auto">
                    <Image
                      src={"/images/currency.webp"}
                      alt="foriegn currency notes"
                      height={330}
                      width={310}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
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
                <a href="https://www.bookmyforex.com/" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Book My Forex
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
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <ComparisonMatrix />
          </div>
        </main>
      </div>
    </>
  );
}
