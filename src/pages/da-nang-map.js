import Seo from '@/component/seo'
import styles from '@/styles/Home.module.css'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Header from "@/component/header";
import Link from "next/link";
import {
    Button,
} from "@chakra-ui/react";

export default function Home({ deviceType }) {

    const { rive, RiveComponent } = useRive({
        src: "map.riv",
        stateMachines: "toggle-dragon-bridge",
        artboard: "map",
        autoplay: true,
    });

    const bumpInput = useStateMachineInput(rive, "toggle-dragon-bridge", "hover-on", false);

    if (deviceType === 'mobile') {
        return (
            <>
                <Seo
                    title="Rupee Travel | Da Nang Map"
                    description="Best places to visit in Da Nang"
                    canonical={"https://www.rupeetravel.com/da-nang-map"}
                />
                <main className={styles.main}>
                    <Header title={"Da Nang Map"} />
                    <RiveComponent
                        style={{
                            height: "476px",
                            width: "381px",
                            WebkitTransform: "rotate(90deg)",
                        }}
                        onClick={() => bumpInput.value = !bumpInput.value}
                    />
                    <Link spacing="2" href="/hotel-booking-vietnam">
                        <Button variant="solid" colorScheme="green">
                            Book Hotel
                        </Button>
                    </Link>
                </main>
            </>
        )
    } else {
        return (
            <>
                <Seo
                    title="Rupee Travel | Da Nang Map"
                    description="Best places to visit in Da Nang"
                    canonical={"https://www.rupeetravel.com/da-nang-map"}
                />
                <main className={styles.main}>
                    <Header title={"Da Nang Map"} />
                    <RiveComponent
                        style={{ height: "600px" }}
                        onClick={() => bumpInput.value = !bumpInput.value}
                    />
                </main>
            </>
        )
    }

}

export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    return {
        props: {
            deviceType: isMobile ? 'mobile' : 'desktop'
        }
    }
}