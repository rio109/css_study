import { useState, useEffect } from "react"

const Clock = ({ city, offset }) => {
    const [time, setTime] = useState("");
    useEffect(() => {

        const updateTime = () => {
            const now = new Date(); // 브라우저의 시스템 시간을 가져온다

            // now.getTime() : 현재 시간을 밀리초로 변환
            // now.getTimezoneOffset() * 60000 : 분 단위를 밀리초로 변환 
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const localTime = new Date(utc + offset * 3600000)
            setTime(localTime.toLocaleTimeString)

        };

        updateTime()
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [offset]);

    return (
        <div>
            <h1>TEST!!!</h1>
            {/* <h3>{city}</h3>
            <p>{time}</p> */}
        </div>
    )
}

export default Clock