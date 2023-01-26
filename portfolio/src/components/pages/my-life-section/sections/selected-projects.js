import React from "react";
import { Link } from "react-router-dom";

import allProjects from "../../../data/projects.json"

import ProjectBox from "../../project-section/projectBox"

let filteredProject = []

function filterProjects(keyword){
    filteredProject = []
    allProjects.forEach(project => {
        if (project.technology.includes(keyword) && filteredProject.length !== 3){
            filteredProject.push(project)
        }
    });

}



function SelectedProjects(props){
    filterProjects(props.selectedLanguage)
    console.log(filteredProject)

    return (
        <div className="tools-specific" >
            {filteredProject && filteredProject.map((project) => {
                return (
                    <ProjectBox project={project}></ProjectBox>
                )
            })}
            <div className="tool-to-project ">
                <Link to="/home/Projects" className="detailed-timeline-link">View all projects/works</Link>
            </div>
        </div>
    )
};

export default SelectedProjects; 