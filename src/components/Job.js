import React from 'react';
import '../index.css';


function Job(props) {
  
    return (       
        <div className="job">
            <h3>{props.jobTitle}</h3>
            <h3>{props.year}</h3>
            <p>{props.children}
            </p>
        </div>
    );
}

export default Job;