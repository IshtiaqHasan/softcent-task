import React from 'react';
import './Heading.css';
import underline from '../../../images/underline.png';
import headingimg from '../../../images/headingimg.png';
import Ellipse3 from '../../../images/Ellipse3.png';
import Ellipse4 from '../../../images/Ellipse4.png';
import Polygon1 from '../../../images/Polygon1.png';

const Heading = () => {
    return (
        <div>
            <div className='heading-title'>
                <h1 className='heading'> Software services for <br /> <span className='background'>startups</span>  without <br /> limits..</h1>
                <p className='heading-message'>We believe that great design should not be out of reach, so our services <br /> are less than half of a full-time designer.</p>
            </div>

            <div>
                <div>
                    <img className='heading-img' src={headingimg} width="1100px" height="568px" alt="" />
                    <div>
                        <img className='ellipse3' src={Ellipse3} width='95px' height='95px' alt="" />
                        <img className='ellipse4' src={Ellipse4} width='67px' height='67px' alt="" />
                        <img className='polygon1' src={Polygon1} width='22px' height='20px' alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Heading;