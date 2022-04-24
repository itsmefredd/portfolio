import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from "./includes/navbar";
import Footer from "./includes/footer";

import Timeline from "../img/timeline.jpg"

import "./includes/scroll.js"

const Main = () => {
    return (
        <div className="main">
            <div className="quote">
                <h1 className="q1" data-aos="fade-up" data-aos-delay="250">I am Frederick Go.</h1>
                <h1 className="q1" data-aos="fade-up" data-aos-delay="500">I am not 
                    <span data-aos="fade-left" data-aos-delay="700"> a </span> 
                    <span data-aos="fade-left" data-aos-delay="800">p</span> 
                    <span data-aos="fade-up" data-aos-delay="900">r</span> 
                    <span data-aos="fade-up" data-aos-delay="1000">o</span> 
                    <span data-aos="fade-up" data-aos-delay="1100">g</span> 
                    <span data-aos="fade-up" data-aos-delay="1200">r</span> 
                    <span data-aos="fade-up" data-aos-delay="1300">a</span> 
                    <span data-aos="fade-up" data-aos-delay="1400">m</span> 
                    <span data-aos="fade-up" data-aos-delay="1500">m</span> 
                    <span data-aos="fade-up" data-aos-delay="1600">e</span> 
                    <span data-aos="fade-up" data-aos-delay="1700">r</span> 
                    .</h1>
                <h1 className="q1" data-aos="fade-up" data-aos-delay="750">I am 
                    <span data-aos="fade-up" data-aos-delay="700"> a </span> 
                    <span data-aos="fade-up" data-aos-delay="800">p</span>
                    <span data-aos="fade-up" data-aos-delay="900">r</span>
                    <span data-aos="fade-up" data-aos-delay="1000">o</span>
                    <span data-aos="fade-up" data-aos-delay="1100">b</span>
                    <span data-aos="fade-up" data-aos-delay="1200">l</span>
                    <span data-aos="fade-up" data-aos-delay="1300">e</span>
                    <span data-aos="fade-up" data-aos-delay="1400">m </span> 
                    <span data-aos="fade-up" data-aos-delay="1500">s</span>
                    <span data-aos="fade-up" data-aos-delay="1600">o</span>
                    <span data-aos="fade-up" data-aos-delay="1700">l</span>
                    <span data-aos="fade-up" data-aos-delay="1800">v</span>
                    <span data-aos="fade-up" data-aos-delay="1900">e</span>
                    <span data-aos="fade-up" data-aos-delay="2000">r</span>
                .</h1>
            </div>
            <div className="main-links" data-aos="fade-up" data-aos-delay="1000">
                <div className="main-link link-1">
                    <Link to="/home/life" className="home-link">
                        <img src={ Timeline }></img>
                        Timeline
                    </Link>
                </div>
                <div className="main-link link-2 main-2">
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Education
                    </Link>
                </div>
                <div className="main-link link-3">
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        About Me
                    </Link>
                </div>
                <div className="main-link link-4">
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Porjects
                    </Link>
                </div>
                <div className="main-link link-5">
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Room
                    </Link>
                </div>
                <div className="main-link link-6">
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Dalhousie
                    </Link>
                </div>
                <div className="main-link link-7" >
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Music
                    </Link>
                </div>
                <div className="main-link link-8" >
                    <Link to="/home" className='home-link'>
                        <img src={ Timeline }></img>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="main-social">
                <a className="social" data-aos="fade-up">Linkedin</a>
                <a className="social" data-aos="fade-up">Github</a>
            </div>


            
        </div>
    )
};

export default Main; 