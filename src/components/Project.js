import React from 'react';
import '../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Project(props) {
    return (       
        <a className={props.className} href ={props.link} target="_blank" rel="noreferrer" >
            <FontAwesomeIcon className="svg-1" icon={faCircle}  />
            <img src={props.src} alt="screenshot" />
            <h2>{props.project}</h2>
            <p className="p-2">
                {props.children}
            </p>
        </a>
    );
}

export default Project;