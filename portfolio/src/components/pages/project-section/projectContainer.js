import React from "react";
import ProjectBox from "./projectBox.js"

function ProjectContainer(props) {
    return (
        <div className="project-boxes">
            {props.projectList.map((project) => {
                if (props.containerName === project.status){
                    return(
                        <ProjectBox project={project}></ProjectBox>
                    )
                } else {
                    return(
                        <></>
                    )
                }
            })}
        </div>
    )
};

export default ProjectContainer; 
