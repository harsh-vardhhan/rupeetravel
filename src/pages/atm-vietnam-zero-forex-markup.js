import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Text,
    Stack,
    List,
    Image,
    Alert,
    AlertIcon,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import Header from '@/component/header'
import ListView from '@/component/listview'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `Always accepts international debit card (unlike other ATM's)`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: 'Zero Forex charges on cash withdrawal.',
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: ` Other ATMs in Vietnam can charge 1.5%-3%
        (minimum amount 30,000 VND -50,000 VND) on withdrawal.`,
        color: 'red.400',
    }
]

const atmFeatures = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: ` bank whose debit card you hold. 💳`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `bank whose ATM you use. 🏧`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: ` Fi debit card + Ocean bank ATM = zero forex*`,
        color: 'green.500',
    },
    {
        item: 4,
        icon: InfoIcon,
        title: ` *Just ₹100 charge for ATM withdrawal from Fi`,
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | Best ATM in Vietnam for foreigners</title>
                <meta name="description" content="Best and cheapest ATM in Vietnam for zero exchange rate" />
            </Head>
            <main className={styles.main}>
                <Header title={'ATM cash withdrawal'} />

                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/atm.webp'}
                                    alt='Ocean Bank ATM'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Ocean Bank ATM <Tag colorScheme='teal'>Personally using</Tag></Heading>
                                    <Text>
                                        Just search on google map &quot;Ocean Bank&quot; for nearby ATM.
                                    </Text>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Alert status='info' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Debit card forex charge & ATM forex charge are NOT same.
                                </Alert>
                                <Stack mt='6' spacing='3'>
                                    <Text>
                                        When you withdraw cash from ATM&apos;s there are two sides which charge you:
                                    </Text>
                                    <List spacing={3}>
                                        <ListView features={atmFeatures}/>
                                    </List>
                                </Stack>
                            </CardBody>
                        </Card>
                    </SimpleGrid>


                </div>

            </main>
        </>
    )
}
