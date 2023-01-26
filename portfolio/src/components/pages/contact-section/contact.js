import React from "react";
import Waiting from "../../img/contact/waiting.gif"

function Contact(props){

    props.setCurrentPage("Contact")

    return (
        <div className="contact">
            <div className="contact-section">
                <h1 data-aos="fade-up" data-aos-delay="800">Contact me via the following methods:</h1>
                <div data-aos="fade-up" data-aos-delay="900">E-mail: hyeongo0317@gmail.com</div>
                <div data-aos="fade-up" data-aos-delay="600">School e-mail: Frederick.Go@dal.ca</div>
                <h1 data-aos="fade-up" data-aos-delay="1200">Connect with me here: </h1>
                <div className="contact-social-section">
                    <a className="contact-social" data-aos="fade-up" data-aos-delay="700" href="https://www.linkedin.com/in/fred-go/" target="_blank" rel="noreferrer">
                    <img align="left" alt="Frederick's LinkedIN" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/linkedin.svg" />
                    </a>
                    <a className="contact-social" data-aos="fade-up" data-aos-delay="400" href="https://github.com/itsmefredgo" target="_blank" rel="noreferrer">
                        <img align="left" alt="Frederick's GitHub" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/github.svg" />
                    </a>
                    <a className="contact-social" data-aos="fade-up" data-aos-delay="400" href="https://www.instagram.com/itsmefredgo/" target="_blank" rel="noreferrer">
                        <img align="left" alt="Frederick's Instagram" width="22px" src="https://raw.githubusercontent.com/hussainweb/hussainweb/main/icons/instagram.png" />
                    </a>
                </div>
            </div>
            <div className="contact-section contact-section-2" data-aos-delay="500">
                <div><div className="credit" data-aos="fade-up" data-aos-delay="1500">Credit: instagram.com/rain.to.me/</div></div>
                <img src={ Waiting } className="waiting" data-aos="fade-up" data-aos-delay="1000" alt="Waiting"></img>
                <div className="waiting-text" data-aos="fade-up" data-aos-delay="300">"What are you doing? I am still waiting for you to contact me." </div>
            </div>
        </div>
    )
};

export default Contact; 