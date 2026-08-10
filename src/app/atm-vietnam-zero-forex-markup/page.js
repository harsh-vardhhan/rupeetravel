import Header from "../../components/ui/header";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from 'next/image';
import { atmGeneralFeatures, atmBankFeatures } from "../../data/atm.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
  description: "Best and cheapest ATM in Vietnam for zero exchange rate",
  openGraph: {
    title: "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
    description: "Best and cheapest ATM in Vietnam for zero exchange rate",
    url: "https://www.rupeetravel.com/atm-vietnam-zero-forex-markup",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
    description: "Best and cheapest ATM in Vietnam for zero exchange rate",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/atm-vietnam-zero-forex-markup" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"ATM cash withdrawal with no fee in Vietnam"} />
        <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/images/mb-bank-atm.webp"}
                    alt="MB Bank ATM"
                    height={284}
                    width={310}
                    className="rounded-lg border border-border/60"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">
                      MB Bank ATM
                    </h2>
                    <Badge
                      variant="outline"
                      className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                    >
                      Zero Local ATM Fee 🏧
                    </Badge>
                  </div>
                  <div className="space-y-2.5 pt-2">
                    {atmGeneralFeatures.map((feature) => (
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
              <CardFooter className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href="https://mbbank.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Locate MB Bank ATM
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/images/ocean-bank-atm.avif"}
                    alt="Ocean Bank ATM"
                    height={284}
                    width={310}
                    className="rounded-lg border border-border/60"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">
                      OceanBank ATM
                    </h2>
                    <Badge
                      variant="outline"
                      className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                    >
                      Zero Local ATM Fee 🏧
                    </Badge>
                  </div>
                  <div className="space-y-2.5 pt-2">
                    {atmBankFeatures.map((feature) => (
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
              <CardFooter className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <a
                  href="https://oceanbank.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Locate OceanBank ATM
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}