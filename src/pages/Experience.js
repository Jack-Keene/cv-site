import React from 'react';
import '../index.css'
import Section2 from './Section2';
import Job from './Job';

function Experience() {
    return (
        <div id="experienceContainer">
            <Section2
            header={"Experience"}
            size="section section-2">
                <Job direction="left"  job="Job 1" />
                <Job direction="right" job="Job 1" />
                <Job direction="left"  job="Job 1" />
                <Job direction="right" job="Job 1" />
            </Section2>            
        </div>
    );
};

export default Experience;