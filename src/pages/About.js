import React from 'react';
import Typical from 'react-typical';

import Background from '../images/lights.png';
import Section from './Section';
import '../index.css'

function About() {
    let about = "In November 2021 I left my career in the Automotive industry to focus full time on software development. ";
    
    
    return (
        <div id='aboutContainer'>
            <Section
                background= {Background}
                header = "About Me"
                content = {about}
                size="section">
                <p>
                    <Typical
                        steps={[about, 10]}
                        loop= {1}/> 
                </p>
            </Section>
        </div>
    )
};
export default About;