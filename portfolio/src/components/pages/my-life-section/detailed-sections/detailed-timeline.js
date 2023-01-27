import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';

function DetailedTimeline() {
  return (
    <div className="DetailedTimeline">

        <div className='back-to-life' data-aos="fade-right">
            <Link to="/home/MyLife" className='back-to-life-link'>Back</Link>
        </div>
      
        <h1 className='detailed-timeline-heading'>Frederick's Life</h1>

            <VerticalTimeline lineColor="#034f84">

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2002 March - 2013"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Hello there</h3>
                <h4 className="vertical-timeline-element-subtitle">Busan to Geoje, South Korea</h4>
                <p>
                    Born in Busan then moved to <br/>Geoje-do (거제도). 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdcebe', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #bdcebe' }}
                date="2008 - 2013"
                iconStyle={{ background: '#bdcebe', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Elementary School</h3>
                <h4 className="vertical-timeline-element-subtitle">Aju-Elementary School, Geoje</h4>
                <p>
                    I spent most of my elementary school student life at Aju-Elementary School located in Aju-dong, Geoje. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#deeaee', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #deeaee' }}
                date="2013 - Present"
                iconStyle={{ background: '#deeaee', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Study Abroad</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax, Canada</h4>
                <p>
                    Moved to Halifax, Nova Scotia, Canada into a 6th grade. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d5f4e6', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d5f4e6' }}
                date="2013 - 2014"
                iconStyle={{ background: '#d5f4e6', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Graduated Elementary School!</h3>
                <h4 className="vertical-timeline-element-subtitle">Inglis-Street Elementary School, Halifax</h4>
                <p>
                    Finished elementary school curriculum at Inglish-Street Elementary School. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b2b2b2', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b2b2b2' }}
                date="2014 - 2017"
                iconStyle={{ background: '#b2b2b2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Middle School</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    Started studying at Halifax Grammar School. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b0aac0', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b0aac0' }}
                date="2014"
                iconStyle={{ background: '#b0aac0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Clarinet</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I picked up my clarinet and stareted playing in school bands. 
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2015"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Trumpet</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I started playing a trumpet, also in the Bb family. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdcebe', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #bdcebe' }}
                date="2016"
                iconStyle={{ background: '#bdcebe', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Tenor Saxophone</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I picked up a tenor saxophone here, played in Senior Jazz Band. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#deeaee', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #deeaee' }}
                date="2017 - 2020"
                iconStyle={{ background: '#deeaee', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    Finished middle school curriculum and started high school. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d5f4e6', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d5f4e6' }}
                date="2019"
                iconStyle={{ background: '#d5f4e6', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Soprano Saxphone</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I picked up a soprano saxophone. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b2b2b2', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b2b2b2' }}
                date="2020"
                iconStyle={{ background: '#b2b2b2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Graduation</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    Graduated Halifax Grammar School with High Honours. 
                </p>
                <p>High Honours given to students who have succesffully graduated with average of 90% or above. </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b0aac0', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b0aac0' }}
                date="2020 September - Present"
                iconStyle={{ background: '#b0aac0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">University Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Dalhousi University, Halifax</h4>
                <p>
                    Started studying at Dalhousie University located in Halifax majoring in Computer Science. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2023 May"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Graduation</h3>
                <h4 className="vertical-timeline-element-subtitle">Dalhousie University</h4>
                <p>
                    Plan to graduate in May 2022 with a degree in Computer Science and Minor in Statistics. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdcebe', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #bdcebe' }}
                date="2023 May ~"
                iconStyle={{ background: '#bdcebe', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Where Next?</h3>
                <h4 className="vertical-timeline-element-subtitle">???</h4>
                <p>
                    
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>

    </div>
  );
}

export default DetailedTimeline;