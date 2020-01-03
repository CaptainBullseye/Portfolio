import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './adjust.css'
// import {ICONS} from '../Icons/Icons';
// import Stuff from '../Icons/Stuff'

const school = '#2196f3';
const projecten = '#e91e63';
const werk = '#9C27B0';

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
        informatie: 'Student',
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

// var subject = info.filter(function(selected) {
//     return selected.categorie;

// })


class VerticalProgBar extends React.Component {
    render() {

        let subject = info.filter(function (selected) {
            return selected.categorie;
        });

        function change1() {
            subject = info.filter(function (selected) {
                return selected.categorie === school;
            });
            console.log(subject)
        }

        function change2() {
            subject = info.filter(function (selected) {
                return selected.categorie === projecten;
            });
            console.log(subject)
        }

        function change3() {
            subject = info.filter(function (selected) {
                return selected.categorie === werk;
            });
            console.log(subject)
        }

        function resetFilter() {
            subject = info.filter(function (selected) {
                return selected.categorie === werk;
            });
            console.log(subject)
        }

        // functies met buttons werken maar de map word niet ge-update

        return (

            <React.Fragment>
                <div className="filter-buttons-container">
                    <button className="filter-button" type='button' onClick={() => change1()} >School</button>
                    <button className="filter-button" type='button' onClick={() => change2()} >Projecten</button>
                    <button className="filter-button" type='button' onClick={() => change3()} >Werk</button>
                    <button className="filter-button" type='button' onClick={() => resetFilter()} >Alles</button>
                </div>

                <VerticalTimeline>

                    {subject.map((item, index) => (

                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFD800', color: '#222222' }}
                            VerticalTimeline={{ color: '#222' }}
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

            </React.Fragment>
        )
    }
}

export default VerticalProgBar;