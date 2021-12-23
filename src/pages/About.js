import React from 'react';
import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Rotate from '../components/Rotate';


function About() {
    return (       
        <section id="about" className="section about">
            <Rotate text="ABOUT ME"/>
            <div className='about-info'>
                <FontAwesomeIcon className="icon svg-1" icon={faCrosshairs} size="2x" />
                <h2 className='about-head'>about me.</h2>
                <p className="p-1">
                    Since graduating from university in 2017, I have worked for Nissan Motors GB as an analyst and more recently as a performance and operations manager. I began learning Python to be more efficient in my work and I've not stopped developing my programming skills since.                
                </p>
                <p className="p-2">
                    In November 2021 I left the automotive industry to pursue software development full time and I'm currently looking for my first full-time role. Feel free to contact me directly or through the form on this site.
                </p>
            </div>
            
            <div className='skills' >
                <h2 className='about-skills'>skills.</h2>
                <ul  className='skills-list'>
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJS</li>
                </ul>
            </div>
        </section>
    );
}

export default About;