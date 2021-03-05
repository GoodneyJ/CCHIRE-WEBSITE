import React from 'react'

import CallToAction from '../components/callToAction.js';
import Footer from '../components/footer.js';

import ContactCTA from '../IMAGES/contactCTA.jpg';
import ContactInfo from '../IMAGES/contactInfoPic.jpg';
import '../css/App.css';

export default function contact(props) {
    return (
        <div id="contact-page-container">
            <CallToAction ctaImage={ContactCTA} title="Contact" subTitle=""/>
            <div id="contact-info-section">
                <img id="contact-image" src={ContactInfo} height="400px" width="600px"/>


                <div id="contact-info-text">
                    <h2>Our Info</h2>
                    <p className="contact-email"><a href="#">trich@cchi.com</a></p>
                    <p className="contact-email"><a href="#">amullen@cchi.com</a></p>
                    <p className="bold">Direct: <a href="#"><span className="contact-number">650-554-9777</span></a></p>
                    <p className="bold">Office: <a href="#"><span className="contact-number">415-398-8985 Ext. 102</span></a></p>
                    <p className="bold">Fax: <a href="#"><span className="contact-number">415-398-0479</span></a></p>
                    <p>201 Mission Street, 12th Floor, #1265</p>
                    <p>San Francisco, CA 94105</p>
                    <p>California Insurance Lic.#</p>
                </div>

            </div>

            <Footer />
        </div>
    )
}
