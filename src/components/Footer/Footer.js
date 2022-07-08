import React from 'react';
import './Footer.css';
import softLogo from '../../images/softLogo.png';
import fb from '../../images/fb.png';
import viber from '../../images/viber.png';
import twiter from '../../images/twiter.png';
import inst from '../../images/inst.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div className='allFooter'>
            <div className='soft-partner'>
                <div className='soft-partner-heading'>
                    <h3>Looking for a <br />Software Partner?</h3>
                </div>
                <div>
                    <button className='soft-partner-btn'>START A PROJECT</button>
                </div>
            </div>
            <div className='about-softcent'>
                <div>
                    <div className='sotLogo'>
                        <img src={softLogo} height='87px' width='132px' alt="" />
                    </div>
                    <div className='softAddress'>
                        <p>Get a fully stacked design team that will <br />give you accessible design, exhaustive <br />research, and an outstanding experience. </p>
                        <h4>Email: info@softcent.eu</h4>
                        <h4>Phone: +(372) 57836500</h4>
                    </div>
                    <div className='social-images'>
                        <i className="fa fa-facebook-official" style={{ fontSize: '24px', padding: '5px' }}></i>
                        <i className="fa fa fa-whatsapp" style={{ fontSize: '24px', padding: '5px' }}></i>
                        <i className="fa fa-twitter" style={{ fontSize: '24px', padding: '5px' }}></i>
                        <i className="fa fa-instagram" style={{ fontSize: '24px', padding: '5px' }}></i>
                    </div>
                </div>
                <div className='policy'>
                    <div className='company'>
                        <h5>Company</h5>
                        <p>About Us</p>
                        <p>Our Portfolio</p>
                        <p>Our Product</p>
                        <p>Our Team</p>
                        <p>Our Pricing</p>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='service'>
                        <h5>Our Service</h5>
                        <p>Marketing</p>
                        <p>UI/UX Design</p>
                        <p>Graphic Design (Branding)</p>
                        <p>Development</p>
                        <p>New Products</p>
                    </div>
                    <div className='supports'>
                        <h5>Supports</h5>
                        <p>FAQs</p>
                        <p>Support Policy</p>
                        <p>Private Policy</p>
                        <p>Trams of Service</p>
                        <p>Refund Policy</p>
                    </div>

                </div>

            </div>
            <div>
                <hr className='line' />
            </div>
            <div className='copyright'>
                <small >
                    &copy;
                    <span> {getYear()}, Softcent EU, A European IT Company </span>
                    <br />
                </small>
            </div>
        </div>
    );
};

export default Footer;