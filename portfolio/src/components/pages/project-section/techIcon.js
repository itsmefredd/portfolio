import React from "react";

function ProjectIcon(props) {

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    let url = "";

    switch(props.techName) {
        case "HTML":
            return(<span><img src="https://img.shields.io/badge/HTML-e34f26?style=flat&logo=html5&logoColor=white"/></span>)
            break;
        case "CSS":
            return(<span><img src="https://img.shields.io/badge/CSS-1572b6?style=flat&logo=css3&logoColor=white"/></span>)
            break;
        case "JAVASCRIPT":
            return(<span><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/></span>)
            break;
        case "C":
            return(<span><img src="https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=white"/></span>)
            break;
        case "C++":
            return(<span><img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=c++&logoColor=white"/></span>)
            break;
        case "PYTHON":
            return(<span><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"/></span>)
            break;
        case "R":
            return(<span><img src="https://img.shields.io/badge/R-276DC3?style=flat&logo=R&logoColor=white"/></span>)
            break;
        case "HASKELL":
            return(<span><img src="https://img.shields.io/badge/HasKell-5D4F85?style=flat&logo=haskell&logoColor=white"/></span>)
            break;
        case "REACT":
            return(<span><img src="https://img.shields.io/badge/React-61dafb?style=flat&logo=react&logoColor=black"/></span>)
            break;
        case "NEXTJS":
            return(<span><img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white"/></span>)
            break;
        case "MATERIALUI":
            return(<span><img src="https://img.shields.io/badge/Material UI-007FFF?style=flat&logo=MUI&logoColor=white"/></span>)
            break;
        case "BOOTSTRAP":
            return(<span><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"/></span>)
            break;
        case "TAILWINDCSS":
            return(<span><img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/></span>)
            break;
        case "GIT":
            return(<span><img src="https://img.shields.io/badge/Git-f05032?style=flat&logo=git&logoColor=white"/></span>)
            break;
        case "GITHUB":
            return(<span><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"/></span>)
            break;
        case "GITLAB":
            return(<span><img src="https://img.shields.io/badge/GitLab-0052cc?style=flat&logo=bitbucket&logoColor=white"/></span>)
            break;
        case "AWS":
            return(<span><img src="https://img.shields.io/badge/AWS-232f3e?style=flat&logo=amazon-aws&logoColor=white"/></span>)
            break;
        case "VERCEL":
            return(<span><img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white"/></span>)
            break;
        case "HEROKU":
            return(<span><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white"/></span>)
            break;
        case "JUPYTER":
            return(<span><img src="https://img.shields.io/badge/Jupyter-F37626?style=flat&logo=jupyter&logoColor=black"/></span>)
            break;
        case "SCIKITLEARN":
            return(<span><img src="https://img.shields.io/badge/Scikit Learn-F7931E?style=flat&logo=scikit-learn&logoColor=black"/></span>)
            break;
        case "PANDAS":
            return(<span><img src="https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white"/></span>)
            break;
        case "NUMPY":
            return(<span><img src="https://img.shields.io/badge/Numpy-013243?style=flat&logo=numpy&logoColor=white"/></span>)
            break;
        case "BINANCE":
            return(<span><img src="https://img.shields.io/badge/Binance-F0B90B?style=flat&logo=binance&logoColor=white"/></span>)
            break;
        case "INTELLIJ":
            return(<span><img src="https://img.shields.io/badge/IntelliJ IDEA-F0B90B?style=flat&logo=intellij idea&logoColor=white"/></span>)
            break;
        case "PHP":
            return(<span><img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white"/></span>)
            break;
        case "MYSQL":
            return(<span><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/></span>)
            break;
        case "RSTUDIO":
            return(<span><img src="https://img.shields.io/badge/R Studio-75AADB?style=flat&logo=RSTUDIO&logoColor=white"/></span>)
            break;
        case "WIRESHARK":
            return(<span><img src="https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=Wireshark&logoColor=white"/></span>)
            break;
        case "MAMP":
            return(<span><img src="https://img.shields.io/badge/Mamp-02749C?style=flat&logo=Mamp&logoColor=white"/></span>)
            break;
        case "JSON":
            return(<span><img src="https://img.shields.io/badge/Json-000000?style=flat&logo=Json&logoColor=white"/></span>)
            break
        case "UNITY":
            return(<span><img src="https://img.shields.io/badge/Unity-FFFFFF?style=flat&logo=Unity&logoColor=black"/></span>)
            break
        case "C#":
            return(<span><img src="https://img.shields.io/badge/C Sharp-239120?style=flat&logo=C-Sharp&logoColor=white"/></span>)
            break
        default:
            url = "https://img.shields.io/badge/" + props.techName + "-" + randomColor + "?style=flat"
            return(<span><img src={url}/></span>)
      }
};

export default ProjectIcon; 

// Project List

// On-going projects: 
// Cryptocurrency Price Predicting Model
// Portfolio Website
// AWS
// Data Science Project 

// Past projects: 
// Synchrotron Project
// Mini Blog Website
// CSCI 3130 Trello cloning
// Data Visualization Project STAT 2430
// Game-dev: Racing game

// Projects to come: 
// Park Bom Academy Website Project
// Haskell Project
