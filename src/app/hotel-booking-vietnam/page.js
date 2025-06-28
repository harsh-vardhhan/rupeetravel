import Header from "../../components/ui/server/header";
import { Card, CardContent, CardFooter } from "../../components/ui/server/card";
import { Button } from "../../components/ui/server/button";
import { Badge } from "../../components/ui/server/badge";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Rupee Travel | Lowest Vietnam hotel room price",
  description: "Vietnam cheap hotels",
  openGraph: {
    title: "Rupee Travel | Lowest Vietnam hotel room price",
    description: "Vietnam cheap hotels",
    url: "https://www.rupeetravel.com/hotel-booking-vietnam",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Lowest Vietnam hotel room price | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Lowest Vietnam hotel room price",
    description: "Vietnam cheap hotels",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/hotel-booking-vietnam",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Define the hotels data directly in the component since it's static
const hotels = [
  {
    item: 1,
    name: `Sala Danang Beach Hotel`,
    contact: "https://www.facebook.com/saladanangbeachhotel/",
  },
  {
    item: 2,
    name: "Lavencos Hotel",
    contact: "https://www.facebook.com/lavencos.vn",
  },
  {
    item: 3,
    name: "Paracel Danang Hotel",
    contact: "https://www.facebook.com/paraceldananghotel/",
  },
  {
    item: 4,
    name: "BlueSun Hotel",
    contact: "https://www.facebook.com/bluesundanang/",
  },
  {
    item: 5,
    name: "Golden Lotus Hotel",
    contact: "https://www.facebook.com/goldenlotushoteldanang/",
  },
  {
    item: 6,
    name: "Avatar Danang Hotel",
    contact: "https://www.facebook.com/AvatarDananghotel/",
  },
  {
    item: 7,
    name: "Belle Maison Parosand Hotel",
    contact: "https://www.facebook.com/bellemaisondanang/",
  },
  {
    item: 8,
    name: "Sekong Hotel Da Nang",
    contact: "https://facebook.com/sekonghoteldanang",
  },
  {
    item: 9,
    name: "Cicilia Danang Hotel & Spa",
    contact: "https://www.facebook.com/ciciliadanang/",
  },
  {
    item: 10,
    name: "Aria Grand Hotel Da Nang",
    contact: "https://www.facebook.com/ariagrandhotel/",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header title={"Booking hotel in Da Nang, Vietnam"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Card className="w-full max-w-xl mx-auto">
              <CardContent className="pt-6">
                <p className="text-sm">
                  🏝️ All hotels are located near the beach.
                  <br />
                  🚕 You can request the hotel to send a taxi for you at the Da
                  Nang airport.
                </p>
              </CardContent>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="p-4 text-left font-medium">Hotel</th>
                        <th className="p-4 text-left font-medium">Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hotels.map((hotel, i) => (
                        <tr key={i} className="border-b">
                          <td className="p-4">{hotel.name}</td>
                          <td className="p-4">
                            <a href={hotel.contact}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-teal-600 text-teal-600 hover:bg-teal-50"
                              >
                                contact
                              </Button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardContent>
                <Badge
                  variant="secondary"
                  className="bg-teal-200 text-teal-900 mb-4"
                >
                  Personally used
                </Badge>
                <p className="text-sm">
                  Incase you want to stay in the same city (Da Nang) and same
                  hotel (Lavencos) where I stayed 😂, you can contact below
                </p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.facebook.com/lavencos.vn"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Contact Lavencos
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
