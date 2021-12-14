import React from 'react';
import '../index.css';

function Background(props) {
    return (       
        <img className={props.style} src={props.image} alt="Background" />
    );
}

export default Background;