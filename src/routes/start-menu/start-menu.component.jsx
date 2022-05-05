import racersFile from '../../utils/racers.json'
import RacerContainer from '../../components/racer-container/racer-container.component';
import RacerGrid from '../../components/racer-grid/racer-grid.component';

import './start-menu.styles.scss';

const StartMenu = () => {
    const { racers } = racersFile;
    return (
        <div className="start-menu-container">
            <RacerContainer racers={racers} />
            <RacerGrid />
        </div>
    )
}

export default StartMenu;