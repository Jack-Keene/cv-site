import React from 'react';
import '../index.css';

import Image from "../images/lightbulb.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Background from '../components/Background';
import Rotate from '../components/Rotate';


function About() {
    // useState here to recrd which section is active
    var style= "background grayscale";
    
    return (       
        <section id="about" className="section about">
            {/* <Background style={style} image={Image}/> */}
            <Rotate text="ABOUT ME"/>
           
            <FontAwesomeIcon className="svg-1" icon={faCrosshairs} size="2x" />
            <h2>about me.</h2>
                
            <p className="p-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            </p>
            <p className="p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s. 

            </p>
        </section>
    );
}

export default About;