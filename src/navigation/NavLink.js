import React from 'react';

function NavLink(props) {
   
    const handleClick = () => {
        document.getElementById(props.scrollToId).scrollIntoView({
            behavior: 'smooth',}
        );
    };

    return (
        <button
            id={props.navLinkId}
            className= 'navbar-nav'
            onClick={handleClick}>
                {props.navLinkId}
        </button>
    );
};

export default NavLink;