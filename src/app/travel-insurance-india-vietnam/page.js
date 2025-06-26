import Header from "../../components/ui/server/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import Seo from "../../component/seo";
import Link from "next/link";

export const dynamic = "force-static";

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
  alternates: {
    canonical: "https://www.rupeetravel.com/travel-insurance-india-vietnam",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: `✅ Got $100,000 coverage at just ~₹1300 premium`,
    color: "green",
  },
  {
    item: 2,
    title: `✅ It cannot be extended hence make sure it covers your entire stay while buying it.`,
    color: "green",
  },
  {
    item: 3,
    title: `❌ Your normal health insurance doesn't cover international treatments hence strongly recommended you get travel insurance.`,
    color: "red",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Rupee Travel | Best travel insurance for Vietnam"
        description="Travel insurance for Indians in Vietnam"
        canonical={"https://www.rupeetravel.com/travel-insurance-india-vietnam"}
      />
      <div className="min-h-screen bg-background">
        <Header title={"Travel insurance for Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-xl mx-auto">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Digit Insurance</h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-200 text-teal-900"
                  >
                    Personally used
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <div key={feature.item} className="flex items-start gap-2">
                      <p className="text-sm">{feature.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.godigit.com/international-travel-insurance"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Get Insurance
                  </Button>
                </a>
                <Link
                  href="/posts/india-cross-border-finance"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
