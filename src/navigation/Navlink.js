import React from 'react';
import '../index.css';

function NavLink(props) {
    // useState here to set active which section is active
    const handleClick = (i) => {
        document.getElementById(props.scrollToId).scrollIntoView({
            behavior: 'smooth',}
        );
    };
    return (       
        <button
            href={props.scrollToId}
            onClick={handleClick}
            className={props.className}>
                {props.title}
        </button>

        // <button id={props.title} onClick={handleClick}>{props.title}</button>
    );
}

export default NavLink;