import React from 'react';
import './SideBarStyle.css';
// import { Link } from "react-router-dom";

const sideBar = props => {
    let sideBarClasses = 'side-bar';
    if (props.show) {
        sideBarClasses = 'side-bar open';
    }
    return (<nav className={sideBarClasses}>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/NotN">Night Of The Nerds</a>
            </li>
            <li>
                <a href="/Projecten">Projecten</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideBar;