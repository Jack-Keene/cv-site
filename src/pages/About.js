import React from 'react';
import Typical from 'react-typical';

import Background from '../images/lights.jpg';
import Section from './Section';
import '../index.css'

function About() {
    let about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perspiciatis eos esse illo, est, labore ex voluptatibus molestias repudiandae porro deserunt vel pariatur! Ut, voluptates totam architecto, ullam fugit eius at nobis tempore unde reprehenderit repellat doloribus voluptatem, porro repudiandae ipsam soluta ex delectus neque sapiente aperiam molestias deserunt veritatis.";
    return (
        <div id='aboutContainer'>
            <Section
                background= {Background}
                header = "About Me">
                <p>
                    <Typical
                        steps={[about, 10]}
                        loop= {1}/> 
                </p>
            </Section>
        </div>
    )
};
export default About;