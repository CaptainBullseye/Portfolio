import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import AOS from "aos";
import "aos/dist/aos.css";

import CV from "../Files/CV.pdf";

AOS.init();

const Footer = () => (
    <footer>
        <div className="footer-container" id="footer">
            <div className="column">
                <div className="column-text"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h2>Contact</h2>
                    {/* mail, linkedin, CV,  */}
                    <ul>
                        <li>
                            <a href="mailto:dennisvulders@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#FFD800", fontSize: "26px" }} />
                                <span> Mail</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dennis-vulders-b6b43a188/">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FFD800", fontSize: "26px" }} />
                                <span> LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href={CV}>
                                <FontAwesomeIcon icon={faFilePdf} style={{ color: "#FFD800", fontSize: "26px" }} />
                                <span> CV</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="column">
                <div className="column-text"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h2>Sitemap</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/NotN"> Night of the Nerds</a></li>
                        <li><a href="/Projecten"> Tim Koehoorn</a></li>
                        <li><a href="/Picoo">Picoo</a></li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="column-text"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500">
                    <h2>Colomn 3</h2>
                    <a href="/">
                        <span>text 3</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;