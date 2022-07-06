import React from 'react';
import './Work.css';
import branding from '../../../images/branding.png';
import UX from '../../../images/UX.png';

const Works = () => {
    return (
        <div className='works'>
            <h1 ><span className='works-underline'> What We Do</span></h1>
            <div className='work-container'>
                <div>
                    <div className='branding'>
                        <img src={branding} height='52px' width='52px' alt="" />
                        <h5 >Branding</h5>
                    </div>
                    <div className='branding-works'>
                        <p>Brand Strategy</p>
                        <p>Social Media</p>
                        <p>Marketing Assets</p>
                        <p>Presentations</p>
                        <p>Build MVP Version</p>
                        <p>Pitch Deck</p>
                    </div>
                </div>
                <div>
                    <div className='ui-ux'>
                        <img src={UX} height='52px' width='52px' alt="" />
                        <h5 >UI/UX Design</h5>
                    </div>
                    <div className='ui-ux-works'>
                        <p>User Interface</p>
                        <p>User Experience</p>
                        <p>Design System</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>
                        <p>Website & Mobile App</p>
                        <p>IOS + Android</p>
                    </div>
                </div>
                <div>
                    <div className='development'>
                        <img src={UX} height='52px' width='52px' alt="" />
                        <h5 >Development</h5>
                    </div>
                    <div className='development-works'>
                        <p>Front End (HTML, CSS, React)</p>
                        <p>Backend (Node.js, MongoDb)</p>
                        <p>iOS (Swift)</p>
                        <p>Android (Kotlin, Flutter)</p>
                        <p>Blockchain Development (NFT)</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Works;