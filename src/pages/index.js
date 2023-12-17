import styles from '@/styles/Home.module.css'
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
  Wrap,
  WrapItem,
  Button,
  Heading,
  Divider,
  CardFooter
} from '@chakra-ui/react'
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";
import Seo from '@/component/seo'

export default function Home({ blogs, beforeArrivals, arrivals, beforeDeparture }) {
  return (
    <>
      <Seo canonical={'https://www.rupeetravel.com'} />
      <main className={styles.main}>
        <Text fontSize='5xl' as='b'>Rupee Travel</Text>
        <Heading as='h1' fontSize={{ base: '24px', md: '40px', lg: '75px' }} style={{ marginTop: '20px' }}>
          The ultimate checklist for Vietnam travel from India 🇻🇳
        </Heading>
        <div style={{ marginTop: '20px' }}>

          <SimpleGrid minChildWidth='330px' spacing='40px'>
            <CheckListItemCard
              title={'Before you arrive 🇮🇳'}
              list={beforeArrivals}
            />
            <CheckListItemCard
              title={'Arrived 🇻🇳'}
              list={arrivals}
            />
            <CheckListItemCard
              title={'Before you depart 🇻🇳'}
              list={beforeDeparture}
            />
            <CheckListItemCard
              title={'Blogs'}
              list={blogs}
            />
          </SimpleGrid>
          <Map/>
        </div>
      </main>
    </>
  )
}

const CheckListItemCard = ({ title, list }) => {
  return (
    <Card style={{ width: '343px', marginTop: '10px' }}>
      <CardHeader>
        <Text fontSize='2xl' as='b'>{title}</Text>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {list.map(arrivals => (
            <CheckListItem
              key={arrivals.key}
              task={arrivals}
            />
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
}

const CheckListItem = ({ task }) => {
  return (
    <Box>
      <Link href={task.link}>
        <Text fontSize='xl' as='b'>
          {task.heading}&nbsp;
          <Tag style={{ marginTop: '4px' }} colorScheme={task.tagColor}>
            {task.tagText}
          </Tag>
        </Text>
        <Text style={{ fontWeight: 500 }} as='h2' pt='2' fontSize='sm'>
          {task.subHeading}
        </Text>
      </Link>
    </Box>
  )
}

const Map = () => {
  return (
    <Card style={{ marginTop: '10px', maxWidth: '700px' }}>
      <CardHeader>
        <Text as='h2' fontSize='2xl' fontWeight={700}>{'Visit Da Nang, Vietnam'}</Text>
      </CardHeader>
      <CardBody>
        <Image
          src={"/images/da-nang-map.webp"}
          alt="Da Nang Map"
          height={402}
          width={700}
        />
      </CardBody>
      <Divider style={{ color: "#e2e8f0" }} />
      <CardFooter>
        <Stack direction="row">
          <Link spacing="2" href="/da-nang-map">
            <Button variant="solid" colorScheme="green">
              Map
            </Button>
          </Link>
          <Link spacing="2" href="/hotel-booking-vietnam">
            <Button variant="solid" colorScheme="green">
              Book Hotel
            </Button>
          </Link>
        </Stack>
      </CardFooter>
    </Card>
  )
}

export async function getStaticProps() {

  const beforeArrivals = [
    {
      key: 1,
      heading: `Debit Card`,
      subHeading: `Zero forex markup fee debit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/debit-cards-travel-vietnam-zero-forex-markup-fee`
    },
    {
      key: 2,
      heading: `Credit Card`,
      subHeading: `Zero forex markup fee credit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/credit-cards-travel-vietnam-zero-forex-markup-fee`
    },
    {
      key: 3,
      heading: `Foreign Currency Notes`,
      subHeading: `Buy foreign currency notes online`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/buy-foreign-currency-notes-online`
    },
    {
      key: 4,
      heading: `E-Visa`,
      subHeading: `Apply online E-Visa for Vietnam`,
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
      link: `/travel-luggage-bag`
    },
    {
      key: 8,
      heading: `Hotel Booking`,
      subHeading: `Book Vietnam hotel online`,
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
      subHeading: `Best place for remote work in Vietnam`,
      tagText: `Remote work`,
      tagColor: `red`,
      link: `/remote-work-vietnam`
    },
    {
      key: 4,
      heading: `ATM cash withdrawal`,
      subHeading: `zero forex markup charges ATM`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/atm-vietnam-zero-forex-markup`
    },
  ]

  const beforeDeparture = [
    {
      key: 1,
      heading: ` VND for next visit`,
      subHeading: `Withdraw Vietnam currency from ATM `,
      tagText: `Frequent visitors`,
      tagColor: `blue`,
      link: `/withdraw-vietnam-currency-atm`
    },
  ]

  const blogs = [
    {
      key: 1,
      heading: ` Accidental Nomad`,
      subHeading: `Month long stay in Da Nang `,
      tagText: `Blog`,
      tagColor: `red`,
      link: `/posts/digital-nomad-da-nang`
    },
    {
      key: 2,
      heading: ` Indian passport sucks, but not its financial services`,
      subHeading: ` Cross border financial tools`,
      tagText: `Blog`,
      tagColor: `red`,
      link: `/posts/india-cross-border-finance`
    },
    {
      key: 3,
      heading: ` How to get Vietnam currency in India`,
      subHeading: ` Foreign currency note conversion rates `,
      tagText: `Blog`,
      tagColor: `red`,
      link: `/how-to-get-vietnam-currency`
    },
    {
      key: 4,
      heading: ` Visa free countries for Indians`,
      subHeading: ` Budget trips to visa free countries`,
      tagText: `Blog`,
      tagColor: `red`,
      link: `/visa-free-countries-for-indians`
    }
  ]

  return {
    props: {
      blogs,
      beforeArrivals,
      arrivals,
      beforeDeparture,
    }
  }
}