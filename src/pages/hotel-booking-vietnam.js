import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    Divider,
    CardFooter,
    Button,
    Image,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

export default function Home({ features }) {
    return (
        <>
            <Seo
                title='Rupee Travel | Lowest Vietnam hotel room price'
                description='Vietnam cheap hotels'
                canonical={'https://www.rupeetravel.com/hotel-booking-vietnam'}
            />
            <main className={styles.main}>
                <Header title={'Booking hotel in Vietnam'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/hotel.webp'}
                                    alt='Vietnam Hotel'
                                    borderRadius='lg'
                                    style={{ width: '310px', height: '422px' }}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Book hotel in Vietnam from Facebook</Heading>
                                    <ListView features={features} />
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardBody>
                                <Tag colorScheme='teal'>Personally used</Tag>
                                <br />
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

export async function getStaticProps() {

    const features = [
        {
            item: 1,
            title: `✅ just search on fb as 'CITY_YOU_VISITING hotel'`,
            color: 'green.500',
        },
        {
            item: 2,
            title: `✅ You can message hotels and get your rooms booked`,
            color: 'green.500',
        },
        {
            item: 3,
            title: `❌ For premium experience stick to domestic 4 star (which are internationally 3 star hotels.)`,
            color: 'red.400',
        },
    ]

    return {
        props: {
            features,
        }
    }
}