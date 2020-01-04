import React from 'react';
import './SideBarStyle.css';
import {Link} from "react-router-dom";

const sideBar = props => {
    let sideBarClasses = 'side-bar';
    if (props.show) {
        sideBarClasses = 'side-bar open';
    }
    return (<nav className={sideBarClasses}>
        <ul>
            <li>
                <Link to="/NotN">Night Of The Nerds</Link>
            </li>
            <li>
                <Link to="/Projecten">Projecten</Link>
            </li>
        </ul>
    </nav>
    );
};

export default sideBar;