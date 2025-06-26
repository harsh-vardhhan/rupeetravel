import Header from "../../components/ui/server/header";
import {
  Card,
  CardContent,
  CardFooter,
} from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import Link from "next/link";

export const dynamic = 'force-static';

export const metadata = {
  title: "Rupee Travel | Remote work in Vietnam",
  description: "Best places to work remotely in Vietnam",
  openGraph: {
    title: "Rupee Travel | Remote work in Vietnam",
    description: "Best places to work remotely in Vietnam",
    url: "https://www.rupeetravel.com/remote-work-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Remote work in Vietnam | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Remote work in Vietnam",
    description: "Best places to work remotely in Vietnam",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: { canonical: "https://www.rupeetravel.com/remote-work-vietnam" },
  icons: {
    icon: "/favicon.ico",
  },
};

// Define the features data
const features = [
  {
    item: 1,
    title: `✅ If you're a remote worker like me ensure your hotel has fast internet before booking them. 
          The Hotel in which I stayed in Da Nang (Lavencos) has 20 Mbps which suits my need.`,
    color: "green.500",
  },
  {
    item: 2,
    title: `✅ Choose nearest Highlands Cafe (Starbucks of Vietnam) to work. They always have decent internet`,
    color: "green.500",
  },
];

export default function RemoteWorkVietnamPage() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Remote work from Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-sm mx-auto">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">
                    Arranging for remote work
                  </h2>
                  <Badge 
                    variant="secondary"
                    className="bg-teal-200 text-teal-900"
                  >
                    Personally experienced
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
                <Link href="https://www.google.com/maps?q=Highlands+Cafe">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-base"
                  >
                    Highlands Cafe
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