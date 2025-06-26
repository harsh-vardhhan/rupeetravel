import Header from "../../components/ui/server/header";
import { Card, CardContent } from "../../components/ui/server/card";
import { Badge } from "../../components/ui/server/badge";

export const dynamic = "force-static";

export const metadata = {
  title: "Rupee Travel | Prepaid SIM cards for tourist",
  description: "SIM card at Vietnam airport",
  openGraph: {
    title: "Rupee Travel | Prepaid SIM cards for tourist",
    description: "SIM card at Vietnam airport",
    url: "https://www.rupeetravel.com/local-sim-card-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Prepaid SIM cards for tourist | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Prepaid SIM cards for tourist",
    description: "SIM card at Vietnam airport",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/local-sim-card-vietnam",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Static data that was previously in getStaticProps
const features = [
  {
    item: 1,
    title: `✅ You will access to sim right after your immigration is done at airport`,
    color: "green.500",
  },
  {
    item: 2,
    title: `✅ Get sim with good data pack`,
    color: "green.500",
  },
  {
    item: 3,
    title: `❌ Please don't use it too lavishly, mobile data is not as cheap as India`,
    color: "red.400",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"local SIM card in Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-sm mx-auto">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">
                    Get local SIM card at airport
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
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
