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
                <Job direction="left"  job="Nissan" > 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi dolorum animi nemo sequi ipsum at incidunt numquam. 
                        Adipisci, aperiam ipsa aut consequatur deserunt vero enim 
                        doloribus libero omnis atque praesentium                         
                </Job>
                <Job direction="right" job="Nissan" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi dolorum animi nemo sequi ipsum at incidunt numquam. 
                        Adipisci, aperiam ipsa aut consequatur deserunt vero enim 
                        doloribus libero omnis atque praesentium                         
                </Job>
                <Job direction="left"  job="CofE" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi dolorum animi nemo sequi ipsum at incidunt numquam. 
                        Adipisci, aperiam ipsa aut consequatur deserunt vero enim 
                        doloribus libero omnis atque praesentium                         
                </Job>
                <Job direction="right" job="Job 1" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi dolorum animi nemo sequi ipsum at incidunt numquam. 
                        Adipisci, aperiam ipsa aut consequatur deserunt vero enim 
                        doloribus libero omnis atque praesentium                         
                </Job>
            </Section2>            
        </div>
    );
};

export default Experience;