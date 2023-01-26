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

                <body className="life-extension">
                    <Routes>
                        <Route path="/" element={ <LifeGeneral theme={props.theme} /> }></Route>
                        <Route path="/timeline" element={ <DetailedTimeline theme={props.theme}/> }></Route>
                        <Route path="/courses" element={ <DetailedCourses theme={props.theme}/> }></Route> 
                        <Route path="*" element={ <NotFound theme={props.theme}/> }></Route>
                    </Routes>
                </body>

            </div>
        </div>
    )
};

export default Life; 