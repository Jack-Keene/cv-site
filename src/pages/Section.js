import React from 'react';
import '../index.css'
import Background from './Background';
import Header
 from './Header';

function Section(props) {

    let background;
    if (props.background) {
        background = <Background className="bg" src={props.background} alt="Background"/>
    } 

    let header;
    if (props.header) {
        header = <Header header={props.header} />
    }

    return (
        <div className={props.size}>
            {background}
            {header}
            <p>
                {props.content}
            </p>
            <ul> 
                {props.children}
            </ul>                
        </div>
    );
};

export default Section;