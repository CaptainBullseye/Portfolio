import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faBook, } from '@fortawesome/free-solid-svg-icons';

// images
import NotnBg from "../images/Notn/NOTN-bg.jpg";
import Tim from "../images/Tim/Tim.jpg";
import Tim2 from "../images/Tim/Tim2.jpg";
import Tim3 from "../images/Tim/Tim3.jpg";

import PicooHeader from "../images/Picoo/picoo-header.jpg";

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
            'Vanaf het begin van semester 3 tot het einde van semester 4 was ik samen met mijn groep de Designerds bezig aan een project voor Night of The Nerds. ',
        button: 'Read More',
        page: '/NotN',
        image: NotnBg,
        icon: '',
        link: ''
    },
    // Tim Koehoorn dingen
    {
        title: 'Tim Koehoorn',
        description:
            'In mijn 2de semester heb ik samen met mijn groep gewerkt aan de branding voor Tim Koehoorn.',
        button: 'Discover',
        page: '/TimKoehoorn',
        image: Tim,
        icon: faSpotify,
        link: 'https://open.spotify.com/artist/7y5DunkoStbLnIwfVR91T2?si=Wrt2nTLHRcG1qMpemPkZjg'
    },
    {
        title: 'Tim Koehoorn',
        description:
            'In mijn 2de semester heb ik samen met mijn groep gewerkt aan de branding voor Tim Koehoorn.',
        button: 'Discover',
        page: '/TimKoehoorn',
        image: Tim2,
        icon: faBook,
        link: TimBrandguide
    },
    {
        title: 'Tim Koehoorn',
        description:
            'In mijn 2de semester heb ik samen met mijn groep gewerkt aan de branding voor Tim Koehoorn.',
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
            'In mijn maatwerk semester ben ik samen met een groep gaan werken aan een brandguide voor het bedrijf Picoo.',
        button: 'Lees verder',
        page: '/Picoo',
        image: PicooHeader,
        icon: '',
        link: PicooBrandguide
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
                            <FontAwesomeIcon icon={item.icon} style={{ color: "#FFD800", fontSize: "40px" }} />
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);

export default ProjectSlider;