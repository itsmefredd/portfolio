// Importing libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Scroll from  "./includes/scroll.js"

// Main pages Stylesheet
import './css/main.css'

// All page components based on url
import Navbar from "./includes/navbar.js";
import Footer from "./includes/footer.js";
import Main from "./main.js";
import Life from "./life.js";
import Room from "./room.js";
import Contact from "./contact.js"
import Project from "./project.js";

// Main content function
const Home = () => {
    return (
        // <Router>
        <div className="home">

            {/* Scroll function read */}
            <Scroll/>

            {/* Navigation bar or header */}
            <header className="header">
                <Navbar/>
            </header>
            
            {/* Body of website */}
            <body className="body">
                <Routes>
                    <Route path="/" element={ <Main /> }></Route>
                    <Route path="/life/*" element={ <Life/> }></Route>
                    <Route path="/projects" element={ <Project/> }></Route>
                    <Route path="/room" element={ <Room/> }></Route>
                    <Route path="/contact" element={ <Contact/> }></Route>
                </Routes>
            </body>
            
            {/* Footer of website */}
            <Footer/>
            
        </div>
    )
};

export default Home; 