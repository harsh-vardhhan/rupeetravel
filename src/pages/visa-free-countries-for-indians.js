import styles from "@/styles/Home.module.css";
import {
    Card,
    CardBody,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Tag,
} from "@chakra-ui/react";
import Header from "@/component/header";
import ListView from "@/component/listview";
import Seo from "@/component/seo";

export default function Home({ features }) {
    return (
        <>
            <Seo
                title="Rupee Travel | Visa free countries for Indians"
                description="Free Visa for Indians"
                canonical={
                    "https://www.rupeetravel.com/visa-free-countries-for-indians"
                }
            />
            <main className={styles.main}>
                <Header title={"Visa free countries for Indians"} />
                <div style={{ marginTop: "20px" }}>
                    <Card maxW="sm">
                        <CardBody>
                            <ListView features={features} />
                        </CardBody>
                    </Card>
                    <ComparisionMatrix />
                </div>
            </main>
        </>
    );
}

const ComparisionMatrix = () => (
    <Card style={{ marginTop: "30px" }}>

        <Box overflowX="auto">
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr>
                        <Th>Route (From Mumbai - Destination)</Th>
                        <Th>Flight + Visa</Th>
                        <Th>Book</Th>
                        <Th>Apply Visa</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Hong Kong
                            <br />
                            <Tag style={{ marginTop: '4px' }} colorScheme={'blue'}>
                                {'14 days visa'}
                            </Tag>
                        </Td>
                        <Td>₹10,734 + ₹2,450</Td>
                        <Td>
                            <a href={'https://www.google.com/travel/flights/s/2f1W3zQ31nbhNVdCA'}>
                                <Button
                                    colorScheme='teal'
                                    size='xs'
                                >
                                    Book
                                </Button>
                            </a>
                        </Td>
                        <Td>
                            <a href={'https://www.immd.gov.hk/eng/services/visas/pre-arrival_registration_for_indian_nationals.html'}>
                                <Button
                                    colorScheme='teal'
                                    size='xs'
                                >
                                    Apply
                                </Button>
                            </a>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            Bali
                            <br />
                            <Tag style={{ marginTop: '4px' }} colorScheme={'blue'}>
                                {'30 days visa'}
                            </Tag>
                        </Td>
                        <Td>₹10,878 + ₹2,684</Td>
                        <Td>
                            <a href={'https://www.google.com/travel/flights/s/6pVdwHxfCJxrDpER8'}>
                                <Button
                                    colorScheme='teal'
                                    size='xs'
                                >
                                    Book
                                </Button>
                            </a>
                        </Td>
                        <Td>
                            <a href={'https://molina.imigrasi.go.id/'}>
                                <Button
                                    colorScheme='teal'
                                    size='xs'
                                >
                                    Apply
                                </Button>
                            </a>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td>
                            Kazakhstan
                            <br />
                            <Tag style={{ marginTop: '4px' }} colorScheme={'blue'}>
                                {'14 days visa'}
                            </Tag>
                        </Td>
                        <Td>₹6,041 + ₹0</Td>
                        <Td>
                            <a href={'https://www.google.com/travel/flights/s/Vm6Y6SLShSMi4Yxc7'}>
                                <Button
                                    colorScheme='teal'
                                    size='xs'
                                >
                                    Book
                                </Button>
                            </a>
                        </Td>
                        <Td>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    </Card>
)

export async function getStaticProps() {
    const features = [
        {
            item: 1,
            title:
                "✅ Visa free/ e-visa countries",
            color: "green.500",
        },
        {
            item: 2,
            title:
                "✅ near ₹10,000 one way flight ticket",
            color: "green.500",
        },
    ];

    return {
        props: {
            features,
        },
    };
}
