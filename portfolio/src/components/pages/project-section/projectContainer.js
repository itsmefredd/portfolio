import React from "react";

import TechIcon from "./techIcon"
import TechIconList from "./techIconList";

function ProjectContainer(props) {
    return (
        <div className="project-boxes">
            {props.projectList.map((project) => {
                if (props.containerName == project.status){
                    return(
                        <div className="project-box">
                            <h3 className="project-title">
                                {project.name}
                            </h3>
                            <p>
                                {project.description} <br/>
                            </p>
                            <div className="project-tech-list">
                                <TechIconList techList={project.technology}/>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default ProjectContainer; 
