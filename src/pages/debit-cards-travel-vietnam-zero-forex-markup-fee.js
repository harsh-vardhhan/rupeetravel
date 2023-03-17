import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Text,
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
import ListView from '@/component/listview'
import Header from '@/component/header'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: 'Zero forex markup on debit card',
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: '₹100 on international ATM cash withdrawl from Fi',
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: `Local ATMs in Vietnam will still charge 1.5%-3%
        (minimum amount 30,000 VND -50,000 VND) on withdrawal.
        Hence try withdrawing a decent amount of cash.`,
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | debit card with zero forex markup for travel in Vietnam</title>
                <meta name="description" content="Best debit card with zero forex markup for foreign travel in Vietnam for Indians" />
            </Head>
            <main className={styles.main}>
                <Header title={'Debit Cards'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/debitcard.webp'}
                                    alt='Fi Debit Card'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Fi Card <Tag colorScheme='teal'>Personally using</Tag></Heading>
                                    <Text>
                                        Fi is a no brainer, easy to use neobank account. Suit&apos;s perfect for travelling abroad.
                                    </Text>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        onClick={() => window.open('https://fi.money/')}>
                                        Get Fi Account
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Alert status='info' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Do activate the &quot;Apply these settings to international usage&quot; checkbox when abroad
                                </Alert>
                                <Image
                                    src={'/static/images/fisetting.webp'}
                                    alt='Fi Settings Mobile'
                                    style={{ marginTop: '10px' }}
                                    borderRadius='lg'
                                />
                            </CardBody>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Tag colorScheme='teal'>Personally used 😞</Tag>
                                <Alert status='error' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Please avoid Discover debit cards since they are hardly accepted anywhere.
                                    You can check the logo on your debit card in case you aren&apos;t aware.
                                </Alert>
                                <Image
                                    src={'/static/images/discover.webp'}
                                    alt='Discover card'
                                    borderRadius='lg'
                                    style={{ marginTop: '10px' }}
                                />
                            </CardBody>
                        </Card>
                    </SimpleGrid>


                </div>

            </main>
        </>
    )
}
