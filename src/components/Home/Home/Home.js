import React from 'react';
import Customers from '../Customres/Customers';
import Heading from '../Heading/Heading';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Customers></Customers>
            <Works></Works>
        </div>
    );
};

export default Home;