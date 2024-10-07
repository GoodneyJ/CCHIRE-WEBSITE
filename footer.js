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

            <div className="footer-bottom-half">
                <h3>CCHI Re, LLC.</h3>
                <p>66 Franklin Street, Suite 300 Oakland, CA 94607</p>
                <p className="bold">Sales:</p>
                <p><a className="footer-company-email" href="mailto:amullen@cchi.com">amullen@cchi.com</a></p>
                <p><a className="footer-company-email" href="mailto:info@cchi.com">info@cchi.com</a></p>
                <p className="bold">Underwriting:</p>
                <p><a className="footer-company-email" href="mailto:underwriting@cchi.com">underwriting@cchi.com</a></p>
                <p><a className="footer-company-email" href="mailto:trich@cchi.com">trich@cchi.com</a></p>
                <br></br>
                <p><a className='footer-company-email' href="https://cchi.pro/privacy">Our Privacy Policy</a></p>
                <h3><a href="#">415.398.8985</a></h3>
            </div>
        </div>
    )
}
