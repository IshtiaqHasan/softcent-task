import React from 'react';
import './Header.css';
import logo1 from '../../images/logo1.png';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo1} height='87.14px' width='132px' alt="" />
            <div>
                <a href="/home">HOME</a>
                <a href="/about">ABOUT</a>
                <a href="/work">WORK</a>
                <a href="/premiumProducts">PREMIUM PRODUCTS</a>
                <a href="/blog">BLOG</a>
                <a className='button-color' href="/startProject">
                    <button className='button'>START A PROJECT</button>
                </a>
            </div>
        </nav>
    );
};

export default Header;