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

                <Text fontSize='xl' style={{ marginTop: '20px' }}>Credit Cards</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Credit Cards</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>RBL World Safari <Tag colorScheme='orange'>Applied for it</Tag></Heading>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Zero forex markup credit card
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            ₹3000 Joining/Annual fee
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            All other zero forex markup cards have high joining fee, hence avoid them
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='blue'>
                                        RBL World Safari
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
