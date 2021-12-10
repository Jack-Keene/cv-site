import React from 'react';
import '../index.css'

function Contact() {
    return (
        <div id="contactContainer">
            <div className='section'>
                <form name="contact" method="post">
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </p>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;