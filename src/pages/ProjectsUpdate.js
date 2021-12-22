import React from 'react';
import '../index.css'
import MatesGif from '../images/mates-lads-gif.gif'
import Mates from '../images/mates.png'
import AV from '../images/av.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Rotate from '../components/Rotate';

import Bounce from 'react-reveal'


function Project(props) {
    return (
        <Bounce fraction={1} left={props.project.position==='left'} right={props.project.position==='right'}>
        <div className={'project project-' + props.project.position}>
            <img src={props.project.gif} alt="background"></img>
            <img src={props.project.image} className='static' alt="background"></img>
            <div className='info'>
                <h5>{props.project.number}</h5>
                <h2 >{props.project.name}</h2>
                <p>{props.project.description}</p>
                <h4>{props.project.tech}</h4>
                <div className='links'>
                    <a href={props.project.github} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} pull='right' size='1' /></a>
                    <a href={props.project.link} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faExternalLinkAlt} pull='right' size='1' /></a>
                </div>
            </div>
        </div>
        </Bounce>
    )
}

function App() {

    const projects = [
        {
            number: "01.",
            code: "football",
            name: "Mates/Lads FC",
            image: Mates,
            gif: MatesGif,
            tech: "Python Flask HTML CSS",
            github: "/",
            link: "https://mates-lads-fc.herokuapp.com",
            description: "Website designed and built for local football team with Flask and Postgres and hosted on Heroku. The site allows users to track fixtures and results, individual player stats and a league table.",
            position: "left"
        },
        {
            number: "02.",
            code: "autoview",
            name: "AutoView",
            image: AV,
            gif: AV,
            tech: "Python Flask HTML CSS",
            github: "/",
            link: "https://autoview.herokuapp.com/",
            description: "A dealer management system built with Flask, Postgres and Bootstrap with three levels of user access each providing a different user experience including:",
            position: "right"
        }

    ]
    return (
        <div id="projects" className='section projects'>
            <Rotate text="PROJECTS"/>     
            <div className='projects-list'> 
                {projects.map((project, index) => (
                    <Project key={index} index={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default App;