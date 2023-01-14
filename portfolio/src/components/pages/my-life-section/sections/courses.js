import React from "react";
import { Link } from "react-router-dom"

const Courses = () => {
    return(
        <div className="courses">
            <h3 data-aos="fade-up">Some of the Important Courses I've taken at Dalhousie University</h3>
            <ul data-aos="fade-up">
                <li className='course' data-aos="fade-up">CSCI 1170: Web Design & Development</li>
                <li className='course' data-aos="fade-up">CSCI 2141: Database Systems</li>
                <li className='course' data-aos="fade-up">CSCI 2170: Server Side Scripting</li>
                <li className='course' data-aos="fade-up">CSCI 3110: Algorithms</li>
                <li className='course' data-aos="fade-up">CSCI 3120: Operating Systems</li>
                <li className='course' data-aos="fade-up">CSCI 3130: Software Engineering</li>
                <li className='course' data-aos="fade-up">CSCI 3151: Machine Learning</li>
                <li className='course' data-aos="fade-up">CSCI 4146: The Process of Data Science</li>
                <li className='course' data-aos="fade-up">CSCI 4171: Networks and Communication</li>
                <li className='course' data-aos="fade-up">STAT 2430: Data Visualization</li>
                <li className='course' data-aos="fade-up">STAT 2450: Data Mining in R</li>
            </ul>
            <div className="detailed-timeline-box">
                <Link to="/home/MyLife/courses" className="detailed-timeline-link"><span>View More Here</span></Link>
            </div>
        </div>
    )
}

export default Courses