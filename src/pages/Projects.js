import React from 'react';
import '../index.css'
import Background from '../images/chimney.png';
import Section2 from './Section2';
import Project from './Project';

function Projects() {
    return (
        <div  id="projectsContainer">
            <Section2
                background={Background}
                header="Projects"
                size="section"
                grid="grid">
                    <div className=" gridProjects grid">
                        <Project> Project 1</Project>
                        <Project> Project 2 </Project>
                        <Project> Project 3</Project>
                        <Project> Project 4</Project>        
                    </div>
                
            </Section2>
        </div>
    );
};

export default Projects;