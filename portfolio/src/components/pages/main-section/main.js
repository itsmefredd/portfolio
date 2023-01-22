import React from "react";
import { Link } from "react-router-dom";

import DayTimeline from "../../img/main/Day - Timeline.jpg"
import DayEducation from "../../img/main/Day - Education.avif"
import DayMusic from "../../img/main/Day - Music.avif"
import DayProject from "../../img/main/Day - Project.jpg"
import DayContact from "../../img/main/Day - Contact.avif"
import DayAbout from "../../img/main/Day - About.jpeg"
import DayArts from "../../img/main/Day - Room.avif"
import DayProgram from "../../img/main/Day - Program.avif"

import "../includes/scroll.js"

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
                <Link to="/home/life/timeline" className="first-link">
                    <img src={ DayTimeline } alt="timeline"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Timeline</h2>
                    </div> 
                </Link>
                <Link to="/home/life/courses" className='first-link '>
                    <img src={ DayEducation } alt="education"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Education</h2>
                    </div>                    
                </Link>
                <Link to="/home/life" className='first-link first-link-3'>
                    <img src={ DayAbout } alt="about"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>About Me</h2>
                    </div> 
                </Link>
                <Link to="/home/projects" className='first-link first-link-4'>
                    <img src={ DayProject } alt="project"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Projects</h2>
                    </div> 
                </Link>
                <Link to="/home/room/music" className='first-link'>
                    <img src={ DayMusic } alt="music"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Music</h2>
                    </div> 
                </Link>
                <Link to="/home/life/programming" className='first-link '>
                    <img src={ DayProgram } alt="programming"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Programming</h2>
                        <h2>Skills</h2>
                    </div> 
                </Link>
                <Link to="/home/room" className='first-link'>
                    <img src={ DayArts } alt="arts"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>My Room</h2>
                    </div> 
                </Link>
                <Link to="/home/contact" className='first-link'>
                    <img src={ DayContact } alt="contact"></img>
                    <div className="text-over-image text-over-image-b">
                        <h2>Contact</h2>
                    </div> 
                </Link>
            </div>
            <div className="main-social">
                <a className="social" data-aos="fade-up" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">Linkedin</a>
                <a className="social" data-aos="fade-up" href="https://github.com/Fredd317" target="_blank" rel="noreferrer">Github</a>
            </div>            
        </div>
    )
};

export default Main; 