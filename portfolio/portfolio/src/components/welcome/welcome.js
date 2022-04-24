// Importing libraries
import React from "react";
import { Link } from "react-router-dom";

// Welcome page Stylesheet
import './welcome.css'

// Welcome Content Function
const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-hello">
                <h1 data-aos="fade-in"  data-aos-delay="0">Hello. </h1>
            </div>
            <div className="welcome-text" data-aos="fade-in"  data-aos-delay="1000">
                Not sure why you would visit my portfolio as I am not an interesting person 😔 at all. 
                <br></br>
                You might want to leave 🚪 before start reading about me and yawn 🥱.
            </div>
            <div className="welcome-continue" data-aos="fade-in"  data-aos-delay="2000">
                Click 'Continue' if you are sure that you want to read more about me. :)
            </div>
            <div className="welcome-continue-link" data-aos="fade-in"  data-aos-delay="3000">
                <Link to="/home" className='welcome-home-link' >Continue</Link>
            </div>
        </div>
    )
};

export default Welcome; 