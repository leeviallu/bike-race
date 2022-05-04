import racersFile from '../../utils/racers.json'
import RaceWatch from '../../components/race-watch/race-watch.component';

const StartMenu = () => {
    const { racers } = racersFile;
    return (
        <div className="start-menu-container">
            <RaceWatch />
            {
                racers.map(racer => {
                    const { firstName, lastName, racerNumber, id } = racer;
                    return (
                        <div className='racer-container' key={id}>
                            <h2>{firstName} {lastName} {racerNumber}</h2>
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default StartMenu;