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
import { luggageFeatures } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Best travel hack for luggage",
  description: "hack for travel luggage on airports",
  openGraph: {
    title: "Rupee Travel | Best travel hack for luggage",
    description: "hack for travel luggage on airports",
    url: "https://www.rupeetravel.com/travel-luggage-bag",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Best travel hack for luggage | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Best travel hack for luggage",
    description: "hack for travel luggage on airports",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/travel-luggage-bag" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Luggage travel hack"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  Airport Luggage Hack
                </h2>
                <Badge 
                  variant="outline"
                  className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                >
                  Personally used 🧳
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Image
                  src={"/images/luggage-travel-hack.webp"}
                  alt="Luggage tag hack"
                  height={155}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                  priority
                />
                <ListView features={luggageFeatures} />
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <a
                href="https://amzn.to/3Yq8M2v"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">
                  Buy Luggage Tag on Amazon
                </Button>
              </a>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}