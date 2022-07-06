import React from 'react';
import './Heading.css';
import underline from '../../../images/underline.png';
import headingimg from '../../../images/headingimg.png';

const Heading = () => {
    return (
        <div>
            <h1 className='heading'> <span className='background'>Software</span> services for <br /> startups without <br /> limits..</h1>
            <p className='heading-message'>We believe that great design should not be out of reach, so our services <br /> are less than half of a full-time designer.</p>

            <div>
                <img className='heading-img' src={headingimg} width="1100px" height="568" alt="" />
            </div>
        </div>
    );
};

export default Heading;