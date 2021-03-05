import React from 'react'

import CallToAction from '../components/callToAction.js'
import ServiceItem from '../components/serviceItem.js'
import Footer from '../components/footer.js';

import ServicesCTA from '../IMAGES/servicesCTA.jpg';
import '../css/App.css';

export default function services(props) {
    return (
        <div id="services-page-container">
            <CallToAction ctaImage={ServicesCTA} title="Services" subTitle="" />

            <div id="services-info-container">
                <h2 id="service-info-heading">From plan quote through risk management and account services — CCHI is there for you.</h2>
                <p id="service-info-text">CCHI comprehensive menu of services allows brokers to prosper in the current hyper-competitive environment. Our team of industry veterans gets you the right plan at the right price, then we support you with Risk Management and policy servicing — which also has the effect of helping to cut costs and stabilize future premiums. Which, every broker knows, is critical to retaining business. In addition, brokers find that CCHI’s service is so thorough that it allows for a leaner broker staff, often improving net profits.</p>
            </div>

            <div id="services-list-container">
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>

            <Footer />
        </div>
    )
}
