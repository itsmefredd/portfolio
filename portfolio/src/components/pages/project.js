import React from "react";

import Blog1 from '../img/blog1.png'
import Blog2 from '../img/blog2.png'
import Synchrotron1 from '../img/synchrotron1.png'
import Synchrotron2 from '../img/synchrotron2.png' 
import btc1 from '../img/btc1.png' 
import btc2 from '../img/btc2.png' 
import port1 from '../img/Portfolio-Project1.png' 

const Project = () => {
    return (
        <div className="project">
            <h1 className="first-project" data-aos="fade-up" data-aos-delay="100">My Projects:</h1>
            
            {/* Project #1 */}

            <div className='project-list'>
                <h3 data-aos="fade-up" data-aos-delay="200">Mini Blog Website</h3>
                <p data-aos="fade-up" data-aos-delay="300">
                    This was a project of building a blog website. 
                    Users were able to create accounts and log in or out to the website.
                    Once logged in, they were able to post their own blogs, and 
                    view others' blogs and comment as well. 
                    My team and I built and connected a SQL database as well, 
                    and the database was holding users' log in information
                    posts, and comments as well. 
                    Users were also able to subcribce to other users as well 
                    which had a page of its own and show a list and 
                    thumbnail photos with descriptions. 
                    My main role was the build SQL database and connect to the website, 
                    design the website, 
                    as well as wrote HTML, CSS, and JS of the main pages. 
                </p>
                <div className="synchrotron-images" data-aos="fade-up" data-aos-delay="400">
                    <img className="synchrotron-image" src={ Blog1 } alt="blog1"></img>
                    <img className="synchrotron-image" src={ Blog2 } alt="blog2"></img>
                </div>
                <p data-aos="fade-up" data-aos-delay="500">
                    Some of the technologies used: HTML, CSS, JS, PHP, SQL, and VSCode. 
                </p>
            </div>

            {/* Project #2 */}

            <div className='project-list'>
                <h3 data-aos="fade-up" data-aos-delay="600">Synchrotron Project</h3>
                <p data-aos="fade-up" data-aos-delay="700">
                Tests on heavy metal concentrations in mussel were performed at the Canadian Light Source with particle accelerator in Saskatoon, Canada. 
                A member of the team from the beginning of the project with designing project to the end travelling to Saskatoon visiting CLS 
                in order to perform the tests and presenting for audiences including scientists.
                </p>
                <div className="synchrotron-images" data-aos="fade-up">
                    <img className="synchrotron-image synchrotron1" src={ Synchrotron1 } alt="synchrotron1"></img>
                    <img className="synchrotron-image synchrotron2" src={ Synchrotron2 } alt="synchrotron2"></img>
                </div>
                <p data-aos="fade-up">
                    Some of the technologies used: MS excel and BioXAS imaging. 
                </p>
            </div>


            {/* Ongoing Project #1 */}

            <h1 data-aos="fade-up">Current Projects:</h1>

            <div className='project-list'>
                <h3 data-aos="fade-up">Cryptocurrency Price Predicting Model</h3>
                <p data-aos="fade-up">
                I am working on a model that will receive information about a certain cryptocurrency via Binance API 
                and predict its price in a chosen time period. I am applying some of machine learning concepts from
                a class I took at Dalhousie University on machine learning. I am experimenting by testing and fitting 
                models with different features such as history price, RSI chart, candles, bollinger bands and many more. 
                </p>
                <div className="synchrotron-images" data-aos="fade-up">
                    <img className="synchrotron-image synchrotron1" src={ btc1 } alt="btc1"></img>
                    <img className="synchrotron-image synchrotron2" src={ btc2 } alt="btc2"></img>
                </div>
                <p data-aos="fade-up">
                    Some of the technologies used: Binance API, Python, Jupiter Notebook, Sckit-Learn, and Itellij. 
                </p>
            </div>

            <div className='project-list'>
                <h3 data-aos="fade-up">Portfolio Website</h3>
                
                <div className="synchrotron-images" data-aos="fade-up">
                    <img className="synchrotron-image synchrotron1" src={ port1 } alt="btc1"></img>
                    <img className="synchrotron-image synchrotron2" src={ port1 } alt="btc2"></img>
                </div>
                <p data-aos="fade-up">
                    React
                </p>
            </div>

            <h1 data-aos="fade-up">Future Projects That Are Coming Soon:</h1>

            {/* Future Project #1 */}

            {/* Future Project #2 */}

            <div className='project-list'>
                <h3 data-aos="fade-up">CSCI 3130: Introduction to Software Engineering </h3>
                <p data-aos="fade-up">
                The course examines the process of software development, from initial planning through implementation and maintenance. 
                A brief survey of available tools and techniques will be presented covering the topics of 
                analysis, planning, estimating, project management, design, testing, and evaluation. 
                Particular emphasis will be given to organizing and planning, team participation and management, 
                top-down design and structure charts, system and information flow diagrams, walk-throughs and peer review, and testing and quality control.
                </p>
                <p data-aos="fade-up">
                    Some of the technologies used: NA. 
                </p>
            </div>

            <div data-aos="fade-up">More coming soon :)</div>
        </div>
    )
};

export default Project; 