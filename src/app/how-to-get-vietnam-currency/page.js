import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/server/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/server/table";
import { Badge } from "../../components/ui/server/badge";
import { Button } from "../../components/ui/server/button";
import Header from "../../components/ui/server/header";
import StructuredData from "../../component/structuredData";
import CurrencyConverter from "../../component/CurrencyConverter";
import {
  USDINRMarketRate,
  USDINRBookMyForexRate,
  INRVNDMarketRate,
  INRVNDBookMyForexRate,
  VNDINRMarketRate,
} from "../../currency/currency";

export const metadata = {
  title: "Rupee Travel | Get Vietnam currency in India",
  description: "Vietnam currency | Vietnamese Dong | VND",
  openGraph: {
    title: "Rupee Travel | Get Vietnam currency in India",
    description: "Vietnam currency | Vietnamese Dong | VND",
    url: "https://www.rupeetravel.com/how-to-get-vietnam-currency",
    siteName: "Rupee Travel",
    images: [
      {
        url: "https://ik.imagekit.io/rupeetravel/preview.png",
        width: 1200,
        height: 630,
        alt: "Rupee Travel | Get Vietnam currency in India | Rupee Travel",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupee Travel | Get Vietnam currency in India",
    description: "Vietnam currency | Vietnamese Dong | VND",
    site: "@harsh_vardhhan",
    creator: "@harsh_vardhhan",
    images: ["https://ik.imagekit.io/rupeetravel/preview.png"],
  },
  robots: "index,follow",
  alternates: {
    canonical: "https://www.rupeetravel.com/how-to-get-vietnam-currency",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "But why use cash in Vietnam and not credit or debit cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vietnam is still predominantly a cash-first country. Using only credit and debit cards will limit the places you can visit, like street food places or even getting a Grab bike. Hence, you always want to keep Vietnamese Dong, the local currency, with your credit and debit cards.",
        },
      },
      {
        "@type": "Question",
        name: "Why is buying VND so expensive in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vietnamese currency VND is a exotic currency, meaning the currency does not have sufficient demand in the global market. Less buyer and sellers of the currency makes the buying and selling cost very high.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy USD currency notes from BookMyForex whenever I want?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can only buy USD currency notes from an authorized forex dealer like BookMyForex when you have a valid visa, like Vietnam&apos;s e-visa and air tickets for the travel destination.",
        },
      },
      {
        "@type": "Question",
        name: "What if I didn&apos;t spend all the USD I purchased for my Vietnam travel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As an Indian citizen, you can keep $2,000 physical currency notes. Since USD is a globally accepted currency, you can use it for your next international travel to any other country.",
        },
      },
      {
        "@type": "Question",
        name: "So, if you have zero forex markup debit card, you don&apos;t need to carry USD currency notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, I would recommend keeping USD currency notes as an alternate solution. That&apos;s cause there have been events where banks like Niyo and Paytm disabled international transactions due to regulatory issues. Physical USD currency notes keep you immune from such situations.",
        },
      },
      {
        "@type": "Question",
        name: "Why is conversion rates for VND via Vietnam ATM&apos;s so great?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Payment networks like Visa and MasterCard use the forex market (which are very liquid - many buyers and sellers of currency) to get great conversion rates unlike local forex dealer. Also, behind the scene it&apos;s simulating the same smart conversion technique (INR - USD - VND).",
        },
      },
      {
        "@type": "Question",
        name: "Can you bring back the Vietnam currency to India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can bring back ₫15,000,000 VND of physical currency notes to India without declaring to the Vietnamese customs.",
        },
      },
      {
        "@type": "Question",
        name: "What to do with the unspent Vietnam currency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you plan to travel to Vietnam again, you can keep it for your next visit. But if you don&apos;t, you can sell it in exchange for Indian Rupee to an authorized Forex dealer, like BookMyForex.",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-background">
        <Header title={"How to get Vietnam currency in India"} />
        <main className="container max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-4">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Image
              src={"/images/tools.avif"}
              alt="Zero forex charges cards"
              height={1536}
              width={2048}
              className="w-full h-auto rounded-lg"
            />

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
              <Table>
                <TableBody>
                  <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <Link href="#inr-vnd" className="underline">
                        INR to Vietnam currency
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <Badge variant="destructive" className="mb-2">
                        Dumb way
                      </Badge>
                      <div className="mt-2">
                        <Link href="#buy-vnd" className="font-medium underline">
                          Buy Vietnam currency in India
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-teal-100 text-teal-800"
                      >
                        Smart way
                      </Badge>
                      <div className="mt-2">
                        <Link href="#buy-usd" className="font-medium underline">
                          Buy USD in India
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-teal-100 text-teal-800"
                      >
                        Smartest way
                      </Badge>
                      <div className="mt-2">
                        <Link
                          href="#withdraw-vnd"
                          className="font-medium underline"
                        >
                          Withdraw VND from Vietnam ATM
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <Link href="#vnd-notes" className="underline">
                        Vietnam currency in Indian Rupees
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <p className="text-base sm:text-lg mb-4">
                Getting foreign currency is a crucial piece of travel
                experience. In a foreign country, no access to local currency
                can be a scary experience.
                <br />
                Hence, we will learn how to get Vietnamese Dong (VND):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg">
                <li>at right rates</li>
                <li>in the legal way</li>
                <li>in your own country (get VND in India)</li>
                <li>in foreign country (get VND in Vietnam)</li>
                <li>in the right amount</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                But why use cash in Vietnam and not credit or debit cards?
              </h2>
              <p className="text-base sm:text-lg">
                Vietnam is still predominantly a cash-first country. Using only
                credit and debit cards will limit the places you can visit, like
                street food places or even getting a{" "}
                <Link
                  href="https://www.rupeetravel.com/food-delivery-taxi-vietnam"
                  className="font-bold text-blue-600 hover:underline"
                >
                  Grab bike
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" id="inr-vnd">
                INR to Vietnam currency
              </h2>
              <CurrencyConverter
                currencyPair={"INRVND"}
                exchange={"forex market"}
                rate={INRVNDMarketRate}
                base={"INR"}
                quote={"VND"}
                quoteSymbol={"₫"}
                amount={100}
              />
              <p className="text-base sm:text-lg mt-4">
                Try to buy Vietnamese Dong (VND) closest to the forex rate. This
                is where it gets tricky. You need to get the right foreign
                currency at the right place to get the right price.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" id="buy-vnd">
                Buy Vietnam currency in India
              </h2>
              <CurrencyConverter
                currencyPair={"INRVND"}
                exchange={"BookMyForex"}
                rate={INRVNDBookMyForexRate}
                base={"INR"}
                quote={"VND"}
                quoteSymbol={"₫"}
                amount={100}
                region={"en-VN"}
              />
              <p className="text-base sm:text-lg mt-4">
                <span className="font-bold">The dumb way:</span> You can buy VND
                in India from an authorised forex dealer like BookMyforex. But
                it can be seen that rate offered by BookMyForex is not great
                compared to the offering in the forex market.
              </p>
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Why is buying VND so expensive in India?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  Vietnamese currency VND is an exotic currency, meaning the
                  currency does not have sufficient demand in the global market.
                  Less buyer and sellers of the currency makes the buying and
                  selling cost very high.
                </p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" id="buy-usd">
                Buy USD in India
              </h2>
              <Image
                src={"/images/usd-currency.avif"}
                alt="USD currency notes"
                height={700}
                width={1000}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-base sm:text-lg mt-4">
                <span className="font-bold">The smart way:</span> Wait? but why?
                I am travelling to Vietnam, not the US, why should I buy USD.
                Well, that&apos;s cause USD has the highest global demand hence
                the buy/sell rate are great even in India.
              </p>
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Can I buy USD currency notes from BookMyForex whenever I want?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  No. You can only buy USD currency notes from an authorized
                  forex dealer like BookMyForex when you have a valid visa, like{" "}
                  <Link
                    href="https://www.rupeetravel.com/e-visa-vietnam-indians"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Vietnam&apos;s e-visa
                  </Link>{" "}
                  and air tickets for the travel destination.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-green-50 dark:bg-green-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Are online forex brokers like BookMyForex always giving better
                  rates than brick-and-mortar ones?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  I asked a local forex broker in Mumbai for USD currency notes.
                  It turned out that both the local forex dealer and BookMyForex
                  are offering USD currency notes at the same rate. So please
                  don&apos;t go with the perception that online brokers offer a
                  better rate. First, compare whose offering better rates.
                </p>
                <Image
                  src={"/images/authorised-forex-dealer.avif"}
                  alt="USD currency notes"
                  height={700}
                  width={500}
                  className="w-full h-auto rounded-lg mt-4"
                />
              </CardContent>
            </Card>

            <div>
              <Image
                src={"/images/buy-USD-currency-notes.avif"}
                alt="BookMyForex"
                height={300}
                width={500}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 space-y-4">
                <CurrencyConverter
                  currencyPair={"USDINR"}
                  exchange={"BookMyForex"}
                  rate={USDINRBookMyForexRate}
                  base={"USD"}
                  quote={"INR"}
                  quoteSymbol={"₹"}
                  amount={100}
                  region={"en-IN"}
                />
                <CurrencyConverter
                  currencyPair={"USDINR"}
                  exchange={"forex market"}
                  rate={USDINRMarketRate}
                  base={"USD"}
                  quote={"INR"}
                  quoteSymbol={"₹"}
                  amount={100}
                  region={"en-IN"}
                />
              </div>
              <p className="text-base sm:text-lg mt-4">
                The difference between rates offered between BookMyForex and the
                forex market is minimal. You can carry the{" "}
                <Link
                  href="https://www.rupeetravel.com/buy-foreign-currency-notes-online"
                  className="font-bold text-blue-600 hover:underline"
                >
                  USD purchased in India
                </Link>{" "}
                to Vietnam and buy VND from it at the airport. The USD is even
                accepted directly at many places in Vietnam, specially tourist
                hubs like Da Nang.
              </p>
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  What if I didn&apos;t spend all the USD I purchased for my
                  Vietnam travel?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  As an Indian citizen, you can keep $2,000 physical currency
                  notes. Since USD is a globally accepted currency, you can use
                  it for your next international travel to any other country.
                </p>
                <div className="mt-4">
                  <CurrencyConverter
                    currencyPair={"USDINR"}
                    exchange={"forex market"}
                    rate={USDINRMarketRate}
                    base={"USD"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={2000}
                    region={"en-IN"}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  How much foreign currency can I carry from India?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  You can carry up to $3,000 foreign currency notes from India.
                  If you need more foreign currency, then you can carry credit
                  and debit cards.
                </p>
                <div className="mt-4">
                  <CurrencyConverter
                    currencyPair={"USDINR"}
                    exchange={"forex market"}
                    rate={USDINRMarketRate}
                    base={"USD"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={3000}
                    region={"en-IN"}
                  />
                </div>
              </CardContent>
            </Card>

            <div>
              <h2
                className="text-xl sm:text-2xl font-bold mb-4"
                id="withdraw-vnd"
              >
                Withdraw VND from Vietnam ATM
              </h2>
              <Image
                src={"/images/ocean-bank-atm.avif"}
                alt="Zero forex charges ATM - Ocean Bank ATM"
                height={700}
                width={500}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-base sm:text-lg mt-4">
                <span className="font-bold">The smartest way:</span> Get a{" "}
                <Link
                  href="https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee"
                  className="font-bold text-blue-600 hover:underline"
                >
                  zero forex markup debit card
                </Link>{" "}
                and use it to withdraw VND from a{" "}
                <Link
                  href="https://www.rupeetravel.com/atm-vietnam-zero-forex-markup"
                  className="font-bold text-blue-600 hover:underline"
                >
                  zero forex markup ATM
                </Link>
                {`. This not only give you great conversion rates,
                                but you can also skip the hassle of buying any
                                currency notes before your actual trip. It also
                                allows you skip the hassle of buying USD currency
                                notes just for great conversion rates.`}
              </p>
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  So, if you have zero forex markup debit card, you don&apos;t
                  need to carry USD currency notes?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  No, I would recommend keeping USD currency notes as an
                  alternate solution. That&apos;s cause there have been events
                  where banks like{" "}
                  <Link
                    href="https://inc42.com/buzz/neobank-niyo-users-bear-the-brunt-as-partner-sbm-bank-india-comes-under-rbi-radar/"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Niyo
                  </Link>
                  {" and "}
                  <Link
                    href="https://entrackr.com/2023/10/paytm-payments-bank-halts-intl-transactions-on-debit-cards/"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Paytm
                  </Link>
                  {` disabled international transactions due to regulatory
                                    issues. Physical USD currency
                                    notes keep you immune from such situations.`}
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-red-50 dark:bg-red-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  How to find zero forex markup ATMs for cash withdrawal in
                  Vietnam?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  You can search for{" "}
                  <Link
                    href="https://www.google.com/maps?q=Ocean+Bank+ATM"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Ocean Bank
                  </Link>
                  {" or "}
                  <Link
                    href="https://www.google.com/maps?q=MB+Bank+ATM"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    MB Bank
                  </Link>
                  .
                  {` Both ATMs accept international Visa and MasterCard
                                    debit cards and are zero forex markup ATMs.`}
                </p>
                <p className="text-base sm:text-lg mt-4">
                  <span className="font-bold">Note:</span> These Google map
                  links will give you the right results only when you are in
                  Vietnam.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-yellow-50 dark:bg-yellow-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Which debit cards are accepted in Vietnam ATMs for cash
                  withdrawal?
                </h2>
              </CardHeader>
              <CardContent>
                <Image
                  src={"/images/enable-card.avif"}
                  alt="enable cash withdrawal and international usage"
                  height={500}
                  width={300}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-base sm:text-lg mt-4">
                  Visa and MasterCard are the widely accepted cards in Vietnam
                  ATMs. You will have to{" "}
                  <span className="font-bold">
                    enable ATM withdrawals and international usage
                  </span>
                  . Please do not carry RuPay or Discover for cash withdrawals
                  in Vietnam. No ATMs are likely to accept them.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-green-50 dark:bg-green-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Will using any ATM for cash withdrawal cost me zero charges if
                  I use a zero forex markup debit card?
                </h2>
              </CardHeader>
              <CardContent>
                <Image
                  src={"/images/forex-charges-atm.avif"}
                  alt="ATM with forex charges"
                  height={600}
                  width={400}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-base sm:text-lg mt-4">
                  No, Using any random ATM can cause you forex charges up to 3%.
                  Hence, using a zero forex charge debit card isn&apos;t enough.
                  It&apos;s essential that you also use that card in a
                  zero-forex ATM.
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-teal-50 dark:bg-teal-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  What is forex card?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  <Link
                    href="https://www.bookmyforex.com/forex-card/"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Forex cards
                  </Link>
                  {` provide the same benefit as `}
                  <Link
                    href="https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee"
                    className="font-bold text-blue-600 hover:underline"
                  >
                    zero forex markup debit cards
                  </Link>
                  {`, which are zero charges for cash withdrawals, but they come with the hassle of reloading USD on them. Zero forex markup debit cards come with dynamic conversion (INR -> USD -> VND), so there is no need to worry about loading USD every time.`}
                </p>
                <p className="text-base sm:text-lg mt-4">
                  {`Also, no forex cards, as of now, support loading Vietnam currency VND. Hence, the hassle of currency conversion and forex conversion cost is still there (USD -> VND).`}
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-blue-50 dark:bg-blue-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Why is conversion rates for VND via Vietnam ATM&apos;s so
                  great?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  {`Payment networks like Visa and MasterCard use the forex market
                                    (which are very liquid - many buyers and sellers of currency)
                                    to get great conversion rates unlike local forex dealer. Also, behind the scene it&apos;s
                                    simulating the same smart conversion technique (INR -> USD -> VND).`}
                </p>
              </CardContent>
            </Card>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Can you bring back the Vietnam currency to India?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  {`Yes. You can bring back ₫15,000,000 VND of physical currency notes
                                    to India without declaring to the Vietnamese customs.`}
                </p>
                <div className="mt-4">
                  <CurrencyConverter
                    currencyPair={"VNDINR"}
                    exchange={"forex market"}
                    rate={VNDINRMarketRate}
                    base={"VND"}
                    quote={"INR"}
                    quoteSymbol={"₹"}
                    amount={15000000}
                    region={"en-IN"}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardHeader>
                <h2 className="text-xl sm:text-2xl font-bold">
                  How to exchange foreign currency to Indian rupees?
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg">
                  {`You can sell it in exchange for Indian Rupee to an
                                    authorized Forex dealer, like BookMyForex.`}
                </p>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4" id="vnd-notes">
                Vietnam currency in Indian Rupees
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Major currency notes of Vietnam</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">₫500,000 VND</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">₫200,000 VND</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">₫100,000 VND</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">₫50,000 VND</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-base sm:text-lg mt-4">
                {`Let us understand the physical currency notes in Vietnam and how much they value in Indian Rupees.`}
              </p>
              <Image
                src={"/images/vietnam-currency-notes.avif"}
                alt="Vietnam currency notes"
                height={700}
                width={500}
                className="w-full h-auto rounded-lg mt-4"
              />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                ₫500,000 VND currency notes to INR
              </h2>
              <CurrencyConverter
                currencyPair={"VNDINR"}
                exchange={"forex market"}
                rate={VNDINRMarketRate}
                base={"VND"}
                quote={"INR"}
                baseSymbol={"₫"}
                quoteSymbol={"₹"}
                amount={500000}
                region={"en-IN"}
              />
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardContent>
                <Image
                  src={"/images/hotel-booking-receipt.avif"}
                  alt="Hotel booking receipt"
                  height={900}
                  width={700}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold">
                    What ₫500,000 VND gets you in Vietnam
                  </h3>
                  <p className="text-base sm:text-lg">
                    {`Roughly the same amount gets you a hotel room in Da Nang for a night.`}
                  </p>
                  <p className="text-xl sm:text-2xl">₫600,000/night</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://www.rupeetravel.com/hotel-booking-vietnam"
                  className="w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Book Hotel
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                ₫200,000 VND currency notes to INR
              </h2>
              <CurrencyConverter
                currencyPair={"VNDINR"}
                exchange={"forex market"}
                rate={VNDINRMarketRate}
                base={"VND"}
                quote={"INR"}
                baseSymbol={"₫"}
                quoteSymbol={"₹"}
                amount={200000}
                region={"en-IN"}
              />
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardContent>
                <Image
                  src={"/images/sushi.avif"}
                  alt="Sushi"
                  height={900}
                  width={700}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold">
                    What ₫200,000 VND gets you in Vietnam
                  </h3>
                  <p className="text-base sm:text-lg">
                    {`You can enjoy sushi at a nice high-end restaurant (Tram Sushi, Hanoi).`}
                  </p>
                  <p className="text-xl sm:text-2xl">₫220,000</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="https://tramsushi.com/" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Visit website
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                ₫100,000 VND currency notes to INR
              </h2>
              <CurrencyConverter
                currencyPair={"VNDINR"}
                exchange={"forex market"}
                rate={VNDINRMarketRate}
                base={"VND"}
                quote={"INR"}
                baseSymbol={"₫"}
                quoteSymbol={"₹"}
                amount={100000}
                region={"en-IN"}
              />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                ₫50,000 VND currency notes to INR
              </h2>
              <CurrencyConverter
                currencyPair={"VNDINR"}
                exchange={"forex market"}
                rate={VNDINRMarketRate}
                base={"VND"}
                quote={"INR"}
                baseSymbol={"₫"}
                quoteSymbol={"₹"}
                amount={50000}
                region={"en-IN"}
              />
            </div>

            <Card className="w-full bg-orange-50 dark:bg-orange-900">
              <CardContent>
                <Image
                  src={"/images/rice-dish.avif"}
                  alt="rice dish"
                  height={700}
                  width={500}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold">
                    What ₫50,000 VND gets you in Vietnam
                  </h3>
                  <p className="text-base sm:text-lg">
                    {`It gets you a vegan dish called com chay.`}
                  </p>
                  <p className="text-xl sm:text-2xl">₫45,000</p>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="https://lovinghut.com/vn/" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Visit website
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
