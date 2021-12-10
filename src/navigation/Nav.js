import React from 'react';
import NavLink from './NavLink';

function Nav() {
    return (
        <nav className="sidenav ">
            <NavLink
                navLinkId={'About'}
                scrollToId={'aboutContainer'}
                />         
            <NavLink
                navLinkId={'Experience'}
                scrollToId={'experienceContainer'}
                />         
            <NavLink
                navLinkId={'Projects'}
                scrollToId={'projectsContainer'}
                />         
            <NavLink
                navLinkId={'Contact'}
                scrollToId={'contactContainer'}
                />         
        </nav>
    );
};

export default Nav;