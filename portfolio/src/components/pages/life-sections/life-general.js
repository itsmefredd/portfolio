import Timeline from "../sections/timeline"
import Languages from "../sections/languages.js"
import Courses from "../sections/courses.js"

// Returning Function
function lifeGeneral() {
  return (
    <div className="App">
      
      {/* Introduction */}
      <div className="life-section">
        <h1 data-aos="fade-up" data-aos-delay="100">About Me</h1>
        <div className="about-me-content">
            <div data-aos="fade-up" data-aos-delay="200">
                <p>Oh. You decided to stay and read more about me. Well, I should welcome you then. :3</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <p>I am a sophomore at&nbsp;
                    <a href="https://www.dal.ca/" target="_blank" rel="noreferrer"><font size="+2" className="text-scale1">Dalhousie University</font></a>&nbsp;studying&nbsp;
                    <a href="https://www.dal.ca/faculty/computerscience.html" target="_blank" rel="noreferrer"><font size="+2" className="text-scale2">Computer Science</font></a>.
                I am planning on pursuing bachelor of computer science along with certificates in&nbsp;
                <font size="+2" className="text-scale3">Artificial Intelligence & Intelligent Systems</font>, and&nbsp;
                <font size="+2" className="text-scale4">Communication Technologies & Cyber Security</font> in 2023.</p>
            </div>
        </div>
    </div>

    {/* Timeline */}
    <div className="life-section">
        <h1 data-aos="fade-up" data-aos-delay="400">Timeline</h1>
        <Timeline/>
    </div>

    {/* Languages */}
    <div className="life-section">
        <h1 data-aos="fade-up">Languages</h1>
        <Languages/>
    </div>

    {/* Dalhousie */}
    <div className="life-section last-section">
        <h1 data-aos="fade-up">Courses</h1>
        <Courses/>
    </div>

    </div>
  );
}

export default lifeGeneral;