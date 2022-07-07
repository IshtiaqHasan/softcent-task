import React from 'react';
import './Customers.css';
import underline from '../../../images/underline.png';
import ubs from '../../../images/ubs.png';
import hsbc from '../../../images/hsbc.png';
import my from '../../../images/my.png';
import app from '../../../images/app.png';

const Customers = () => {
    return (
        <div className='customers-container'>
            <h1 className='customers'><span className='underline'>Our Customers</span></h1>
            <div className='customers-images'>
                <img src={ubs} width='240px' height='86px' alt="" />
                <img src={hsbc} width='240px' height='86px' alt="" />
                <img src={my} width='240px' height='86px' alt="" />
                <img src={app} width='195px' height='42px' alt="" />
            </div>
        </div>
    );
};

export default Customers;