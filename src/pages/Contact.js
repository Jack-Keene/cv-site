import React from 'react';
import '../index.css';
import Image from "../images/lights.png"
import Background from '../components/Background';


function Contact() {
  
    return (       
        <section className="section contact" id="contact" >
            <Background className={"background brightness"} image={Image}/>
            <h1 className="header"> Contact</h1>
            <form className="form" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input autoComplete="off" type="text" id="name" name="name" required placeholder="NAME" />
                <input autoComplete="off" type="email" id="email" name="email" required placeholder="EMAIL"/>
                <textarea autoComplete="off" type="textarea" id="message" name="message" required placeholder="MESSAGE"/>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;