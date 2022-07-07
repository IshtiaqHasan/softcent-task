import React from 'react';
import './About.css';
import Ellipse5 from '../../../images/Ellipse5.png';
const About = () => {
    return (
        <div className='about-container'>
            <h1><span className='about-underline'>Talk About Us</span></h1>
            <div className='quote-section'>
                <p className='about-para'>We had a bit of a slow and bumpy start, but after <br />changing the designer on their side everything <br />went in a very good direction. The designers were <br />talented and easy to work with. <span></span>
                </p>
            </div>
            <div className='co-founder'>
                <div>
                    <img src={Ellipse5} alt="" />
                </div>

                <div>
                    <p className='co-founder-name'>Shuvo Roy </p>
                    <p className='co-founder-desig'>Softcent Co-Founder</p>
                </div>
            </div>
        </div>
    );
};

export default About;