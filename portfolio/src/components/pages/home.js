import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../../theme.js" 

import Scroll from  "./includes/scroll.js"
import Footer from "./includes/footer.js";
import Main from "./main.js";
import Life from "./life.js";
import Room from "./room.js";
import Contact from "./contact.js"
import Project from "./project.js";
import NotFound from "./notfound.js"

import './css/main.css'
import './includes/navbar.css'

const Home = () => {

    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <div className="home">
                <GlobalStyle/>
                <Scroll/>
                <header className="header">
                    <div className="navbar">
                        <div className="links">
                            <Link to="/home" className='home-link'>Home</Link>
                            <Link to="/home/life" className='home-link'>My Life</Link>
                            <Link to="/home/projects" className='home-link'>Projects</Link>
                            <Link to="/home/room" className='home-link'>My Room</Link>
                            <Link to="/home/contact" className='home-link'>Contact</Link>
                        </div>
                        <div className="main-buttoms">
                            <div className="dark-mode">
                                <button className="select-dark-mode" onClick={() => themeToggler()}>Dark Mode</button>
                            </div>
                        </div>
                    </div>
                </header>
                <body className="body">
                    <Routes>
                        <Route path="/" element={ <Main /> }></Route>
                        <Route path="/life/*" element={ <Life/> }></Route>
                        <Route path="/projects" element={ <Project/> }></Route>
                        <Route path="/room" element={ <Room/> }></Route>
                        <Route path="/contact" element={ <Contact/> }></Route>
                        <Route path="*" element={ <NotFound/> }></Route>
                    </Routes>
                </body>
                <Footer/>
            </div>
        </ThemeProvider>
    )
};

export default Home; 