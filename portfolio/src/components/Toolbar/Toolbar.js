import React from 'react';

import './ToolbarStyle.css';
import SidebarToggle from '../SideBar/SideBarToggle';
import Logo from "../images/logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressCard, faHistory, faBookOpen} from '@fortawesome/free-solid-svg-icons';

const tagInfo = [
    {
        page: '/',
        sub: <FontAwesomeIcon icon={faUser} style={{ color: "#FFD800", fontSize: "26px" }} />,
        spy: '#about'
    },
    {
        page: '/',
        sub: <FontAwesomeIcon icon={faHistory} style={{ color: "#FFD800", fontSize: "26px" }} />,
        spy: '#tijdlijn'
    },
    {
        page: '/NotN',
        sub: <FontAwesomeIcon icon={faBookOpen} style={{ color: "#FFD800", fontSize: "26px" }} />,
        spy: '#content'
    },
    {
        page: '/TimKoehoorn',
        sub: <FontAwesomeIcon icon={faBookOpen} style={{ color: "#FFD800", fontSize: "26px" }} />,
        spy: '#content'
    },
    {
        page: '/Picoo',
        sub: <FontAwesomeIcon icon={faBookOpen} style={{ color: "#FFD800", fontSize: "26px" }} />,
        spy: '#content'
    }
];

let tag = tagInfo.filter(function (selected) {
    return selected.page === window.location.pathname;
});

// console.log(tag.page);

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
                    {/* {console.log(tag.spy)} */}
                                               
                        <ul>
                            <li>
                                <AnchorLink href="#top" offset='100'><FontAwesomeIcon icon={faHome} style={{ color: "#FFD800", fontSize: "26px" }} /></AnchorLink>
                            </li>
                            {tag.map((item, index) =>
                                <li key={index}>
                                    <AnchorLink offset='80' href={item.spy}>{item.sub}</AnchorLink>
                                    {/* {console.log(item.spy)} */}
                                </li>)}
                                
                            <li>
                                <AnchorLink href="#footer"><FontAwesomeIcon icon={faAddressCard} style={{ color: "#FFD800", fontSize: "26px" }} /></AnchorLink>
                            </li>
                        </ul>
                </div>
            </nav>
        </header>
    </div>
);

export default toolbar;