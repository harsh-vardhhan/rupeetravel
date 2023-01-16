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
                        Debit Card
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Zero forex markup debit card
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Credit Card
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      E-Visa
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Flight Booking
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Travel insurance
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Luggage
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Hotel Booking
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      eSim
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
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
                    <Heading size='md'>
                      Food & Taxi
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Local mobile sim
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='md'>
                      Place to work
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      See a detailed analysis of all your business clients.
                    </Text>
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
