import React from 'react';
import './About.css';
import Ellipse5 from '../../../images/Ellipse5.png';
import Ellipse6 from '../../../images/Ellipse6.png';
import Rectangle14 from '../../../images/Rectangle14.png';
import Rectangle13 from '../../../images/Rectangle13.png';
const About = () => {
    return (
        <div className='about-container'>
            <h1><span className='about-underline'>Talk About Us</span></h1>
            <div className='co-founder-section'>
                <div >
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
                    <div className='dot-images'>
                        <img src={Rectangle13} width='26px' height='11px' alt="" />
                        <img src={Rectangle14} alt="" />
                        <img src={Rectangle14} alt="" />
                    </div>
                </div>
                <div className='ellipse6'>
                    <img src={Ellipse6} height='384px' width='384px' alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;