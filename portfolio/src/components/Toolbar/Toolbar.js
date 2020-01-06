import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';
// import Scrollspy from 'react-scrollspy'

const tester = [
    {
        page: '/',
        sub: 'About',
        spy: '#about'
    },
    {
        page: '/',
        sub: 'Tijdlijn',
        spy: '#tijdlijn'
    },
    {
        page: '/NotN',
        sub: 'rshbtd',
        spy: '#rshbtd'
    },
];

let go = tester.filter(function (selected) {
    return selected.page === window.location.pathname;
});

const toolbar = props => (
    <div>
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <SidebarToggle click={props.sideBarClickHandler} />
                </div>

                <div className="toolbar_logo">
                    <Link to="/"><img src={Logo} alt="logo" /></Link>
                </div>

                <div className="spacer" />
                <div className="toolbar_nav_items">
                    <ul>{go.map((item, index) =>
                        <li key={index}><a href={item.spy}>{item.sub}</a> </li>)}
                    </ul>
                </div>
            </nav>
        </header>
    </div>
);

export default toolbar;