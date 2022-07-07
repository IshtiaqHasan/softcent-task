import React from 'react';
import './Packages.css';
import tikB from '../../../images/tikB.png';
import tikW from '../../../images/tikW.png';

const Packages = () => {
    return (
        <div className='packages'>
            <h1><span className='packages-underline'>Pricing Package Choose Your Plan</span></h1>
            <p className='packages-para'>We believe that great design should not be out of reach. so our services <br />are less than half the price of a full-time designer.</p>
            <div className='package-btn'>
                <button className='monthly-btn'>Monthly</button>
                <button className='yearly-btn'>Yearly</button>
            </div>
            <div className='packages-container'>
                <div className='marketing-container'>
                    <div className='marketing-packages'>
                        <h3><span className='marketing-underline'>Marketing</span></h3>
                        <h5>$899/mo</h5>
                    </div>

                    <div>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Dedicated Designer</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Unlimited requests</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Unlimited brand profiles</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Native source file</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Real-time collaboration</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  banner Ads</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Clothing & Merchandise Design</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Packaging & Label</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Logo & Brand Guide</p>
                        <button className='marketing-btn'>$899 / mo</button>
                    </div>
                </div>
                <div className='ui-container'>
                    <div className='ui-packages'>
                        <h3><span className='marketing-underline'>UI/UX Design</span> </h3>
                        <h5>$1000/mo</h5>
                    </div>
                    <div>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Dedicated Designer</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Unlimited requests</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Unlimited brand profiles</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Native source file</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Real-time collaboration</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  banner Ads</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Clothing & Merchandise Design</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Packaging & Label</p>
                        <p><img src={tikW} width='14px' height='10px' alt="" />  Logo & Brand Guide</p>
                        <button className='marketing-btn'>$1000 / mo</button>
                    </div>
                </div>
                <div className='development-container'>
                    <div className='development-packages'>
                        <h3> <span className='marketing-underline'>Development</span></h3>
                        <h5>$1000/mo</h5>
                    </div>
                    <div>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Dedicated Designer</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Unlimited requests</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Unlimited brand profiles</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Native source file</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Real-time collaboration</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  banner Ads</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Clothing & Merchandise Design</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Packaging & Label</p>
                        <p><img src={tikB} width='14px' height='10px' alt="" />  Logo & Brand Guide</p>
                        <button className='marketing-btn'>$899 / mo</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Packages;