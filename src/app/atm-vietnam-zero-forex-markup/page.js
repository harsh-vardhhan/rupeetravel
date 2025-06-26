import Header from "../../components/ui/server/header";
import { Card, CardContent, CardFooter } from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import { Alert, AlertDescription } from "../../components/ui/server/alert";
import Image from "next/image";

export const dynamic = "force-static";

export const metadata = {
  title:
    "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
  description: "Best and cheapest ATM in Vietnam for zero exchange rate",
  openGraph: {
    title:
      "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
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
    title:
      "Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners",
    description: "Best and cheapest ATM in Vietnam for zero exchange rate",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/atm-vietnam-zero-forex-markup",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: `✅ Always accepts international debit card (unlike other ATM's)`,
    color: "green.500",
  },
  {
    item: 2,
    title: "✅ Zero Forex charges on cash withdrawal.",
    color: "green.500",
  },
  {
    item: 3,
    title: `❌ Other ATMs in Vietnam can charge 1.5%-3%
          (minimum amount 30,000 VND -50,000 VND) on withdrawal.`,
    color: "red.400",
  },
];

const atmFeatures = [
  {
    item: 1,
    title: `✅ bank whose debit card you hold. 💳`,
    color: "green.500",
  },
  {
    item: 2,
    title: `✅ bank whose ATM you use. 🏧`,
    color: "green.500",
  },
  {
    item: 3,
    title: `✅ Fi debit card + Ocean Bank/MB Bank ATM = zero forex*`,
    color: "green.500",
  },
  {
    item: 4,
    title: `❌ ₹100 charge for ATM withdrawal from Fi`,
    color: "red.400",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"ATM cash withdrawal with no fee in Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="w-full max-w-sm mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/images/mb-bank-atm.webp"}
                    alt="MB Bank ATM"
                    height={284}
                    width={310}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <h2 className="text-lg font-semibold">
                    Withdraw cash from Ocean Bank ATM or MB Bank ATM
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-200 text-teal-900"
                  >
                    Personally using
                  </Badge>
                  <p className="text-sm">
                    Just search on google map{" "}
                    <span className="font-bold">Ocean Bank</span> or{" "}
                    <span className="font-bold">MB Bank</span> for nearby ATM.
                  </p>
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature.item} className="text-sm">
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.google.com/maps?q=MB+Bank+ATM"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base">
                    MB Bank ATM
                  </Button>
                </a>
                <a
                  href="https://www.google.com/maps?q=Ocean+Bank+ATM"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base">
                    Ocean Bank ATM
                  </Button>
                </a>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-sm mx-auto">
              <CardContent className="pt-6">
                <Alert className="mb-4">
                  <AlertDescription>
                    Debit card forex charge & ATM forex charge are NOT same.
                  </AlertDescription>
                </Alert>
                <div className="space-y-3">
                  <p className="text-sm">
                    When you withdraw cash from ATM&apos;s there are two sides
                    which charge you:
                  </p>
                  <ul className="space-y-2">
                    {atmFeatures.map((feature) => (
                      <li key={feature.item} className="text-sm">
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
