import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    Image,
    SimpleGrid,
    Tag,
    Divider,
    CardFooter,
    Button
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Link from 'next/link'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `Before you leave, withdraw some VND enough for first few days of your next visit.`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `Avoid the hassle of looking for ATM right after your arrive Vietnam.`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `Vietnam is still mostly cash only society. No credit card,debit card, or USD will make it as easy as Vietnam currency (VND).`,
        color: 'green.500',
    },
    {
        item: 4,
        icon: InfoIcon,
        title: `Try withdrawing money from Ocean Bank ATM since it has zero forex markup charges.`,
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | Withdraw Vietnam local currency VND from ATM</title>
                <meta name="description" content="Best ATM to withdraw VND with zero forex markup in Vietnam for Indians" />
            </Head>
            <main className={styles.main}>
                <Header title={'Withdraw Vietnam currency for next visit'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='md'>
                            <CardBody>
                                <Image
                                    src={'/static/images/local-currency.webp'}
                                    alt='local-currency'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h3' size='md'>Withdraw VND for next visit <Tag colorScheme='teal'>Personally used</Tag></Heading>
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Link spacing='2' href='/atm-vietnam-zero-forex-markup'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                    >
                                        Ocean Bank ATM
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}