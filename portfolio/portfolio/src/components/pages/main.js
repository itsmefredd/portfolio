import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from "./includes/navbar";
import Footer from "./includes/footer";

import Timeline from "../img/timeline.jpg"
import Saxophone from "../img/saxphonedog.gif" // https://televandalist.com/post/61805013732
import Contacting from "../img/contacting.gif" // https://instagram.com/dot_pieces
import Uni from "../img/uni.gif" // https://www.instagram.com/slothilda/
import hobby from "../img/hobby.gif" // https://www.instagram.com/LoofandTimmy/
import Time from "../img/timeline.gif" // https://www.disneyplus.com/franchise/the-simpsons
import Edu from "../img/edu.gif" // https://instagram.com/kyocera_usa
import Whoami from "../img/whoami.gif" //https://instagram.com/bravestwarriors
import Pro from "../img/pro.gif" // https://www.instagram.com/poketo/

import DayTimeline from "../img/Day - Timeline.png"
import DayEducation from "../img/Day - Education.png"
import DayMusic from "../img/Day - Music.png"
import DayProject from "../img/Day - Projects.png"
import DayContact from "../img/Day - Contact.png"
import DayAbout from "../img/Day - About.png"
import DayArts from "../img/Day - Room.png"
import DayProgram from "../img/Day - Program.png"

import "./includes/scroll.js"

const Main = () => {
    return (
        <div className="main">
            <div className="quote">
                <h1 className="q1" data-aos="fade-up" data-aos-delay="250">I am Frederick Go.</h1>
                <h1 className="q1" data-aos="fade-up" data-aos-delay="500">I am not a&nbsp;[
                    <span className="text-ani">
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
                    </span>
                ].</h1>
                <h1 className="q1" data-aos="fade-up" data-aos-delay="750">I am a&nbsp;[
                    <span className="text-ani">
                        <span data-aos="fade-up" data-aos-delay="1900">p</span>
                        <span data-aos="fade-up" data-aos-delay="1800">r</span>
                        <span data-aos="fade-up" data-aos-delay="1700">o</span>
                        <span data-aos="fade-up" data-aos-delay="1600">b</span>
                        <span data-aos="fade-up" data-aos-delay="1500">l</span>
                        <span data-aos="fade-up" data-aos-delay="1400">e</span>
                        <span data-aos="fade-up" data-aos-delay="1300">m</span>&nbsp;
                        <span data-aos="fade-up" data-aos-delay="1200">s</span>
                        <span data-aos="fade-up" data-aos-delay="1100">o</span>
                        <span data-aos="fade-up" data-aos-delay="1000">l</span>
                        <span data-aos="fade-up" data-aos-delay="900">v</span>
                        <span data-aos="fade-up" data-aos-delay="800">e</span>
                        <span data-aos="fade-up" data-aos-delay="700">r</span>
                    </span>
                ].</h1>
            </div>
            <div className="main-links" data-aos="fade-up" data-aos-delay="1000">
                <div className="main-link">
                    <Link to="/home/life" className="home-link">
                        <img src={ DayTimeline }></img>
                    </Link>
                </div>
                <div className="main-link link-2 main-2">
                    <Link to="/home" className='home-link '>
                        <img src={ DayEducation }></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home" className='home-link'>
                        <img src={ DayAbout }></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home" className='home-link'>
                        <img src={ DayProject }></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home" className='home-link'>
                        <img src={ DayMusic }></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home" className='home-link '>
                        <img src={ DayProgram }></img>
                    </Link>
                </div>
                <div className="main-link" >
                    <Link to="/home" className='home-link'>
                        <img src={ DayArts }></img>
                    </Link>
                </div>
                <div className="main-link" >
                    <Link to="/home" className='home-link'>
                        <img src={ DayContact } className=""></img>
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