import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

function NavLink(props) {
    const [activeNavLinkId, setActiveNavLink] = useState(props.navLinkId);
    
    const handleClick = () => {
        console.log(props.scrollToId)
        setActiveNavLink(props.navLinkId);

        document.getElementById(props.scrollToId).scrollIntoView(
            {
            behavior: 'smooth',
        }
        );
    };

    return (
        <button
            id={props.navLinkId}
            className= {activeNavLinkId === props.navLinkId ? 'activeClass navbar-nav' : 'navbar-nav'}
            onClick={handleClick}
            >
            {props.navLinkId}
        </button>
    );
};

export default NavLink;