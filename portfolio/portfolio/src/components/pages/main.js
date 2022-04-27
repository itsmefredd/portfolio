import React from "react";
import { Link } from "react-router-dom";

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
                <h1 className="q1 qu1" data-aos="fade-up" data-aos-delay="250">I am Frederick Go.</h1>
                <h1 className="q1 qu2" data-aos="fade-up" data-aos-delay="500">I am not a&nbsp;[
                    <span className="text-ani">
                        <span data-aos="fade-left" data-aos-delay="800" className="delay-1">p</span> 
                        <span data-aos="fade-up" data-aos-delay="900" className="delay-2">r</span> 
                        <span data-aos="fade-up" data-aos-delay="1000" className="delay-3">o</span> 
                        <span data-aos="fade-up" data-aos-delay="1100" className="delay-4">g</span> 
                        <span data-aos="fade-up" data-aos-delay="1200" className="delay-5">r</span> 
                        <span data-aos="fade-up" data-aos-delay="1300" className="delay-6">a</span> 
                        <span data-aos="fade-up" data-aos-delay="1400" className="delay-7">m</span> 
                        <span data-aos="fade-up" data-aos-delay="1500" className="delay-8">m</span> 
                        <span data-aos="fade-up" data-aos-delay="1600" className="delay-9">e</span> 
                        <span data-aos="fade-up" data-aos-delay="1700" className="delay-10">r</span> 
                    </span>
                ].</h1>
                <h1 className="q1 qu3" data-aos="fade-up" data-aos-delay="750">I am a&nbsp;[
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
                    <Link to="/home/life/timeline" className="home-link">
                        <img src={ DayTimeline } alt="timeline"></img>
                    </Link>
                </div>
                <div className="main-link link-2 main-2">
                    <Link to="/home/life/courses" className='home-link '>
                        <img src={ DayEducation } alt="education"></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home/life" className='home-link'>
                        <img src={ DayAbout } alt="about"></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home/projects" className='home-link'>
                        <img src={ DayProject } alt="project"></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home/room/music" className='home-link'>
                        <img src={ DayMusic } alt="music"></img>
                    </Link>
                </div>
                <div className="main-link">
                    <Link to="/home/life/programming" className='home-link '>
                        <img src={ DayProgram } alt="programming"></img>
                    </Link>
                </div>
                <div className="main-link" >
                    <Link to="/home/room" className='home-link'>
                        <img src={ DayArts } alt="arts"></img>
                    </Link>
                </div>
                <div className="main-link" >
                    <Link to="/home/contact" className='home-link'>
                        <img src={ DayContact } alt="contact"></img>
                    </Link>
                </div>
            </div>
            <div className="main-social">
                <a className="social" data-aos="fade-up" href="google.com">Linkedin</a>
                <a className="social" data-aos="fade-up" href="google.com">Github</a>
            </div>            
        </div>
    )
};

export default Main; 