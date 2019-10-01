import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <SidebarToggle />
            </div>
            <div className="toolbar_logo"><a href="/">LOGO</a></div>
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