import React from 'react';
import '../index.css';

function Background(props) {
    return (       
        <img className={props.className} src={props.image} alt="Background" />
    );
}

export default Background;