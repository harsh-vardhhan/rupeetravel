import Header from "../../components/ui/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import Image from "next/image";
import ListView from "../../components/ui/listview";
import { withdrawCurrencyFeatures } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Withdraw Vietnam local currency VND from ATM",
  description: "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
  openGraph: {
    title: "Rupee Travel | Withdraw Vietnam local currency VND from ATM",
    description: "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
    url: "https://www.rupeetravel.com/withdraw-vietnam-currency-atm",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Withdraw Vietnam local currency VND from ATM | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Withdraw Vietnam local currency VND from ATM",
    description: "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/withdraw-vietnam-currency-atm" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Withdraw VND for next visit"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  VND Cash for Next Travel
                </h2>
                <Badge 
                  variant="outline"
                  className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                >
                  Frequent Visitors 💵
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Image
                  src={"/images/vietnam-currency-notes.avif"}
                  alt="VND currency notes"
                  height={155}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                  priority
                />
                <ListView features={withdrawCurrencyFeatures} />
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <a
                href="/atm-vietnam-zero-forex-markup"
                className="w-full"
              >
                <Button className="w-full">
                  Zero Forex ATMs
                </Button>
              </a>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}