import { useContext } from "react";
import { TimeContext } from "../../contexts/time-context";
import WatchButtons from "../watch-buttons/watch-buttons.component";
import WatchDigits from "../watch-digits/watch-digits.component";

const RaceWatch = () => {
    
    const { time, handleStart, handleReset, handleStop } = useContext(TimeContext);

    return (
        <div className="race-watch-container">
            <WatchDigits time={time} />
            <WatchButtons  
              handleStart={handleStart}
              handleReset={handleReset}
              handleStop={handleStop}
            />   
        </div>
    )
}

export default RaceWatch;