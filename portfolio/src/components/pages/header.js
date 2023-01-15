import React from "react";
import { Link } from "react-router-dom"
import { MdNightlightRound } from "react-icons/md";

const pages = ['Home', 'My Life', 'Projects', 'My Room', 'Contact'];

/**
 * This function takes a string input and removes space(s). 
 * Idea barrowed from https://stackoverflow.com/questions/34174207/how-to-change-indentation-in-visual-studio-code
 * @param {*} inputString the string to remove space(s) from
 * @returns new string with space(s) removed
 */ 
function spaceRemover(inputString){
    // If page is Home, return an empty string. 
    if (inputString == "Home"){return ""}
    return inputString.replace(/\s/g, '');
}

const Header = (props) => {
    const [currentPage, setCurrentPage] = React.useState("Home");
    return (
        <header className="header">
            <div className="navbar">
                <div className="links">
                    {pages.map((page) => {
                        if (props.theme === "dark"){
                            return (
                                <Link
                                    key={page} 
                                    to={"/home/" + spaceRemover(page)} 
                                    className="header-button home-link" 
                                    style={{"textAlign": "center", "font-weight": currentPage === page ? "bold" : "", color: "#f0efef", "color": currentPage === page ? "white" : "#a1aba3"}} 
                                    onClick={() => setCurrentPage(page)}   
                                >
                                    {page}
                                </Link>
                            )
                        } else {
                            return (
                                <Link
                                    key={page} 
                                    to={"/home/" + spaceRemover(page)} 
                                    className="header-button home-link" 
                                    style={{"textAlign": "center", "font-weight": currentPage === page ? "bold" : "", color: "#f0efef", "color": currentPage === page ? "black" : "#a1aba3"}} 
                                    onClick={() => setCurrentPage(page)}   
                                >
                                    {page}
                                </Link>
                            )
                        }
                    })}
                </div>
                <div className="main-buttoms">
                    <div className="dark-mode">
                        <button 
                            className="select-dark-mode" 
                            onClick={props.themeToggler}
                            style={{"backgroundColor": props.theme === "dark" ? "#212529" : "#f0efef"}}
                        >
                            <MdNightlightRound/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header; 