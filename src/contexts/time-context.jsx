import { createContext, useState, useEffect } from "react";

export const TimeContext = createContext ({
    time: 0
});

export const TimeProvider = ({ children }) => {
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

    const value = { time, handleStart, handleStop, handleReset };

    return (
        <TimeContext.Provider value={value}>
            {children}
        </TimeContext.Provider>
    )

}