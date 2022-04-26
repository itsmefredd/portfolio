import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Navbar from "./includes/navbar";
import Footer from "./includes/footer";
import Timeline from "./sections/timeline.js"
import Languages from "./sections/languages.js"
import Courses from "./sections/courses.js"

const Life = () => {
    return (
        <div className="life">
            <div className="main-life">

                {/* Introduction */}
                <div className="life-section">
                    <h1 data-aos="fade-up" data-aos-delay="100">About Me</h1>
                    <div className="about-me-content">
                        <div data-aos="fade-up" data-aos-delay="200">
                            <p>Oh. You decided to stay and read more about me. Well, I should welcome you then. :3</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <p>I am a sophomore at&nbsp;
                                <a href="https://www.dal.ca/" target="_blank" rel="noreferrer"><font size="+2" className="text-scale">Dalhousie University</font></a>&nbsp;studying&nbsp;
                                <a href="https://www.dal.ca/faculty/computerscience.html" target="_blank" rel="noreferrer"><font size="+2" className="text-scale">Computer Science</font></a>.
                            I am planning on pursuing bachelor of computer science along with certificates in&nbsp;
                            <font size="+2" className="text-scale">Artificial Intelligence & Intelligent Systems</font>, and&nbsp;
                            <font size="+2" className="text-scale">Communication Technologies & Cyber Security</font> in 2023.</p>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="life-section">
                    <h1 data-aos="fade-up" data-aos-delay="400">Timeline</h1>
                    <Timeline/>
                </div>

                {/* Languages */}
                <div className="life-section">
                    <h1 data-aos="fade-up">Languages</h1>
                    <Languages/>
                </div>

                {/* Dalhousie */}
                <div className="life-section last-section">
                    <h1 data-aos="fade-up">Courses</h1>
                    <Courses/>
                </div>
                

                

                

                

            </div>
        </div>
    )
};

export default Life; 