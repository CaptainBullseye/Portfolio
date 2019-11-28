import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './adjust.css'
// import {ICONS} from '../Icons/Icons';
// import Stuff from '../Icons/Stuff'

var school = '#2196f3';
var projecten = '#e91e63';
var werk = '#9C27B0';

const info = [
    // template
    // {
    //     onderwerp: '',
    //     locatie: '',
    //     informatie: '',
    //     datum: '',
    //     categorie: 
    // },
    {
        onderwerp: 'Havo',
        locatie: 'Dr-Knippenbergcollege',
        informatie: 'Coole student',
        datum: '2011 - 2017',
        categorie: school
    },
    {
        onderwerp: 'HBO ICT & Media design',
        locatie: 'Fontys hogescholen',
        informatie: 'Mijn opleiding',
        datum: 'Maand 2017 - Nu',
        categorie: school
    },
    {
        onderwerp: 'Cardiff Certificaat',
        locatie: 'Cardiff/Fontys hogescholen',
        informatie: 'Uitwisselings programma naar Cardiff, Wales',
        datum: 'Maand 2017',
        categorie: school
    },
    {
        onderwerp: 'Tim Koehoorn',
        locatie: 'Fontys hogescholen',
        informatie: 'Branding gemaakt voor Tim Koehoorn',
        datum: 'Maand 2018 - Maand 2018',
        categorie: projecten
    },
    {
        onderwerp: 'Night of the Nerds',
        locatie: 'Fontys hogescholen',
        informatie: "Project voor het tentoonstellen van video's van Veejays.com en de animatie opleiding van het Sint Lucas Eindhoven op een interactieve manier",
        datum: 'Maand 2018 - Maand 2019',
        categorie: projecten
    },
    {
        onderwerp: 'Picoo',
        locatie: 'Fontys hogescholen',
        informatie: 'Een uitgebreide brandguide maken voor het bedrijf Picoo',
        datum: 'Maand 2019 - Maand 2020',
        categorie: projecten
    },
    {
        onderwerp: 'Stage',
        locatie: 'Stage bedrijf',
        informatie: 'Stage opdracht',
        datum: 'Maand 2020 - Maand 2020',
        categorie: werk
    }
    
];


class VerticalProgBar extends React.Component {
    render() {
        return(
        <VerticalTimeline>
        
        {info.map((item, index) => (

            <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                VerticalTimeline={{color: '#222'}}
                // contentArrowStyle={{ borderRight: '7px solid  #FFD800' }}
                date={item.datum}
                iconStyle={{ background: item.categorie, color: '#fff' }}
                // icon={<Stuff ding= {ICONS.SCHOOL} />}
            >

                    <h3 className="vertical-timeline-element-title">{item.onderwerp}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.locatie}</h4>
                    <p>{item.informatie}</p>
                
            </VerticalTimelineElement>

        ))}

    </VerticalTimeline>
        )
    }
}

export default VerticalProgBar;