import React from 'react';
import './SideBarStyle.css';

const sideBar = props => (
    <nav className="side-bar">
        <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
        </ul>
    </nav>
)

export default sideBar;