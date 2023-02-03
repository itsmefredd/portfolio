import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import Graph from "./sections/graph.js"

import Band1 from "../../img/room/Band1.png"
import Band2 from "../../img//room/Band2.jpeg"
import Band3 from "../../img/room/Band3.jpeg"

import Tennis from "../../img/room/Tennis1.png"


function Room(props){

    props.setCurrentPage("My Room")

    return (
        <div className="room">

            <h1 className="room-section-one first-project" data-aos="fade-up" data-aos-delay="200">Welcome to My Room!</h1>

            <div className="room-section">
                <h2 className="room-section-one" data-aos="fade-up" data-aos-delay="400">Music</h2>
                <div className="room-music" data-aos="fade-up" data-aos-delay="600" style={{width: "90%", paddingLeft: "5%", paddingTop: "2rem"}}>
                    <div data-aos="fade-up" data-aos-delay="800">
                    As a music enthusiast, I have a particular fondness for instrumental compositions. 
                    I am proficient in playing several woodwind instruments, including the clarinet, 
                    bass clarinet, soprano saxophone, and tenor saxophone. The clarinet was my first 
                    woodwind instrument, which I started playing 9 years ago and have continued to do so. 
                    Over the years, I have expanded my repertoire to include the Bb family of 
                    instruments - the soprano and tenor saxophones. My introduction to the tenor 
                    saxophone marked a departure from the clarinet, and since then, I have developed a 
                    love for playing both the soprano and tenor saxophones. During my time at 
                    Halifax Grammar School, I was an active member of several bands, including the 
                    Senior Band, Wind Ensemble, Senior Jazz Band, and others. In my last few years, 
                    I also performed in the pit band for the school musicals, which involved playing 
                    all four of my woodwind instruments, presenting a significant challenge.
                    </div>
                    <dic className="music-images" data-aos="fade-up" data-aos-delay="1000">
                        <img src={ Band1 } className="band-image band3" alt="band1"></img>
                        <img src={ Band2 } className="band-image band2" alt="band2"></img>
                        <img src={ Band3 } className="band-image band1" alt="band3"></img>
                    </dic>
                    <div data-aos="fade-up">
                    In addition to the woodwind instruments, I am also skilled in playing the ukulele and guitar. 
                    I obtained my first ukulele during my 8th-grade year, and since then, I have cultivated my 
                    playing skills over the years. A few years ago, I added the guitar to my list of instruments. 
                    During my childhood in Korea, I received early exposure to music by playing the piano and violin, 
                    but unfortunately, I have limited recall of these experiences. However, I would be eager to 
                    reacquaint myself with these instruments in the future.
                    </div>
                </div>
            </div>

            <div className="room-section">
                <h2 className="room-section-one" data-aos="fade-up">Tennis</h2>
                <div className="tennis-section">
                    <div className="tennis-text" data-aos="fade-up">
                    My initiation into the sport of tennis dates back to my 7th-grade year. 
                    I have a fondness for sports that involve a racket, including badminton and squash. 
                    The photograph on the right features myself and my tennis team members from 
                    Halifax Grammar School, who participated in provincial competitions.
                    </div>
                    <div className="tennis-image" data-aos="fade-up">
                        <img src={ Tennis } className="tennis-image-img" alt="tennis-team"></img>
                    </div>
                </div>
            </div>
            
            <div className="room-section">
                <h2 className="room-section-one">Technology</h2>
                <div className="tech-section">
                    <div className="tech-text" data-aos="fade-up">
                        I love all about technology; hence, I decided to persue my career in Computer Science. :3
                        Some of my favourite techs are: 
                        <ul>
                            <li>Electric Vehicles</li>
                            <li>Autonomous Vehicles</li>
                            <li>Blockchain Technologies</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="room-section">
                <h1>Testing Chart</h1>

                <Graph/>
            </div>
        </div>
    )
};

export default Room; 