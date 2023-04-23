import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import {
    Card,
    CardBody,
    Stack,
    SimpleGrid,
    Divider,
    CardFooter,
    Button
} from '@chakra-ui/react'
import Link from 'next/link';
import Seo from '@/component/seo'

export default function Home() {
    return (
        <>
            <Seo canonical={'https://www.rupeetravel.com/404'}/>
            <main className={styles.main}>
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='xl'>Oops, this item isn't on the travel checklist.</Heading>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Link spacing='2' href='/'>
                                    <Button
                                        variant='solid'
                                        colorScheme='green'
                                    >
                                        Travel checklist
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}