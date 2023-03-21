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
      <main className={styles.main}>
        <Heading size='2xl'>Rupee Travel</Heading>
        <Text
          fontSize='xl'
          as='h1'
          style={{ marginTop: '20px', fontWeight: 600}}>
          Budget travel checklist for Indians travelling Vietnam 🇻🇳
        </Text>
        <div style={{ marginTop: '20px' }}>

          <SimpleGrid minChildWidth='350px' spacing='40px'>

            <Card style={{ maxWidth: '500px' }}>
              <CardHeader>
                <Heading size='md'>Before you arrive 🇮🇳</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Link href="/debit-cards-travel-vietnam-zero-forex-markup-fee">
                      <Heading size='md'>
                        Debit Card <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Zero forex markup debit card
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/credit-cards-travel-vietnam-zero-forex-markup-fee">
                      <Heading size='md'>
                        Credit Card <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Zero forex markup credit card
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/e-visa-vietnam-indians">
                      <Heading size='md'>
                        E-Visa <Tag colorScheme='teal'>Mandatory</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Apply your E-Visa online.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/flight-booking-vietnam">
                      <Heading size='md'>
                        Flight Booking <Tag colorScheme='teal'>Mandatory</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Scan for the cheapest tickets.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/travel-insurance-india-vietnam">
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
                    <Link href="/hotel-booking-vietnam">
                      <Heading size='md'>
                        Hotel Booking <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Book hotel directly.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/esim-vietnam">
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
                    <Link href="/food-delivery-taxi-vietnam">
                      <Heading size='md'>
                        Food & Taxi <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Download the Zomato + Uber of Vietnam.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/local-sim-card-vietnam">
                      <Heading size='md'>
                        Local mobile SIM card <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        Get local Vietnam SIM card.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/remote-work-vietnam">
                      <Heading size='md'>
                        Place to work <Tag colorScheme='red'>Remote work</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        For remote workers.
                      </Text>
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/atm-vietnam-zero-forex-markup">
                      <Heading size='md'>
                        ATM cash withdrawal  <Tag colorScheme='orange'>Recommended</Tag>
                      </Heading>
                      <Text pt='2' fontSize='sm'>
                        zero forex ATM
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
