import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    Divider,
    CardFooter,
    Button,
    Image,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `just search on fb as 'CITY_YOU_VISITING hotel'`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `You can message hotels and get your rooms booked`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `For premium experience stick to domestic 4 star (which are internationally 3 star hotels.)`,
        color: 'red.400',
    },
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | Lowest Vietnam hotel room price</title>
                <meta name="description" content="Vietnam cheap hotels" />
            </Head>
            <main className={styles.main}>
                <Header title={'Booking hotel in Vietnam'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/hotel.webp'}
                                    alt='Vietnam Hotel'
                                    borderRadius='lg'
                                    style={{ width: '310px', height: '422px'}}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Book hotel in Vietnam from Facebook</Heading>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardBody>
                                <Tag colorScheme='teal'>Personally used</Tag>
                                <br/>
                                Incase you want to stay in the same city (Da Nang) and same hotel (Lavencos) where I stayed 😂, you can contact below
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Button
                                    variant='solid'
                                    colorScheme='green'
                                    onClick={() => window.open('https://www.facebook.com/lavencos.vn')}>
                                    Contact Lavencos Hotel
                                </Button>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
