import React from "react";
import { Link } from "react-router-dom";

import './navbar.css'

const Navbar = () => {
    return (
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
                    <button className="select-dark-mode">Dark Mode</button>
                </div>
            </div>
        </div>
    )
};

export default Navbar; 