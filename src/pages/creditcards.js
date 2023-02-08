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
        title: ' Zero forex markup credit card',
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: '₹3000 Joining/Annual fee',
        color: 'green.500',
    },
    {
        item: 3,
        icon: InfoIcon,
        title: 'All other zero forex markup cards have high joining fee, hence avoid them',
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>

                <Header title={'Credit Cards'}/>

                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>RBL World Safari <Tag colorScheme='orange'>Applied for it</Tag></Heading>
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
                                        onClick={() => window.open('https://www.rblbank.com/product/credit-cards/world-safari-credit-card')}>
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
