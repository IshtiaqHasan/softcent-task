import React from 'react';
import './DevTech.css';
import php from '../../../images/php.png';
import js from '../../../images/js.png';
import html from '../../../images/html.png';
import css from '../../../images/css.png';
import mb from '../../../images/mb.png';

const DevTech = () => {
    return (
        <div className='devTech-section'>
            <div className='devTch-heading'>
                <h1><span className='dev-underline'>Our Dev Technology</span></h1>
            </div>
            <div className='devTech-name'>
                <p><span className='prog-underline'>Programming Languages</span></p>
                <p><span className='underline'>FrameWorks</span></p>
                <p><span className='underline'>Databases</span> </p>
                <p><span className='underline'>Mobile Platforms</span></p>
            </div>

            <div className='devTch-images'>
                <img src={php} height='90px' width='90px' alt="" />
                <img src={js} height='90px' width='90px' alt="" />
                <img src={html} height='90px' width='90px' alt="" />
                <img src={css} height='90px' width='90px' alt="" />
                <img src={mb} height='90px' width='90px' alt="" />
            </div>
        </div>
    );
};

export default DevTech;