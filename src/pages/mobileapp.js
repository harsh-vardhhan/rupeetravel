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
    SimpleGrid,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `It's the Uber + Zomato of Vietnam`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `Signup with the local Vietnam number`,
        color: 'red.400',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `Indian debit and credit cards don't work with Grab. So keep cash (VND) ready before using it's services.`,
        color: 'green.500',
    },
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'mobile app'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/grab.webp'}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Download Grab</Heading>
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
                                        onClick={() => window.open('https://www.grab.com/vn/download/')}>
                                        Download Grab
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
