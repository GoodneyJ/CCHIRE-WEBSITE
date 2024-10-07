import React from 'react'

import CallToAction from '../components/callToAction.js';
import gbbPhoto from '../IMAGES/gbbPhoto.jpg'
import Footer from '../components/footer.js';

import ContactCTA from '../IMAGES/gbbPhoto.jpg';
import ContactInfo from '../IMAGES/contactInfoPic.jpg';
import '../css/App.css';

export default function contact(props) {

    document.title = "CCHI Re | Contact"

    return (
        <div id="contact-page-container">
            <CallToAction ctaImage={ContactCTA} title="Contact" subTitle=""/>
            <div id="contact-info-section">
                


                <div id="contact-info-text">
                    <h2>Our Info</h2>

                    <h3>Sales:</h3>
                    <p className="contact-email"><a href="mailto:amullen@cchi.com">amullen@cchi.com</a></p>
                    <p className="contact-email"><a href="mailto:info@cchi.com">info@cchi.com</a></p>
                    <h3>Underwriting:</h3>
                    <p className="contact-email"><a href="mailto:underwriting@cchi.com">underwriting@cchi.com</a></p>
                    <p className="contact-email"><a href="mailto:trich@cchi.com">trich@cchi.com</a></p>
                    <p className="bold">Direct: <a href="#"><span className="contact-number">650-554-9777</span></a></p>
                    <p className="bold">Office: <a href="#"><span className="contact-number">415-398-8985 Ext. 102</span></a></p>
                    <p>66 Franklin  Street, Suite 300</p>
                    <p>Oakland, CA 94607</p>
                </div>

            </div>

            <Footer />
            {/* <span style={{fontSize: '.75em'}}>th</span> */}
        </div>
    )
}
