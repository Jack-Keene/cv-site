import React from 'react';
import '../index.css'
import Background from '../images/chimney.png';
import Section from './Section';

function Projects() {
    return (
        <div id="projectsContainer">
            <Section 
                background={Background}
                header="Projects"
                size="section"/>
        </div>
    );
};

export default Projects;