import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';

import Icon from "../../img/favicon.ico"

// Importing CSS Files
import "./detailed-courses.css"
// Importing JS Files

// Returning Function
function DetailedCourses() {
  return (
    <div className="DetailedCourses">

        <h1>Detailed Version of Courses I Have Taken @ Dalhousie University</h1>

        <table className='courses'>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1105</td>
                <td>
                    <p>This course provides a general introduction to computer programming. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Procedural programming concepts are stressed.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1110</td>
                <td>
                    <p>This course provides a general introduction to computer science and the hardware and software of computers. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Algorithmic concepts, linear data structures are emphasized.</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1120</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1170</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1300</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1315</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1800</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 1801</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2100</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2110</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2122</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2134</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2141</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 2170</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 3151</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>CSCI 3171</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>MATH 1010</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>MATH 1030</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>STAT 2060</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>ECON 1101</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHYC 1280</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHYC 1290</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>
            <tr data-aos="fade-up" data-aos-delay="500">
                <td className='course-code'>PHIL 2991</td>
                <td>
                    <p>Course Description</p>
                </td>
            </tr>

        </table>

    </div>
  );
}

export default DetailedCourses;