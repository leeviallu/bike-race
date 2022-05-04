import { useState, useEffect } from "react";
import WatchButtons from "../watch-buttons/watch-buttons.component";
import WatchDigits from "../watch-digits/watch-digits.component";

const RaceWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isStopped, setIsStopped] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
      
        if (isActive && isStopped === false) {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
    }, [isActive, isStopped]);

    const handleStart = () => {
        setIsActive(true);
        setIsStopped(false);
      };
      
    const handleStop = () => {
      setIsStopped(true);
    };
    
    const handleReset = () => {
      setIsActive(false);
      setTime(0);
    };


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