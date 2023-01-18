import React from "react";


import Band1 from "../../img/room/Band1.png"
import Band2 from "../../img//room/Band2.jpeg"
import Band3 from "../../img/room/Band3.jpeg"

import Tennis from "../../img/room/Tennis1.png"

const Room = () => {
    return (
        <div className="room">

            <h1 className="room-section-one first-project" data-aos="fade-up" data-aos-delay="200">Welcome to My Room!</h1>

            <div className="room-section">
                <h2 className="room-section-one" data-aos="fade-up" data-aos-delay="400">Music</h2>
                <div className="room-music" data-aos="fade-up" data-aos-delay="600">
                    <div data-aos="fade-up">
                        I am a fan of music, especially instrumental. 
                    </div>
                    <div data-aos="fade-up" data-aos-delay="800">
                    I play the clarinet, the bass clarinet, the soprano saxophone, and the tenor saxophone. 
                    Clarinet was the first woodwind instrument I started with, and I loved it; hence, I still play it after 9 years. 
                    During the years, soprano and tenor saxophones were added to my list, the Bb family! 
                    I first tried the tenor saxophone, and it was difference from the clarinet. 
                    Since then, I kept playing and eventually started playing the soprano saxophone. 
                    My time at Halifax Grammar School, a huge part of it was the bands. 
                    I was a member of Senior Band, Wind Emsemble, Senior Jazz Band, and a few more. 
                    In my last few years there, I was a member of pit band for school musicals. 
                    That is when I played all 4 woodwinds, which was not easy. 
                    </div>
                    <dic className="music-images" data-aos="fade-up" data-aos-delay="1000">
                        <img src={ Band1 } className="band-image band3" alt="band1"></img>
                        <img src={ Band2 } className="band-image band2" alt="band2"></img>
                        <img src={ Band3 } className="band-image band1" alt="band3"></img>
                    </dic>
                    <div data-aos="fade-up">
                    Other than those, I play the ukulele and the guitar. 
                    I got my hands on a ukulele back when I was in 8th grade. 
                    Since then, I have been playing for years and picked up a guitar a few years ago. 
                    I used to play the piano and the violin back when I was very little in Korea and I remember almost nothing, 
                    though I would be very happy to re-learn! 
                    </div>
                </div>
            </div>

            <div className="room-section">
                <h2 className="room-section-one" data-aos="fade-up">Tennis</h2>
                <div className="tennis-section">
                    <div className="tennis-text" data-aos="fade-up">
                        I first started playing tennis back when I was in 7th grade. 
                        I generally love playing sports that requires a racket: such as badminton and squash. 
                        The photo on the right is me and my tennis team members from Halifax Grammar School for 
                        provincial competitions. 
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
                            <li>- Electric Vehicles</li>
                            <li>- Autonomous Vehicles</li>
                            <li>- Blockchain Technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Room; 