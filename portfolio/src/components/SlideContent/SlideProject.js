import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faBook, faExternalLinkAlt, } from '@fortawesome/free-solid-svg-icons';

// images
import NotnBg from "../images/Notn/NOTN-bg.jpg";
import Install from "../images/Notn/install.jpg"

import Tim from "../images/Tim/Tim.jpg";
import Tim2 from "../images/Tim/Tim2.jpg";
import Tim3 from "../images/Tim/Tim3.jpg";

import PicooBg1 from "../images/Picoo/picoo-header.jpg";
import PicooBg2 from "../images/Picoo/background2.jpg";
import PicooBg3 from "../images/Picoo/background3.jpg";

//files
import TimBrandguide from "../Files/Brandguide-Tim.pdf";
import TimExtra from "../Files/Eindpresentatie.pdf";
import PicooBrandguide from "../Files/Brandguide-Picoo.pdf";

const slideInfo = [
    /* content cheatsheet:
       image: 1440 x maakt niet uit (voorkeur 1000+)
       userProfile: 120 x 120 
    */

    //Night of the nerds dingen
    {
        title: 'Night of the Nerds',
        description:
            'Bekijk de website van Night of the Nerds',
        button: 'Read More',
        page: '/NotN',
        image: NotnBg,
        icon: faExternalLinkAlt,
        link: 'https://www.nightofthenerds.com/'
    },
    {
        title: 'Night of the Nerds',
        description:
            'Bekijk ons project op de Night of the nerds website',
        button: 'Read More',
        page: '/NotN',
        image: Install,
        icon: faExternalLinkAlt,
        link: 'https://www.nightofthenerds.com/portfolio/kyk-videokunst-scrollen/'
    },
    {
        title: 'Night of the Nerds',
        description:
            'Temp',
        button: 'Read More',
        page: '/NotN',
        image: Install,
        icon: faExternalLinkAlt,
        link: 'https://www.nightofthenerds.com/'
    },
    // Tim Koehoorn dingen
    {
        title: 'Tim Koehoorn',
        description:
            'Beluister zijn muziek',
        button: 'Discover',
        page: '/TimKoehoorn',
        image: Tim,
        icon: faSpotify,
        link: 'https://open.spotify.com/artist/7y5DunkoStbLnIwfVR91T2?si=Wrt2nTLHRcG1qMpemPkZjg'
    },
    {
        title: 'Tim Koehoorn',
        description:
            'Bekijk de brandguide die we voor Tim Hebben gemaakt',
        button: 'Discover',
        page: '/TimKoehoorn',
        image: Tim2,
        icon: faBook,
        link: TimBrandguide
    },
    {
        title: 'Tim Koehoorn',
        description:
            'Bekijk onze eindpresentatie waarin nog de website layout en offline producten te vinden zijn',
        button: 'Discover',
        page: '/TimKoehoorn',
        image: Tim3,
        icon: faFilePdf,
        link: TimExtra
    },
    // Picoo dingen
    {
        title: 'Picoo',
        description:
            'Bekijk ook de website van Picoo',
        button: 'Lees verder',
        page: '/Picoo',
        image: PicooBg1,
        icon: faExternalLinkAlt,
        link: 'https://picoo.nl/'
    },
    {
        title: 'Picoo',
        description:
            'Bekijk de brandguide die we voor Picoo hebben gemaakt',
        button: 'Lees verder',
        page: '/Picoo',
        image: PicooBg2,
        icon: faBook,
        link: PicooBrandguide
    },
    {
        title: 'Picoo',
        description:
            'Temp',
        button: 'Lees verder',
        page: '/Picoo',
        image: PicooBg3,
        icon: faExternalLinkAlt,
        link: "https://picoo.nl/"
    }
];

let filteredSlider = slideInfo.filter(function (slideFilter) {
    return slideFilter.page === window.location.pathname;
});

const ProjectSlider = () => (
    <div>

        <Slider className="slider-wrapper" autoplay='2500'>
            {filteredSlider.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center`, height: '100%' }}
                >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p style={{ fontSize: 16 }}><strong>{item.description}</strong></p>
                        <a target="_blank" rel="noopener noreferrer" href={item.link}>
                            <FontAwesomeIcon icon={item.icon} style={{fontSize: "40px" }} />
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);

export default ProjectSlider;