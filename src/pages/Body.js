import React from 'react';
import  About  from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Nav from '../navigation/Nav';

import '../index.css'

function Body() {
    return (
        <main>
            <Nav />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
};

export default Body;
