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
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `Got $100,000 coverage at just ~₹1300 premium`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `It cannot be extended hence make sure it covers your entire stay while buying it.`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `Your normal health insurance doesn't cover international treatments hence strongly recommended you get travel insurance.`,
        color: 'red.400',
    },
]

export default function Home() {
    return (
        <>
            <Seo
                title='Rupee Travel | Best travel insurance for Vietnam'
                description='Travel insurance for Indians in Vietnam'
                canonical={'https://www.rupeetravel.com/travel-insurance-india-vietnam'}
            />
            <main className={styles.main}>
                <Header title={'Travel insurance for Vietnam'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Digit Insurance</Heading>
                                    <Tag colorScheme='teal' style={{width: 'fit-content'}}>Personally used</Tag>
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Button 
                                    colorScheme='green' 
                                    onClick={() => window.open('https://www.godigit.com/international-travel-insurance')}>
                                    Digit Travel Insurance
                                </Button>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
