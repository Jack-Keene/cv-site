import React from 'react';
import  About  from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Nav from '../navigation/Nav';

import '../index.css'
import Landing from './Landing';

function Body() {
    return (
        <main>
            <Nav />
            <Landing />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
    );
};

export default Body;
