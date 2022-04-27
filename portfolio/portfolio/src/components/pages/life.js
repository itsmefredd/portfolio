import React from "react";
import { Routes, Route } from "react-router-dom"

import DetailedTimeline from "./life-sections/detailed-timeline.js"
import LifeGeneral from "./life-sections/life-general.js";
import DetailedCourses from "./life-sections/detailed-courses.js"
import NotFound from "./notfound.js";

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
                        <Route path="*" element={ <NotFound/> }></Route>
                    </Routes>
                </body>

            </div>
        </div>
    )
};

export default Life; 