import { createContext, useState } from "react";

export const RacerContext = createContext({
    currentLap: 0
});

export const RacerProvider = ({ children }) => {
    const [currentLap, setCurrentLap] = useState(0);

    const addLap = () => {
        setCurrentLap(currentLap + 1);
    }

    const value = { addLap, currentLap };

    console.log(children)
    console.log(currentLap)
    return (
        <RacerContext.Provider value={value}>
            {children}
        </RacerContext.Provider>
    )

}