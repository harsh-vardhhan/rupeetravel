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
import { hotelRecommendations } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Book hotel in Vietnam",
  description: "Da Nang Hotels | Vietnam Hotel booking",
  openGraph: {
    title: "Rupee Travel | Book hotel in Vietnam",
    description: "Da Nang Hotels | Vietnam Hotel booking",
    url: "https://www.rupeetravel.com/hotel-booking-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Book hotel in Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Book hotel in Vietnam",
    description: "Da Nang Hotels | Vietnam Hotel booking",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/hotel-booking-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Booking hotel for Vietnam"} />
        <main className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">
                    Book Da Nang Hotels
                  </h2>
                  <Badge 
                    variant="outline"
                    className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                  >
                    Personally stayed 🏨
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Image
                    src={"/images/hotel.webp"}
                    alt="Da Nang Beach Hotel"
                    height={232}
                    width={310}
                    className="w-full h-auto rounded-lg border border-border/60"
                  />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Recommended Beachfront Hotels:
                    </p>
                    <ul className="space-y-1.5 divide-y divide-border/40">
                      {hotelRecommendations.map((hotel) => (
                        <li key={hotel.item} className="pt-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium text-foreground">{hotel.name}</span>
                          <a
                            href={hotel.contact}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-green-600 hover:underline font-semibold"
                          >
                            Contact ➔
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <a
                  href="https://www.agoda.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Book on Agoda
                  </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="w-full border-border/80 shadow-sm">
              <CardHeader className="pb-3">
                <h2 className="text-xl font-bold text-foreground">Booking Tips</h2>
              </CardHeader>
              <CardContent className="space-y-3 text-sm font-medium text-foreground/90">
                <p>
                  🏨 Contact hotels directly via Facebook page to get early check-in or airport pickup discounts.
                </p>
                <p>
                  💳 Ensure your Agoda booking selects pay-at-hotel or INR billing to avoid unexpected forex conversion charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}