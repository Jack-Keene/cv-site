import React from 'react';
import '../index.css';
import Job from '../components/Job';

function Experience() {
  
    return (       
        <section className="section experience" id="experience" >
            <h1 className="header"> Experience</h1>
            
            <div className="jobs">
                <Job jobTitle="Job Title" year="2019-2021">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text
                </Job>
                <Job jobTitle="Job Title" year="2019-2021">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text
                </Job>
                <Job jobTitle="Job Title" year="2019-2021">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text
                </Job>
                <Job jobTitle="Job Title" year="2019-2021">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text
                </Job>
                <Job jobTitle="Job Title" year="2019-2021">
                    Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem 
                    Ipsum has been the industry's standard 
                    dummy text
                </Job>
            </div>
        </section>
    );
}

export default Experience;