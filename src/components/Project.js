import React from 'react';
import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
    return (       
        <a className="project" href ="https://autoview.herokuapp.com/" target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className="svg-1" icon={faCircle}  />
            <img src={props.src} alt="screenshot" />
            <h2>Autoview Site</h2>
            <p className="p-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s. 
            </p>
        </a>
    );
}

export default Project;