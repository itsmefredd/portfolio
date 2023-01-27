import Timeline from "../sections/timeline.js"
import Languages from "../sections/languages.js"
import Courses from "../sections/courses.js"
import LanguageTest from "./../sections/languageTest"
import { Link } from "react-router-dom"

// Returning Function
function lifeGeneral(props) {

    console.log("life section ", props.theme)

  return (


    <div className="App">
      {/* Introduction */}
      <div className="life-section">
        <h1 data-aos="fade-up"><span>About Me</span></h1>
        <div className="about-me-content">
            <div data-aos="fade-up">
                <p>Oh. You decided to stay and read more about me. Well, I should welcome you then. :3</p>
            </div>
            <div data-aos="fade-up">
                <p>I am a senior at&nbsp;
                    <a href="https://www.dal.ca/" target="_blank" rel="noreferrer"><font size="+2" className="text-scale1">Dalhousie University</font></a>&nbsp;studying&nbsp;
                    <a href="https://www.dal.ca/faculty/computerscience.html" target="_blank" rel="noreferrer"><font size="+2" className="text-scale2">Computer Science</font></a>.
                I am planning on pursuing bachelor of computer science along with certificates in&nbsp;
                <font size="+2" className="text-scale3">Data Science</font>, and&nbsp;
                <font size="+2" className="text-scale4">Communication Technologies & Cyber Security</font> in 2023.</p>
            </div>
        </div>
    </div>

    {/* Timeline */}
    <div className="life-section">
        <h1 data-aos="fade-up"><span>Timeline</span></h1>
        <Timeline/>
    </div>

    {/* Languages */}
    <div className="life-section">
        <h1 data-aos="fade-up"><span>Tools</span></h1>
        <Languages/>
    </div>

    <div className="life-section" style={{minHeight: "80vh", height: "fit-contents"}} >
        <h1 data-aos="fade-up"><span>Tools</span><span style={{fontSize: "12pt", textDecoration: "none"}}> Click on a tool to view projects with it</span></h1>
        <LanguageTest theme={props.theme}/>
        <div className="tool-to-project ">
            <Link to="tools" className="detailed-timeline-link">View All Tools</Link>
        </div>
    </div>
      

    {/* Dalhousie */}
    <div className="life-section last-section">
        <h1 data-aos="fade-up"><span>Courses</span></h1>
        <Courses/>
    </div>

    </div>
  );
}

export default lifeGeneral;