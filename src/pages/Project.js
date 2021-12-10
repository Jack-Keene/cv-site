import React from 'react';
import '../index.css'

function Project(props) {
    return (
        <div className="project">
            {props.children}
        </div>
                   
    );
};

export default Project;