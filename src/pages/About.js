import React from 'react';

import Background from '../images/lights.png';
import Section2 from './Section2';
import '../index.css'

function About() {
    let about = "In November 2021 I left my career in the Automotive industry to focus full time on software development. ";


    return (
        <div id='aboutContainer'>
            <Section2
                size="section"
                background= {Background}
                header = "About Me"
                content=  {about} />
        </div>
    )
};
export default About;