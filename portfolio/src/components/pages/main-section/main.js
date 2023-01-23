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
                <h1 className="q1 qu1" data-aos="fade-up">I am Frederick Go.</h1>
                <h1 className="q1 qu2" data-aos="fade-up">I am not a&nbsp;
                    <span className="text-ani">
                        <span data-aos="fade-left">p</span> 
                        <span data-aos="fade-up">r</span> 
                        <span data-aos="fade-up">o</span> 
                        <span data-aos="fade-up">g</span> 
                        <span data-aos="fade-up">r</span> 
                        <span data-aos="fade-up">a</span> 
                        <span data-aos="fade-up">m</span> 
                        <span data-aos="fade-up">m</span> 
                        <span data-aos="fade-up">e</span> 
                        <span data-aos="fade-up">r</span> 
                    </span>
                .</h1>
                <h1 className="q1 qu3" data-aos="fade-up">I am a&nbsp;
                    <span className="text-ani">
                        <span data-aos="fade-up">p</span>
                        <span data-aos="fade-up">r</span>
                        <span data-aos="fade-up">o</span>
                        <span data-aos="fade-up">b</span>
                        <span data-aos="fade-up">l</span>
                        <span data-aos="fade-up">e</span>
                        <span data-aos="fade-up">m</span>&nbsp;
                        <span data-aos="fade-up">s</span>
                        <span data-aos="fade-up">o</span>
                        <span data-aos="fade-up">l</span>
                        <span data-aos="fade-up">v</span>
                        <span data-aos="fade-up">e</span>
                        <span data-aos="fade-up">r</span>
                    </span>
                .</h1>
            </div>
            <div className="main-links" data-aos="fade-up">
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
                <a className="social" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">Linkedin</a>
                <a className="social" href="https://github.com/Fredd317" target="_blank" rel="noreferrer">Github</a>
            </div>            
        </div>
    )
};

export default Main; 