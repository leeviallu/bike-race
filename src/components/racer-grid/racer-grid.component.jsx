import { useContext } from 'react';

import { RacerContext } from '../../contexts/racer-context';

import racersFile from '../../utils/racers.json';

import './racer-grid.styles.scss';

const RacerGrid = () => {
    const { racers } = racersFile;

    const { addLap, currentLap } = useContext(RacerContext);

    console.log(currentLap)

    return (
        <div className="racer-grid-container">
            {
                racers.map(racer => {
                    const { racerNumber } = racer;
                    return <button key={racerNumber} onClick={addLap}>{racerNumber}</button>;
                })
            }
        </div>
    )
}

export default RacerGrid;