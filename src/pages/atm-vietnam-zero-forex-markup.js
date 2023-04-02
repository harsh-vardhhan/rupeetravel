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
    Divider,
    CardFooter,
    Button,
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
        title: ` Fi debit card + Ocean Bank/MB Bank ATM = zero forex*`,
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
                <title>Rupee Travel | Best ATM with zero forex markup in Vietnam for foreigners</title>
                <meta name="description" content="Best and cheapest ATM in Vietnam for zero exchange rate" />
            </Head>
            <main className={styles.main}>
                <Header title={'ATM cash withdrawal with no fee in Vietnam'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack direction='column'>
                                    <Image
                                        src={'/static/images/ocean-bank-atm.webp'}
                                        alt='Ocean Bank ATM'
                                        borderRadius='lg'
                                        style={{ width: '310px', height: '307px' }}
                                    />
                                    <Image
                                        src={'/static/images/mb-bank-atm.webp'}
                                        alt='Ocean Bank ATM'
                                        borderRadius='lg'
                                        style={{ width: '310px', height: '307px' }}
                                    />
                                </Stack>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Withdraw cash from Ocean Bank ATM or MB Bank ATM </Heading>
                                    <Tag colorScheme='teal' style={{ width: 'fit-content' }}>Personally using</Tag>
                                    <Text>
                                        Just search on google map <Text as='b'>Ocean Bank</Text> or <Text as='b'>MB Bank</Text> for nearby ATM.
                                    </Text>
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Stack direction='row'>
                                    <Button
                                        colorScheme='green'
                                        onClick={() => window.open('https://www.google.com/maps?q=MB+Bank+ATM')}>
                                        MB Bank ATM
                                    </Button>
                                    <Button
                                        colorScheme='green'
                                        onClick={() => window.open('https://www.google.com/maps?q=Ocean+Bank+ATM')}>
                                        Ocean Bank ATM
                                    </Button>
                                </Stack>
                            </CardFooter>
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
                                        <ListView features={atmFeatures} />
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
