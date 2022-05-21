import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from "react-router-dom"
import 'react-vertical-timeline-component/style.min.css';

// Returning Function
function DetailedTimeline() {
  return (
    <div className="DetailedTimeline">

        <div className='back-to-life' data-aos="fade-right">
            <Link to="/home/life" className='back-to-life-link'>Back</Link>
        </div>
      
        <h1 className='detailed-timeline-heading'>Frederick's Life</h1>
        <h2 className='detailed-timeline-heading-2'>Yes, very detail it is. </h2>

            <VerticalTimeline lineColor="#034f84">

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2002 March"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Life Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Busan, South Korea</h4>
                <p>
                    Born in Busan, South Korea, on March 17th of 2002. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdcebe', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #bdcebe' }}
                date="2002"
                iconStyle={{ background: '#bdcebe', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">New Home</h3>
                <h4 className="vertical-timeline-element-subtitle">Geoje, South Korea</h4>
                <p>
                    Moved to Geoje-do (거제도), on the year I was born. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#deeaee', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #deeaee' }}
                date="2008-2013"
                iconStyle={{ background: '#deeaee', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Elementary School</h3>
                <h4 className="vertical-timeline-element-subtitle">Aju-Elementary School, Geoje</h4>
                <p>
                    I spent most of my elementary school student life at Aju-Elementary School located in Aju-dong, Geoje. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d5f4e6', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d5f4e6' }}
                date="2013"
                iconStyle={{ background: '#d5f4e6', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Study Abroad</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax, Canada</h4>
                <p>
                    Moved to Halifax, Nova Scotia, Canada into a 6th grade. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b2b2b2', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b2b2b2' }}
                date="2014"
                iconStyle={{ background: '#b2b2b2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Done Elementary School Life!</h3>
                <h4 className="vertical-timeline-element-subtitle">Inglis-Street Elementary School, Halifax</h4>
                <p>
                    Finished elementary school curriculum at Inglish-Street Elementary School. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b0aac0', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b0aac0' }}
                date="2014"
                iconStyle={{ background: '#b0aac0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">New School</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    Moved to a middle school, Halifax Grammar School, also located in Halifax. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2014"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Clarinet Life Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    Here, I first picked up my clarinet. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#bdcebe', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #bdcebe' }}
                date="2015"
                iconStyle={{ background: '#bdcebe', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Trumpet Life Sort of Started?</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I started playing a trumpet only because it looked cool and Trumpets are also in Bb family, except I stopped playing in few years. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#deeaee', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #deeaee' }}
                date="2016"
                iconStyle={{ background: '#deeaee', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Tenor Saxophone Life Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I picked up a tenor saxophone here, played in Senior Jazz Band of Halifax Grammar School. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d5f4e6', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d5f4e6' }}
                date="2019"
                iconStyle={{ background: '#d5f4e6', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Soprano Saxphone Life Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Halifax Grammar School</h4>
                <p>
                    I picked up a soprano saxophone, but did not get a chance to play in concerts due to Pandemic. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#b2b2b2', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #b2b2b2' }}
                date="2020"
                iconStyle={{ background: '#b2b2b2', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Finished High School Life!</h3>
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
                date="2020"
                iconStyle={{ background: '#b0aac0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">University Life Started</h3>
                <h4 className="vertical-timeline-element-subtitle">Dalhousi University, Halifax</h4>
                <p>
                    Started studying at Dalhousie University located in Halifax majoring in Computer Science. 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#d6cbd3', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #d6cbd3' }}
                date="2023~"
                iconStyle={{ background: '#d6cbd3', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Where Next?</h3>
                <h4 className="vertical-timeline-element-subtitle">???</h4>
            </VerticalTimelineElement>

        </VerticalTimeline>

    </div>
  );
}

export default DetailedTimeline;