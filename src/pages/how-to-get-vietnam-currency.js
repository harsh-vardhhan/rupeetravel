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

    const format = (val) => `₹` + val
    const parse = (val) => val.replace(/^\₹/, '')
    const [value, setValue] = useState('100')
    const INRVNDForexRate = 287.5
    const INRVNDBookMyForexRate = 217.0

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
                        <Heading style={{ marginTop: '20px' }}> INR to Vietnam currency</Heading>
                        <Heading fontSize={'lg'} style={{ marginTop: '20px' }}> INRVND currency converter with forex rate:</Heading>
                        <Card style={{ padding: '20px', marginTop: '10px' }}>
                            <div>
                                <Stack direction="row">
                                    <Text style={{ marginTop: '7px', fontWeight: 700 }}>INR</Text>
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
                                    <Text style={{ marginTop: '0px', fontWeight: 700 }}>VND</Text>
                                    <Text>₫ {value * INRVNDForexRate}</Text>
                                </Stack>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <Stack direction="row">
                                    <Text style={{ marginTop: '0px', fontWeight: 700 }}>Forex Rate</Text>
                                    <Tag colorScheme='teal'>₫ {INRVNDForexRate}</Tag>
                                </Stack>
                            </div>
                        </Card>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            Try to buy Vietnamese Dong (VND) closest to the forex rate. This is where it gets tricky. You need to get the right foriegn currency at the right place to get the right price.
                        </Text>
                        <Heading style={{ marginTop: '20px' }}> Buy Vietnam currency in India</Heading>
                        <Card style={{ padding: '20px', marginTop: '10px' }}>
                            <div>
                                <Stack direction="row">
                                    <Text style={{ marginTop: '7px', fontWeight: 700 }}>INR</Text>
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
                                    <Text style={{ marginTop: '0px', fontWeight: 700 }}>VND</Text>
                                    <Text>₫ {value * INRVNDBookMyForexRate}</Text>
                                </Stack>
                            </div>
                            <div style={{ marginTop: '20px' }}>
                                <Stack direction="row">
                                    <Text style={{ marginTop: '0px', fontWeight: 700 }}>BookMyForex Rate</Text>
                                    <Tag colorScheme='teal'>₫ {INRVNDBookMyForexRate}</Tag>
                                </Stack>
                            </div>
                        </Card>
                        <Text style={{ marginTop: '20px' }} fontSize='xl'>
                            You can buy VND in India from an authorised forex dealer like BookMyforex.
                            But it can be seen that rate offered by BookMyForex isn't great compared to the offering in the forex market.
                        </Text>
                    </div>
                </div>
            </main>
        </>
    )
}