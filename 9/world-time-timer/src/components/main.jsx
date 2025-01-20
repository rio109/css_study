// import Clock from "./Clock";
import Clock from "./clock"
import { timezones } from "../data/timezone";

const Main = () => {
    return (
        <>
            <main>
                <Clock city={"seoul"} offset={9}></Clock>
            </main>
        </>
    )
}

export default Main;