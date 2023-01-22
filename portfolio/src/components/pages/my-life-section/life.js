import React from "react";
import { Routes, Route } from "react-router-dom"

import DetailedTimeline from "./detailed-sections/detailed-timeline.js"
import LifeGeneral from "./detailed-sections/life-general.js";
import DetailedCourses from "./detailed-sections/detailed-courses.js"
import NotFound from "../nonfound-page/notfound.js";

function Life(props){

    props.setCurrentPage("My Life")

    return (
        <div className="life">
            <div className="main-life">

                {/* Body of website */}
                <body className="life-extension">
                    <Routes>
                        <Route path="/" element={ <LifeGeneral /> }></Route>
                        <Route path="/timeline" element={ <DetailedTimeline/> }></Route>
                        <Route path="/courses" element={ <DetailedCourses/> }></Route> 
                        <Route path="*" element={ <NotFound/> }></Route>
                    </Routes>
                </body>

            </div>
        </div>
    )
};

export default Life; 