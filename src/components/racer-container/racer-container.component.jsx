import { useState } from "react";

const RacerContainer = ({ racers }) => {
    return (
        <div className="racer-container">
            {
                racers.map(racer => {
                    const { firstName, lastName, racerNumber } = racer;
                    return (
                        <div key={racerNumber}>
                            <div className="racer-name-container">
                                <h2>{firstName} {lastName} {racerNumber}</h2>
                            </div>
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default RacerContainer;