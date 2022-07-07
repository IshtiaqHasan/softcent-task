import React from 'react';
import './DesignTech.css';
import image5 from '../../../images/image 5.png';
import image6 from '../../../images/image 6.png';
import image7 from '../../../images/image 7.png';
import image8 from '../../../images/image 8.png';
import image9 from '../../../images/image 9.png';

const DesignTech = () => {
    return (
        <div className='design-section'>
            <div className='design-heading'>
                <h1><span className='design-underline'>Our Design Technology</span></h1>
            </div>
            <div className='design-images'>
                <img src={image5} height='90px' width='90px' alt="" />
                <img src={image6} height='90px' width='90px' alt="" />
                <img src={image7} height='90px' width='90px' alt="" />
                <img src={image8} height='90px' width='90px' alt="" />
                <img src={image9} height='90px' width='90px' alt="" />
            </div>
        </div>
    );
};

export default DesignTech;