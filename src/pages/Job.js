import React from 'react';
import '../index.css'

import Bounce from 'react-reveal/Bounce';

function Job(props) {
    let bounce;
    if(props.direction === 'right') {
        bounce = <Bounce right cascade>
                    <li>
                    <div className="job grid gridJob"> 
                            <h2>{props.job}</h2>
                            <h2>Company</h2>
                            <h3>August 2017 - present</h3>
                            
                            <p>{props.children}</p>
                            <ul>
                                <li>Python</li>
                                <li>Python</li>
                                <li>Python</li>
                            </ul>
                        </div>   
                    </li>
                </Bounce>        
    }

    if (props.direction === 'left') {
        bounce = <Bounce left cascade>
                    <li>
                        <div className="job grid gridJob"> 
                            <h2>{props.job}</h2>
                            <h2>Company</h2>
                            <h3>August 2017 - present</h3>
                            
                            <p>{props.children}</p>
                            <ul>
                                <li>Python</li>
                                <li>Python</li>
                                <li>Python</li>
                            </ul>
                        </div>   
                    </li>
                    </Bounce>        

    }
    return (
        bounce           
    );
};

export default Job;