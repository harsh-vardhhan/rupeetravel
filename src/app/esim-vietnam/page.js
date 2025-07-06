import Header from "../../components/ui/server/header";
import { Card, CardContent, CardFooter } from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import { Separator } from "../../components/ui/server/separator";
import Image from "next/image";
import ListView from "../../component/server/listview";

export const dynamic = 'force-static';
export const revalidate = false;
export const fetchCache = 'force-cache';

export async function generateStaticParams() {
    return [{ slug: 'esim-vietnam' }];
}

// Move static data outside of component
const features = [
    {
        item: 1,
        title: `✅ If you have single sim phone convert to eSim`,
        color: "green",
    },
    {
        item: 2,
        title: `✅ This helps you in installing the new sim in Vietnam`,
        color: "green",
    },
    {
        item: 3,
        title: `❌ It can take 24 hours to get SMS part activated so try doing it a day before you leave.
          Especially important if you plan to use credit/debit card for uber/ola to reach airport`,
        color: "red",
    },
];

const reasons = [
    {
        item: 1,
        title: `✅ In India, you need OTP on your mobile number to make online payments, check bank balance via UPI`,
        color: "green",
    },
    {
        item: 2,
        title: `✅ It can be hard to put the main SIM aside for single SIM phones when travelling abroad`,
        color: "green",
    },
    {
        item: 3,
        title: `✅ That's where e-SIM feels convenient. Just turn on your Indian SIM whenever needed.`,
        color: "green",
    },
];

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
                        <Card className="w-full">
                            <CardContent className="p-6 sm:p-8">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl sm:text-2xl font-bold">
                                        Convert Indian SIM to eSIM
                                    </h2>
                                    <Badge 
                                        variant="secondary" 
                                        className="bg-teal-100 text-teal-800 w-fit"
                                    >
                                        Personally used
                                    </Badge>
                                    <ListView features={features} />
                                </div>
                            </CardContent>
                            <Separator className="border-gray-200" />
                            <CardFooter className="p-6 sm:p-8 pt-4">
                                <a href="https://www.jio.com/jcms/esim/" className="w-full">
                                    <Button 
                                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                                    >
                                        Jio eSim
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                        
                        <Card className="w-full">
                            <CardContent className="p-6 sm:p-8">
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl sm:text-2xl font-bold">
                                        Why get eSIM?
                                    </h2>
                                    <div className="max-w-[280px] mx-auto">
                                        <Image
                                            src={"/images/esim.webp"}
                                            alt="eSIM"
                                            height={280}
                                            width={280}
                                            className="w-full h-auto rounded-lg"
                                            priority
                                        />
                                    </div>
                                    <ListView features={reasons} />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </>
    );
}