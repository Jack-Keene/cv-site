import React from 'react';
import '../index.css'
import Background from './Background';
import Header
 from './Header';

function Section2(props) {

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
            <div className={props.grid}>
                {header}
                {props.content}
                {/* <ul>  */}
                
                {props.children}
                {/* </ul>                 */}

            </div>
        </div>
    );
};

export default Section2;