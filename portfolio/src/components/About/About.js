import React from 'react';
import './About.css';
import Dennis from "../images/dennis.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => (
    <section data-aos="zoom-in" className="about-wrapper" id="about">

        <img className="about-foto" src={Dennis} alt="logo" />
        <h1 className="about-header">Wie ben ik?</h1>
        <div className="about-tekst">
            <p>
            Mijn naam is Dennis Vulders. Momenteel zit ik in het 4e leerjaar van de opleiding ICT Media & Design op het Fontys in Eindhoven. <br />
            Mijn passie ligt voornamelijk bij het designen en het verbeteren van de user experience, maar front-end development vind ik uiteraard 
            ook harstikke leuk, want het uitwerken van een design vind ik geweldig om te doen en ik ben natuurlijk niet voor niets een ICT student.</p> 
            </div>

    </section>
);

export default About;
