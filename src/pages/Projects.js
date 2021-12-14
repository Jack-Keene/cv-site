import React from 'react';
import '../index.css';

import Autoview from "../images/AutoviewExample.png"
import Rotate from '../components/Rotate';

import Project from '../components/Project';



function Projects() {
    return (       
        <section id="projects" className="section projects">
            <Rotate text="PROJECTS"/>     
            <Project src={Autoview} />         
        </section>
    );
}

export default Projects;