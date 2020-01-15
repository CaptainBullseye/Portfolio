import React from 'react';
import './SideBarStyle.css';
// import { Link } from "react-router-dom";
import CloseToggle from './CloseToggle';

const sideBar = props => {
    let sideBarClasses = 'side-bar';
    if (props.show) {
        sideBarClasses = 'side-bar open';
    }
    return (<nav className={sideBarClasses}>
        <CloseToggle click={props.closeClickHandler} />
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/NotN">Night Of The Nerds</a>
            </li>
            <li>
                <a href="/TimKoehoorn">Tim Koehoorn</a>
            </li>
            <li>
                <a href="/Picoo">Picoo</a>
            </li>
        </ul>
    </nav>
    );
};

export default sideBar;