import React from 'react';
import '../index.css';

import Autoview from "../images/AutoviewExample.png"
import MatesLads from "../images/MatesLadsExample.png"
import Rotate from '../components/Rotate';

import Project from '../components/Project';



function Projects() {
    return (       
        <section id="projects" className="section projects">
            <Rotate text="PROJECTS"/>     
            <Project 
                className={"project"} 
                src={Autoview}
                link = "https://autoview.herokuapp.com/"
                project="Autoview">
                    A dealer management system built with Flask, Postgres and Bootstrap with 
                    three levels of user access each providing a different user experience including:
                    <li>Add vehicles to their account via the DVLA API</li>
                    <li>Make bookings, manage invoices and provide feedback</li>
                    <li>Raise invoices, manage upcoming bookings and view customers details.</li>
                    <li>Add and delete dealers.</li>
            </Project>    
            <Project 
                className={"project"} 
                src={MatesLads}
                link = "https://mates-lads-fc.herokuapp.com/"
                project="Mates-Lads FC"
                left="true">
                    Website designed and built for local football team with Flask and Postgres and hosted on Heroku.
                    The site allows users to track fixtures and results, individual player stats and a league table. 
            </Project>    
        </section>
    );
}

export default Projects;