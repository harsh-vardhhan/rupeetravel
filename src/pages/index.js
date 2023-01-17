import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  StackDivider,
  Box,
  Stack,
  SimpleGrid,
  Tag,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rupee Travel | Vietnam trip for Indians </title>
        <meta name="description" content="Vietnam budget travel checklist for Indians" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Heading as='h2' size='2xl'>Rupee Travel</Heading>
        <Text fontSize='xl' style={{ marginTop: '20px' }}>Budget travel checklist for Indians travelling Vietnam 🇻🇳</Text>
        <div style={{ marginTop: '20px' }}>

          <SimpleGrid minChildWidth='350px' spacing='40px'>

            <Card style={{ maxWidth: '500px' }}>
              <CardHeader>
                <Heading size='md'>Before you arrive 🇮🇳</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Link href="/debitcards">
                      <Heading size='md'>
                        Debit Card <Tag colorScheme='teal'>Mandatory</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Zero forex markup debit card
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/creditcards">
                      <Heading size='md'>
                        Credit Card <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Zero forex markup credit card
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/evisa">
                      <Heading size='md'>
                        E-Visa <Tag colorScheme='teal'>Mandatory</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Apply your E-Visa online.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/flight">
                      <Heading size='md'>
                        Flight Booking <Tag colorScheme='teal'>Mandatory</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Scan for the cheapest tickets.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/insurance">
                      <Heading size='md'>
                        Travel insurance <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Safeguard your journey.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/luggage">
                      <Heading size='md'>
                        Luggage <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Quick travel hack for luggage.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/hotel">
                      <Heading size='md'>
                        Hotel Booking <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Book hotel directly.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/esim">
                      <Heading size='md'>
                        eSim <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Get eSim for single sim phone.
                      </Text>
                    </Link>
                  </Box>
                </Stack>
              </CardBody>
            </Card>

            <Card style={{ maxWidth: '500px', marginTop: '10px' }}>
              <CardHeader>
                <Heading size='md'>Arrived 🇻🇳</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Link href="/mobileapp">
                      <Heading size='md'>
                        Food & Taxi <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Download the Zomato + Uber of Vietnam.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/sim">
                      <Heading size='md'>
                        Local mobile sim <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Get local Vietnam sim.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/work">
                      <Heading size='md'>
                        Place to work <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        For remote workers.
                      </Text>
                    </Link>
                  </Box>
                </Stack>
              </CardBody>
            </Card>

          </SimpleGrid>



        </div>

      </main>
    </>
  )
}
