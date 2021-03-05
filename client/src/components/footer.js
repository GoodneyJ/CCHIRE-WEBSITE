import React, { useState } from 'react'

import Axios from 'axios'
import axios from 'axios';


export default function Footer(props) {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mailSent, setMailSent] = useState(false);
    const [error, setError] = useState(null);


    const onSubmit = e => {
        e.preventDefault();

        const dataToSubmit = {
            name: name,
            email: email,
            message: message
        }
        
        document.querySelector('.name').value = '';
        document.querySelector('.email').value = '';
        document.querySelector('.message').value = '';
        
        axios.post('/api/sendMail', dataToSubmit)

    }



    return (
        <div className="footer-container">
            <div className="footer-top-half">
                <h1 className="top-half-heading">Stay in the loop</h1>
                <p className="top-half-text">Any questions? Feel free to send us a message!</p>
                <form className="form" onSubmit={onSubmit}>
                    {/* NAME INPUT */}
                    <div className="form-item-container">
                        <input type="text" className="input name" name="name" placeholder="Your name..." onChange={(e) => setName(e.target.value)}/>
                    </div>
                    {/* EMAIL INPUT */}
                    <div className="form-item-container">
                        <input type="text" className="input email" name="email" placeholder="Your email..." onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    {/* MESSAGE INPUT */}
                    <div className="form-item-container">
                        <textarea className="text-area-input message" name="message" placeholder="Your message..." onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    {/* BUTTON SUBMIT */}
                    <div className="form-item-container">
                       <button className="form-btn">Submit</button>
                    </div>
                    
                </form>
            </div>
            <div className="footer-bottom-half">
                <h3>CCHIRe</h3>
                <p>71 Stevenson Street #411, San Francisco, CA 94105</p>
                <p>CompanyEmail@gmail.com</p>
                <h3><a href="#">415.398.8985</a></h3>
            </div>
        </div>
    )
}
