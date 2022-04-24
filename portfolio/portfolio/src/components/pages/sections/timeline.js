import React from "react";

const Timeline = () => {
    return(
        <div className="timeline" >
            <h3 data-aos="fade-up" data-aos-delay="1000">My Brief History on Education</h3>

            <table className='timeline'>
                <tr data-aos="fade-up" data-aos-delay="1200">
                    <td className='year'>2002</td>
                    <td>
                        <span className=''>Born in <font size="+2"><a href='https://en.wikipedia.org/wiki/Busan' target="_blank" rel="noreferrer" className='location-link'>Busan</a></font>, <a href='https://en.wikipedia.org/wiki/South_Korea' target="_blank" rel="noreferrer" className='location-link'> South Korea</a>. </span>
                    </td>
                </tr>
                <tr data-aos="fade-up" data-aos-delay="1400">
                    <td className='year'>2002</td>
                    <td>
                        <span className=''> Moved to <font size="+2"><a href='https://en.wikipedia.org/wiki/Geoje' target="_blank" rel="noreferrer" className='location-link'>Geoje</a></font>, South Korea. </span>
                    </td>
                </tr>
                <tr data-aos="fade-up" data-aos-delay="1600">
                    <td className='year'>2013</td>
                    <td>
                        <span className=''>Moved to Halifax, Nova Scotia, Canada. </span>
                    </td>
                </tr>
                <tr data-aos="fade-up" data-aos-delay="1800">
                    <td className='year'>2020</td>
                    <td>
                        <span className=''>Graduated high school: <font size="+2">Halifax Grammar School</font> with High Honours </span><br></br>
                        <span className='action-more'>High Honours given to students successfully finishing with 90% average or above. </span><br></br>
                        <span className='action-more'>Received <font size="+2">International Baccalaureate</font> Full Diploma</span>
                    </td>
                </tr>
                <tr data-aos="fade-up" data-aos-delay="2000">
                    <td className='year'></td>
                    <td>
                        <span>Studying <font size="+2">Computer Science</font> at Dalhousie University / CGPA: 4.22. </span><br></br>
                        <span className='action-more'>Working on certificates in:  </span><br></br>
                        <span className='action-more-more'>- <font size="+2">Artificial Intelligence</font> and Intelligent Systems </span><br></br>
                        <span className='action-more-more'>- Communication Technologies & <font size="+2">Cyber Security</font></span><br></br>
                        <span className='action-more'>Received Sexton Scholar every semester: given to those who achieved a GPA of 3.7 or higher. </span>
                    </td>
                </tr>
                <tr data-aos="fade-up">
                    <td className='year'>2023</td>
                    <td>
                        <span className=''> Planning on Graduating.</span><br></br>
                        <span className='action-more'><font size="+2">Where next?</font></span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Timeline;