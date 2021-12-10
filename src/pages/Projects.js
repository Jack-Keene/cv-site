import React from 'react';
import '../index.css'
import Background from '../images/chimney.png';
import Section2 from './Section2';

function Projects() {
    return (
        <div id="projectsContainer">
            <Section2
                background={Background}
                header="Projects"
                size="section"/>
        </div>
    );
};

export default Projects;