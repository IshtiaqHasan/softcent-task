import React from 'react';
import './Portfolio.css';
import Ellipse7 from '../../../images/Ellipse7.png';
import Ellipse8 from '../../../images/Ellipse8.png';
import Vector1 from '../../../images/Vector1.png';
import Vector2 from '../../../images/Vector2.png';
import Colory from '../../../images/Colory.png';
import all4 from '../../../images/all4.png';
import Mockup from '../../../images/Mockup.png';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div>
                <div className='arrow1'>
                    <img className='ellipse7' src={Ellipse7} alt="" />
                    <img className='vector1' src={Vector1} alt="" />

                </div>
                <div className='arrow2'>
                    <img className='ellipse8' src={Ellipse8} alt="" />
                    <img className='vector2' src={Vector2} alt="" />
                </div>
                <div>
                    <h1><span className='portfolio-underline'>Our Portfolio</span></h1>
                </div>

            </div>
            <div className='portfolio-images'>
                <div>
                    <img src={Colory} height='391px' width='361px' alt="" />
                    <p>Color System Design</p>
                </div>
                <div>
                    <img src={all4} height='391px' width='361px' alt="" />
                    <p>Logo Design</p>
                </div>
                <div>
                    <img src={Mockup} height='391px' width='361px' alt="" />
                    <p>UI/UX Design</p>
                </div>
            </div>
            <div className='btn-section' >
                <button className='portfolio-btn'>See All Portfolio</button>
            </div>
        </div>
    );
};

export default Portfolio;