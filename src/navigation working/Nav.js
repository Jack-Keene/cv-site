import React from 'react';
import NavLink from './NavLink';
// import { NavLink } from 'react-router-dom';

// const navLinks = [
//     {navLinkId: 'About', scrollToId: 'aboutContainer'},
//     {navLinkId: 'Experience', scrollToId: 'experienceContainer'},
//     {navLinkId: 'Projects', scrollToId: 'projectsContainer'},
//     {navLinkId: 'Contact', scrollToId: 'contactContainer'},
// ]

function Nav() {
    return (
        <nav className="sidenav ">
            <NavLink
                navLinkId={'About'}
                scrollToId={'aboutContainer'}
                // activeNavLinkId={setActiveNavLink}
                // setActiveNavLink={setActiveNavLink} 
                />         
            <NavLink
                navLinkId={'Experience'}
                scrollToId={'experienceContainer'}
                // activeNavLinkId={setActiveNavLink}
                // setActiveNavLink={setActiveNavLink} 
                />         
            <NavLink
                navLinkId={'Projects'}
                scrollToId={'projectsContainer'}
                // activeNavLinkId={setActiveNavLink}
                // setActiveNavLink={setActiveNavLink} 
                />         
            <NavLink
                navLinkId={'Contact'}
                scrollToId={'contactContainer'}
                // activeNavLinkId={setActiveNavLink}
                // setActiveNavLink={setActiveNavLink} 
                />         
        </nav>
    );
};

export default Nav;