import { useState } from "react";
import styles from '@/styles/Home.module.css';
import {
    Text,
    Heading,
    ListItem,
    UnorderedList,
    NumberInput,
    NumberInputField,
    Stack,
    Card,
    Tag,
} from '@chakra-ui/react';
import Seo from '@/component/seo';
import Header from "@/component/header";
import Image from 'next/image';
import StructuredData from "@/component/structuredData";

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "But why use cash in Vietnam and not credit or debit cards?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vietnam is still predominantly a cash-first country. Using only credit and debit cards will limit the places you can visit, like street food places or even getting a Grab bike. Hence, you always want to keep Vietnamese Dong, the local currency, with your credit and debit cards."
            }
        },
        {
            "@type": "Question",
            "name": "Why is buying VND so expensive in India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vietnamese currency VND is a exotic currency, meaning the currency does not have sufficient demand in the global market. Less buyer and sellers of the currency makes the buying and selling cost very high."
            }
        },
        {
            "@type": "Question",
            "name": "Can I buy USD currency notes from BookMyForex whenever I want?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. You can only buy USD currency notes from an authorized forex dealer like BookMyForex when you have a valid visa, like Vietnam's e-visa and air tickets for the travel destination."
            }
        },
        {
            "@type": "Question",
            "name": "What if I didn't spend all the USD I purchased for my Vietnam travel?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As an Indian citizen, you can keep $2,000 physical currency notes. Since USD is a globally accepted currency, you can use it for your next international travel to any other country."
            }
        },
        {
            "@type": "Question",
            "name": "So, if you have zero forex markup debit card, you don't need to carry USD currency notes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, I would recommend keeping USD currency notes as an alternate solution. That's cause there have been events where banks like Niyo and Paytm disabled international transactions due to regulatory issues. Physical USD currency notes keep you immune from such situations."
            }
        },
        {
            "@type": "Question",
            "name": "Why is conversion rates for VND via Vietnam ATM's so great?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Payment networks like Visa and MasterCard use the forex market (which are very liquid - many buyers and sellers of currency) to get great conversion rates unlike local forex dealer. Also, behind the scene it's simulating the same smart conversion technique (INR - USD - VND)."
            }
        },
        {
            "@type": "Question",
            "name": "Can you bring back the Vietnam currency to India?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can bring back ₫15,000,000 VND of physical currency notes to India without declaring to the Vietnamese customs."
            }
        },
        {
            "@type": "Question",
            "name": "What to do with the unspent Vietnam currency?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you plan to travel to Vietnam again, you can keep it for your next visit. But if you don't, you can sell it in exchange for Indian Rupee to an authorized Forex dealer, like BookMyForex."
            }
        }
    ]
    };

    const USDINRMarketRate = 83.31
    const USDINRBookMyForexRate = 84.29

    const INRVNDMarketRate = 294.81
    const INRVNDBookMyForexRate = 217

    const VNDINRMarketRate = 0.0034

    return (
        <>
            <StructuredData data={structuredData} />
            <Seo
                title="Rupee Travel | Get Vietnam currency in India"
                description="Vietnam currency | Vietnamese Dong | VND"
                canonical={"https://www.rupeetravel.com/how-to-get-vietnam-currency"}
            />
            <main className={styles.main} >
                <Header
                    title={"How to get Vietnam currency in India"}
                    blog={true}
                />
                <div
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div
                        className={"container mx-auto"}
                        style={{ maxWidth: '700px', marginTop: '20px' }}
                    >
                        <Image
                            src={"/images/tools.webp"}
                            alt="Zero forex charges cards"
                            height={1536}
                            width={2048}
                            style={{ marginTop: "10px" }}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Getting foreign currency is a crucial piece of travel experience.
                            In a foreign country, no access to local currency can be a scary experience.
                            <br />Hence, we will learn how to get Vietnamese Dong (VND):
                        </Text>
                        <UnorderedList style={{ marginTop: '10px', fontSize: '1.25rem' }} >
                            <ListItem>at right rates</ListItem>
                            <ListItem>in the legal way</ListItem>
                            <ListItem>in your own country (get VND in India)</ListItem>
                            <ListItem>in foreign country (get VND in Vietnam)</ListItem>
                            <ListItem>in the right amount</ListItem>
                        </UnorderedList>

                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` But why use cash in Vietnam and not credit or debit cards?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                Vietnam is still predominantly a cash-first country.
                                Using only credit and debit cards will limit the places you can visit,
                                like street food places or even getting a
                                {' '}
                                <a href='#'>
                                    <b onClick={() => window.open('https://www.rupeetravel.com/food-delivery-taxi-vietnam')}>
                                        <u>{`Grab`}</u>
                                    </b>
                                </a>
                                {' '}
                                bike.
                                Hence, you always want to keep Vietnamese Dong, the local currency,
                                with your credit and debit cards.
                            </Text>
                        </Card>

                        <Heading style={{ marginTop: '20px' }}> INR to Vietnam currency</Heading>
                        <CurrencyConverter
                            currencyPair={'INRVND'}
                            exchange={'forex market'}
                            rate={INRVNDMarketRate}
                            base={'INR'}
                            quote={'VND'}
                            baseSymbol={'₹'}
                            quoteSymbol={'₫'}
                            amount={100}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Try to buy Vietnamese Dong (VND) closest to the forex rate. This is where it gets tricky. You need to get the right foriegn currency at the right place to get the right price.
                        </Text>
                        <Heading style={{ marginTop: '20px' }}> Buy Vietnam currency in India</Heading>
                        <CurrencyConverter
                            currencyPair={'INRVND'}
                            exchange={'BookMyForex'}
                            rate={INRVNDBookMyForexRate}
                            base={'INR'}
                            quote={'VND'}
                            baseSymbol={'₹'}
                            quoteSymbol={'₫'}
                            amount={100}
                            region={'en-VN'}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            <b>The dumb way:</b>{` You can buy VND in India from an authorised forex dealer like BookMyforex.
                            But it can be seen that rate offered by BookMyForex is not great compared to the offering in the forex market.`}
                        </Text>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}> Why is buying VND so expensive in India?</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                Vietnamese currency VND is a exotic currency,
                                meaning the currency does not have sufficient demand in the global market.
                                Less buyer and sellers of the currency makes the buying and selling cost very high.
                            </Text>
                        </Card>
                        <Heading style={{ marginTop: '20px' }}> Buy USD in India</Heading>
                        <Image
                            src={"/images/usd-currency.webp"}
                            alt="USD currency notes"
                            height={700}
                            width={1000}
                            style={{ marginTop: "10px" }}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            <b>The smart way:</b>{` Wait? but why? I am travelling to Vietnam, not the US, why should I buy USD. 
                            Well, that's cause USD has the highest global demand hence the buy/sell rate 
                            are great even in India.`}
                        </Text>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}> Can I buy USD currency notes from BookMyForex whenever I want?</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                No. You can only buy USD currency notes from an authorized forex dealer
                                like BookMyForex when you have a valid visa, like
                                {' '}
                                <a href='#'>
                                    <b onClick={() => window.open('https://www.rupeetravel.com/e-visa-vietnam-indians')}>
                                        <u>{`Vietnam's e-visa`}</u>
                                    </b>
                                </a>
                                {' '}and air tickets for the travel destination.
                            </Text>
                        </Card>
                        <Image
                            src={"/images/buy-USD.gif"}
                            alt="BookMyForex"
                            height={300}
                            width={500}
                            style={{ marginTop: "10px" }}
                        />
                        <CurrencyConverter
                            currencyPair={'USDINR'}
                            exchange={'BookMyForex'}
                            rate={USDINRBookMyForexRate}
                            base={'USD'}
                            quote={'INR'}
                            baseSymbol={'$'}
                            quoteSymbol={'₹'}
                            amount={100}
                            region={'en-IN'}
                        />
                        <CurrencyConverter
                            currencyPair={'USDINR'}
                            exchange={'forex market'}
                            rate={USDINRMarketRate}
                            base={'USD'}
                            quote={'INR'}
                            baseSymbol={'$'}
                            quoteSymbol={'₹'}
                            amount={100}
                            region={'en-IN'}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            The difference between rates offered between
                            BookMyForex and the forex market is minimal.
                            You can carry the
                            {' '}
                            <a href='#'>
                                <b onClick={() => window.open('https://www.rupeetravel.com/buy-foreign-currency-notes-online')}>
                                    <u>{`USD purchased in India`}</u>
                                </b>
                            </a>
                            {' '}
                            to Vietnam and buy VND from it at the airport.
                            The USD is even accepted directly at many places in
                            Vietnam, specially tourist hubs like
                            {' '}
                            <a href='#'>
                                <b onClick={() => window.open('https://www.rupeetravel.com/da-nang-map')}>
                                    <u>{`Da Nang`}</u>
                                </b>
                            </a>.
                        </Text>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` What if I didn't spend all the USD I purchased for my Vietnam travel?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`As an Indian citizen, you can keep $2,000 physical currency notes. 
                                Since USD is a globally accepted currency, you can use it for your 
                                next international travel to any other country. `}
                            </Text>
                            <CurrencyConverter
                                currencyPair={'USDINR'}
                                exchange={'forex market'}
                                rate={USDINRMarketRate}
                                base={'USD'}
                                quote={'INR'}
                                baseSymbol={'$'}
                                quoteSymbol={'₹'}
                                amount={2000}
                                region={'en-IN'}
                            />
                        </Card>
                        <Heading style={{ marginTop: '20px' }}> Withdraw VND from Vietnam ATM</Heading>
                        <Image
                            src={"/images/ocean-bank-atm.webp"}
                            alt="Zero forex charges ATM - Ocean Bank ATM"
                            height={700}
                            width={500}
                            style={{ marginTop: "10px" }}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            <b>The smartest way:</b> Get a
                            <a href='#'>
                                <b onClick={() => window.open('https://www.rupeetravel.com/debit-cards-travel-vietnam-zero-forex-markup-fee')}>
                                    <u>{` zero forex markup debit card`}</u>
                                </b>
                            </a> and use it to withdraw VND from a

                            <a href='#'>
                                <b onClick={() => window.open('https://www.rupeetravel.com/atm-vietnam-zero-forex-markup')}>
                                    <u>{` zero forex markup ATM`}</u>
                                </b>
                            </a>{`. This not only give you great conversion rates, 
                            but you can also skip the hassle of buying any 
                            currency notes before your actual trip. It also 
                            allows you skip the hassle of buying USD currency 
                            notes just for great conversion rates.`}
                        </Text>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` So, if you have zero forex markup debit card, you don't need to carry USD currency notes?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`No, I would recommend keeping USD currency notes as an 
                                alternate solution. That's cause there have been events 
                                where banks like `}
                                <a href='#'>
                                    <b onClick={() => window.open('https://inc42.com/buzz/neobank-niyo-users-bear-the-brunt-as-partner-sbm-bank-india-comes-under-rbi-radar/')}>
                                        <u>{` Niyo`}</u>
                                    </b>
                                </a>
                                {' and '}
                                <a href='#'>
                                    <b onClick={() => window.open('https://entrackr.com/2023/10/paytm-payments-bank-halts-intl-transactions-on-debit-cards/')}>
                                        <u>{` Paytm`}</u>
                                    </b>
                                </a>
                                {` disabled international transactions due to regulatory 
                                issues. Physical USD currency 
                                notes keep you immune from such situations. `}
                            </Text>
                        </Card>
                        <Image
                            src={"/images/forex-charges-atm.webp"}
                            alt="ATM with forex charges"
                            height={700}
                            width={500}
                            style={{ marginTop: "10px" }}
                        />
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            {`Using any random ATM can cause you forex charges up to 3%. 
                            Hence, using a zero forex charge debit card isn't enough. 
                            It's essential that you also use that card in a zero-forex ATM.`}
                        </Text>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#FAF3F0' }}>
                            <Heading fontSize={'lg'}>{` Why is conversion rates for VND via Vietnam ATM's so great?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`Payment networks like Visa and MasterCard use the forex market 
                                (which are very liquid - many buyers and sellers of currency) 
                                to get great conversion rates unlike local forex dealer. Also, behind the scene it's 
                                simulating the same smart conversion technique (INR - USD - VND). `}
                            </Text>
                        </Card>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#ecf8f8' }}>
                            <Heading fontSize={'lg'}>{` Can you bring back the Vietnam currency to India?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`Yes. You can bring back ₫15,000,000 VND of physical currency notes
                                 to India without declaring to the Vietnamese customs. `}
                            </Text>
                            <CurrencyConverter
                                currencyPair={'VNDINR'}
                                exchange={'forex market'}
                                rate={VNDINRMarketRate}
                                base={'VND'}
                                quote={'INR'}
                                baseSymbol={'₫'}
                                quoteSymbol={'₹'}
                                amount={15000000}
                                region={'en-IN'}
                            />
                        </Card>
                        <Card style={{ padding: '20px', marginTop: '10px', backgroundColor: '#eef4ed' }}>
                            <Heading fontSize={'lg'}>{` What to do with the unspent Vietnam currency?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`If you plan to travel to Vietnam again, you can keep it for your next visit. 
                                But if you don't, you can sell it in exchange for Indian Rupee to an 
                                authorized Forex dealer, like BookMyForex. `}
                            </Text>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    )
}

const CurrencyConverter = ({ region, amount, currencyPair, exchange, rate, base, quote, baseSymbol, quoteSymbol }) => {

    const format = (val) => baseSymbol + val
    const parse = (val) => val.replace(/^\{`baseSymbol`}/, '')
    const [value, setValue] = useState(amount)
    const convertedPrice = (value * rate).toLocaleString(region, { style: 'currency', currency: quote })

    return (
        <>
            <Heading fontSize={'lg'} style={{ marginTop: '20px' }}>
                {currencyPair} currency converter with {exchange} rate:
            </Heading>
            <Card style={{ padding: '20px', marginTop: '10px' }}>
                <div>
                    <Stack direction="row">
                        <Text style={{ marginTop: '7px', fontWeight: 700 }}>{base}</Text>
                        <NumberInput
                            onChange={(valueString) => setValue(parse(valueString))}
                            value={format(value)}
                            max={1000000000}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </Stack>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Stack direction="row">
                        <Text style={{ marginTop: '0px', fontWeight: 700 }}>{quote}</Text>
                        <Text>{convertedPrice}</Text>
                    </Stack>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Stack direction="row">
                        <Text style={{ marginTop: '0px', fontWeight: 700 }}>{exchange} Rate</Text>
                        <Tag colorScheme='teal'>{quoteSymbol} {rate}</Tag>
                    </Stack>
                </div>
            </Card>
        </>
    )
}