import React from 'react';
import '../index.css'
import Background from './Background';

function Section(props) {
    return (
        <div className='section'>
            <Background className="bg" src={props.background} alt="Background"/>
            <h1> {props.header} </h1>
            {/* {props.value} */}
        </div>
    );
};

export default Section;