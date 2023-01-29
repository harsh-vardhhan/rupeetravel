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
                    <Heading as='h1' size='2xl'>Rupee Travel</Heading>
                </Link>

                <Text fontSize='xl' style={{ marginTop: '20px' }}>ATM cash withdrawal</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>ATM cash withdrawal</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/atm.webp'}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Ocean Bank ATM <Tag colorScheme='teal'>Personally using</Tag></Heading>
                                    <Text>
                                        Just search on google map &quot;Ocean Bank&quot; for nearby ATM.
                                    </Text>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Always accepts international debit card (unlike other ATM&apos;s)
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Zero Forex charges on cash withdrawal.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            Other ATMs in Vietnam can charge 1.5%-3%
                                            (minimum amount 30,000 VND -50,000 VND) on withdrawal.
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardBody>
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
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            bank whose debit card you hold. 💳
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            bank whose ATM you use. 🏧
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Fi debit card + Ocean bank ATM = zero forex*
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            *Just ₹100 charge for ATM withdrawal from Fi
                                        </ListItem>
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
