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
            <Head>
                <title>Rupee Travel | Apply for Vietnam e-visa</title>
                <meta name="description" content="Vietnam e-visa application" />
            </Head>
            <main className={styles.main}>
                <Header title={'Apply E-Visa'} />
                <div style={{ marginTop: '20px' }}>
                    <SimpleGrid minChildWidth='350px' spacing='40px'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>E-Visa <Tag colorScheme='teal'>Personally used</Tag></Heading>
                                    <List spacing={3}>
                                        <ListView features={features}/>
                                    </List>
                                </Stack>
                            </CardBody>
                            <Divider style={{ color: '#e2e8f0' }} />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button colorScheme='blue' onClick={() => window.open('https://evisa.xuatnhapcanh.gov.vn/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu')}>
                                        Apply E-Visa
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
