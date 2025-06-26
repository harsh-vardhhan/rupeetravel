import Header from "../../components/ui/server/header";
import { Card, CardContent, CardFooter } from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Rupee Travel | Withdraw Vietnam local currency VND from ATM",
  description:
    "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
  openGraph: {
    title: "Rupee Travel | Withdraw Vietnam local currency VND from ATM",
    description:
      "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
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
    description:
      "Best ATM to withdraw VND with zero forex markup in Vietnam for Indians",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/withdraw-vietnam-currency-atm",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: `✅ Before you leave, withdraw some VND enough for first few days of your next visit.`,
    color: "green.500",
  },
  {
    item: 2,
    title: `✅ Avoid the hassle of looking for ATM right after your arrive Vietnam.`,
    color: "green.500",
  },
  {
    item: 3,
    title: `✅ Vietnam is still mostly cash only society. No credit card,debit card, or USD will make it as easy as Vietnam currency (VND).`,
    color: "green.500",
  },
  {
    item: 4,
    title: `❌ Try withdrawing money from Ocean Bank ATM since it has zero forex markup charges.`,
    color: "red.400",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Withdraw Vietnam currency for next visit"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-md mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={"/images/local-currency.webp"}
                    alt="local-currency"
                    height={232}
                    width={310}
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <h2 className="text-lg font-semibold">
                    Withdraw VND for next visit
                  </h2>
                  <Badge
                    variant="secondary"
                    className="bg-teal-200 text-teal-900"
                  >
                    Personally used
                  </Badge>
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature.item} className="text-sm">
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-2">
                <Link href="/atm-vietnam-zero-forex-markup">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base">
                    Ocean Bank ATM
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
