import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    SimpleGrid,
    Tag,
    Image
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `Put a laminated name label on your checked-in luggage`,
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
            <Seo canonical={'https://www.rupeetravel.com/luggage'}/>
            <main className={styles.main}>
                <Header title={'luggage'}/>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={'/static/images/luggage-travel-hack.webp'}
                                    alt='Luggage'
                                    borderRadius='lg'
                                    style={{ width: '310px', height: '187px'}}
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Luggage travel hack</Heading>
                                    <Tag colorScheme='teal' style={{width: 'fit-content'}}>Personally experienced 😞</Tag>
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
