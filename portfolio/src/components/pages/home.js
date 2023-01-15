import React, { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../../theme.js" 

import Scroll from  "./includes/scroll.js"
import Footer from "./includes/footer.js";
import Main from "./main-section/main.js";
import Life from "./my-life-section/life.js";
import Room from "./my-room-section/room.js";
import Contact from "./contact-section/contact.js"
import Project from "./project-section/project.js";
import NotFound from "./nonfound-page/notfound.js"

import Header from "./header.js";

import './css/main.css'
import './includes/navbar.css'

const Home = () => {

    const [theme, setTheme] = useState("dark");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <div className="home">
                <GlobalStyle/>
                <Scroll/>
                <Header themeToggler={themeToggler} theme = {theme}/>

                <body className="body">
                    <Routes>
                        <Route path="/" element={ <Main /> }></Route>
                        <Route path="/MyLife/*" element={ <Life/> }></Route>
                        <Route path="/Projects" element={ <Project/> }></Route>
                        <Route path="/MyRoom" element={ <Room/> }></Route>
                        <Route path="/Contact" element={ <Contact/> }></Route>
                        <Route path="*" element={ <NotFound/> }></Route>
                    </Routes>
                </body>
                <Footer/>
            </div>
        </ThemeProvider>
    )
};

export default Home; 