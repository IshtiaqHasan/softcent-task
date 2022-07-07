import React from 'react';
import './Footer.css';
import softLogo from '../../images/softLogo.png';
import fb from '../../images/fb.png';
import viber from '../../images/viber.png';
import twiter from '../../images/twiter.png';
import inst from '../../images/inst.png';

const Footer = () => {
    return (
        <div>
            <div className='soft-partner'>
                <div className='soft-partner-heading'>
                    <h3>Looking for a <br />Software Partner?</h3>
                </div>
                <div>
                    <button className='soft-partner-btn'>START A PROJECT</button>
                </div>
            </div>
            <div className='about-softcent'>
                <div className='sotLogo'>
                    <img src={softLogo} height='87px' width='132px' alt="" />
                </div>
                <div className='softAddress'>
                    <p>Get a fully stacked design team that will <br />give you accessible design, exhaustive <br />research, and an outstanding experience. </p>
                    <h4>Email: info@softcent.eu</h4>
                    <h4>Phone: +(372) 57836500</h4>
                </div>


            </div>
            <div className='social-images'>
                <img src={fb} height='30px' width='40px' alt="" />
                <img src={viber} height='26px' width='26px' alt="" />
                <img src={twiter} height='26px' width='26px' alt="" />
                <img src={inst} height='30px' width='30px' alt="" />
            </div>
        </div>
    );
};

export default Footer;