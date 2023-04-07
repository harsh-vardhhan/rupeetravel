import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    List,
    SimpleGrid,
    Tag,
    Divider,
    CardFooter,
    Button,
} from '@chakra-ui/react'
import ListView from '@/component/listview'
import Header from '@/component/header'
import Seo from '@/component/seo'

export default function Home({ features }) {
    return (
        <>
            <Seo
                canonical={'https://www.rupeetravel.com/remote-work-vietnam'}
                title='Rupee Travel | Remote work in Vietnam'
                description='Best places to work remotely in Vietnam'
            />
            <main className={styles.main}>
                <Header title={'Remote work from Vietnam'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>Arranging for remote work </Heading>
                                    <Tag colorScheme='teal' style={{ width: 'fit-content' }}>Personally experienced</Tag>
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
                                    onClick={() => window.open('https://www.google.com/maps?q=Highlands+Cafe')}>
                                    Highlands Cafe
                                </Button>
                            </CardFooter>
                        </Card>

                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {

    const features = [
        {
            item: 1,
            title: `✅ If you're a remote worker like me ensure your hotel has fast internet before booking them. 
            The Hotel in which I stayed in Da Nang (Lavencos) has 20 Mbps which suits my need.`,
            color: 'green.500',
        },
        {
            item: 2,
            title: `✅ Choose nearest Highlands Cafe (Starbucks of Vietnam) to work. They always have decent internet`,
            color: 'green.500',
        },
    ]

    return {
        props: {
            features,
        }
    }
}
