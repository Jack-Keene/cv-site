import React from 'react';
import '../index.css';
import Job from '../components/Job';

function Experience() {

    return (
        <section className="section experience" id="experience" >
            <h1 className="header"> Experience</h1>

            <div className="jobs">
                <h2>Nissan Motors Great Britain (NMGB)</h2>
                <Job jobTitle="Performance and Operations Manager" year="Aug 2019 - Oct 2021">
                    Responsible for reporting and automation across Aftersales department using Python 
                    and SQL. Performance accountability for aftersales and service departments for all Nissan 
                    franchise dealerships in Northern Ireland.
                </Job>
                <Job jobTitle="Operations Analyst" year="Nov 2017 - Jul 2019">
                    Coordinated a project to bring all cross-functional scorecards in-house, using my 
                    methodology across the business, cutting agency costs by £24k per year. Designed and 
                    project managed online performance tracker to improve engagement in rewards programme 
                    for franchise dealer partners.
                </Job>
                <h2>The NCIs -Church of England (Contract)</h2>
                <Job jobTitle="Strategy Analyst" year="May 2017 - Oct 2017">
                    Collated and analysed internal and government published data to identify key focus
                    areas for the Church of England's funding streams. Analysed local attendance
                    figures, financial information, census data (deprivation, age profiles, demographics etc)
                    from local areas to produce 'strategic context' presentations for non-technical 
                    stakeholders.
                </Job>
                <h2>The Salvation Army</h2>
                <Job jobTitle="Data Manager" year="Jul 2016 - May 2017">
                    Responsible for checking and correcting missing, and incorrect data in a live 
                    database. Produced reports for analysis by management using SQL.
                </Job>
                <h2>The Department of Health</h2>
                <Job jobTitle="Job Title" year="2019-2021">
                    Provided analysis to support policy makers in public health improvement department. 
                    Led a research project on occupational health provision in the workplace, liaising with
                    key stakeholders to determine policy recommendations. Carried out project looking at 
                    how deprivation affected the likelihood of people to have certain medical procedures 
                    and presented findings at the monthly meeting of all (approx. 150) DoH analysts.
                </Job>
            </div>
        </section>
    );
}

export default Experience;