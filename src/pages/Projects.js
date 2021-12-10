import React from 'react';
import '../index.css'
import Background from '../images/chimney.jpg';

function Projects() {
    return (
        <div id="projectsContainer">
            <div className='section'>
                <img className="bg" src={Background} alt="Background" />
                <h1> Projects</h1>
            </div>
        </div>
    );
};

export default Projects;