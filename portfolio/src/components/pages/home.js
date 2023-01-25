import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../../theme.js" 

import Scroll from  "./includes/scroll.js"
import Footer from "./includes/footer.js";
import MainTesting from "./main-section/main-testing.js";
import Life from "./my-life-section/life.js";
import Room from "./my-room-section/room.js";
import Contact from "./contact-section/contact.js"
import ProjectTest from "./project-section/ProjectTestPage";
import NotFound from "./nonfound-page/notfound.js"

import Header from "./header.js";

import './css/main.css'
import './includes/navbar.css'

const Home = () => {

    const [theme, setTheme] = useState("dark");
    const themeToggler = () => {
        storeUserSetPreference(theme === "light" ? "dark" : "light");
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    const [currentPage, setCurrentPage] = React.useState("Home");

    const storeUserSetPreference = (pref) => {localStorage.setItem("theme", pref);};
    const getUserSetPreference = () => {return localStorage.getItem("theme");};

    useEffect(() => {
        const userSetPreference = getUserSetPreference();
        if (userSetPreference) {
            setTheme(userSetPreference)
        }
    }, [theme])

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <div className="home">
                <GlobalStyle/>
                <Scroll/>
                <Header themeToggler={themeToggler} theme = {theme} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

                <body className="body">
                    <Routes>
                        {/* <Route path="/" element={ <Main currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route> */}
                        <Route path="/" element={ <MainTesting currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                        <Route path="/MyLife/*" element={ <Life currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                        <Route path="/Projects" element={ <ProjectTest currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                        <Route path="/MyRoom" element={ <Room currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                        <Route path="/Contact" element={ <Contact currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                        <Route path="*" element={ <NotFound currentPage={currentPage} setCurrentPage={setCurrentPage}/> }></Route>
                    </Routes>
                </body>
                <Footer/>
            </div>
        </ThemeProvider>
    )
};

export default Home; 