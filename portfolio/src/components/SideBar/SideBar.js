import React from 'react';
import './SideBarStyle.css';

const sideBar = props => {
    let sideBarClasses = 'side-bar';
    if (props.show) {
        sideBarClasses = 'side-bar open';
    }
    return (<nav className={sideBarClasses}>
        <ul>
            <li>
                <a href="src/NightOfTheNerds.js">Night Of The Nerds</a>
            </li>
            <li>
                <a href="/">Projects</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideBar;