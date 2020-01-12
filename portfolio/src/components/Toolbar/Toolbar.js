import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';
import Logo from "../images/logo.png";
import ScrollspyNav from "react-scrollspy-nav";

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
    }
];

let go = tester.filter(function (selected) {
    return selected.page === window.location.pathname;
});
console.log(go);

const toolbar = props => (
    <div>
        <header className="toolbar" id="top">
            <nav className="toolbar_navigation">
                <div>
                    <SidebarToggle click={props.sideBarClickHandler} />
                </div>

                <div className="toolbar_logo">
                    <a href="/"><img src={Logo} alt="logo" /></a>
                </div>

                <div className="spacer" />
                <div className="toolbar_nav_items">
                    <ScrollspyNav
                        scrollTargetIds={["top", "about", "tijdlijn", "footer"]}
                        offset={-80}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        headerBackground="false">
                        <ul>
                            <li>
                                <a href="#top">Top</a>
                            </li>
                            {go.map((item, index) =>

                                <li key={index}>
                                    <a href={item.spy}>{item.sub}</a>
                                </li>)}
                            <li>
                                <a href="#footer">Footer</a>
                            </li>
                        </ul>
                    </ScrollspyNav>
                </div>
            </nav>
        </header>
    </div>
);

export default toolbar;