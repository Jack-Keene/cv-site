import React from 'react';
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import NavLink from './Navlink';

function Navbar() {
    // useState here to record which section is active
        
    return (       
        <nav className="nav">
            <NavLink title="About" scrollToId={"about"} />
            <NavLink title="Experience" scrollToId={"experience"}/>
            <NavLink title={<FontAwesomeIcon icon={faAngleDown} size="2x" />} scrollToId={"about"}/>
            <NavLink title="Projects" scrollToId={"projects"}/>
            <NavLink title="Contact" scrollToId={"contact"}/>
        </nav>
    );
}

export default Navbar;

