import React from 'react'

import CallToAction from '../components/callToAction.js';
import CaseStudyItem from '../components/caseStudyItem.js';
import Footer from '../components/footer.js';

import CaseStudiesCTA from '../IMAGES/caseStudiesCTA.jpg'

import '../css/App.css';

export default function caseStudies(props) {
    return (
        <div id="case-studies-container">
            <CallToAction ctaImage={CaseStudiesCTA} title="Case Studies" subTitle=""/>
            
            <div id="case-study-info-container">
                <h2>Our goal is to help our clients save on health insurance costs in every way we can.</h2>
                <h4>That can mean...</h4>
                <ul id="cost-saving-list">
                    <li>Negotiating a "global buyout" (a one-time payment that caps the client's costs) with an insurer.</li>
                    <li>Consultation as to the most cost-efficient plan of care that maintains quality of care.</li>
                    <li>Or an audit of claims already paid.</li>
                </ul>
                <h3>In many cases we are able to realize significant savings for our clients.</h3>
            </div>

            <div id="case-study-container">
                <CaseStudyItem title="CASE STUDY #1 Early Intervention. 35% Savings." text="The Early Intervention Program helps CCHI clients take charge of the  claims process before costs spiral out of control. That results in lower  costs, better patient outcomes, happier employers, and longer-term  business relationships. As an example, early intervention on a major  catastrophic case for a CCHI client allowed us to negotiate a global  buyout that resulted in 35% overall savings."/>
                <CaseStudyItem title="CASE STUDY #2 Global Buyout. 22% Savings." text="An existing client had some problems regarding an employee's  eligibility for benefits. We negotiated a global buyout to cover the  cost of inpatient care on the claim which did not reach a specific  deductible. Both the lifetime maximum benefit and continuity of care  were maintained. The result was a 22% savings."/>
                <CaseStudyItem title="CASE STUDY #3 Claim Audit. 40% Savings." text="When a Third Party Administrator advised us of overpayment on a claim  CCHI took action. We audited the charges and identified quality of care  issues. Taking that information to the insurer resulted in a refund to  our client resulting in 40% savings. For more information on how CCHI helps clients better manage their  self-insured healthcare programs, increase positive patient outcomes,  and contain healthcare costs, please give us a call or drop us an email."/>
            </div>

            <Footer />

        </div>
    )
}
