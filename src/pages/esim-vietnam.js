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
} from '@chakra-ui/react'
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'

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

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'eSim'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h3' size='md'>Convert to eSim <Tag colorScheme='teal'>Personally used</Tag></Heading>
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
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
