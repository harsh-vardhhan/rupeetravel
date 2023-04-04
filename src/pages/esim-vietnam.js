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
    Image
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `If you have single sim phone convert to eSim`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `This helps you in installing the new sim in Vietnam`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `It can take 24 hours to get SMS part activated so try doing it a day before you leave.
        Especially important if you plan to use credit/debit card for uber/ola to reach airport`,
        color: 'red.400',
    }
]

const reasons = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `In India, you need OTP on your mobile number to make online payments, check bank balance via UPI`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `It can be hard to put the main SIM aside for single SIM phones when travelling abroad`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `That’s where e-SIM feels convenient. Just turn on your Indian SIM whenever needed.`,
        color: 'green.500',
    }
]

export default function Home() {
    return (
        <>
            <Seo canonical={'https://www.rupeetravel.com/luggage'}/>
            <main className={styles.main}>
                <Header title={'eSim'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Convert Indian SIM to eSIM</Heading>
                                    <Tag colorScheme='teal' style={{ width: 'fit-content' }}>Personally used</Tag>
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Button
                                    variant='solid'
                                    colorScheme='green'
                                    onClick={() => window.open('https://www.jio.com/en-in/esim')}>
                                    Jio eSim
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Why get eSIM?</Heading>
                                    <Image
                                        src={'/static/images/esim.webp'}
                                        alt='eSIM'
                                        borderRadius='lg'
                                        style={{ marginTop: '10px', width: '310px', height: '391px' }}
                                    />
                                    <List spacing={3}>
                                        <ListView features={reasons} />
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
