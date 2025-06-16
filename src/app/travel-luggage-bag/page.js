import Image from "next/image";
import Header from "../../components/ui/server/header";
import { Card, CardContent } from "../../components/ui/server/card";
import { Badge } from "../../components/ui/server/badge";
import Seo from "../../component/seo";

export const dynamic = "force-static";

// Define the features data
const features = [
  {
    item: 1,
    title: `✅ Put a laminated name label on your checked-in luggage`,
    color: "green",
  },
  {
    item: 2,
    title: `❌ It avoids the chances of others accidentally picking your luggage`,
    color: "red",
  },
  {
    item: 3,
    title: `✅ It also helps you recognise your luggage quickly on the conveyer belt.`,
    color: "green",
  },
];

export default function TravelLuggagePage() {
  return (
    <>
      <Seo
        title="Rupee Travel | Best travel hack for luggage"
        description="hack for travel luggage on airports"
        canonical={"https://www.rupeetravel.com/travel-luggage-bag"}
      />
      <div className="min-h-screen bg-background">
        <Header title={"luggage"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-xl mx-auto">
              <CardContent className="pt-6">
                <Image
                  src={"/images/luggage-travel-hack.webp"}
                  alt="Luggage"
                  height={187}
                  width={310}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Luggage travel hack</h2>
                    <Badge
                      variant="secondary"
                      className="bg-teal-200 text-teal-900"
                    >
                      Personally experienced 😞
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div
                        key={feature.item}
                        className="flex items-start gap-2"
                      >
                        <p className="text-sm">{feature.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
