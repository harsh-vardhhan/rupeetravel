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
            <main className={styles.main}>
                <Header title={'local SIM card'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Get local SIM card at airport <Tag colorScheme='teal'>Personally used</Tag></Heading>
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
