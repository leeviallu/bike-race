import { useState, useContext } from "react";
import { TimeContext } from "../../contexts/time-context";
import WatchDigits from "../watch-digits/watch-digits.component";

const RacerContainer = ({ racers }) => {
    const { time } = useContext(TimeContext);

    const [lapTime, setLapTime] = useState(0);

    const handleLapTime = () => {
        setLapTime(time);
    }
    return (
        <div className="racer-container">
            {
                racers.map(racer => {
                    const { firstName, lastName, racerNumber } = racer;
                    return (
                        <div key={racerNumber}>
                            <div className="racer-name-container">
                                <h2>{firstName} {lastName} {racerNumber}</h2>
                                <WatchDigits time={lapTime} />
                                <button onClick={handleLapTime}>lap</button>
                            </div>
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default RacerContainer;