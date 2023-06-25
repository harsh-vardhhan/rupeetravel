import Seo from '@/component/seo'
import styles from '@/styles/Home.module.css'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import Header from "@/component/header";
export default function Home() {

    const { rive, RiveComponent } = useRive({
        src: "map.riv",
        stateMachines: "toggle-dragon-bridge",
        artboard: "map",
        autoplay: true,
    });

    const bumpInput = useStateMachineInput(rive, "toggle-dragon-bridge", "hover-on", false);
    console.log(bumpInput)
    return (
        <>
            <Seo canonical={'https://www.rupeetravel.com'} />
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