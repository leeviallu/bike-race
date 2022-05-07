import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import RaceWatch from '../../components/race-watch/race-watch.component';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <Link to="/">setup</Link>
                <br />
                <Link to="spectator-view">spectator view</Link>
                <br />
                <Link to="staff-view">staff view</Link>
                <br />
                <RaceWatch />
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;