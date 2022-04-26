import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Navbar from "./includes/navbar";
import Footer from "./includes/footer";

import Waiting from "../img/waiting.gif"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-section">
                <h1 data-aos="fade-up" data-aos-delay="800">Contact me via the following methods:</h1>
                <div data-aos="fade-up" data-aos-delay="900">E-mail: hyeongo0317@gmail.com</div>
                <div data-aos="fade-up" data-aos-delay="600">School e-mail: dn282145@dal.ca</div>
                <h1 data-aos="fade-up" data-aos-delay="1200">Connect with me here: </h1>
                <div className="contact-social-section">
                    <a className="contact-social" data-aos="fade-up" data-aos-delay="700">Linkedin</a>
                    <a className="contact-social" data-aos="fade-up" data-aos-delay="400">Github</a>
                </div>
            </div>
            <div className="contact-section contact-section-2" data-aos-delay="500">
                <div><div className="credit" data-aos="fade-up" data-aos-delay="1500">Credit: instagram.com/rain.to.me/</div></div>
                <img src={ Waiting } className="waiting" data-aos="fade-up" data-aos-delay="1000"></img>
                <div className="waiting-text" data-aos="fade-up" data-aos-delay="300">"What are you doing? I am still waiting for you to contact me." </div>
            </div>
        </div>
    )
};

export default Contact; 