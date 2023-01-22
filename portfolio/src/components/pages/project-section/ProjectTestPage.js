import React from "react";

import Blog1 from '../../img/projects/blog1.png'
import Blog2 from '../../img/projects/blog2.png'
import Synchrotron1 from '../../img/projects/synchrotron1.png'
import Synchrotron2 from '../../img/projects/synchrotron2.png' 
import btc1 from '../../img/projects/btc1.png' 
import btc2 from '../../img/projects/btc2.png' 
import port1 from '../../img/projects/Portfolio-Project1.png' 

import projects from "../../data/projects.json"
import ProjectContainer from "./projectContainer"

import projectList from "../../data/projects.json"

const projectsArray = projects

const projectContainers = ["Pinned Projects", "Current Projects", "Past Projects", "Projects to Come"]

function Project() {
    return (
        <div className="project" data-aos="fade-up">

            {projectContainers.map((containerName) => (
                <div className="project-container">
                    <h1 className="project-container-header">{containerName}</h1>
                    <ProjectContainer containerName={containerName} projectContainers={projectContainers} projectList={projectList} status={containerName}></ProjectContainer>
                </div>
            ))}

        </div>
    )
};

export default Project;
