import Header from "../../components/ui/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";
import ListView from "../../components/ui/listview";
import { insuranceFeatures } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Best travel insurance for Vietnam",
  description: "Travel insurance for Indians in Vietnam",
  openGraph: {
    title: "Rupee Travel | Best travel insurance for Vietnam",
    description: "Travel insurance for Indians in Vietnam",
    url: "https://www.rupeetravel.com/travel-insurance-india-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Best travel insurance for Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Best travel insurance for Vietnam",
    description: "Travel insurance for Indians in Vietnam",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/travel-insurance-india-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Travel insurance for Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  Digit Insurance
                </h2>
                <Badge 
                  variant="outline"
                  className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                >
                  Personally used 🛡️
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 pt-1">
                <ListView features={insuranceFeatures} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://www.godigit.com/international-travel-insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">
                  Get Insurance
                </Button>
              </a>
              <Link 
                href="/posts/india-cross-border-finance"
                className="w-full"
              >
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}