import React from 'react';
import Customers from '../Customres/Customers';
import Heading from '../Heading/Heading';
import Products from '../Products/Products';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Customers></Customers>
            <Works></Works>
            <Products></Products>
        </div>
    );
};

export default Home;