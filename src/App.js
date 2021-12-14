import React from 'react';
import './index.css';
import Navbar from './navigation/Navbar';
import About from './pages/About';
import Experience from './pages/Experience';
import Landing from './pages/Landing'
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Logos from './navigation/Logos';

function App() {
    return (
        <div>
            <Navbar />
            <Logos />
            <Landing />
            <About  />
            <Experience />
            <Projects />
            <Contact />
        </div>            
        );
}

export default App;