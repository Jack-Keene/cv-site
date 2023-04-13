import React, { useState } from 'react';
import '../index.css';

function Companies(props) {
    return (
        <div className='company'>
            <h3 className={props.active === props.company.code ? "active" : ""} onClick={() => props.showCompany(props.index)}>{props.company.company}</h3>

        </div>
    )
}

function Roles(props) {
    return (
        <div className={'roles'}>
            {props.active === props.company.code && props.company.roles.map((role, index) => (
                <Role key={index} index={index} role={role} />
            ))}
        </div>

    )
}

function Role(props) {
    return (
        <div className={'role'}>
            <h1>{props.role.jobTitle}</h1>
            <h2>{props.role.year}</h2>
            <p>{props.role.jobDescription} </p>
        </div>
    )
}

function ExperienceUpdate() {

    const [active, setActive] = useState("snowplow");

    const showCompany = index => {
        const newActive = companies[index].code;
        console.log(active)
        setActive(newActive);
    }

    const companies = [
        {
            code: "snowplow",
            company: "Snowplow Analytics",
            roles: [
                {
                    jobTitle: 'Software Engineer',
                    year: 'Jun 2022 - Present',
                    jobDescription:
                        <ul>
                            <li>Led the upgrade of Snowplow's Python Tracker from 0.11 to V1, implementing new features and enhancing public API.</li>
                            <li>Enhanced compatibility and interoperability of the Python Tracker with other server-side trackers through alignment efforts.</li>
                            <li>Collaborated with cross-functional teams to define scope and requirements for Data Product Accelerators (DPA) project.</li>
                            <li>Developed first DPA project successfully and established a template for future endeavors.</li>
                            <li>Implemented enhanced consent plugin for the Javascript tracker.</li>
                        </ul>
                }
            ]
        },
        {
            code: "nissan",
            company: "Nissan Motors Ltd",
            roles: [
                {
                    jobTitle: 'Performance and Operations Manager',
                    year: 'Aug 2019 - Oct 2021',
                    jobDescription:
                        <ul>
                            <li>Responsible for reporting and automation across the Aftersales department using Python and SQL.</li>
                            <li>Accountable for aftersales and service departments for all Nissan franchise dealerships in Northern Ireland.</li>
                        </ul>
                },
                {
                    jobTitle: 'Operations Analyst',
                    year: 'Nov 2017 - Jul 2019',
                    jobDescription:
                        <ul>
                            <li>Coordinated a project to bring all business scorecards in-house, using my methodology cutting agency costs by £24k per year.</li>
                            <li>Designed and project managed an online performance tracker to improve engagement in the rewards programme for franchise dealer partners.</li>
                        </ul>
                }]
        },

        {
            code: "church",
            company: "Church of England",
            roles: [
                {
                    jobTitle: 'Strategy Analyst',
                    year: 'May 2017 - Oct 2017',
                    jobDescription:
                        <ul>
                            <li>Collated and analysed internal and government published data to identify key focus areas for the Church of England's funding streams.</li>
                            <li>Analysed local attendance figures, financial information, census data (deprivation, age profiles, demographics) from areas to produce 'strategic context' presentations for non-technical stakeholders.</li>
                        </ul>
                },
            ]
        },
        {
            code: 'dh',
            company: "Department of Health",
            roles: [
                {
                    jobTitle: 'Research Analyst',
                    year: 'Aug 2019 - Oct 2021',
                    jobDescription:
                        <ul>
                            <li>Provided analysis to support policy makers in the public health improvement department. </li>
                            <li>Led a research project on occupational health provision in the workplace, liaising with key stakeholders to determine policy recommendations.</li>
                            <li>Carried out a project looking at how deprivation affects the likelihood of someone needing a medical procedure and presented findings at the monthly meeting of all (approx. 150) DoH analysts.</li>
                        </ul>
                },
            ]
        }
    ]


    return (
        <div id="experience" className='section experience'>
            <div className='header'>
                <h1 className='header'><span className='circle'></span> Experience </h1>
            </div>
            <div className='job-table '>
                <span className={active + " activeBar"}></span>
                <div className='companies'>
                    {companies.map((company, index) => (
                        <Companies key={index} index={index} company={company} showCompany={showCompany} active={active} />
                    ))}
                </div>

                <div className='roles'>
                    {companies.map((company, index) => (
                        <Roles key={index} index={index} company={company} active={active} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceUpdate;