import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';
import Logo from "../images/logo.png";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <SidebarToggle click={props.sideBarClickHandler} />
            </div>
            
            <div className="toolbar_logo">
                <a href="/">
                    <img src={Logo} alt="logo" />
                </a>
            </div>

            <div className="spacer" />
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;