import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    Image,
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
        title: `Put a name label on your checked-in luggage`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `It avoids the chances of others accidentally picking your luggage`,
        color: 'red.400',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `It also helps you recognise your luggage quickly on the conveyer belt.`,
        color: 'green.500',
    },
]

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Header title={'luggage'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/luggage.webp'}
                                    alt='Luggage'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Luggage travel hack <Tag colorScheme='teal'>Personally experienced 😞</Tag></Heading>
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
