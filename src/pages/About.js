import React from 'react';
import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Rotate from '../components/Rotate';


function About() {
    // useState here to recrd which section is active  
    return (       
        <section id="about" className="section about">
            <Rotate text="ABOUT ME"/>
            <div className='about-info'>
                <FontAwesomeIcon className="icon svg-1" icon={faCrosshairs} size="2x" />
                <h2 className='about-head'>about me.</h2>
                <p className="p-1">
                    Since graduating university in 2017, I have worked for Nissan Motors GB as an analyst
                    and more recently as a performance and operations manager. I began learning Python in
                    order to be more efficient in my work and I've not stopped developing my programming 
                    skills since.
                </p>
                <p className="p-2">
                    In November 2021 I left the automotive industry to pursue software development 
                    full time. Feel free to get in contact with me directly, or through the form on this site.
                </p>
            </div>
        </section>
    );
}

export default About;