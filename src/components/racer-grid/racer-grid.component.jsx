import racersFile from '../../utils/racers.json';

import './racer-grid.styles.scss';

const RacerGrid = () => {
    const { racers } = racersFile;

    return (
        <div className="racer-grid-container">
            {
                racers.map(racer => {
                    const { racerNumber } = racer;
                    return (
                        <div key={racerNumber}>
                            <button>{racerNumber}</button>
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default RacerGrid;