"use client"

import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import Image from "next/image";
import ListView from "../../component/listview";
import Header from "../../component/header";
import Seo from "../../component/seo";

// Define the data directly in the component since it's static
const features = [
    {
        item: 1,
        title: `✅ If you have single sim phone convert to eSim`,
        color: "green.500",
    },
    {
        item: 2,
        title: `✅ This helps you in installing the new sim in Vietnam`,
        color: "green.500",
    },
    {
        item: 3,
        title: `❌ It can take 24 hours to get SMS part activated so try doing it a day before you leave.
          Especially important if you plan to use credit/debit card for uber/ola to reach airport`,
        color: "red.400",
    },
];

const reasons = [
    {
        item: 1,
        title: `✅ In India, you need OTP on your mobile number to make online payments, check bank balance via UPI`,
        color: "green.500",
    },
    {
        item: 2,
        title: `✅ It can be hard to put the main SIM aside for single SIM phones when travelling abroad`,
        color: "green.500",
    },
    {
        item: 3,
        title: `✅ That's where e-SIM feels convenient. Just turn on your Indian SIM whenever needed.`,
        color: "green.500",
    },
];

export default function Home() {
    return (
        <>
            <Seo
                title="Rupee Travel | Activate eSIM for travel"
                description="Airtel eSIM | Jio eSIM | How to activate eSIM in iPhone"
                canonical={"https://www.rupeetravel.com/esim-vietnam"}
            />
            <div className="min-h-screen bg-background">
                <Header title={"eSim"} />
                <main className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
                        <Card className="w-full shadow-md">
                            <CardContent className="p-0">
                                <div className="p-6 pt-6">
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-lg font-semibold">
                                            Convert Indian SIM to eSIM
                                        </h2>
                                        <Badge 
                                            variant="secondary" 
                                            className="w-fit text-teal-800"
                                            style={{ 
                                                backgroundColor: "#81E6D9", 
                                                color: "#2D3748",
                                                fontWeight: "500"
                                            }}
                                        >
                                            Personally used
                                        </Badge>
                                        <ListView features={features} />
                                    </div>
                                </div>
                            </CardContent>
                            <Separator className="border-gray-200" />
                            <CardFooter className="p-6">
                                <a href="https://www.jio.com/en-in/esim">
                                    <Button 
                                        className="text-white font-medium"
                                        style={{ 
                                            backgroundColor: "#38A169", 
                                            hover: { backgroundColor: "#2F855A" }
                                        }}
                                    >
                                        Jio eSim
                                    </Button>
                                </a>
                            </CardFooter>
                        </Card>
                        
                        <Card className="w-full shadow-md">
                            <CardContent className="p-0">
                                <div className="p-6 pt-6" >
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-lg font-semibold">
                                            Why get eSIM?
                                        </h2>
                                        <Image
                                            src={"/images/esim.webp"}
                                            alt="eSIM"
                                            height={391}
                                            width={310}
                                            className="ml-0"
                                            style={{
                                                marginTop: "10px",
                                            }}
                                        />
                                        <ListView features={reasons} />
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