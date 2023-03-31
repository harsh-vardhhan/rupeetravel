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
    ButtonGroup,
    Button,
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
        title: 'Zero forex markup credit card',
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: 'Zero Joining/Annual fee',
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: 'Withdraw cash from ATM without interest till Payment date (48 days interest free cash)',
        color: 'green.500',
    },
    {
        item: 4,
        icon: CheckCircleIcon,
        title: 'VISA backed credit card hence higher acceptance in Vietnam',
        color: 'green.500',
    },
    {
        item: 5,
        icon: InfoIcon,
        title: 'Secured credit card which needs an FD as collateral',
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | credit card with zero forex markup for travel in Vietnam</title>
                <meta name="description" content="Best credit card with zero forex markup for foreign travel in Vietnam for Indians" />
            </Head>
            <main className={styles.main}>

                <Header title={'Indian Credit Cards for Vietnam'} />

                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>IDFC First Wow</Heading>
                                    <Tag colorScheme='teal' style={{width: 'fit-content'}}>Personally using</Tag>
                                    <Image
                                        src={'/static/images/creditcard.webp'}
                                        alt='IDFC First Wow'
                                        borderRadius='lg'
                                        style={{ marginTop: '10px'}}
                                    />
                                    <List spacing={3}>
                                        <ListView features={features} />
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        onClick={() => window.open('https://www.idfcfirstbank.com/credit-card/credit-card-against-fixed-deposits')}>
                                        IDFC First Wow
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Tag colorScheme='teal'>Personally used 😞</Tag>
                                <Alert status='error' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Please avoid Amex credit cards, since they are hardly accepted anywhere in Vietnam.
                                </Alert>
                                <Image
                                    src={'/static/images/amex.webp'}
                                    alt='Amex card'
                                    borderRadius='lg'
                                    style={{ marginTop: '10px'}}
                                />
                            </CardBody>
                        </Card>
                    </SimpleGrid>


                </div>

            </main>
        </>
    )
}
