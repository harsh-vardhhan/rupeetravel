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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Alert,
    AlertIcon,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Link href="/">
                    <Heading as='h2' size='2xl'>Rupee Travel</Heading>
                </Link>

                <Text fontSize='xl' style={{ marginTop: '20px' }}>Flight Booking</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Flight Booking</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Vietjet <Tag colorScheme='teal'>Personally used</Tag></Heading>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Try booking early, you can get prices as low as ₹6,000
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            ~₹5,000 is tax on every ticket hence prices can&apos;t go lower than that 
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Extra ~₹2,000 for checked in luggage
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            If you plan to travel the entire country, try checking the cheapest current route eg: Hanoi, Ho Chi Minh, Da Nang.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            Food in plane is expensive, you can even carry some airport food in flight.
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button colorScheme='blue' onClick={() => window.open('https://www.vietjetair.com/en')}>
                                        Book Vietjet
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                        <Card maxW='sm'>
                            <CardBody>
                                <Tag colorScheme='orange'>Fellow passenger faced this</Tag>
                                <Alert status='error' style={{ marginTop: '10px' }}>
                                    <AlertIcon />
                                    Please ensure no mistakes are made in filling personal details during booking or else you might have to pay ~5,000 for fixing info at airport.
                                </Alert>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
