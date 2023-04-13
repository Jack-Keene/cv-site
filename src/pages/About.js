import React from 'react';
import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Rotate from '../components/Rotate';


function About() {
    return (
        <section id="about" className="section about">
            <Rotate text="ABOUT ME" />
            <div className='about-info'>
                <FontAwesomeIcon className="icon svg-1" icon={faCrosshairs} size="2x" />
                <h2 className='about-head'>about me.</h2>
                <p className="p-1">
                    A software engineer currently working at Snowplow.io, helping people create behavioural data for their products.
                </p>
                <p className="p-2">
                    In November 2021 I left a career in the automotive industry to pursue software development full time. Feel free to contact me directly or through the form on this site.
                </p>
            </div>

            <div className='skills' >
                <h2 className='about-skills'>skills.</h2>
                <ul className='skills-list'>
                    <li>Python</li>
                    <li>ReactJS</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
        </section>
    );
}

export default About;