import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar.js';

import '../css/App.css'

export default function callToAction(props) {

    const homeStyles = {
        backgroundImage: `linear-gradient(rgba(34, 51, 137, 0.55), rgba(34, 51, 137, 0.55)), url(${props.ctaImage})`,
    }


    const headingStyles = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }




    if(props.subTitle === "") {
        return (
            <div style={homeStyles} className="call-to-action-container">
                <Navbar />
                <div className="page-center-text">
                    <h1 className="page-heading">{props.title}</h1>
                </div>
            </div>  
        )
    } else {
    return (
        <div style={homeStyles} className="call-to-action-container">
            <Navbar />
            <div className="cta-center-text">
                <div>
                    <h1 className="cta-heading">{props.title}</h1>
                    <h2 className="cta-subHeading">...{props.subTitle}</h2>
                    <NavLink to="/contact" className="cta-button"><span>Contact Us</span></NavLink>
                </div>
                
            </div>
        </div>
    )
    }
}
