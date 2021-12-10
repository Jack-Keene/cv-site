import React from 'react';
import Section2 from './Section2';
import '../index.css'

function About() {
    // let about = "In November 2021 I left my career in the Automotive industry to focus full time on software development. ";

    return (
        <div id='aboutContainer'>
            <Section2
                size="section"
                header = "About"
                grid="grid">
                    <div className="flex">
                        <div>                        
                            <p>                                
                                In November 2021 I left my career in the Automotive industry to focus full time on software development. 
                                Since then, I have been working on both backend (Python, Java) and frontend code (React). 
                            </p>
                            <div className="flex">
                                <li> Java   </li>
                                <li> Python </li>
                                <li> React  </li>
                                <li> PostgresSQL </li>
                                <li> Flask </li>
                            </div>
                        </div>
                    </div>
            </Section2>
        </div>
    )
;}
export default About;