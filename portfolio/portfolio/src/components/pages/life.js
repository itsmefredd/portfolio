import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";
import Scroll from  "./includes/scroll.js"

import Navbar from "./includes/navbar";
import Footer from "./includes/footer";
import Timeline from "./sections/timeline.js"
import Languages from "./sections/languages.js"
import Courses from "./sections/courses.js"
import DetailedTimeline from "./life-sections/detailed-timeline.js"
import LifeGeneral from "./life-sections/life-general.js";
import DetailedCourses from "./life-sections/detailed-courses.js"

const Life = () => {
    return (
        <div className="life">
            <div className="main-life">

                {/* Body of website */}
                <body className="life-extension">
                    <Routes>
                        <Route path="/" element={ <LifeGeneral /> }></Route>
                        <Route path="/timeline" element={ <DetailedTimeline/> }></Route>
                        {/* {/* <Route path="/language" element={ <Languages/> }></Route> */}
                        <Route path="/courses" element={ <DetailedCourses/> }></Route> 
                    </Routes>
                </body>

            </div>
        </div>
    )
};

export default Life; 