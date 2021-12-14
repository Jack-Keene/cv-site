import React from 'react';
import '../index.css';

import Autoview from "../images/AutoviewExample.png"
import Rotate from '../components/Rotate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Project from '../components/Project';



function Projects() {
    return (       
        <section id="projects" className="section projects">
            <Rotate text="PROJECTS"/>     
            <Project src={Autoview} />         
                <a className="project" href ="https://autoview.herokuapp.com/" target="_blank" >
                    <FontAwesomeIcon className="svg-1" icon={faCircle}  />
                    <img src={Autoview} />
                    <h2>Autoview Site</h2>
                    <p className="p-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        has been the industry's standard dummy text ever since the 1500s. 
                    </p>
            </a>
        </section>
    );
}

export default Projects;