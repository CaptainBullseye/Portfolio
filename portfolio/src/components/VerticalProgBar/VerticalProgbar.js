import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './adjust.css'
// import {ICONS} from '../Icons/Icons';
// import Stuff from '../Icons/Stuff'

const info = [
    {
        onderwerp: 'Havo',
        locatie: 'Dr-Knippenbergcollege',
        informatie: 'Coole student',
        datum: '2011 - 2017'
    },
    {
        onderwerp: 'HBO ICT & Media design',
        locatie: 'Fontys hogescholen',
        informatie: 'ya boi'
    },
    {
        onderwerp: 'Cardiff Certificaat',
        locatie: 'Cardiff/Fontys hogescholen',
        informatie: 'yeet'
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
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<Stuff ding= {ICONS.SCHOOL} />}
            >

                    <h3 className="vertical-timeline-element-title">{item.onderwerp}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item.locatie}</h4>
                    <p>{item.informatie}</p>
                
            </VerticalTimelineElement>

            ))}

            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="2017 - heden"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<path d={ICONS.SCHOOL} />}
            >
                <h3 className="vertical-timeline-element-title">HBO ICT & Media design</h3>
                <h4 className="vertical-timeline-element-subtitle">Fontys hogescholen</h4>
                <p>safsdfsd</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="Maand 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Cardiff Certificaat</h3>
                <h4 className="vertical-timeline-element-subtitle">Cardiff/Fontys hogescholen</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="Maand 2018 - Maand 2018"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Tim Koehoorn</h3>
                <h4 className="vertical-timeline-element-subtitle">Fontys hogescholen</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="Maand 2019 - Maand 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Night Of The Nerds</h3>
                <h4 className="vertical-timeline-element-subtitle">Fontys hogescholen</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="Maand 2019 - Maand 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Picoo</h3>
                <h4 className="vertical-timeline-element-subtitle">Fontys hogescholen</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#FFD800', color: '#222222' }}
                date="Maand 2020 - Maand 2020"
                iconStyle={{ background: '#9C27B0', color: '#fff' }}
                // icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Stage</h3>
                <h4 className="vertical-timeline-element-subtitle">Stage bedrijf</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement> */}

    </VerticalTimeline>
        )
    }
}

export default VerticalProgBar;