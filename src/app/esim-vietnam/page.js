import Header from "../../components/ui/header";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import Image from "next/image";
import ListView from "../../components/ui/listview";
import { esimFeatures, esimReasons } from "../../data/guides.js";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Activate eSIM for travel",
  description: "Airtel eSIM | Jio eSIM | How to activate eSIM in iPhone",
  openGraph: {
    title: "Rupee Travel | Activate eSIM for travel",
    description: "Airtel eSIM | Jio eSIM | How to activate eSIM in iPhone",
    url: "https://www.rupeetravel.com/esim-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Activate eSIM for travel | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Activate eSIM for travel",
    description: "Airtel eSIM | Jio eSIM | How to activate eSIM in iPhone",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/esim-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"eSim"} />
        <main className="container max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">
                      Convert Indian SIM to eSIM
                    </h2>
                    <Badge 
                      variant="outline"
                      className="bg-teal-100 text-teal-900 border-teal-200 dark:bg-teal-950 dark:text-teal-200 font-semibold"
                    >
                      Personally used
                    </Badge>
                  </div>
                  <ListView features={esimFeatures} />
                </div>
              </CardContent>
              <Separator className="border-border/60" />
              <CardFooter className="p-6 sm:p-8 pt-4">
                <a 
                  href="https://www.jio.com/jcms/esim/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full">
                    Jio eSIM Guide
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            <Card className="w-full border-border/80 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-bold text-foreground">
                    Why get an eSIM for travel?
                  </h2>
                  <div className="max-w-[280px] mx-auto">
                    <Image
                      src={"/images/esim.webp"}
                      alt="eSIM"
                      height={280}
                      width={280}
                      className="w-full h-auto rounded-lg border border-border/60"
                      priority
                    />
                  </div>
                  <ListView features={esimReasons} />
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}