import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    SimpleGrid,
    Tag,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `You will access to sim right after your immigration is done at airport`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `Get sim with good data pack`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `Please don't use it too lavishly, mobile data is not as cheap as India`,
        color: 'red.400',
    },
]

export default function Home() {
    return (
        <>
            <Seo
                title='Rupee Travel | Prepaid SIM cards for tourist'
                description='SIM card at Vietnam airport'
                canonical={'https://www.rupeetravel.com/local-sim-card-vietnam'}
            />
            <main className={styles.main}>
                <Header title={'local SIM card in Vietnam'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Get local SIM card at airport</Heading>
                                    <Tag colorScheme='teal' style={{width: 'fit-content'}}>Personally used</Tag>
                                    <List spacing={3}>
                                        <ListView features={features} />
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
