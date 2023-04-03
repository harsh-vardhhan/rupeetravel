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
import Seo from '@/component/seo'

const features = [
    {
        item: 1,
        icon: CheckCircleIcon,
        title: `you can stay for maximum one month`,
        color: 'green.500',
    },
    {
        item: 2,
        icon: CheckCircleIcon,
        title: `Usually visa approved within 5 days max.`,
        color: 'green.500',
    },
    {
        item: 3,
        icon: CheckCircleIcon,
        title: `Very unlikely to get rejected 🙂`,
        color: 'green.500',
    },
    {
        item: 4,
        icon: InfoIcon,
        title: `Please don&apos;t use any third party agency, apply on the official government site link given below`,
        color: 'red.400',
    }
]

export default function Home() {
    return (
        <>
            <Seo
                title='Rupee Travel | Apply for Vietnam e-visa'
                description='Vietnam e-visa application'
                canonical={'https://www.rupeetravel.com/e-visa-vietnam-indians'}
            />
            <main className={styles.main}>
                <Header title={'Apply E-Visa for Vietnam'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading as='h2' size='md'>E-Visa for Vietnam</Heading>
                                    <Tag colorScheme='teal' style={{width: 'fit-content'}}>Personally used</Tag>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <Button 
                                    colorScheme='green' 
                                    onClick={() => window.open('https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu')}>
                                    Apply E-Visa
                                </Button>
                            </CardFooter>
                        </Card>
                    </SimpleGrid>
                </div>
            </main>
        </>
    )
}
