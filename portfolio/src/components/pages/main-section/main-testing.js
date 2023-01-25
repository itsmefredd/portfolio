import React from "react";
import { Link } from "react-router-dom";

import FrederickPhoto from "../../img/main/FrederickPhoto.jpeg"
import FrederickPhoto2 from "../../img/main/FrederickPhoto2.jpg"

import "../includes/scroll.js"

import projectList from "../../data/projects.json"

import TechIconList from "./../project-section/techIconList"

function Main(){
    return (
        <div className="main" data-aos="fade-up">
            <div className="main-introduction">
                <div className="main-introduction-left">
                    <div className="main-introduction-photo">
                        <img className="main-introduction-photo-item" src={ FrederickPhoto } alt="A photo of Frederick Go"></img>
                    </div>
                    <div className="main-introduction-photo-bg"></div>
                </div>
                <div className="main-introduction-right">
                    <div className="main-introduction-paragraph">
                        <div>Hi there, my name is Donghyeon (Frederick/Fred) Go :)</div>
                        <div>Data Scientist + Web Dev + Programmer</div>
                        <div>Nice to see you.</div>
                    </div>
                </div>
            </div>
            
            <div className="main-introduction-addition">
                <div className="main-introduction-addition-words">
                    <div className="main-introduction-addition-header">
                        My Education
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Senior at Dalhousie University
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Studying Computer Science and Statistics
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Data Science Certificate
                    </div>
                    <div className="main-introduction-addition-paragraph">
                        Communication Technologies & Cyber Security Certificate
                    </div>
                    <div className="main-introduction-addition-paragraph main-introduction-addition-link"> 
                        <a href="/home/MyLife">
                            View more about my education here
                        </a>
                    </div>
                </div>
                <div className="main-introduction-addition-photo">
                    <img className="main-introduction-addition-photo-item" src={ FrederickPhoto2 } alt="A photo of Frederick Go"></img>
                </div>
            </div>

            <div className="main-projects">
                <div className="main-projects-head">
                    My Pinned Projects
                </div>
                <div className="main-projects-list">
                    {projectList.map((project) => {
                        if ("Pinned Projects" == project.status){
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
                <div className="main-projects-link">
                    <a href="/home/Projects">
                        View all projects
                    </a>
                </div>
            </div>

            <div>
                <span>
                    Oh, you've come down this far. 'O'<br/>
                    Wow!<br/>
                    <a href="/home/MyRoom">Here are more few interesting facts about me!</a>
                </span>
                <span>
                    
                </span>
            </div>

            <div className="main-social">
                <a className="contact-social" data-aos="fade-up" data-aos-delay="700" href="https://www.linkedin.com/in/fred-go/" target="_blank">
                <img align="left" alt="Frederick's LinkedIN" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
                </a>
                <a className="contact-social" data-aos="fade-up" data-aos-delay="400" href="https://github.com/itsmefredgo" target="_blank">
                    <img align="left" alt="Frederick's GitHub" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg" />
                </a>
                <a className="contact-social" data-aos="fade-up" data-aos-delay="400" href="https://www.linkedin.com/in/frederick-go-1b9b56203/" target="_blank">
                    <img align="left" alt="Frederick's Instagram" width="22px" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
                </a>
            </div>     
        </div>
    )
};

export default Main; 