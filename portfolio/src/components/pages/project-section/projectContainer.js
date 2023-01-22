import React from "react";

import TechIcon from "./techIcon"
import TechIconList from "./techIconList";

function ProjectContainer(props) {
    return (
        <>
            {props.projectList.map((project) => {
                if (props.containerName == project.status){
                    return(
                        <div className="project-box">
                            <h3>{project.name}</h3>
                            <p>
                                {project.description} <br/>
                                <TechIconList techList={project.technology}/>
                            </p>
                        </div>
                    )
                }
            })}
        </>
    )
};

export default ProjectContainer; 
