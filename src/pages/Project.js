import React from 'react';
import '../index.css'

function Project(props) {
    return (
        <div className="card">
            {props.children}
        </div>
                   
    );
};

export default Project;