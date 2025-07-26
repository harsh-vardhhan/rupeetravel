import Header from "../../components/ui/header";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Image from 'next/image';

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

// Define the features data directly in the component since it's static
const features = [
  {
    item: 1,
    title: `✅ It's the Uber + Zomato of Vietnam`,
    color: "green.500",
  },
  {
    item: 2,
    title: `❌ Signup with the local Vietnam number`,
    color: "red.400",
  },
  {
    item: 3,
    title: `✅ Indian debit and credit cards don't work with Grab. So keep cash (VND) ready before using it's services.`,
    color: "green.500",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Food Delivery and Taxi for Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-sm mx-auto">
              <CardContent className="pt-6">
                <Image
                  src={"/images/grab.webp"}
                  alt="Grab Mobile App"
                  width={310}
                  height={425}
                  className="mx-auto"
                />
                <div className="mt-6 space-y-3">
                  <h2 className="text-lg font-semibold">
                    Download Grab for taxi and food delivery
                  </h2>
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
                <a href="https://www.grab.com/vn/download/">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base"
                  >
                    Download Grab
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