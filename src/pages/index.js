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

const beforeArrivals = [
  {
    key: 1,
    heading: `Debit Card`,
    subHeading: `Zero forex markup debit card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/debit-cards-travel-vietnam-zero-forex-markup-fee`
  },
  {
    key: 2,
    heading: `Credit Card`,
    subHeading: `Zero forex markup credit card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/credit-cards-travel-vietnam-zero-forex-markup-fee`
  },
  {
    key: 3,
    heading: `Foreign Currency Notes`,
    subHeading: `Lowest exchange rate foreign currency notes`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/buy-foreign-currency-notes-online`
  },
  {
    key: 4,
    heading: `E-Visa`,
    subHeading: `Apply E-Visa online`,
    tagText: `Mandatory`,
    tagColor: `teal`,
    link: `/e-visa-vietnam-indians`
  },
  {
    key: 5,
    heading: `Flight Booking`,
    subHeading: `Cheapest flights from India to Vietnam`,
    tagText: `Mandatory`,
    tagColor: `teal`,
    link: `/flight-booking-vietnam`
  },
  {
    key: 6,
    heading: `Travel insurance`,
    subHeading: `Best travel insurance for Indians`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/travel-insurance-india-vietnam`
  },
  {
    key: 7,
    heading: `Luggage`,
    subHeading: `Quick travel hack for luggage`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/luggage`
  },
  {
    key: 8,
    heading: `Hotel Booking`,
    subHeading: `Book Vietnam hotel directly`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/hotel-booking-vietnam`
  },
  {
    key: 9,
    heading: `eSim`,
    subHeading: `Get Vietnam eSim for single sim phone`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/esim-vietnam`
  },
]

const arrivals = [
  {
    key: 1,
    heading: `Food & Taxi`,
    subHeading: `Download the Zomato + Uber of Vietnam`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/food-delivery-taxi-vietnam`
  },
  {
    key: 2,
    heading: `Local mobile SIM card`,
    subHeading: `Get local Vietnam SIM card`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/local-sim-card-vietnam`
  },
  {
    key: 3,
    heading: `Place to work`,
    subHeading: `For remote workers`,
    tagText: `Remote work`,
    tagColor: `red`,
    link: `/remote-work-vietnam`
  },
  {
    key: 4,
    heading: `ATM cash withdrawal`,
    subHeading: `zero forex ATM`,
    tagText: `Recommended`,
    tagColor: `orange`,
    link: `/atm-vietnam-zero-forex-markup`
  },
]

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Heading size='2xl'>Rupee Travel</Heading>
        <Text
          fontSize='xl'
          as='h1'
          style={{ marginTop: '20px', fontWeight: 600 }}>
          Budget travel checklist for Indians travelling Vietnam 🇻🇳
        </Text>
        <div style={{ marginTop: '20px' }}>

          <SimpleGrid minChildWidth='350px' spacing='40px'>

            <Card style={{ maxWidth: '500px' }}>
              <CardHeader>
                <Heading as='h3' size='md'>Before you arrive 🇮🇳</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  {beforeArrivals.map(beforeArrival => (
                    <CheckListItem
                      key={beforeArrival.key}
                      task={beforeArrival}
                    />
                  ))}
                </Stack>
              </CardBody>
            </Card>

            <Card style={{ maxWidth: '500px', marginTop: '10px' }}>
              <CardHeader>
                <Heading as='h3' size='md'>Arrived 🇻🇳</Heading>
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  {arrivals.map(arrivals => (
                    <CheckListItem
                      key={arrivals.key}
                      task={arrivals}
                    />
                  ))}
                </Stack>
              </CardBody>
            </Card>

          </SimpleGrid>
        </div>
      </main>
    </>
  )
}

const CheckListItem = ({ task }) => {
  return (
    <Box>
      <Link href={task.link}>
        <Heading as='h3' size='md'>
          {task.heading}&nbsp;
          <Tag colorScheme={task.tagColor}>
            {task.tagText}
          </Tag>
        </Heading>
        <Text as='h2' pt='2' fontSize='sm'>
          {task.subHeading}
        </Text>
      </Link>
    </Box>
  )
}