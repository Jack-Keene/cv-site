import React from 'react';
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGooglePlus, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from  '@fortawesome/free-solid-svg-icons';

function Logos() {
    return (
        <div className="logos">
            <a className="logo" href="https://github.com/Jack-Keene"  target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} size="2x"  /></a>
            <a className="logo" href="mailto: jack.keene1@gmail.com" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faEnvelope} size="2x"  /></a>
            <a className="logo" href="https://www.linkedin.com/in/jack-keene-69851885/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} size="2x"  /></a>
            <a className="logo" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank"  rel="noreferrer" > <FontAwesomeIcon icon={faGooglePlus} size="2x"  /></a>
        </div>
    )
;}
export default Logos;