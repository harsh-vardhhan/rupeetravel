import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Alert,
    AlertIcon,
    SimpleGrid
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon} from '@chakra-ui/icons'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Rupee Travel | Vietnam trip for Indians </title>
                <meta name="description" content="Vietnam budget travel checklist for Indians" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Link href="/">
                    <Heading as='h2' size='2xl'>Rupee Travel</Heading>
                </Link>

                <Text fontSize='xl' style={{ marginTop: '20px' }}>Debit Cards</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Debit Cards</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/debitcard.webp'}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Fi Card</Heading>
                                    <Text>
                                        Fi is a no brainer, easy to use neobank account. Suit&apos;s perfect for travelling abroad.
                                    </Text>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Zero forex markup on debit card
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            ₹100 on international ATM cash withdrawl from Fi
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            Local ATMs in Vietnam will still charge 1.5%-3% 
                                            (minimum amount 30,000 VND -50,000 VND) on withdrawal. 
                                            Hence try withdrawing a decent amount of cash.
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
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
                                    alt='Green double couch with wooden legs'
                                    style={{ marginTop: '10px' }}
                                    borderRadius='lg'
                                />
                            </CardBody>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Alert status='error' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Please avoid Discover debit cards, since they are hardly accepted anywhere. You can check the logo on your debit incase you are not aware. 
                                </Alert>
                                <Image
                                    src={'/static/images/discover.webp'}
                                    alt='Green double couch with wooden legs'
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
