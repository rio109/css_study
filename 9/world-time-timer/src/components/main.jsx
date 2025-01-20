// import Clock from "./Clock";
import Clock from "./clock"
import { timezones } from "../data/timezone";

const Main = () => {

    console.log(timezones)
    return (
        <>
            <main>
                <Clock></Clock>
            </main>
        </>
    )
}

export default Main;