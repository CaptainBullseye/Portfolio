import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGitlab,} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Footer = () => (
    <footer>
        <div className="footer-container" id="footer">
            <div className="column">
                <div className="column-text" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
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
                            <a href="https://www.linkedin.com/in/dennis-vulders-b6b43a188/">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#FFD800", fontSize: "26px" }} />
                                <span> LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:dennisvulders@gmail.com">
                                <FontAwesomeIcon icon={faGitlab} style={{ color: "#FFD800", fontSize: "26px" }} />
                                <span> Text 1</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="column">
                <div className="column-text" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
                    <h2>Sitemap</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/NotN"> Night of the Nerds</Link></li>
                        <li><Link to="/Projecten"> Tim Koehoorn</Link></li>
                    </ul>
                </div>
            </div>
            <div className="column">
                <div className="column-text" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500">
                    <h2>Colomn 3</h2>
                    <a href="/">
                        <span>text 2</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;