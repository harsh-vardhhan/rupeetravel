import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../../components/ui/server/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/server/table";
import Seo from "../../component/seo";
import Header from "../../components/ui/server/header";
import CurrencyConverter from "../../component/CurrencyConverter";
import PrecipitationChart from "../../component/PrecipitationChart";
import VisaStamp from "../../component/VisaStamp";
import { IDRINRMarketRate } from "../../currency/currency";

export const dynamic = "force-static";

export default function Home() {
  const baliData = [
    { month: "Jan", days: 19 },
    { month: "Feb", days: 18 },
    { month: "Mar", days: 20 },
    { month: "Apr", days: 12 },
    { month: "May", days: 8 },
    { month: "Jun", days: 7 },
    { month: "Jul", days: 4 },
    { month: "Aug", days: 3 },
    { month: "Sep", days: 3 },
    { month: "Oct", days: 6 },
    { month: "Nov", days: 10 },
    { month: "Dec", days: 16 },
  ];

  return (
    <>
      <Seo
        title="Rupee Travel | Bali travel guide for Indians"
        description="Bali Indonesia | Bali Currency | Bali Visa | Bali Travel Guide | Bali Travel Tips | Bali Travel Blog | Bali Travel Itinerary | Bali Travel Cost | Bali Travel Packages | Bali Travel Guide for Indians | Bali Travel Guide for Indian Tourists | Bali Travel Guide for Indian Families | Bali Travel Guide for Indian Couples | Bali Travel Guide for Indian Solo Travelers | Bali Travel Guide for Indian Backpackers | Bali Travel Guide for Indian Honeymooners | Bali Travel Guide for Indian"
        canonical={"https://www.rupeetravel.com/bali-travel-guide-for-indians"}
      />

      <div className="min-h-screen bg-background">
        <Header title={"Bali travel guide for Indians"} blog={true} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Image
              src={"/images/bali-rice-field.avif"}
              alt="Bali rice field"
              height={1536}
              width={2048}
              className="w-full h-auto object-cover mt-4"
            />

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Table of Contents</h2>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#preparing-for-bali"
                          className="text-primary hover:underline"
                        >
                          Preparing for Bali trip
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-1"
                          className="text-primary hover:underline"
                        >
                          Day 1 - Kuta
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-2"
                          className="text-primary hover:underline"
                        >
                          Day 2 - Seminyak
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-3"
                          className="text-primary hover:underline"
                        >
                          Day 3 - Canggu
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-4"
                          className="text-primary hover:underline"
                        >
                          Day 4 - Ubud
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-5"
                          className="text-primary hover:underline"
                        >
                          Day 5 - Ubud
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-6"
                          className="text-primary hover:underline"
                        >
                          Day 6 - Ubud
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#day-7"
                          className="text-primary hover:underline"
                        >
                          Day 7 - Uluwatu
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#hotels"
                          className="text-primary hover:underline"
                        >
                          Hotels
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#money-saving"
                          className="text-primary hover:underline"
                        >
                          Money saving tips
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#total-cost"
                          className="text-primary hover:underline"
                        >
                          Total cost
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <section id="preparing-for-bali">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Preparing for Bali trip
              </h2>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Bali weather
              </h3>
              <p className="text-base sm:text-lg mb-4">
                The best months to travel Bali are:
              </p>
              <ul className="list-disc pl-6 text-base sm:text-lg mb-4">
                <li>July</li>
                <li>August</li>
                <li>September</li>
              </ul>
              <p className="text-base sm:text-lg mb-4">
                Other months can seriously ruin your holiday experience. A day
                spent waiting for rain to stop is a day wasted from your
                holiday.
              </p>
              <PrecipitationChart
                data={baliData}
                destinationName="Bali"
                destinationIcon="🌴"
              />

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Delhi to Bali flight
              </h3>
              <p className="text-base sm:text-lg mb-4">
                You can affordable return flights to Bali from New Delhi and
                Mumbai both. Just use{" "}
                <Link
                  href="https://www.google.com/travel/flights"
                  className="font-bold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Flights
                </Link>
                {
                  " to see which date has the cheapest flight. If you want to book a cheap flight, be flexible with your travel dates. For those who are price conscious like me, fly with VietJet Air. Even though it doesn&apos;t offer a direct flight to Bali, it&apos;s a lot cheaper than direct flights."
                }
              </p>

              <div className="border border-border rounded-lg overflow-hidden my-4">
                <Image
                  src={"/images/bali-return-flight.avif"}
                  alt="Bali return flight"
                  height={700}
                  width={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6 mb-3">
                Visa for Bali
              </h3>
              <VisaStamp />
              <p className="text-base sm:text-lg mb-4">
                {`Though Indonesia provides facility to apply for e-visa for Indian
                citizens, it is not mandatory. You can simply get visa on arrival
                at the airport. You need to pay 500,000 IDR for visa on arrival
                either via USD currency notes or via credit/debit card.`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={500000}
                region={"en-ID"}
              />
            </section>

            <section id="day-1">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 1: Kuta
              </h2>

              <div className="border border-border rounded-lg overflow-hidden my-4">
                <Image
                  src={"/images/bali-kuta-arabica-cafe.avif"}
                  alt="Bali Kuta Arabica Cafe"
                  height={700}
                  width={1000}
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-base sm:text-lg mb-4">
                Kuta is a destination near the airport. You can enjoy walking on
                the beach, or visiting{" "}
                <Link
                  href="https://beachwalkbali.com/"
                  className="font-bold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beachwalk Shopping Center
                </Link>
                . You might think what can be so special about a shopping mall ?
                well they have designed the mall aligned with theme of Bali.
                Hence its unlike any other mall you have visited in India. You
                can also try out Arabica cafe which is a Japanese coffee chain.
                Their white themed cafe is great for Instagram photos.
              </p>

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    What is the budget food option available?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    You can enjoy some good food within the Beachwalk Shopping
                    Center. They have a food court with a variety of options. We
                    went for Padang kurin Restaurant. We had chicken and rice
                    dish for 61,000 IDR each.
                  </p>
                  <Image
                    src={"/images/kuta-food.avif"}
                    alt="Chicken and rice at Padang kurin Restaurant"
                    height={300}
                    width={500}
                    className="w-full h-auto object-cover my-4"
                  />
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={61000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>

              <div className="border border-border rounded-lg overflow-hidden my-4">
                <Image
                  src={"/images/azul-beach-club.avif"}
                  alt="Bali Kuta Arabica Cafe"
                  height={700}
                  width={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              <p className="text-base sm:text-lg mb-4">
                Kuta has multiple beach clubs that you can visit in the evening
                time. We visited Azul Beach Club. You can enjoy the sunset view
                from the beach club.
              </p>

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    What is the budget drink option available?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    Since you need to buy a drink to sit at a beach club, you
                    can try out Bali Cider. We had a bottle of Bali Cider for
                    49,000 IDR each.
                  </p>
                  <Image
                    src={"/images/azul-beach-club-cider.avif"}
                    alt="Bali Cider at Azul Beach Club"
                    height={200}
                    width={400}
                    className="w-full h-auto object-cover my-4"
                  />
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={49000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>
            </section>

            <section id="day-2">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 2: Seminyak
              </h2>
              <p className="text-base sm:text-lg mb-4">
                {`Raya Seminyak is a street which offers boutiques, art shops.
                you can also enjoy great cafe's and restaurants. Also, if you are looking for cash,
                there is an abundance of ATMs on this street.`}
              </p>

              <Image
                src={"/images/bali-seminyak-atms.avif"}
                alt="ATMs at Raya Seminyak, Bali"
                height={700}
                width={1000}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    What is the budget food option available?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    We had a Margherita pizza at a restaurant on Raya Seminyak
                    for 93,000 IDR. The place is called The Shisha House.
                  </p>
                  <Image
                    src={"/images/margherita-seminyak.avif"}
                    alt="Margherita pizza at The Shisha House, Seminyak"
                    height={300}
                    width={500}
                    className="w-full h-auto object-cover my-4"
                  />
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={93000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>

              <Image
                src={"/images/seminyak-coconut-beach.avif"}
                alt="Coconut water at Seminyak beach"
                height={200}
                width={400}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                {`By the evening, as the sun sets, you can visit the beach.
                There are multiple coconut vendors there but you can go with the one who
                offer free chairs to sit and enjoy the sunset.
                The coconut water costs 30,000 IDR but you can bargain and get it for 25,000 IDR.`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={30000}
                region={"en-ID"}
              />

              <Image
                src={"/images/seminyak-beach-bean-bag.avif"}
                alt="Seminayk beach bean bag"
                height={200}
                width={400}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                {`By the night, within Seminyak beach, you can enjoy the beach clubs.
                Beach clubs here are pretty much right on the beach unlike Kuta where they are
                across the road. This makes the experience even more special.`}
              </p>
            </section>

            <section id="day-3">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 3: Canggu
              </h2>
              <p className="text-base sm:text-lg mb-4">
                {`In day time you can visit Tanah lot temple. You can take a taxi via Grab app.
                it's best to visit this place when in Canggu cause it's the closest from here.
                The enterance fee to the temple costs 75,000 IDR/person`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={75000}
                region={"en-ID"}
              />

              <p className="text-base sm:text-lg mb-4">
                {`Canggu has the amazing beach clubs for late night partying in Bali.
                One of the most popular one is FINNS Beach Club. The best part is that club has zero entry fee.
                You have to only pay for the food and drinks you order.`}
              </p>

              <Image
                src={"/images/finns-beach-club.avif"}
                alt="FINNS beach club"
                height={200}
                width={400}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    What is the budget drink option available?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    To keep your partying experience budget friendly, you can
                    try out a Bintang beer. Along with that, try to use the{" "}
                    <Link
                      href="https://finnsbeachclub.com/venue/beach-deluxe/drink-menu/#hh"
                      className="font-bold underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      happy hours
                    </Link>{" "}
                    to get two bintang beers at the price of one which will cost
                    you 85,000 IDR.
                  </p>
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={85000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>
            </section>

            <section id="day-4">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 4: Ubud
              </h2>

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    How to reach Ubud?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    {`Ubud is relatively far from Canggu hence we couldn't go by scooter.
                    You can also book a Grab taxi like us. It had cost us 351,000 IDR for the trip.`}
                  </p>
                  <Image
                    src={"/images/canggu-to-ubud-grab.avif"}
                    alt="Canggu to Ubud in Grab taxi"
                    height={700}
                    width={400}
                    className="w-full h-auto object-cover border border-border rounded-lg my-4"
                  />
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={351000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>

              <p className="text-base sm:text-lg mb-4">
                {`You can visit Alas Hurum where you can experience mountainous rice fields.
                An amazing place for couple photoshoot.`}
              </p>

              <Image
                src={"/images/alas-hurum-ubud-bali.avif"}
                alt="Alas Hurum, Ubud, Bali"
                height={700}
                width={1000}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                {`The entrance fee to Alas Hurum costs 50,000 IDR/person`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={50000}
                region={"en-ID"}
              />

              <Card className="bg-orange-50 dark:bg-orange-900">
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4">
                    What is the budget food option available?
                  </h3>
                  <p className="text-base sm:text-lg mb-4">
                    We had a Smoked Bbq Chicken at the{" "}
                    <Link
                      href="https://alasharum.com/en/cretya-ubud"
                      className="font-bold underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cretya Club.
                    </Link>{" "}
                    . It had cost us 125,000 IDR and buying that food also gives
                    you access to their pool.
                  </p>
                  <Image
                    src={"/images/alas-hurum-cretya-ubud.avif"}
                    alt="Smoked BBQ Chicken at Cretya Club, Ubud"
                    height={700}
                    width={1000}
                    className="w-full h-auto object-cover my-4"
                  />
                  <CurrencyConverter
                    currencyPair={"IDRINR"}
                    exchange={"forex market"}
                    rate={IDRINRMarketRate}
                    base={"IDR"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={125000}
                    region={"en-ID"}
                  />
                </CardContent>
              </Card>
            </section>

            <section id="day-5">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 5: Ubud
              </h2>

              <Image
                src={"/images/tirta-empul-temple-ubud.avif"}
                alt="Tirta Empul temple, Bali"
                height={700}
                width={1000}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />
              <p className="text-base sm:text-lg mb-4">
                {`Tirta Empul temple is the Hindu temple where you take bath in the holy water.
                We travelled to this temple by renting a scooty cause its a lot cheaper than taxi.
                The entrance fee to temple is 75,000 IDR/person`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={75000}
                region={"en-ID"}
              />
            </section>

            <section id="day-6">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 6: Ubud
              </h2>
              <p className="text-base sm:text-lg mb-4">
                {`Tegenungan waterfall comprises of an experience
                where you get to walk down the stairs
                of a mountain eventually reaching the waterfall.
                The entrance cost to waterfall is 20,000 IDR/person`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={20000}
                region={"en-ID"}
              />

              <Image
                src={"/images/tegenungan-waterfall-omma-club.avif"}
                alt="Tegenungan waterfall, Bali"
                height={700}
                width={1000}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                <Link
                  href="https://ommabali.com/"
                  className="font-bold underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Omma Club
                </Link>
                {` is the fun part which gives you access to pool with a view of the waterfall.
                You can have certain sittings in the club and access to the pool
                for free, if you order food or coffee.`}
              </p>
            </section>

            <section id="day-7">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Day 7: Uluwatu
              </h2>
              <p className="text-base sm:text-lg mb-4">
                {`We went for Uluwatu to see the Uluwatu temple. Also being close to the airport, we planned it for our last day`}
              </p>

              <Image
                src={"/images/uluwatu-temple.avif"}
                alt="Uluwatu temple, Bali"
                height={200}
                width={400}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                {`Uluwatu temple has a scenic view of sea from the mountain.
                Be precautious, a lot of monkeys in the temple and nearby areas.
                The entry fee of the temple is 50,000 IDR/person`}
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={50000}
                region={"en-ID"}
              />
            </section>

            <section id="hotels">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Hotels we stayed
              </h2>
              <p className="text-base sm:text-lg mb-4">
                {`Here is the list of hotels in which we stayed`}
              </p>

              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Hotel</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="https://www.google.com/search?q=zuri+kuta+hotel"
                            className="font-bold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Grand Zuri Hotel, Kuta
                          </Link>
                        </TableCell>
                        <TableCell>₹ 2,100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="https://www.google.com/search?q=lokasari+retreat+ubud"
                            className="font-bold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Lokasari Retreat, Ubud
                          </Link>
                        </TableCell>
                        <TableCell>₹ 2,074</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="https://www.google.com/search?q=Puri+Padma+Hotel+%26+Resort+ubud"
                            className="font-bold underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Puri Padma Hotel & Resort
                          </Link>
                        </TableCell>
                        <TableCell>₹ 2,800</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <p className="text-base sm:text-lg mb-4">
                {`but its important
                you don't blindly go for the same options.
                Instead check on Google Map with hotel filter to see the budget hotels that exist around you
                when you're in Bali.`}
              </p>

              <Image
                src={"/images/google-map-with-hotels-filter.avif"}
                alt="Google Map with hotels filter"
                height={700}
                width={1000}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />
            </section>

            <section id="money-saving">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Money saving tips
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Avoid using ATMs with mark-up fee. The ATMs will most likely
                inform you before cash withdrawal
              </p>

              <Image
                src={"/images/atm-mark-up-fee.avif"}
                alt="ATM mark-up fee"
                height={400}
                width={400}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                If you would like to further save money, but at the cost of less
                convenience, you can bring USD currency notes from India and get
                them converted to IDR at a forex dealer. By using a forex
                dealer, not only you save on the mark-up fee, but you also get
                better conversion rates.
              </p>

              <Image
                src={"/images/IDR-forex-dealer.avif"}
                alt="Forex dealer in Bali"
                height={400}
                width={700}
                className="w-full h-auto object-cover border border-border rounded-lg my-4"
              />

              <p className="text-base sm:text-lg mb-4">
                Grab Taxi is a relatively more expensive option to commute in
                Bali. Instead, rent a scooter to travel. We got a scooter at a
                cost of 75,000 IDR per day, which already had 1 litre of petrol.
              </p>

              <CurrencyConverter
                currencyPair={"IDRINR"}
                exchange={"forex market"}
                rate={IDRINRMarketRate}
                base={"IDR"}
                quote={"INR"}
                quoteSymbol={"₹"}
                amount={75000}
                region={"en-ID"}
              />

              <p className="text-base sm:text-lg mb-4">
                Book hotels which have free breakfast included with the booking.
                Free breakfast for couples saves decent money every morning.
              </p>
            </section>

            <section id="total-cost">
              <h2 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">
                Bali trip cost from India for couple
              </h2>
              <p className="text-base sm:text-lg mb-4">
                Despite being fairly detailed about the cost, still consider
                significant variation in cost for your own trip since personal
                preferences vary.
              </p>

              <Card>
                <CardContent className="p-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Category</TableHead>
                        <TableHead>Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-bold">
                          Day 1 - Kuta
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 660</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 660</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Drinks</TableCell>
                        <TableCell>₹ 530</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Coffee</TableCell>
                        <TableCell>₹ 300</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 2 - Seminyak
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Drinks</TableCell>
                        <TableCell>₹ 530</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Coconut</TableCell>
                        <TableCell>₹ 320</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 3 - Canggu
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tanah Lot Temple</TableCell>
                        <TableCell>₹ 800</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Drinks</TableCell>
                        <TableCell>₹ 900</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,100</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 4 - Ubud
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Alas Hurum Entry Fee</TableCell>
                        <TableCell>₹ 540</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 675</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,074</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Scooter</TableCell>
                        <TableCell>₹ 450</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 5 - Ubud
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Empul Temple Entry Fee</TableCell>
                        <TableCell>₹ 810</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 675</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,074</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Scooter</TableCell>
                        <TableCell>₹ 450</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 6 - Ubud
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Waterfall Entry Fee</TableCell>
                        <TableCell>₹ 216</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 675</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,800</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Scooter</TableCell>
                        <TableCell>₹ 450</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Coffee (Omma Club)</TableCell>
                        <TableCell>₹ 250</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Day 7 - Uluwatu
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Uluwatu Temple Entry Fee</TableCell>
                        <TableCell>₹ 540</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Lunch</TableCell>
                        <TableCell>₹ 600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dinner</TableCell>
                        <TableCell>₹ 675</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Hotel</TableCell>
                        <TableCell>₹ 2,074</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Scooter</TableCell>
                        <TableCell>₹ 450</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Coffee</TableCell>
                        <TableCell>₹ 250</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="font-bold">
                          Miscellaneous
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Visa on Arrival</TableCell>
                        <TableCell>₹ 5,400</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Flight</TableCell>
                        <TableCell>₹ 63,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Grab Taxi</TableCell>
                        <TableCell>₹ 10,000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Total Cost</TableCell>
                        <TableCell>₹ 1,10,228</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
