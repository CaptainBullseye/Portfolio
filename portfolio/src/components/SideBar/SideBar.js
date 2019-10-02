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
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Projects</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideBar;