import React from 'react';
import '../index.css'

function Background(props) {
    return (
        <img className="bg" src={props.src} alt="Background" />
    );
};

export default Background;