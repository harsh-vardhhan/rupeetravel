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

export default function Home() {

    const USDINRMarketRate = 83.31
    const USDINRBookMyForexRate = 84.29

    const INRVNDMarketRate = 292
    const INRVNDBookMyForexRate = 217

    return (
        <>
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
                            alt="Amex card"
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
                            alt="Amex card"
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
                            <Heading fontSize={'lg'}> Can I buy USD from BookMyForex whenever I want?</Heading>
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
                        <CurrencyConverter
                            currencyPair={'USDINR'}
                            exchange={'BookMyForex'}
                            rate={USDINRBookMyForexRate}
                            base={'USD'}
                            quote={'INR'}
                            baseSymbol={'$'}
                            quoteSymbol={'₹'}
                        />
                        <CurrencyConverter
                            currencyPair={'USDINR'}
                            exchange={'forex rate'}
                            rate={USDINRMarketRate}
                            base={'USD'}
                            quote={'INR'}
                            baseSymbol={'$'}
                            quoteSymbol={'₹'}
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
                        </Card>
                        <Heading style={{ marginTop: '20px' }}> Withdraw VND from Vietnam ATM</Heading>
                        <Image
                            src={"/images/ocean-bank-atm.webp"}
                            alt="Amex card"
                            height={1000}
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
                            <Heading fontSize={'lg'}>{` Why is conversion rates for VND via Vietnam ATM's so great?`}</Heading>
                            <Text style={{ marginTop: '20px' }} fontSize='xl'>
                                {`Payment networks like Visa and MasterCard use the forex market 
                                (which are very liquid - many buyers and sellers of currency) 
                                to get great conversion rates unlike local forex dealer. Also, behind the scene it's 
                                simulating the same smart conversion technique (INR - USD - VND). `}
                            </Text>
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

const CurrencyConverter = ({ currencyPair, exchange, rate, base, quote, baseSymbol, quoteSymbol }) => {

    const format = (val) => baseSymbol + val
    const parse = (val) => val.replace(/^\{`baseSymbol`}/, '')
    const [value, setValue] = useState('100')

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
                            max={100000}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </Stack>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Stack direction="row">
                        <Text style={{ marginTop: '0px', fontWeight: 700 }}>{quote}</Text>
                        <Text>{quoteSymbol} {value * rate}</Text>
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