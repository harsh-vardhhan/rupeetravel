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
import { foodTaxiFeatures } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Food delivery and ride hailing app in Vietnam",
  description: "Grab app in Vietnam",
  openGraph: {
    title: "Rupee Travel | Food delivery and ride hailing app in Vietnam",
    description: "Grab app in Vietnam",
    url: "https://www.rupeetravel.com/food-delivery-taxi-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Food delivery and ride hailing app in Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Food delivery and ride hailing app in Vietnam",
    description: "Grab app in Vietnam",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/food-delivery-taxi-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Food & Taxi app"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  Grab App (Super-App of Vietnam)
                </h2>
                <Badge 
                  variant="outline"
                  className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                >
                  Personally used 🚗
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Image
                  src={"/images/grab.webp"}
                  alt="Grab App Vietnam"
                  height={155}
                  width={310}
                  className="w-full h-auto rounded-lg border border-border/60"
                  priority
                />
                <ListView features={foodTaxiFeatures} />
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <a
                href="https://www.grab.com/vn/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full">
                  Download Grab App
                </Button>
              </a>
            </CardFooter>
          </Card>
        </main>
      </div>
    </>
  );
}