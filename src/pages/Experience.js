import React from 'react';
import '../index.css'
import Section from './Section';
import Job from './Job';

function Experience() {
    return (
        <div id="experienceContainer">
            <Section 
            header={"Experience"}
            size="section section-2"
            >
                <Job direction="left"/>
                <Job direction="left"  job="Job 1" />
                <Job direction="right" job="Job 1" />
                <Job direction="left"  job="Job 1" />
                <Job direction="right" job="Job 1" />
            </Section>            
        </div>
    );
};

export default Experience;