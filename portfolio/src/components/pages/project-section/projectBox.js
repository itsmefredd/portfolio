import React from "react";

import TechIconList from "./techIconList";

function ProjectBox(props) {
    return(
        <div className="project-box">
            <h3 className="project-title">
                {props.project.name}
            </h3>
            <p>
                {props.project.description} <br/>
            </p>
            <div className="project-tech-list">
                <TechIconList techList={props.project.technology}/>
            </div>
        </div>
    )
};

export default ProjectBox; 
