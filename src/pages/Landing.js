import React from 'react';

import Background from '../images/lights.png';
import Section2 from './Section2';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlus, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


function Landing() {
    // let about = "In November 2021 I left my career in the Automotive industry to focus full time on software development. ";

    return (
        <div id='landing'>
            <Section2
                size="section"
                background= {Background}
                header = "Hi, I'm Jack! "
                grid="grid landing">
                    <div className="flex">
                        <a href="https://github.com/Jack-Keene"  target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} size="3x"  /></a>
                        <a href="/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faInstagram} size="3x"  /></a>
                        <a href="https://www.linkedin.com/in/jack-keene-69851885/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} size="3x"  /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"  rel="noreferrer" > <FontAwesomeIcon icon={faGooglePlus} size="3x"  /></a>
                    </div>
            </Section2>
        </div>
    )
;}
export default Landing;