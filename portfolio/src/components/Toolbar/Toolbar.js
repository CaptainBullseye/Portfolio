import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';
import Logo from "../images/logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const tagInfo = [
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
        sub: 'Content',
        spy: '#content'
    }
];

let tag = tagInfo.filter(function (selected) {
    return selected.page === window.location.pathname;
});

console.log(tag.page);

const toolbar = props => (
    <div id="top">
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div>
                    <SidebarToggle click={props.sideBarClickHandler} />
                </div>

                <div className="toolbar_logo">
                    <a href="/"><img src={Logo} alt="logo" /></a>
                </div>

                <div className="spacer" />
                <div className="toolbar_nav_items">
                    {console.log(tag.spy)}
                                               
                        <ul>
                            <li>
                                <AnchorLink href="#top" offset='100'><strong>Top</strong></AnchorLink>
                            </li>
                            {tag.map((item, index) =>
                                <li key={index}>
                                    <AnchorLink offset='80' href={item.spy}><strong>{item.sub}</strong></AnchorLink>
                                    {console.log(item.spy)}
                                </li>)}
                                
                            <li>
                                <AnchorLink href="#footer"><strong>Contact</strong></AnchorLink>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
);

export default toolbar;