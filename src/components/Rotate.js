import React from 'react';
import '../index.css';

function Rotate(props) {
    // useState here to recrd which section is active
    
    return (
        <div className="rotate-box"> 
            <div className= "header-rotate" > 
                <div  className="header" id="spinner">
                <h1 className=" header-hollow">{props.text}</h1>&nbsp;
                <h1 className=" header-solid">{props.text} </h1> &nbsp;
                <h1 className=" header-hollow">{props.text} </h1>&nbsp;
                <h1 className=" header-solid">{props.text} </h1>&nbsp;
                <h1 className=" header-hollow">{props.text} </h1>&nbsp;
                <h1 className=" header-solid">{props.text} </h1>&nbsp;
                <h1 className=" header-hollow">{props.text} </h1>&nbsp;
                <h1 className=" header-solid">{props.text} </h1>&nbsp;
                <h1 className=" header-hollow">{props.text} </h1>&nbsp;
                </div>
            </div>
        </div>         
    );
}

export default Rotate;