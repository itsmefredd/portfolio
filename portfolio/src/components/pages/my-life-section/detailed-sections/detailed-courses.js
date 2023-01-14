import { Link } from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';
import "./detailed-courses.css"
import currentCourses from "../../../data/currentCourses.json"
import allCourses from "../../../data/courses.json"

function DetailedCourses() {
  return (
    <div className="DetailedCourses">
        <div className='back-to-life-course' data-aos="fade-right">
            <Link to="/home/MyLife" className='back-to-life-link-course'>Back</Link>
        </div>

        <h1 className='DetailedCourses-heading' data-aos="fade-up" data-aos-delay="200">Current Courses @ Dalhousie / Summer 2022</h1>
        <table className='courses'>
            {currentCourses.map((course) => (
                <tr data-aos="fade-up" data-aos-delay="100" className='course'>
                    <td className='course-code'>{course.code}</td>
                    <td className='course-desc'>
                        <p>{course.name}</p>
                        <p>{course.description}</p>
                    </td>
                </tr>
            ))}
        </table>

        <h1 className='DetailedCourses-heading' data-aos="fade-up" data-aos-delay="200">Detailed Version of Courses I Have Taken @ Dalhousie University</h1>
        <table className='courses'>
            {allCourses.map((course) => (
                <tr data-aos="fade-up" data-aos-delay="100" className='course'>
                    <td className='course-code'>{course.code}</td>
                    <td className='course-desc'>
                        <p>{course.name}</p>
                        <p>{course.description}</p>
                    </td>
                </tr>
            ))}
        </table>
    </div>
  );
}

export default DetailedCourses;