import React from 'react';
import '../index.css';

import Image from "../images/lights.png"
import Background from '../components/Background';

function Landing() {
    // useState here to recrd which section is active
    
    return (       
        <section className="section landing">
            <Background className={"background brightness"} image={Image} />
            <div>
                <h1>JACK KEENE</h1>
                <h3>SOFTWARE DEVELOPER</h3>
            </div>
        </section>
    );
}

export default Landing;