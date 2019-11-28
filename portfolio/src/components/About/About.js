import React from 'react';
import './About.css';
import Dennis from "../images/dennis.png";


const About = () => (
    <section className="about-wrapper">

            <img className="about-foto" src={Dennis} alt="logo" />
            <h1 className="about-header">Wie ben ik?</h1>
            <div className="about-tekst">
                <p>Mijn naam is Dennis Vulders. Momenteel zit ik in het 3e leerjaar van de opleiding ICT Media & Design op het Fontys in Eindhoven. </p>
                Mijn passie ligt voornamelijk bij het designen en het verbeteren van de user experience.
                Uiteraard vind ik het ook harstikke leuk om bezig te zijn met front-end development want ik ben natuurlijk niet voor niets een ICT student.

                </div>
        
         
    </section>
);

export default About;
