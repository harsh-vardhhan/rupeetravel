
import Header from "../../components/ui/server/header";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import Seo from "../../component/seo";
import StructuredData from "../../component/structuredData";

export const dynamic = 'force-static';

// Define the steps data directly in the component since it's static
const steps = [
  {
    title: `Apply for Vietnam E-Visa`,
    description: "fill the online form from the official site link given below.",
  },
  {
    title: `Pay the fee`,
    description: "Pay the $25 online non-refundable fee",
  },
  {
    title: `Wait for E-Visa approval`,
    description: "Wait for 3-5 business days. You will get status update on your email",
  },
];

// Structured data for SEO
const structuredData = {
  "@context": "https://www.schema.org",
  "@type": "product",
  "brand": "Vietnam E-visa",
  "name": "Vietnam E-visa application",
  "image": "https://ik.imagekit.io/rupeetravel/local-currency.webp",
  "category": "E-visa",
  "description": " Vietnam E-visa application",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "2100",
    "itemCondition": "http://schema.org/UsedCondition",
    "availability": "http://schema.org/InStock",
    "seller": {
      "@type": "Vietnam Immigration",
      "name": "Vietnam E-visa"
    },
  }
};

export default function Home() {
  return (
    <>
      <StructuredData data={structuredData} />
      <Seo
        title="Rupee Travel | Apply for Vietnam e-visa"
        description="Vietnam e-visa application. Vietnam visa for Indians."
        canonical={"https://www.rupeetravel.com/e-visa-vietnam-indians"}
      />
      <div className="min-h-screen bg-background">
        <Header title={"Apply E-Visa for Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-xl mx-auto">
              <CardHeader className="pb-2">
                <h2 className="text-xl font-bold">E-Visa for Vietnam</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background">
                        <span className="text-sm font-medium">{index + 1}</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="https://evisa.gov.vn/"
                  className="w-full"
                >
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Apply E-Visa
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