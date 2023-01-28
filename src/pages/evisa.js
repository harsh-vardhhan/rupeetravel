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

                <Text fontSize='xl' style={{ marginTop: '20px' }}>E-Visa</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link href="/">
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>E-Visa</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>E-Visa <Tag colorScheme='teal'>Personally used</Tag></Heading>
                                    <List spacing={3}>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            you can stay for maximum one month
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Usually visa approved within 5 days max.
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            Very unlikely to get rejected 🙂
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon as={InfoIcon} color='red.400' />
                                            Please don&apos;t use any third party agency, apply on the official government site link given below
                                        </ListItem>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button colorScheme='blue' onClick={() => window.open('https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu')}>
                                        Apply E-Visa
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>


                </div>

            </main>
        </>
    )
}
