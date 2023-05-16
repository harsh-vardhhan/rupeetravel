import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
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
  Image,
  Wrap,
  WrapItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import Seo from "@/component/seo";

const isMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

export default function Home({ beforeArrivals, arrivals, beforeDeparture }) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (isMobile()) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <>
      <Seo canonical={"https://www.rupeetravel.com"} />
      <main className={styles.main}>
        <Text fontSize="5xl" as="b">
          Rupee Travel
        </Text>
        <Heading as="h1" size="xl" style={{ marginTop: "20px" }}>
          Budget travel checklist for Indians travelling Vietnam 🇻🇳
        </Heading>
        <div style={{ marginTop: "20px" }}>
          {mobile ? (
            <div
              style={{
                display: flex,
                flexDirection: "column",
              }}
            >
              <CheckListItemCard
                title={"Before you arrive 🇮🇳"}
                list={beforeArrivals}
              />
              <CheckListItemCard title={"Arrived 🇻🇳"} list={arrivals} />
              <CheckListItemCard
                title={"Before you depart 🇻🇳"}
                list={beforeDeparture}
              />
            </div>
          ) : (
            <div
              style={{
                display: flex,
                flexDirection: "row",
                gap: "40px",
              }}
            >
              <CheckListItemCard
                title={"Before you arrive 🇮🇳"}
                list={beforeArrivals}
              />
              <CheckListItemCard title={"Arrived 🇻🇳"} list={arrivals} />
              <CheckListItemCard
                title={"Before you depart 🇻🇳"}
                list={beforeDeparture}
              />
            </div>
          )}
          <Social />
        </div>
      </main>
    </>
  );
}

const CheckListItemCard = ({ title, list }) => {
  return (
    <Card style={{ width: "343px", marginTop: "10px" }}>
      <CardHeader>
        <Text fontSize="2xl" as="b">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {list.map((arrivals) => (
            <CheckListItem key={arrivals.key} task={arrivals} />
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

const CheckListItem = ({ task }) => {
  return (
    <Box>
      <Link href={task.link}>
        <Text fontSize="xl" as="b">
          {task.heading}&nbsp;
          <Tag style={{ marginTop: "4px" }} colorScheme={task.tagColor}>
            {task.tagText}
          </Tag>
        </Text>
        <Text style={{ fontWeight: 500 }} as="h2" pt="2" fontSize="sm">
          {task.subHeading}
        </Text>
      </Link>
    </Box>
  );
};

const Social = () => {
  return (
    <Wrap style={{ marginTop: "20px" }}>
      <WrapItem>
        <Image
          style={{ height: "48px", width: "48px", borderRadius: "24px" }}
          alt="Harsh Vardhan"
          src={"/static/images/harsh-vardhan.webp"}
        />
      </WrapItem>
      <WrapItem>
        <Text style={{ marginTop: "10px" }} as="b" fontSize="md">
          Follow me for tips
        </Text>
      </WrapItem>
      <WrapItem>
        <Button
          style={{ marginTop: "4px" }}
          colorScheme="twitter"
          leftIcon={<FaTwitter />}
          onClick={() => window.open("https://twitter.com/harsh_vardhhan")}
        >
          Twitter
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export async function getStaticProps() {
  const beforeArrivals = [
    {
      key: 1,
      heading: `Debit Card`,
      subHeading: `Zero forex markup fee debit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/debit-cards-travel-vietnam-zero-forex-markup-fee`,
    },
    {
      key: 2,
      heading: `Credit Card`,
      subHeading: `Zero forex markup fee credit card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/credit-cards-travel-vietnam-zero-forex-markup-fee`,
    },
    {
      key: 3,
      heading: `Foreign Currency Notes`,
      subHeading: `Buy foreign currency notes online`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/buy-foreign-currency-notes-online`,
    },
    {
      key: 4,
      heading: `E-Visa`,
      subHeading: `Apply online E-Visa for Vietnam`,
      tagText: `Mandatory`,
      tagColor: `teal`,
      link: `/e-visa-vietnam-indians`,
    },
    {
      key: 5,
      heading: `Flight Booking`,
      subHeading: `Cheapest flights from India to Vietnam`,
      tagText: `Mandatory`,
      tagColor: `teal`,
      link: `/flight-booking-vietnam`,
    },
    {
      key: 6,
      heading: `Travel insurance`,
      subHeading: `Best travel insurance for Indians`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/travel-insurance-india-vietnam`,
    },
    {
      key: 7,
      heading: `Luggage`,
      subHeading: `Quick travel hack for luggage`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/travel-luggage-bag`,
    },
    {
      key: 8,
      heading: `Hotel Booking`,
      subHeading: `Book Vietnam hotel online`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/hotel-booking-vietnam`,
    },
    {
      key: 9,
      heading: `eSim`,
      subHeading: `Get Vietnam eSim for single sim phone`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/esim-vietnam`,
    },
  ];

  const arrivals = [
    {
      key: 1,
      heading: `Food & Taxi`,
      subHeading: `Download the Zomato + Uber of Vietnam`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/food-delivery-taxi-vietnam`,
    },
    {
      key: 2,
      heading: `Local mobile SIM card`,
      subHeading: `Get local Vietnam SIM card`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/local-sim-card-vietnam`,
    },
    {
      key: 3,
      heading: `Place to work`,
      subHeading: `Best place for remote work in Vietnam`,
      tagText: `Remote work`,
      tagColor: `red`,
      link: `/remote-work-vietnam`,
    },
    {
      key: 4,
      heading: `ATM cash withdrawal`,
      subHeading: `zero forex markup charges ATM`,
      tagText: `Recommended`,
      tagColor: `orange`,
      link: `/atm-vietnam-zero-forex-markup`,
    },
  ];

  const beforeDeparture = [
    {
      key: 1,
      heading: ` VND for next visit`,
      subHeading: `Withdraw Vietnam currency from ATM `,
      tagText: `Frequent visitors`,
      tagColor: `blue`,
      link: `/withdraw-vietnam-currency-atm`,
    },
  ];

  return {
    props: {
      beforeArrivals,
      arrivals,
      beforeDeparture,
    },
  };
}
