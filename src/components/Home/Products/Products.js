import React from 'react';
import './Products.css';


const Products = () => {
    return (
        <div className='products'>
            <h1 ><span className='products-underline'>Our Products</span></h1>
            <div className='products-info'>
                <p className='products-para'>We believe that great design should not be out of reach, so our services <br /> are less than half the price of a full-time designer.</p>
                <button className='products-butn'>See More</button>
            </div>
            <div className='swipe'>
                <div className='swipe-info'>
                    <h2 className='swipeHeading'>SwipeXYZ Products</h2>
                    <p className='swipePara'>Lorem Ipsum is simple dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and <br />scrambled it to make a type specimen book. </p>
                    <button className='swipe-btn'>View product</button>
                </div>
                <div className='swipe-images'></div>

            </div>
            <div className='cashback'>
                <div className='cashback-images'></div>
                <div className='cashback-info'>
                    <h2 className='cashbackHeading'>Cashback Products</h2>
                    <p className='cashbackPara'>Lorem Ipsum is simple dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and <br />scrambled it to make a type specimen book. </p>
                    <button className='cashback-btn'>View product</button>
                </div>

            </div>
        </div>
    );
};

export default Products;