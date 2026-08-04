import Header from "../../components/ui/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { CheckCircle2, XCircle, Plane, Check, X } from "lucide-react";
import { vietjetFeatures, indigoFeatures, comparisonMatrixData } from "../../data/flights.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | India to Vietnam flight ticket",
  description: "Lowest Vietnam flight ticket price from India",
  openGraph: {
    title: "Rupee Travel | India to Vietnam flight ticket",
    description: "Lowest Vietnam flight ticket price from India",
    url: "https://www.rupeetravel.com/flight-booking-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | India to Vietnam flight ticket | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | India to Vietnam flight ticket",
    description: "Lowest Vietnam flight ticket price from India",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/flight-booking-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

const ComparisonMatrix = () => (
  <Card className="mt-8 border-border/80 shadow-sm overflow-hidden">
    <CardHeader className="bg-muted/40 border-b border-border/60 py-4 px-6">
      <div className="flex items-center gap-2">
        <Plane className="h-5 w-5 text-green-600" />
        <h3 className="text-lg font-bold tracking-tight text-foreground">
          Airline Comparison Matrix
        </h3>
      </div>
    </CardHeader>
    <CardContent className="p-0">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-border bg-muted/20 text-muted-foreground">
              <th className="p-4 font-semibold">Facilities & Features</th>
              <th className="p-4 font-semibold">Vietjet</th>
              <th className="p-4 font-semibold">IndiGo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {comparisonMatrixData.map((row, index) => (
              <tr key={index} className="hover:bg-muted/40 transition-colors">
                <td className="p-4 font-medium text-foreground">{row.facility}</td>
                <td className="p-4">
                  {row.vietjet ? (
                    <Badge variant="outline" className="bg-green-100 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-200 gap-1">
                      <Check className="h-3.5 w-3.5 text-green-600" /> Yes
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-200 gap-1">
                      <X className="h-3.5 w-3.5 text-red-600" /> No
                    </Badge>
                  )}
                </td>
                <td className="p-4">
                  {row.indigo ? (
                    <Badge variant="outline" className="bg-green-100 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-200 gap-1">
                      <Check className="h-3.5 w-3.5 text-green-600" /> Yes
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-100 text-red-900 border-red-200 dark:bg-red-950 dark:text-red-200 gap-1">
                      <X className="h-3.5 w-3.5 text-red-600" /> No
                    </Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

const FlightCard = ({ cardTitle, badgeText, features, buttonName, buttonLink }) => {
  return (
    <Card className="w-full flex flex-col justify-between border-border/80 shadow-sm hover:shadow-md transition-shadow">
      <div>
        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-bold text-foreground">{cardTitle}</h2>
            <Badge
              variant="outline"
              className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
            >
              {badgeText}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {features.map((feature) => (
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
        </CardContent>
      </div>
      <CardFooter className="pt-4">
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button className="w-full">
            {buttonName}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Booking flight for Vietnam"} />
        <main className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FlightCard
              cardTitle={"Book Vietjet Flight"}
              badgeText={"Direct Flights ✈️"}
              features={vietjetFeatures}
              buttonName={"Book Vietjet"}
              buttonLink={"https://www.vietjetair.com/en"}
            />
            <FlightCard
              cardTitle={"Book IndiGo Flight"}
              badgeText={"Free Checked Luggage 🧳"}
              features={indigoFeatures}
              buttonName={"Book IndiGo"}
              buttonLink={"https://www.goindigo.in/"}
            />
          </div>
          <ComparisonMatrix />
        </main>
      </div>
    </>
  );
}