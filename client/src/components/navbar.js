import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../IMAGES/cchiLogo.png';

export default function navbar() {


    window.onscroll = function() {navFunc()};

    const styles = {
        color: "black",
    }

    function navFunc() {

        let navbar = document.getElementById('navbar-container')
        if(window.pageYOffset >= 100) {
            navbar.classList.add("sticky");
            navbar.classList.add('fadeIn');
            

        } else {

            navbar.classList.remove("sticky");



        }
    }

    return (
        <div id="navbar-container" className="navbar-container">
            <div className="image-container">
                <NavLink to="/home"><img src={Logo} /></NavLink>
            </div>
            <nav className="navbar">
                <NavLink to="/home" className="nav-item">Home</NavLink>
                <NavLink to="/our-team" className="nav-item">Our Team</NavLink>
                <NavLink to="/case-studies" className="nav-item">Case Studies</NavLink>
                <NavLink to="/services" className="nav-item">Services</NavLink>
                <NavLink to="/contact" className="nav-item">Contact</NavLink>
            </nav>
        </div>
    )
}
