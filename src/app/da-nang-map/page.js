'use client';

import { useEffect, useState } from "react";
import Seo from '../../component/seo';
import styles from '@/styles/Home.module.css';
import Header from "../../component/header";
import Link from "next/link";
import {
    Button,
    Card,
    CardBody,
    Divider,
    CardFooter,
    Stack,
    Heading,
} from "@chakra-ui/react";
import Image from 'next/image';

export default function DaNangMapPage() {
    const [label, setLabel] = useState(false);
    const [deviceType, setDeviceType] = useState('desktop');

    useEffect(() => {
        const ua = navigator.userAgent;
        const isMobile = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
        setDeviceType(isMobile ? 'mobile' : 'desktop');
    }, []);

    const isMobile = deviceType === 'mobile';
    const mapImage = label ? "/images/map.svg" : "/images/map_label.svg";
    const imageHeight = isMobile ? 476 : 800;
    const imageWidth = isMobile ? 381 : 800;

    return (
        <>
            <Seo
                title="Rupee Travel | Da Nang Map"
                description="Best places to visit in Da Nang"
                canonical={"https://www.rupeetravel.com/da-nang-map"}
            />
            <main className={styles.main}>
                <Header title={"Da Nang Map"} />
                <Card maxW={isMobile ? "sm" : "xl"}>
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading as="h2" size="md">Click on map</Heading>
                            <Image
                                src={mapImage}
                                alt="Da Nang Map"
                                height={imageHeight}
                                width={imageWidth}
                                style={{ marginTop: "10px" }}
                                onClick={() => setLabel(!label)}
                            />
                        </Stack>
                    </CardBody>
                    <Divider style={{ color: "#e2e8f0" }} />
                    <CardFooter>
                        <Link href="/hotel-booking-vietnam">
                            <Button variant="solid" colorScheme="green">Book Hotel</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </main>
        </>
    );
}
