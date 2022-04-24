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
                    <h1 data-aos="fade-up" data-aos-delay="200">Introduction</h1>
                    <div data-aos="fade-up" data-aos-delay="400">Oh. You decided to stay and read more about me. Well, I should welcome you then. :3 </div>
                    <div data-aos="fade-up" data-aos-delay="600">I am a sophomore at Dalhousie University studying Computer Science. 
                        I am planning on pursuing bachelor of computer science along with certificates 
                        in Artificial Intelligence & Intelligent Systems, and Communication Technologies
                         & Cyber Security in 2023. </div>
                </div>

                {/* Timeline */}
                <div className="life-section">
                    <h1 data-aos="fade-up" data-aos-delay="800">Timeline</h1>
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