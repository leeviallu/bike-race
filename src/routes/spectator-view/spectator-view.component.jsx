import racersFile from '../../utils/racers.json'
import RacerContainer from '../../components/racer-container/racer-container.component';

import './spectator-view.styles.scss';

const SpectatorView = () => {
    const { racers } = racersFile;
    return (
        <div className="spectator-view-container">
            <RacerContainer racers={racers} />
        </div>
    )
}

export default SpectatorView;